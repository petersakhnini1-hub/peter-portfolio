const { Button, Chip, Input } = window.TheScreeningRoomDesignSystem_396844;
const { useState, useEffect, useRef } = React;
const { createPortal } = ReactDOM;

const NAV_LINKS = [["About", "about"], ["Work", "work"]];
const SOCIALS = [["LinkedIn", "https://www.linkedin.com/in/peter-sakhnini/", "uploads/pasted-1786395023930-0.png"], ["X", "https://x.com/PeterSMK2", "uploads/pasted-1786395033626-0.png"]];
const TICKER_WORDS = ["Battlefield", "Short-form social content", "Cultural relevancy", "Cinematic editing", "Community focused", "EA DICE"];

function Reveal({ children, delay = 0, className = "", as = "div", ...rest }) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setSeen(true); io.disconnect(); } }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    io.observe(el); return () => io.disconnect();
  }, []);
  const El = as;
  return <El ref={ref} className={`rv ${seen ? "in" : ""} ${className}`} style={{ "--d": delay + "ms" }} {...rest}>{children}</El>;
}

function SectionHead({ eyebrow, title, note, noRule }) {
  return (
    <div className="sechead">
      {!noRule && <Reveal className="rule" />}
      <Reveal className="row" delay={60}>
        <div style={{ display: "flex", flexDirection: "column", gap: "var(--space-sm)" }}>
          {eyebrow && <span className="mono">{eyebrow}</span>}
          <h2 className="headline">{title}</h2>
        </div>
        {note && <p className="lede" style={{ maxWidth: "42ch" }}>{note}</p>}
      </Reveal>
    </div>
  );
}

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const els = ids.map(id => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;
    const io = new IntersectionObserver((entries) => {
      const visible = entries.filter(e => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActive(visible[0].target.id);
    }, { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, [ids.join(",")]);
  return active;
}

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_LINKS.map(([, id]) => id));
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="wrap">
        <span className="mark">Peter Sakhnini</span>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--space-lg)" }}>
          <div className="navlinks">{NAV_LINKS.map(([l, id]) => <a key={id} href={"#" + id} className={active === id ? "active" : ""}>{l}</a>)}</div>
          <div className="navsocial">{SOCIALS.map(([l, href, icon]) => <a key={l} href={href} target="_blank" rel="noreferrer" aria-label={l}><img src={icon} alt="" className="social-icon" /></a>)}</div>
          <button type="button" className="navburger" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(o => !o)}>
            <span />
          </button>
        </div>
      </div>
      <div className={`navmobile${open ? " open" : ""}`} aria-hidden={!open}>
        {NAV_LINKS.map(([l, id]) => <a key={id} href={"#" + id} className={active === id ? "active" : ""} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)}>{l}</a>)}
        <div className="navmobile-social">{SOCIALS.map(([l, href, icon]) => <a key={l} href={href} target="_blank" rel="noreferrer" aria-label={l} tabIndex={open ? 0 : -1}><img src={icon} alt="" className="social-icon" /></a>)}</div>
      </div>
    </nav>
  );
}

function KineticName({ text }) {
  const words = text.split(" ");
  let i = 0;
  return (
    <React.Fragment>
      {words.map((word, wi) => (
        <span className="kinetic" key={wi} style={{ display: "inline-block", marginRight: wi < words.length - 1 ? "0.28em" : 0 }}>
          {word.split("").map((ch, ci) => {
            const delay = i++ * 18;
            const isLast = wi === words.length - 1 && ci === word.length - 1;
            return (
              <span key={ci} className={"kt" + (isLast ? " glitch" : "")} style={{ "--kd": delay + "ms" }} aria-hidden="true">
                {ch}
              </span>
            );
          })}
        </span>
      ))}
    </React.Fragment>
  );
}

function Hero({ videoSrc }) {
  const name = "Peter Sakhnini";
  const [videoReady, setVideoReady] = useState(false);
  return (
    <header className="hero">
      <div className="hero-media">
        {videoSrc
          ? <video src={videoSrc} autoPlay muted loop playsInline onLoadedData={() => setVideoReady(true)} style={{ opacity: videoReady ? 1 : 0, transition: "opacity 900ms var(--ease-out-cinema)" }} />
          : <div className="fallback" />}
      </div>
      <div className="hero-scrim" />
      <div className="hero-glow" />
      <div className="hero-body">
        <div className="wrap">
          <div className="hero-row">
            <div className="scrollcue fade-up" style={{ "--kd": "1600ms" }}>
              <span className="bar" />
            </div>
            <div className="hero-content">
              <div className="hero-top fade-up" style={{ "--kd": "900ms" }}>
                <span className="hero-eyebrow">GLOBAL SOCIAL MEDIA MANAGER, BATTLEFIELD &mdash; EA DICE</span>
              </div>
              <h1 aria-label={name}><KineticName text={name} /></h1>
              <div className="hero-foot">
                <p className="hero-tagline fade-up" style={{ "--kd": "1250ms" }}>Best-in-class storytelling with striking visuals and strategies.</p>
                <div className="hero-links fade-up" style={{ "--kd": "1400ms" }}>
                  <a href="#work">View the work</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Ticker() {
  const items = TICKER_WORDS.map(w => <span key={w}>{w}<em>&middot;</em></span>);
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">{items}{items}</div>
    </div>
  );
}

const REELS = [
  { t: "First REDSEC Teaser", type: "video", src: "uploads/redsec tease resize-6dd8b34f.mp4", dur: "0:21", ratio: "16/9", span: 2 },
  { key: "accolades", t: <>Battlefield 6 - Launch Accolades Asset<br /></>, alt: "Battlefield 6 launch accolades asset", type: "image", src: "uploads/BF6_Accolades_16x9.png", ratio: "16/9", span: 2 },
  { t: "Defib revive", type: "video", src: "uploads/defib resize.mp4", dur: "0:07", ratio: "9/16", span: 1 },
  { t: "Thrust vector", type: "video", src: "uploads/thrustvector resize-5c0130fd.mp4", dur: "0:12", ratio: "9/16", span: 1 },
  { t: "Golf cart chaos", type: "video", src: "uploads/golfcart resize-7a36f4dd.mp4", dur: "0:20", ratio: "9/16", span: 1 },
  { t: "Hop on Tsuru Reef", type: "video", src: "uploads/BF6-RCB90-9x16 resize.mp4", dur: "0:09", ratio: "9/16", span: 1 },
  { t: "Assault ladder", type: "video", src: "uploads/assault ladder resize-af8959b0.mp4", dur: "0:14", ratio: "16/9", span: 2, contain: true },
  { t: "Battlefield 6 - Tsuru Reef Heatmap", type: "image", src: "uploads/BF6-TSURU-CQ-HEATMAP-16x9 (1).png", ratio: "16/9", span: 2 },
  { key: "bowie", t: <>Battlefield 6 <span style={{ fontWeight: "normal" }}>x</span> Forza Horizon 6 Meme</>, alt: "Battlefield 6 x Forza Horizon 6 meme", type: "image", src: "uploads/Bowie Knife99.jpg", ratio: "16/9", span: 2 },
  { t: "COOKED SUPPORT", type: "image", src: "uploads/Support.png", ratio: "16/9", span: 2 },
  { t: "Tell my mother", type: "video", src: "uploads/tellmymother resize-349809be.mp4", dur: "0:20", ratio: "9/16", span: 1, removed: true },
];

function useVideoSlots() {
  const [vids, setVids] = useState({});
  const onDragOverCapture = (e) => {
    const dt = e.dataTransfer;
    const t = dt && dt.items && dt.items[0] && dt.items[0].type;
    if (t && t.startsWith("video/")) { e.preventDefault(); e.stopPropagation(); if (dt) dt.dropEffect = "copy"; }
  };
  const onDropCapture = (id) => (e) => {
    const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (f && f.type.startsWith("video/")) {
      e.preventDefault(); e.stopPropagation();
      const url = URL.createObjectURL(f);
      setVids(v => ({ ...v, [id]: url }));
    }
  };
  return { vids, onDragOverCapture, onDropCapture };
}

function MuteIcon({ muted }) {
  return muted
    ? <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19" fill="currentColor" stroke="none"></polygon><line x1="22" y1="9" x2="16" y2="15"></line><line x1="16" y1="9" x2="22" y2="15"></line></svg>
    : <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19" fill="currentColor" stroke="none"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>;
}

function GalleryTile({ r, i, onOpen, volume, onVolumeChange, muted, onMutedChange }) {
  const vidRef = useRef(null);
  const isVideo = r.type === "video";
  const altText = r.alt || (typeof r.t === "string" ? r.t : "Work sample");
  const [shouldLoad, setShouldLoad] = useState(false);
  const [ready, setReady] = useState(false);
  const tileRef = useRef(null);
  const [tilt, setTilt] = useState(null);
  useEffect(() => {
    const el = tileRef.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShouldLoad(true); io.disconnect(); } }, { rootMargin: "600px" });
    io.observe(el); return () => io.disconnect();
  }, []);
  useEffect(() => { if (vidRef.current) { vidRef.current.volume = volume; vidRef.current.muted = muted; } }, [volume, muted, shouldLoad]);
  const [playing, setPlaying] = useState(false);
  const [volumeOpen, setVolumeOpen] = useState(false);
  const onMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -6, ry: px * 6 });
  };
  const tiltStyle = tilt
    ? { transform: `perspective(900px) scale3d(1.02,1.02,1.02) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`, transition: "transform 60ms linear" }
    : { transform: "perspective(900px) rotateX(0deg) rotateY(0deg)", transition: "transform 450ms var(--ease-out-cinema)" };
  return (
    <Reveal delay={i * 40} className={"gallery-item" + (playing ? " is-playing" : "")} style={{ "--ratio": r.ratio, "--span": r.span || 1 }} onClick={() => { if (!volumeOpen) onOpen(r); }} as="div" role="button" tabIndex={0} aria-label={"Open " + altText} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(r); } }}>
      <div className="gallery-clip">
      <div ref={tileRef} className="gallery-tilt"
        onMouseMove={onMove}
        onMouseEnter={() => isVideo && vidRef.current && vidRef.current.play().catch(() => {})}
        onMouseLeave={() => { setTilt(null); if (isVideo && vidRef.current) vidRef.current.pause(); }}>
        <div className="gallery-tilt-inner" style={tiltStyle}>
        {isVideo
          ? (shouldLoad
              ? <React.Fragment>
                  <video ref={vidRef} className={"inner" + (r.contain ? " contain" : "")} src={r.src} muted={muted} loop playsInline preload="auto" onLoadedData={() => setReady(true)} onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} style={{ opacity: ready ? 1 : 0 }} />
                  {!ready && <div className="gallery-skeleton" />}
                </React.Fragment>
              : <div className="gallery-skeleton" />)
          : (shouldLoad ? <img className="inner" src={r.src} alt={altText} loading="lazy" onLoad={() => setReady(true)} style={{ opacity: ready ? 1 : 0 }} /> : <div className="gallery-skeleton" />)}
        <div className="gallery-shadow" />
        <span className="gallery-index" style={{ opacity: playing ? 0 : 1 }}>{String(i + 1).padStart(2, "0")}</span>
        <div className="gallery-caption" style={{ opacity: playing ? 0 : 1 }}>
          {r.dur && <span className="gallery-meta">{r.dur}</span>}
          <h3 className="gallery-title">{r.t}</h3>
        </div>
        </div>
      {isVideo && (
        <div className="gallery-mute-wrap" style={{ opacity: playing ? 1 : 0, pointerEvents: playing ? "auto" : "none" }} onClick={(e) => e.stopPropagation()} onMouseMove={(e) => e.stopPropagation()} onMouseEnter={() => setVolumeOpen(true)} onMouseLeave={() => setVolumeOpen(false)} onFocus={() => setVolumeOpen(true)} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setVolumeOpen(false); }}>
          <div className="gallery-volume">
            <input type="range" min="0" max="1" step="0.01" value={volume} onChange={(e) => {
              const v = parseFloat(e.target.value);
              onVolumeChange(v);
              onMutedChange(false);
            }} aria-label="Volume" />
          </div>
          <button type="button" className="gallery-mute" onClick={() => onMutedChange(!muted)} aria-label={muted ? "Unmute" : "Mute"}><MuteIcon muted={muted} /></button>
        </div>
      )}
      </div>
      </div>
    </Reveal>
  );
}

function Lightbox({ item, onClose, volume, muted }) {
  const vidRef = useRef(null);
  const closeRef = useRef(null);
  useEffect(() => {
    if (item && item.type === "video" && vidRef.current) {
      const v = vidRef.current;
      v.volume = volume;
      v.muted = muted;
      v.load();
      v.play().catch(() => {});
    }
  }, [item, volume, muted]);
  useEffect(() => {
    if (!item) return;
    closeRef.current && closeRef.current.focus();
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [item, onClose]);
  if (!item) return null;
  const altText = item.alt || (typeof item.t === "string" ? item.t : "Work sample");
  return createPortal(
    <div className="lightbox" onClick={onClose} role="dialog" aria-modal="true" aria-label={altText}>
      <button type="button" ref={closeRef} className="lightbox-close" onClick={onClose} aria-label="Close">&times;</button>
      {item.type === "image"
        ? <img key={item.src} className="lightbox-media" src={item.src} alt={altText} onClick={e => e.stopPropagation()} />
        : <video key={item.src} ref={vidRef} className="lightbox-media" src={item.src} controls playsInline preload="auto" onClick={e => e.stopPropagation()} />}
    </div>,
    document.body
  );
}

function ReelsSection() {
  const [active, setActive] = useState(null);
  const [volume, setVolumeState] = useState(() => {
    const v = parseFloat(localStorage.getItem("psk_video_volume"));
    return isNaN(v) ? 0.8 : v;
  });
  const [muted, setMutedState] = useState(() => {
    const m = localStorage.getItem("psk_video_muted");
    return m === null ? true : m === "1";
  });
  const onVolumeChange = (v) => { setVolumeState(v); localStorage.setItem("psk_video_volume", String(v)); };
  const onMutedChange = (m) => { setMutedState(m); localStorage.setItem("psk_video_muted", m ? "1" : "0"); };
  return (
    <section id="work" className="sec">
      <div className="wrap">
        <SectionHead eyebrow={<b>WORK SAMPLES - ASSET PRODUCTION</b>} title="Short-form content" noRule />
        <div className="gallery">
          {REELS.filter(r => !r.removed).map((r, i) => <GalleryTile key={r.key || r.t} r={r} i={i} onOpen={setActive} volume={volume} onVolumeChange={onVolumeChange} muted={muted} onMutedChange={onMutedChange} />)}
        </div>
      </div>
      <Lightbox item={active} onClose={() => setActive(null)} volume={volume} muted={muted} />
    </section>
  );
}

const BEATS = [
  { t: "Content with purpose", b: "High-impact, short-form viral vertical content designed for TikTok, Instagram Reels, and X/Twitter." },
  { t: "Player-first approach", b: "Social campaigns built around trending gaming culture, player moments, and high-engagement narrative beats." },
  { t: "Cultural relevancy", b: "Horizontal cinematic trailers, gameplay showcases, and major franchise beats for EA DICE / Battlefield." },
];

function StrategySection() {
  const { vids, onDragOverCapture, onDropCapture } = useVideoSlots();
  return (
    <section id="strategy" className="sec">
      <div className="wrap">
        <SectionHead title="Campaigns &amp; Numbers" note="Content strategy built on cultural relevancy, high-impact narrative design, and community engagement." />
        <div className="beatlist">
          {BEATS.map((b, i) => (
            <Reveal key={b.t} delay={i * 80} className={"beatrow" + (i % 2 ? " rev" : "")}>
              <div className="beat-copy">
                <span className="beat-index">Beat {String(i + 1).padStart(2, "0")}</span>
                <h3 className="beat-title">{b.t}</h3>
                <p className="lede">{b.b}</p>
              </div>
              <div className="beat-media" onDragOverCapture={onDragOverCapture} onDropCapture={onDropCapture("beat-" + (i + 1))}>
                {vids["beat-" + (i + 1)]
                  ? <video className="inner" src={vids["beat-" + (i + 1)]} muted loop autoPlay playsInline />
                  : <div className="inner"><image-slot id={"beat-" + (i + 1)} shape="rect" placeholder="Drop a 16:9 still or video"></image-slot></div>}
              </div>
            </Reveal>
          ))}
        </div>
        <div className="statrow">
          {[["X Million", "Organic views across TikTok & Reels"], ["X%", "Increase in community engagement and social share of voice"]].map(([n, l], i) => (
            <Reveal key={l} delay={i * 90} className="stat">
              <span className="big"><em>{n}</em></span>
              <p className="lede" style={{ color: "var(--projection-white)" }}>{l}</p>
              <span className="slot">Real number to come</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const GAMES = [
  { title: "Lost in Random", role: "Asset Vendor" },
  { title: "It Takes Two", role: "Asset Vendor" },
  { title: "Battlefield 2042", role: "Social Media Asset Producer" },
  { title: "Battlefield 2042", role: "Social Media Manager & Asset Producer" },
  { title: "Battlefield 6", role: "Global Social Media Manager & Cinematic Asset Producer" },
];

const SKILLS = ["Adobe After Effects", "Adobe Photoshop", "Adobe Premiere Pro", "Frostbite Engine"];

const GAME_ART = [
  "uploads/pasted-1786391777196-0.png",
  "uploads/pasted-1786391678967-0.png",
  "uploads/pasted-1786391819428-0.png",
  "uploads/pasted-1786391803786-0.png",
  "uploads/pasted-1786391865432-0.png",
];

function AboutSection() {
  return (
    <section id="about" className="sec">
      <div className="wrap">
        <div className="about-top">
          <p className="about-me">A video game enjoyer. From cozy couch games to action-packed first person shooters. Leading social media strategies and in-engine video content production for social-first assets on the Battlefield franchise.</p>
          <div className="about-skills">
            <span className="mono" style={{ position: "relative", top: "15px" }}>Skills</span>
            <div className="skills-list" style={{ paddingTop: 0, paddingBottom: 0, position: "relative", top: "-5px" }}>
              {SKILLS.map(s => <Chip key={s}>{s}</Chip>)}
            </div>
          </div>
        </div>
        <SectionHead title="Experience" noRule />
        <div className="about">
          <Reveal>
            <p className="philosophy"></p>
          </Reveal>
          <Reveal delay={80} className="credits">
            {GAMES.map((g, i) => (
              <div className="credit-card" key={g.title + g.role}>
                <div className="credit-art">
                  <div className="inner"><img src={GAME_ART[i]} alt={g.title} className="credit-img" /></div>
                </div>
                <div className="credit-meta">
                  <span className="credit-index">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="credit-title">{g.title}</h3>
                  <span className="credit-role">{g.role}</span>
                </div>
              </div>
            ))}
          </Reveal>
          <Reveal delay={180} style={{ display: "flex", gap: "var(--space-sm)", flexWrap: "wrap" }}>
            {SOCIALS.map(([l, href, icon]) => <a key={l} href={href} target="_blank" rel="noreferrer" aria-label={l}><Chip><img src={icon} alt="" className="social-icon" /></Chip></a>)}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="sec" style={{ paddingBottom: 0 }}>
      <footer style={{ marginTop: 0 }}>
        <div className="wrap footrow">
          <span className="mark">Peter Sakhnini</span>
          <div className="footlinks">{SOCIALS.map(([l, href, icon]) => <a key={l} href={href} target="_blank" rel="noreferrer" aria-label={l}><img src={icon} alt="" className="social-icon" /></a>)}</div>
        </div>
      </footer>
    </section>
  );
}

Object.assign(window, { Reveal, SectionHead, NavBar, Hero, Ticker, ReelsSection, StrategySection, AboutSection, ContactSection });
