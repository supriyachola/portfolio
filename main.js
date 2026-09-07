/* ═══════════════════════════════════════════
   UCHIHA ITACHI — 写輪眼
   ═══════════════════════════════════════════ */

:root{
  --ink:#050506;
  --ink-2:#0b0b0d;
  --bone:#e8e4dc;
  --smoke:#8a8580;
  --blood:#c0121f;
  --blood-hot:#ff2b2b;
  --ember:#ff6a3d;
  --serif:'Shippori Mincho', 'Yu Mincho', serif;
  --gothic:'Zen Kaku Gothic New', sans-serif;
  --display:'Cinzel', serif;
  --mono:'Space Grotesk', sans-serif;
  --ease:cubic-bezier(.22,1,.36,1);
}

*{margin:0;padding:0;box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  background:var(--ink);
  color:var(--bone);
  font-family:var(--gothic);
  overflow-x:hidden;
  -webkit-font-smoothing:antialiased;
}
::selection{background:var(--blood);color:#fff}

/* ── scrollbar ── */
::-webkit-scrollbar{width:6px}
::-webkit-scrollbar-track{background:#000}
::-webkit-scrollbar-thumb{background:linear-gradient(var(--blood),#3a0409)}

/* ═══ PRELOADER ═══ */
.loader{
  position:fixed;inset:0;z-index:999;
  background:var(--ink);
  display:grid;place-items:center;
  transition:opacity .9s var(--ease), visibility .9s;
}
.loader.done{opacity:0;visibility:hidden}
.loader__inner{width:min(420px,72vw);text-align:center}
.loader__glyph{
  font-family:var(--serif);font-size:clamp(3rem,9vw,5.5rem);
  letter-spacing:.22em;color:var(--bone);
  text-shadow:0 0 40px rgba(255,43,43,.35);
  animation:pulseGlyph 2.4s ease-in-out infinite;
}
@keyframes pulseGlyph{
  0%,100%{opacity:.85;text-shadow:0 0 30px rgba(255,43,43,.25)}
  50%{opacity:1;text-shadow:0 0 70px rgba(255,43,43,.75)}
}
.loader__bar{
  height:1px;background:rgba(232,228,220,.14);
  margin:2.2rem 0 .9rem;overflow:hidden;
}
.loader__bar span{
  display:block;height:100%;width:0%;
  background:linear-gradient(90deg,var(--blood),var(--blood-hot));
  box-shadow:0 0 14px var(--blood-hot);
  transition:width .25s linear;
}
.loader__meta{
  display:flex;justify-content:space-between;
  font-family:var(--mono);font-size:.62rem;
  letter-spacing:.3em;color:var(--smoke);
}

/* ═══ AMBIENT ═══ */
.grain{
  position:fixed;inset:-150%;z-index:400;pointer-events:none;
  opacity:.05;
  background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='260' height='260'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  animation:grainShift 700ms steps(4) infinite;
}
@keyframes grainShift{
  0%{transform:translate(0,0)}25%{transform:translate(-3%,2%)}
  50%{transform:translate(2%,-3%)}75%{transform:translate(-2%,-2%)}
  100%{transform:translate(3%,3%)}
}
.vignette{
  position:fixed;inset:0;z-index:390;pointer-events:none;
  background:radial-gradient(ellipse at center,transparent 38%,rgba(0,0,0,.72) 100%);
}
/* .scanlines{
  position:fixed;inset:0;z-index:395;pointer-events:none;opacity:.35;
  background:repeating-linear-gradient(180deg,rgba(0,0,0,0) 0 2px,rgba(0,0,0,.22) 2px 3px);
  mix-blend-mode:multiply;
} */

/* ═══ AMATERASU — 黒炎 ═══ */
/* Black fire eats the bottom hem of the viewport. The band is 8% tall; the
   flames are drawn inside it, so nothing above the hem is ever obscured. */
.amaterasu{
  position:fixed;left:0;right:0;bottom:0;z-index:305;
  width:100%;height:8vh;min-height:46px;pointer-events:none;
}
/* the hem sits under the flames so their black bodies have something to
   climb out of instead of floating on the page */
.amaterasu-bed{
  position:fixed;left:0;right:0;bottom:0;z-index:304;
  height:8vh;min-height:46px;pointer-events:none;
  /* kept light enough that copy scrolling through the hem stays readable */
  background:linear-gradient(0deg,
    rgba(0,0,0,.82) 0%,rgba(0,0,0,.5) 40%,rgba(0,0,0,.18) 72%,transparent 100%);
}

/* ═══ STORM ═══ */
.storm{position:fixed;inset:0;z-index:380;pointer-events:none}
.storm__flash{
  position:absolute;inset:0;opacity:0;
  background:
    radial-gradient(ellipse 90% 60% at var(--bx,50%) -12%,rgba(198,228,255,.92),rgba(150,190,235,.28) 42%,transparent 72%),
    linear-gradient(180deg,rgba(210,232,255,.5),transparent 58%);
  mix-blend-mode:screen;
  will-change:opacity;
}
.storm__bolt{
  position:absolute;inset:0;width:100%;height:100%;opacity:0;
  filter:drop-shadow(0 0 14px rgba(180,220,255,.95)) drop-shadow(0 0 42px rgba(120,180,255,.6));
  mix-blend-mode:screen;will-change:opacity;
}

/* ═══ CURSOR ═══ */
.cursor{
  position:fixed;top:0;left:0;z-index:500;pointer-events:none;
  width:34px;height:34px;margin:-17px 0 0 -17px;
  border:1px solid rgba(232,228,220,.4);border-radius:50%;
  transition:width .35s var(--ease),height .35s var(--ease),
             margin .35s var(--ease),border-color .35s,background .35s;
  mix-blend-mode:difference;
}
.cursor span{
  position:absolute;inset:0;margin:auto;
  width:3px;height:3px;border-radius:50%;background:var(--blood-hot);
}
.cursor.hot{
  width:70px;height:70px;margin:-35px 0 0 -35px;
  border-color:var(--blood-hot);background:rgba(192,18,31,.08);
}
@media (hover:none){.cursor{display:none}}

/* ═══ CHROME ═══ */
.chrome{
  position:fixed;top:0;left:0;right:0;z-index:300;
  display:flex;align-items:center;justify-content:space-between;
  padding:1.5rem clamp(1.1rem,4vw,3rem);
  text-shadow:0 2px 22px rgba(0,0,0,.95);
}
.chrome__mark{display:flex;align-items:center;gap:.7rem;color:var(--bone)}
.uchiwa{width:22px;height:22px;color:var(--blood-hot);animation:spinSlow 24s linear infinite}
@keyframes spinSlow{to{transform:rotate(360deg)}}
.chrome__mark span{
  font-family:var(--display);font-size:.72rem;
  letter-spacing:.42em;font-weight:700;
}
.chrome__nav{display:flex;gap:clamp(1rem,3vw,2.4rem)}
.chrome__nav a{
  position:relative;text-decoration:none;color:var(--bone);
  font-family:var(--mono);font-size:.64rem;letter-spacing:.3em;
  opacity:.65;transition:opacity .3s;
}
.chrome__nav a::before{
  content:attr(data-jp);
  position:absolute;left:50%;top:-1.05rem;transform:translateX(-50%) translateY(4px);
  font-family:var(--serif);font-size:.7rem;color:var(--blood-hot);
  opacity:0;transition:.35s var(--ease);
}
.chrome__nav a:hover{opacity:1}
.chrome__nav a:hover::before{opacity:1;transform:translateX(-50%) translateY(0)}
.chrome__sound{
  display:flex;align-items:center;gap:.45rem;cursor:pointer;
  background:none;border:1px solid rgba(232,228,220,.22);
  padding:.3rem .6rem;color:var(--bone);
  font-family:var(--mono);font-size:.56rem;letter-spacing:.28em;
  transition:border-color .35s,color .35s,background .35s;
}
.chrome__sound-jp{font-family:var(--serif);letter-spacing:0;font-size:.72rem}
.chrome__sound:hover{border-color:rgba(255,43,43,.7)}
.chrome__sound[aria-pressed="true"]{
  border-color:var(--blood-hot);color:var(--blood-hot);
  background:rgba(192,18,31,.12);
}

/* ═══ SIDE RAILS ═══ */
.rail{
  position:fixed;top:0;bottom:0;z-index:300;width:clamp(1.1rem,4vw,3rem);
  display:grid;place-items:center;pointer-events:none;
  text-shadow:0 2px 22px rgba(0,0,0,.95);
}
.rail--left{left:0}
.rail--right{right:0}
.rail span{
  writing-mode:vertical-rl;
  font-family:var(--mono);font-size:.6rem;letter-spacing:.34em;
  color:var(--smoke);white-space:nowrap;
}
.rail--left span{font-family:var(--serif);letter-spacing:.5em}

/* ═══ SCROLL HINT ═══ */
.hint{
  position:fixed;left:50%;bottom:2rem;transform:translateX(-50%);
  z-index:300;display:flex;flex-direction:column;align-items:center;gap:.55rem;
  transition:opacity .6s;text-shadow:0 2px 22px rgba(0,0,0,.95);
}
.hint.hide{opacity:0}
.hint__jp{font-family:var(--serif);font-size:.78rem;letter-spacing:.3em;color:var(--bone)}
.hint__line{
  width:1px;height:40px;
  background:linear-gradient(var(--blood-hot),transparent);
  animation:drip 2s var(--ease) infinite;
}
@keyframes drip{
  0%{transform:scaleY(0);transform-origin:top;opacity:0}
  40%{transform:scaleY(1);opacity:1}
  100%{transform:scaleY(1);transform-origin:bottom;opacity:0}
}
.hint__en{font-family:var(--mono);font-size:.56rem;letter-spacing:.34em;color:var(--smoke)}

/* ═══ STICKY BADGE — pinned 10% from bottom-right ═══ */
.sticky-badge{
  position:fixed;right:5%;bottom:5%;z-index:310;
  display:flex;flex-direction:column;align-items:flex-end;gap:.3rem;
  padding:.7rem .95rem;
  border:1px solid rgba(232,228,220,.14);
  background:rgba(11,11,13,.72);
  backdrop-filter:blur(6px);
  text-shadow:0 2px 22px rgba(0,0,0,.95);
  transition:border-color .5s var(--ease),transform .5s var(--ease);
}
.sticky-badge:hover{border-color:var(--blood-hot);transform:translateY(-3px)}
.sticky-badge__jp{
  font-family:var(--serif);font-size:.82rem;letter-spacing:.3em;
  color:var(--blood-hot);
}
.sticky-badge__en{
  font-family:var(--mono);font-size:.54rem;letter-spacing:.34em;color:var(--smoke);
}
@media (max-width:720px){
  .sticky-badge{right:5%;bottom:5%}
}

/* ═══════════ ACT I — SCRUB ═══════════ */
.scrub{height:700vh;position:relative}
.scrub__sticky{
  position:sticky;top:0;height:100vh;width:100%;
  overflow:hidden;background:#000;
}
#mainCanvas{
  position:absolute;inset:0;width:100%;height:100%;
  display:block;
  opacity:.58;
  filter:contrast(.94) brightness(.52) saturate(.72);
  transform:scale(1.015);
  transform-origin:center;
}
.scrub__glow{
  position:absolute;inset:0;pointer-events:none;opacity:0;
  background:radial-gradient(circle at 50% 44%,rgba(255,43,43,.32),transparent 46%);
  mix-blend-mode:screen;
}
.feathers{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;z-index:2}
/* HERO SCRIM — typography is the focal point */
.scrub__sticky::after{
  content:'';
  position:absolute;
  inset:0;
  z-index:2;
  pointer-events:none;
  background:
    radial-gradient(ellipse 58% 48% at 50% 58%,
      rgba(0,0,0,.88) 0%,
      rgba(0,0,0,.72) 42%,
      rgba(0,0,0,.38) 68%,
      rgba(0,0,0,.78) 100%),
    linear-gradient(180deg,rgba(0,0,0,.88) 0%,rgba(0,0,0,.42) 25%,transparent 48%),
    linear-gradient(0deg,rgba(0,0,0,.92) 0%,rgba(0,0,0,.48) 30%,transparent 58%);
}

/* phase captions */
.phase{
  position:absolute;left:clamp(2rem,7vw,7rem);top:50%;
  transform:translateY(calc(-50% + var(--y,0px)));
  opacity:0;pointer-events:none;max-width:min(30ch,42vw);
  z-index:12;text-shadow:0 2px 34px rgba(0,0,0,.95),0 0 8px rgba(0,0,0,.7);
}
.phase__jp{
  font-family:var(--serif);font-weight:800;
  font-size:clamp(3rem,7.5vw,7rem);line-height:.92;
  letter-spacing:.06em;
}
.phase__en{
  font-family:var(--display);font-weight:700;
  font-size:clamp(.66rem,1.05vw,.82rem);letter-spacing:.36em;
  margin:1rem 0 .8rem;color:var(--blood-hot);white-space:nowrap;
}
.phase__sub{
  font-family:var(--serif);font-size:clamp(.76rem,1.05vw,.92rem);
  line-height:1.9;color:rgba(232,228,220,.72);
}

/* HERO TYPOGRAPHY — SUPRIYA M IS THE MAIN FOCAL POINT */
.titleblock{
  position:absolute;
  left:50%;
  bottom:16vh;
  width:min(94vw,1120px);
  transform:translateX(-50%);
  text-align:center;
  pointer-events:none;
  z-index:20;
  text-shadow:0 4px 55px rgba(0,0,0,1),0 0 26px rgba(0,0,0,.98),0 0 90px rgba(0,0,0,.72);
}

.titleblock__kicker{
  font-family:var(--mono);
  font-size:clamp(.52rem,1vw,.72rem);
  font-weight:500;
  letter-spacing:.52em;
  color:rgba(232,228,220,.86);
  margin-bottom:1.45rem;
}

.titleblock__jp{
  font-family:var(--serif);
  font-weight:800;
  font-size:clamp(4.3rem,11vw,10rem);
  line-height:.78;
  letter-spacing:.015em;
  color:#f4f0e8;
  text-shadow:0 5px 35px rgba(0,0,0,1),0 0 22px rgba(0,0,0,.98),0 0 80px rgba(0,0,0,.72);
}

.titleblock__jp span{
  color:var(--blood-hot);
  text-shadow:0 0 12px rgba(255,43,43,.95),0 0 34px rgba(255,43,43,.70),0 0 85px rgba(255,43,43,.38);
}

.titleblock__en{
  font-family:var(--display);
  font-weight:700;
  font-size:clamp(.62rem,1.25vw,.9rem);
  letter-spacing:.52em;
  margin-top:1.55rem;
  color:rgba(232,228,220,.92);
  text-shadow:0 2px 18px #000,0 0 32px #000;
}

/* ═══════════ ACT II — EYES ═══════════ */
.eyes{height:260vh;position:relative;background:#000}
.eyes__sticky{
  position:sticky;top:0;height:100vh;width:100%;
  overflow:hidden;display:grid;place-items:center;
}
/* deliberately static — only the frame changes, never the framing */
#eyeCanvas{
  position:absolute;top:50%;left:50%;
  width:100%;height:100%;
  transform:translate(-50%,-50%);
  filter:contrast(1.1) saturate(1.15);
}
.eyes__flare{
  position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(circle 300px at var(--mx,50%) var(--my,50%),
             rgba(255,43,43,.16),transparent 70%);
  mix-blend-mode:screen;
}
.eyes__frame{
  position:absolute;pointer-events:none;
  top:clamp(4.6rem,9vh,6.4rem);bottom:clamp(2.6rem,6vh,4rem);
  left:clamp(2.6rem,5vw,4.2rem);right:clamp(2.6rem,5vw,4.2rem);
}
.eyes__frame::before,.eyes__frame::after{
  content:'';position:absolute;width:46px;height:46px;
  border:1px solid rgba(255,43,43,.5);
}
.eyes__frame::before{top:0;left:0;border-right:0;border-bottom:0}
.eyes__frame::after{bottom:0;right:0;border-left:0;border-top:0}
.eyes__label{
  position:absolute;font-family:var(--mono);
  font-size:.58rem;letter-spacing:.28em;color:rgba(232,228,220,.55);
}
.eyes__label--tl{top:-.4rem;left:3.6rem;font-family:var(--serif);letter-spacing:.4em;color:var(--blood-hot)}
.eyes__label--tr{top:-.4rem;right:3.6rem}
.eyes__label--bl{bottom:-.4rem;left:3.6rem;color:var(--blood-hot)}
.eyes__label--br{bottom:-.4rem;right:3.6rem}
.eyes__copy{
  position:relative;z-index:3;text-align:center;
  transform:translateY(26vh);
  text-shadow:0 2px 40px rgba(0,0,0,.95),0 0 12px rgba(0,0,0,.85);
}
.eyes__copy h2{
  font-family:var(--serif);font-weight:800;
  font-size:clamp(2.4rem,6.5vw,5rem);letter-spacing:.12em;
}
.eyes__copy h2 span{color:var(--blood-hot)}
.eyes__copy p{
  font-family:var(--serif);font-size:.82rem;letter-spacing:.16em;
  color:rgba(232,228,220,.6);margin-top:1rem;
}
.eyes__note{
  font-family:var(--mono)!important;font-size:.54rem!important;
  letter-spacing:.28em!important;color:rgba(232,228,220,.3)!important;
  margin-top:.7rem!important;
}

/* ═══════════ ACT III — JUTSU ═══════════ */
.jutsu{
  position:relative;isolation:isolate;overflow:hidden;
  padding:clamp(7rem,16vh,12rem) clamp(1.4rem,6vw,6rem) clamp(13rem,30vh,21rem);
  background:
    radial-gradient(ellipse at 50% -10%,rgba(192,18,31,.14),transparent 55%),
    var(--ink);
  border-top:1px solid rgba(232,228,220,.07);
}
.jutsu__inner{position:relative;z-index:3}

/* background plate that the ghost cursor burns open */
.jutsu__reveal{
  position:absolute;inset:0;z-index:0;pointer-events:none;
  background:url("frames/storm.jpg") center/cover no-repeat;
  opacity:0;transition:opacity .8s var(--ease);
  /* the hole follows the pointer; radius grows on card hover */
  -webkit-mask-image:radial-gradient(circle var(--r,280px) at var(--rx,50%) var(--ry,50%),
      #000 0%,rgba(0,0,0,.72) 38%,rgba(0,0,0,.22) 66%,transparent 82%);
  mask-image:radial-gradient(circle var(--r,280px) at var(--rx,50%) var(--ry,50%),
      #000 0%,rgba(0,0,0,.72) 38%,rgba(0,0,0,.22) 66%,transparent 82%);
  -webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;
  /* the plate's white rain would blow out under the additive ghost */
  filter:saturate(1.25) contrast(1.18) brightness(.55);
}
.jutsu.lit .jutsu__reveal{opacity:1}
/* red bleed so the reveal reads as sharingan light, not a photo swap */
.jutsu__rain{
  position:absolute;inset:0;z-index:1;pointer-events:none;opacity:0;
  transition:opacity .8s var(--ease);
  background:radial-gradient(circle var(--r,280px) at var(--rx,50%) var(--ry,50%),
      rgba(192,18,31,.17),rgba(120,8,16,.07) 55%,transparent 78%);
  mix-blend-mode:screen;
}
.jutsu.lit .jutsu__rain{opacity:1}

/* ported ghost cursor */
.ghost{
  position:absolute;inset:0;z-index:2;width:100%;height:100%;
  pointer-events:none;mix-blend-mode:screen;opacity:0;
  transition:opacity .6s var(--ease);
}
.jutsu.lit .ghost{opacity:1}

.jutsu__head{max-width:56ch;margin-bottom:clamp(3rem,8vh,6rem)}
.eyebrow{
  display:inline-block;font-family:var(--mono);font-size:.6rem;
  letter-spacing:.42em;color:var(--blood-hot);margin-bottom:1.4rem;
}
.jutsu__head h2{
  font-family:var(--serif);font-weight:800;
  font-size:clamp(2rem,5vw,3.6rem);letter-spacing:.08em;line-height:1.3;
}
.jutsu__head p{
  font-family:var(--serif);margin-top:1.4rem;line-height:2;
  font-size:.9rem;color:rgba(232,228,220,.58);
}
.jutsu__grid{
  display:grid;gap:1px;background:rgba(232,228,220,.09);
  grid-template-columns:repeat(auto-fit,minmax(255px,1fr));
  border:1px solid rgba(232,228,220,.09);
}
.card{
  background:var(--ink-2);padding:clamp(1.8rem,3.4vw,2.8rem);
  position:relative;overflow:hidden;
  transition:background .5s var(--ease);
  min-height:330px;display:flex;flex-direction:column;
}
.card::after{
  content:'';position:absolute;inset:0;
  background:radial-gradient(circle at 50% 120%,rgba(192,18,31,.4),transparent 62%);
  opacity:0;transition:opacity .55s var(--ease);
}
.card:hover{background:#0f0b0c}
.card:hover::after{opacity:1}
.card>*{position:relative;z-index:2}
.card__num{
  font-family:var(--mono);font-size:.58rem;letter-spacing:.34em;
  color:var(--smoke);
}
.card__jp{
  font-family:var(--serif);font-weight:800;
  font-size:clamp(2rem,3.4vw,2.9rem);letter-spacing:.08em;
  margin:auto 0 .5rem;
  transition:color .45s var(--ease),text-shadow .45s var(--ease);
}
.card:hover .card__jp{color:var(--blood-hot);text-shadow:0 0 34px rgba(255,43,43,.5)}
.card__ro{
  font-family:var(--display);font-weight:700;font-size:.64rem;
  letter-spacing:.4em;color:var(--smoke);margin-bottom:1.2rem;
}
.card__txt{
  font-family:var(--serif);font-size:.82rem;line-height:2;
  color:rgba(232,228,220,.55);
}
.card__foot{
  margin-top:1.4rem;padding-top:1rem;
  border-top:1px solid rgba(232,228,220,.1);
  font-family:var(--mono);font-size:.54rem;letter-spacing:.26em;
  color:rgba(232,228,220,.34);
  display:flex;align-items:center;gap:.6rem;
}
.card__foot i{
  font-style:normal;font-family:var(--serif);
  font-size:.72rem;letter-spacing:.16em;color:var(--blood-hot);
}

/* head extras */
.jutsu__meta{
  display:flex;flex-wrap:wrap;gap:clamp(1.2rem,3vw,2.6rem);
  margin-top:2.4rem;
}
.jutsu__meta span{
  display:flex;flex-direction:column;gap:.4rem;
  font-family:var(--mono);font-size:.54rem;letter-spacing:.28em;
  color:rgba(232,228,220,.38);
}
.jutsu__meta i{
  font-style:normal;font-family:var(--serif);
  font-size:.95rem;letter-spacing:.18em;color:var(--bone);
}
.jutsu__hint{
  margin-top:2rem;font-family:var(--mono);font-size:.56rem;
  letter-spacing:.3em;color:var(--blood-hot);opacity:.8;
}
.jutsu__foot{
  display:flex;flex-wrap:wrap;justify-content:space-between;gap:1.4rem;
  margin-top:clamp(3rem,7vh,5rem);padding-top:1.6rem;
  border-top:1px solid rgba(232,228,220,.08);
}
.jutsu__foot span:first-child{
  font-family:var(--serif);font-size:1rem;letter-spacing:.2em;
  color:rgba(232,228,220,.75);
}
.jutsu__foot span:last-child{
  font-family:var(--mono);font-size:.54rem;letter-spacing:.28em;
  color:rgba(232,228,220,.34);align-self:flex-end;
}

/* 天照 — bottom right anchor */
.jutsu__amaterasu{
  position:absolute;right:clamp(1rem,4vw,4rem);bottom:clamp(1.4rem,4vh,3rem);
  z-index:3;pointer-events:none;text-align:right;
  display:flex;flex-direction:column;align-items:flex-end;gap:.5rem;
}
.jutsu__amaterasu-jp{
  font-family:var(--serif);font-weight:800;line-height:.86;
  font-size:clamp(3.4rem,11vw,9rem);letter-spacing:.06em;
  color:transparent;
  background:linear-gradient(170deg,rgba(255,43,43,.92),rgba(120,6,12,.35) 62%,rgba(232,228,220,.06));
  -webkit-background-clip:text;background-clip:text;
  filter:drop-shadow(0 0 44px rgba(192,18,31,.5));
}
.jutsu__amaterasu-ro{
  font-family:var(--display);font-weight:700;
  font-size:.62rem;letter-spacing:.5em;color:rgba(232,228,220,.5);
}
.jutsu__amaterasu-sub{
  font-family:var(--serif);font-size:.62rem;letter-spacing:.34em;
  color:rgba(232,228,220,.28);
}

/* ═══════════ ACT IV — QUOTE ═══════════ */
.quote{
  min-height:100vh;display:grid;place-items:center;align-content:center;
  gap:clamp(2rem,5vh,3.5rem);text-align:center;
  padding:clamp(6rem,14vh,10rem) clamp(1.4rem,6vw,6rem);
  position:relative;overflow:hidden;
}
.quote::before{
  content:'写輪眼';position:absolute;inset:0;display:grid;place-items:center;
  font-family:var(--serif);font-weight:800;
  font-size:clamp(12rem,34vw,30rem);color:rgba(232,228,220,.028);
  letter-spacing:.06em;pointer-events:none;
}
.quote__jp{
  font-family:var(--serif);font-weight:800;
  font-size:clamp(2.2rem,6vw,4.6rem);letter-spacing:.14em;
  position:relative;
}
.quote__jp .dots{color:var(--blood-hot)}
.quote blockquote{max-width:62ch;position:relative}
.quote blockquote p{
  font-family:var(--serif);font-size:clamp(.95rem,1.5vw,1.18rem);
  line-height:2.3;color:rgba(232,228,220,.78);
}
.quote cite{
  display:block;margin-top:2rem;font-style:normal;
  font-family:var(--mono);font-size:.6rem;letter-spacing:.4em;color:var(--blood-hot);
}
.quote__mark{
  font-family:var(--serif);font-size:.72rem;letter-spacing:.6em;
  color:var(--smoke);position:relative;
}

/* ═══════════ FOOTER ═══════════ */
footer{
  border-top:1px solid rgba(232,228,220,.08);
  padding:clamp(3rem,8vh,6rem) clamp(1.4rem,6vw,6rem) 3rem;
}
.footer__big{
  font-family:var(--serif);font-weight:800;
  font-size:clamp(2.6rem,12vw,10rem);line-height:1;
  letter-spacing:.06em;
  background:linear-gradient(180deg,rgba(232,228,220,.9),rgba(232,228,220,.06));
  -webkit-background-clip:text;background-clip:text;color:transparent;
  text-align:center;
}
.footer__row{
  display:flex;flex-wrap:wrap;gap:1.2rem;
  justify-content:space-between;margin-top:3rem;
  font-family:var(--mono);font-size:.58rem;letter-spacing:.3em;
  color:var(--smoke);
}
.footer__row span:last-child{font-family:var(--serif);letter-spacing:.24em}

/* scroll-driven parallax + fade (JS owns transform/opacity) */
[data-px],.jutsu__grid .card{will-change:transform,opacity}

/* ═══════════ REVEALS ═══════════ */
[data-reveal]{
  opacity:0;transform:translateY(38px);
  transition:opacity 1s var(--ease),transform 1.1s var(--ease);
  transition-delay:calc(var(--i,0) * 110ms);
}
[data-reveal].in{opacity:1;transform:none}

/* ═══════════ RESPONSIVE ═══════════ */
@media (max-width:820px){
  .scrub{height:520vh}
  .phase{
    left:50%;top:auto;bottom:18vh;
    transform:translate(-50%, var(--y,0px));
    text-align:center;max-width:86vw;
  }
  .titleblock{bottom:8vh}
  .eyes__copy{transform:translateY(30vh)}
  .eyes__label--tr,.eyes__label--br{display:none}
  .rail{display:none}
  .jutsu{padding-bottom:clamp(12rem,26vh,16rem)}
  .jutsu__amaterasu{left:clamp(1rem,4vw,4rem);align-items:flex-start;text-align:left}
  .jutsu__amaterasu-jp{font-size:clamp(3rem,17vw,6rem)}
  .jutsu__foot span:last-child{align-self:flex-start}
}
@media (prefers-reduced-motion:reduce){
  .grain,.uchiwa,.hint__line{animation:none}
  html{scroll-behavior:auto}
}

/* ── Resume / personal-brand additions ── */
.resume-nav{opacity:.9!important}
.resume-nav:hover{color:var(--blood-hot)!important}
 .hero-actions{
  display:flex;
  justify-content:center;
  align-items:center;
  gap:.8rem;
  flex-wrap:wrap;
  margin-top:2rem;
  pointer-events:auto;
}

.hero-action{
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-width:158px;
  padding:.88rem 1.25rem;
  text-decoration:none;
  font-family:var(--mono);
  font-size:.54rem;
  font-weight:500;
  letter-spacing:.2em;
  color:var(--bone);
  border:1px solid rgba(232,228,220,.42);
  background:rgba(0,0,0,.58);
  backdrop-filter:blur(8px);
  box-shadow:0 8px 30px rgba(0,0,0,.35);
  transition:color .3s ease,border-color .3s ease,background .3s ease,transform .3s ease;
}

.hero-action:hover{
  border-color:var(--blood-hot);
  color:#fff;
  background:rgba(192,18,31,.20);
  transform:translateY(-3px);
  box-shadow:0 12px 35px rgba(0,0,0,.55),0 0 28px rgba(255,43,43,.15);
}

.hero-action--resume{
  border-color:rgba(255,43,43,.68);
  background:rgba(80,0,8,.16);
}

/* ================================================================
   FINAL HERO BALANCE — 50% ITACHI / 50% TEXT
   ================================================================ */

/* ---------- Global link reset: never use browser blue/purple ---------- */
a,
a:visited,
a:active {
  color: var(--bone);
  text-decoration: none;
}

a:hover,
a:focus-visible {
  color: var(--blood-hot);
  text-decoration: none;
}

/* ---------- Canvas / Itachi ---------- */
#mainCanvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  display: block;

  /* 50% visual presence */
  opacity: .52 !important;

  /* Keep the face recognizable */
  filter:
    contrast(.96)
    brightness(.72)
    saturate(.76) !important;

  transform: scale(1.01);
  transform-origin: center;
  z-index: 1 !important;
}

/* ---------- Reading layer ---------- */
/*
   The old scrim was too dark and made Itachi disappear.
   This one only creates enough contrast behind typography.
*/
.scrub__sticky::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 2 !important;
  pointer-events: none;

  background:
    radial-gradient(
      ellipse 66% 58% at 50% 54%,
      rgba(0,0,0,.44) 0%,
      rgba(0,0,0,.30) 42%,
      rgba(0,0,0,.18) 68%,
      rgba(0,0,0,.48) 100%
    ),
    linear-gradient(
      180deg,
      rgba(0,0,0,.52) 0%,
      rgba(0,0,0,.15) 30%,
      transparent 58%
    ),
    linear-gradient(
      0deg,
      rgba(0,0,0,.68) 0%,
      rgba(0,0,0,.20) 32%,
      transparent 64%
    );
}

/* ---------- Hero stacking ---------- */
.scrub__sticky > .scrub__glow {
  z-index: 3 !important;
}

.scrub__sticky > .feathers {
  z-index: 8 !important;
}

.scrub__sticky > .phase {
  z-index: 12 !important;
}

.scrub__sticky > .titleblock {
  z-index: 20 !important;
}

/* ---------- All hero phase text ---------- */
.phase {
  z-index: 12 !important;
  color: #f5f1e9 !important;

  text-shadow:
    0 3px 18px rgba(0,0,0,.98),
    0 0 15px rgba(0,0,0,.98),
    0 0 36px rgba(0,0,0,.86);
}

.phase__jp {
  color: #faf7f0 !important;

  text-shadow:
    0 4px 22px #000,
    0 0 18px #000,
    0 0 48px rgba(0,0,0,.90);
}

.phase__en {
  color: var(--blood-hot) !important;

  text-shadow:
    0 2px 14px #000,
    0 0 24px #000,
    0 0 32px rgba(255,43,43,.25);
}

.phase__sub {
  color: #eee9e0 !important;

  text-shadow:
    0 2px 15px #000,
    0 0 26px #000;
}

/* ---------- Main identity ---------- */
.titleblock {
  position: absolute;
  left: 50%;
  bottom: 15vh;
  width: min(92vw, 1120px);

  transform: translateX(-50%);
  text-align: center;

  pointer-events: none;
  z-index: 20 !important;

  text-shadow:
    0 4px 45px rgba(0,0,0,.98),
    0 0 24px rgba(0,0,0,.95),
    0 0 70px rgba(0,0,0,.72);
}

.titleblock__kicker {
  color: #f0ece4 !important;
  font-family: var(--mono);
  font-size: clamp(.52rem, 1vw, .72rem);
  letter-spacing: .48em;

  text-shadow:
    0 2px 14px #000,
    0 0 22px #000;
}

.titleblock__jp {
  color: #faf7f0 !important;
  font-size: clamp(4rem, 10vw, 9.5rem);
  line-height: .84;
  letter-spacing: .015em;

  white-space: nowrap;

  text-shadow:
    0 5px 30px #000,
    0 0 22px #000,
    0 0 62px rgba(0,0,0,.90);
}

.titleblock__jp span {
  color: #ff3030 !important;

  text-shadow:
    0 0 10px rgba(255,43,43,.95),
    0 0 28px rgba(255,43,43,.70),
    0 0 68px rgba(255,43,43,.36);
}

.titleblock__en {
  color: #eee9e0 !important;
  font-weight: 700;
  letter-spacing: .48em;

  text-shadow:
    0 2px 14px #000,
    0 0 26px #000;
}

/* ---------- Hero controls ---------- */
.hero-actions {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: .8rem;

  margin-top: 1.8rem;
  pointer-events: auto;
  position: relative;
  z-index: 25;
}

.hero-action,
.hero-action:visited,
.hero-action:active {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  min-width: 155px;
  padding: .82rem 1.2rem;

  color: #eee9e0 !important;
  background: rgba(0,0,0,.42);

  border: 1px solid rgba(232,228,220,.42);

  font-family: var(--mono);
  font-size: .52rem;
  letter-spacing: .19em;

  text-decoration: none !important;

  backdrop-filter: blur(6px);

  text-shadow: 0 2px 10px #000;

  transition:
    color .3s ease,
    border-color .3s ease,
    background .3s ease,
    transform .3s ease;
}

.hero-action:hover,
.hero-action:focus-visible {
  color: #fff !important;
  border-color: var(--blood-hot) !important;
  background: rgba(110,0,10,.18);
  transform: translateY(-3px);
}

.hero-action--resume {
  border-color: rgba(255,43,43,.62);
}

/* ---------- Navigation ---------- */
.chrome {
  z-index: 300 !important;
}

.chrome__mark {
  color: #eee9e0 !important;
  text-shadow:
    0 2px 14px #000,
    0 0 24px #000;
}

.chrome__nav a,
.chrome__nav a:visited {
  color: #eee9e0 !important;
  opacity: .84;

  text-shadow:
    0 2px 12px #000,
    0 0 20px #000;
}

.chrome__nav a:hover,
.chrome__nav a:focus-visible {
  color: #fff !important;
  opacity: 1;
}

/* ---------- Scroll / side UI ---------- */
.hint,
.rail {
  z-index: 300 !important;
  text-shadow:
    0 2px 14px #000,
    0 0 24px #000;
}

.hint__jp {
  color: #f1ede5 !important;
}

.hint__en {
  color: #aaa39b !important;
}

.rail span {
  color: #aaa39b !important;
}

/* ---------- Profile ---------- */
.profile-layout {
  display: grid;
  grid-template-columns: minmax(280px, .75fr) minmax(0, 1.25fr);
  gap: clamp(2.5rem, 7vw, 7rem);
  align-items: center;
}

.profile-visual {
  position: relative;
  width: 100%;
  max-width: 520px;
  margin-inline: auto;
}

.profile-photo {
  display: block;
  width: min(100%, 520px);
  height: auto;
  max-height: 650px;
  object-fit: cover;
}

.profile-copy {
  min-width: 0;
}

.profile-copy p {
  max-width: 70ch;
}

/* ---------- Contact ---------- */
.contact-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(260px, .7fr);
  gap: clamp(2rem, 7vw, 7rem);
  align-items: start;
}

.contact-value,
.contact-email,
.contact-socials a,
.profile-links a {
  color: var(--bone) !important;
  text-decoration: none !important;
}

.contact-value:hover,
.contact-email:hover,
.contact-socials a:hover,
.profile-links a:hover {
  color: var(--blood-hot) !important;
}

/* ---------- Other section text ---------- */
.jutsu__head h2,
.card__jp,
.quote__jp,
.footer__big {
  color: #f2eee7;
  text-shadow:
    0 3px 22px rgba(0,0,0,.75),
    0 0 30px rgba(0,0,0,.45);
}

.jutsu__head p,
.card__txt,
.quote blockquote p {
  color: rgba(238,233,224,.82);
}

.card__ro {
  color: #aaa39b;
}

.card__foot {
  color: rgba(238,233,224,.58);
}


/* ================================================================
   TABLET
   ================================================================ */

@media (max-width: 1100px) {

  .titleblock {
    width: 94vw;
  }

  .titleblock__jp {
    font-size: clamp(3.7rem, 10vw, 7.8rem);
  }

  .chrome__nav {
    gap: 1.2rem;
  }

  .profile-layout {
    grid-template-columns: minmax(240px, .8fr) minmax(0, 1.2fr);
    gap: 3rem;
  }
}


/* ================================================================
   MOBILE / TABLET HERO
   ================================================================ */

@media (max-width: 820px) {

  .scrub {
    height: 520vh;
  }

  /* Itachi stays visible on mobile */
  #mainCanvas {
    opacity: .50 !important;

    filter:
      contrast(.94)
      brightness(.66)
      saturate(.70) !important;
  }

  .scrub__sticky::after {
    z-index: 2 !important;

    background:
      radial-gradient(
        ellipse 88% 55% at 50% 53%,
        rgba(0,0,0,.48) 0%,
        rgba(0,0,0,.32) 45%,
        rgba(0,0,0,.22) 72%,
        rgba(0,0,0,.58) 100%
      ),
      linear-gradient(
        180deg,
        rgba(0,0,0,.60) 0%,
        rgba(0,0,0,.18) 34%,
        transparent 60%
      ),
      linear-gradient(
        0deg,
        rgba(0,0,0,.74) 0%,
        rgba(0,0,0,.24) 38%,
        transparent 66%
      );
  }

  .phase {
    left: 50%;
    top: auto;
    bottom: 18vh;

    max-width: 90vw;

    text-align: center;
    z-index: 12 !important;
  }

  .titleblock {
    width: 94vw;
    bottom: 10vh;
  }

  .titleblock__kicker {
    font-size: .48rem;
    letter-spacing: .30em;
    margin-bottom: .9rem;
  }

  .titleblock__jp {
    font-size: clamp(3.4rem, 15vw, 6.8rem);
    line-height: .84;
    white-space: nowrap;
  }

  .titleblock__en {
    font-size: .54rem;
    letter-spacing: .25em;
    margin-top: 1rem;
  }

  .hero-actions {
    gap: .55rem;
    margin-top: 1.35rem;
  }

  .hero-action {
    min-width: 135px;
    padding: .72rem .72rem;
    font-size: .45rem;
    letter-spacing: .14em;
  }

  .chrome__nav {
    gap: .75rem;
  }

  .chrome__nav a {
    font-size: .56rem;
  }

  .profile-layout,
  .contact-layout {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }

  .profile-visual {
    max-width: 460px;
    margin-inline: auto;
  }

  .profile-photo {
    width: min(100%, 460px);
    max-height: none;
  }

  .profile-copy {
    width: 100%;
  }

  .profile-big {
    text-align: center;
  }

  .profile-copy p {
    max-width: 65ch;
    margin-inline: auto;
  }

  .rail {
    display: none;
  }
}


/* ================================================================
   SMALL PHONES
   ================================================================ */

@media (max-width: 560px) {

  .chrome__nav {
    gap: .48rem;
  }

  .chrome__nav a {
    font-size: .48rem;
    letter-spacing: .12em;
  }

  .titleblock {
    width: 96vw;
    bottom: 9vh;
  }

  .titleblock__jp {
    font-size: clamp(3rem, 16vw, 5.2rem);
    letter-spacing: 0;
  }

  .titleblock__kicker {
    font-size: .42rem;
    letter-spacing: .24em;
  }

  .titleblock__en {
    font-size: .47rem;
    letter-spacing: .20em;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
    gap: .5rem;
  }

  .hero-action {
    width: min(260px, 78vw);
    min-width: 0;
  }

  .profile-photo {
    width: 92%;
  }
}


/* ================================================================
   VERY SMALL PHONES
   ================================================================ */

@media (max-width: 390px) {

  #mainCanvas {
    opacity: .48 !important;

    filter:
      contrast(.94)
      brightness(.63)
      saturate(.68) !important;
  }

  .chrome__nav a:nth-child(n+4) {
    display: none;
  }

  .titleblock__jp {
    font-size: clamp(2.7rem, 17vw, 4.5rem);
  }

  .titleblock__kicker {
    letter-spacing: .18em;
  }

  .titleblock__en {
    letter-spacing: .16em;
  }
}


/* ================================================================
   ACCESSIBILITY
   ================================================================ */

@media (prefers-reduced-motion: reduce) {

  html {
    scroll-behavior: auto;
  }

  .grain,
  .uchiwa,
  .hint__line {
    animation: none;
  }

  .titleblock__jp,
  .phase__jp,
  .jutsu__head h2,
  .card__jp,
  .quote__jp {
    text-shadow: 0 3px 18px #000;
  }
}
