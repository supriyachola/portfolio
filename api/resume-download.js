import fs from "node:fs/promises";
import path from "node:path";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const resumePath = path.join(process.cwd(), "public", "Supriya_M_Resume.pdf");

  try {
    const pdf = await fs.readFile(resumePath);

    const apiKey = process.env.RESEND_API_KEY;
    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    const fromEmail = process.env.FROM_EMAIL || "onboarding@resend.dev";

    // Send the notification server-side. Never expose RESEND_API_KEY to browser code.
    if (apiKey && notificationEmail) {
      const now = new Date();
      const referrer = req.headers.referer || req.headers.referrer || "Direct / unknown";
      const userAgent = req.headers["user-agent"] || "Unknown";

      const emailResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [notificationEmail],
          subject: "📄 Resume downloaded — Supriya Portfolio",
          html: `
            <div style="font-family:Arial,sans-serif;max-width:620px">
              <h2>📄 Resume Downloaded</h2>
              <p>Someone downloaded your resume from your portfolio.</p>
              <table cellpadding="8" style="border-collapse:collapse">
                <tr><td><b>Time</b></td><td>${now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</td></tr>
                <tr><td><b>Referrer</b></td><td>${escapeHtml(referrer)}</td></tr>
                <tr><td><b>Browser</b></td><td>${escapeHtml(userAgent)}</td></tr>
              </table>
              <p style="color:#666;font-size:12px">No visitor IP address is included in this notification.</p>
            </div>
          `
        })
      });

      if (!emailResponse.ok) {
        // Do not block the resume download if notification delivery fails.
        console.error("Resend notification failed:", await emailResponse.text());
      }
    } else {
      console.warn("Resume notification not configured: set RESEND_API_KEY and NOTIFICATION_EMAIL.");
    }

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="Supriya_M_Resume.pdf"');
    res.setHeader("Cache-Control", "no-store");
    return res.status(200).send(pdf);
  } catch (error) {
    console.error("Resume download failed:", error);
    return res.status(500).json({ error: "Unable to download resume." });
  }
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
