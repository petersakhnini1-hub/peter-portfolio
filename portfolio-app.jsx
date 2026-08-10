const VIDEO_SRC = "uploads/GLA_SOC_S4_Atoll_Cin_040.mp4";
const DENSITY = { roomy: "180px", balanced: "140px", dense: "100px" };
const ORDERS = {
  "Work first": ["work", "about"],
  "About first": ["about", "work"],
};

function PortfolioApp() {
  const [t, setTweak] = useTweaks(window.TWEAK_DEFAULTS);
  const root = document.documentElement;

  React.useEffect(() => {
    root.style.setProperty("--m", String((t.motion ?? 10) / 10));
    root.style.setProperty("--scrim", String(t.scrim ?? 0.8));
    root.style.setProperty("--reel-min", DENSITY[t.density] || DENSITY.balanced);
    const cool = t.accent === "#BFCAD1";
    root.style.setProperty("--accent-primary", t.accent || "#E8600C");
    root.style.setProperty("--accent-primary-hover", cool ? "#8A959C" : "#C25012");
    root.style.setProperty("--signal-orange", t.accent || "#E8600C");
    root.style.setProperty("--signal-orange-deep", cool ? "#8A959C" : "#C25012");
  }, [t.motion, t.scrim, t.density, t.accent]);

  React.useEffect(() => {
    const done = setTimeout(() => document.body.classList.add("intro-done"), 2600);
    const onMsg = e => {
      const ty = e && e.data && e.data.type;
      if (ty === "__activate_edit_mode") document.body.classList.add("intro-done");
    };
    window.addEventListener("message", onMsg);
    return () => { clearTimeout(done); window.removeEventListener("message", onMsg); };
  }, []);

  React.useEffect(() => {
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const p = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
        root.style.setProperty("--hero-p", String(p * ((t.motion ?? 10) / 10)));
      });
    };
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => { window.removeEventListener("scroll", on); cancelAnimationFrame(raf); };
  }, [t.motion]);

  const order = ORDERS[t.orderLabel] || ORDERS[Object.keys(ORDERS).find(k => ORDERS[k][0] === t.order)] || ORDERS["Work first"];
  const parts = { work: <ReelsSection key="work" />, about: <AboutSection key="about" /> };

  return (
    <React.Fragment>
      <NavBar />
      <Hero videoSrc={VIDEO_SRC} />
      <main className="stage">
        <Ticker />
        {order.map(k => parts[k])}
        <div className="legal-footer"><div className="wrap">Game titles, logos, and imagery shown are property of Electronic Arts and their respective owners. Used to illustrate work completed for EA DICE.</div></div>
      </main>
      <TweaksPanel>
        <TweakSection label="Motion" />
        <TweakSlider label="Intensity" value={t.motion} min={0} max={10} step={1} onChange={v => setTweak("motion", v)} />
        <TweakSection label="Hero" />
        <TweakSlider label="Overlay darkness" value={t.scrim} min={0.2} max={1} step={0.05} onChange={v => setTweak("scrim", v)} />
        <TweakSection label="Accent" />
        <TweakColor label="Accent color" value={t.accent} options={["#E8600C", "#BFCAD1"]} onChange={v => setTweak("accent", v)} />
        <TweakSection label="Layout" />
        <TweakRadio label="Thumbnail size" value={t.density} options={["roomy", "balanced", "dense"]} onChange={v => setTweak("density", v)} />
        <TweakSelect label="Section order" value={t.orderLabel || "Work first"} options={Object.keys(ORDERS)} onChange={v => { setTweak("orderLabel", v); setTweak("order", ORDERS[v][0]); }} />
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<PortfolioApp />);
