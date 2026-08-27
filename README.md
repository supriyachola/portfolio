# Supriya M — Job Portfolio + Resume Download Tracking

This version adds a recruiter-friendly Resume section and a server-side resume download endpoint.

## IMPORTANT: keep your existing frame assets

Your original cinematic animation depends on your existing:

frames/
├── main/
├── eyes/
└── storm.jpg

The code in this package keeps the existing frame-loading engine. Copy the files from this package
into your existing project that already contains the `frames` folder. Do NOT delete the frames folder.

## New files

- `public/Supriya_M_Resume.pdf` — latest uploaded resume
- `api/resume-download.js` — Vercel serverless endpoint
- `.env.example` — environment-variable template
- `vercel.json` — Vercel function configuration

## Resume download flow

Visitor clicks DOWNLOAD RESUME
→ `/api/resume-download`
→ server sends a Resend notification email
→ server returns the PDF

If the email service is temporarily unavailable, the resume still downloads.

## Configure Resend

Create a Resend API key with **Sending access**. Resend documents that Sending access is limited to sending email, unlike Full access.

Add these environment variables in Vercel:

RESEND_API_KEY=re_...
NOTIFICATION_EMAIL=supriyachola123@gmail.com
FROM_EMAIL=your-verified-sender@yourdomain.com

Do not put the real API key in `index.html`, `main.js`, or any client-side JavaScript.

After adding/changing Vercel environment variables, redeploy the project.

For production, use a sender address from a domain verified in Resend. Keep the API key private.

## Local testing

Run the project through Vercel's local development environment rather than opening `index.html` with `file://`, because `/api/resume-download` is a server endpoint.


## Visual updates in this version

- The portfolio continues to load the cinematic frame sequence from `frames/main/*.jpg` and `frames/eyes/*.jpg`.
- The project links are intentionally bright blue so GitHub/live-demo links are visibly clickable.
- A portrait slot is placed directly below “Supriya M” in the Profile section. Put your own photo at `assets/supriya.jpg`.

### About the frames folder
The original frame images were not included in the code ZIP available to me, so I cannot recreate or invent those image assets. Keep/copy your existing `frames` folder beside `index.html` when using this package:

```text
project/
├── frames/
│   ├── main/
│   ├── eyes/
│   └── storm.jpg
├── assets/
│   └── supriya.jpg
├── index.html
├── main.js
├── style.css
└── api/
    └── resume-download.js
```
