/* @ds-bundle: {"format":4,"namespace":"TheScreeningRoomDesignSystem_396844","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"ReelCard","sourcePath":"components/card/ReelCard.jsx"},{"name":"Chip","sourcePath":"components/chip/Chip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Nav","sourcePath":"components/navigation/Nav.jsx"},{"name":"ContactSection","sourcePath":"ui_kits/portfolio/ContactSection.jsx"},{"name":"Hero","sourcePath":"ui_kits/portfolio/Hero.jsx"},{"name":"WorkGrid","sourcePath":"ui_kits/portfolio/WorkGrid.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"c92bca66e9b0","components/card/ReelCard.jsx":"b4795401b933","components/chip/Chip.jsx":"1f61b5090a09","components/forms/Input.jsx":"4ade94e030a4","components/navigation/Nav.jsx":"203db987268a","ui_kits/portfolio/ContactSection.jsx":"d8af91cfa41d","ui_kits/portfolio/Hero.jsx":"81dffb941b19","ui_kits/portfolio/WorkGrid.jsx":"fb3db054002a"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TheScreeningRoomDesignSystem_396844 = window.TheScreeningRoomDesignSystem_396844 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  children,
  onClick,
  disabled = false,
  type = 'button'
}) {
  const base = {
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-label-size)',
    fontWeight: 'var(--text-label-weight)',
    letterSpacing: 'var(--text-label-tracking)',
    lineHeight: 'var(--text-label-leading)',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'default' : 'pointer',
    transition: `background-color var(--duration-hover) var(--ease-out-cinema), transform var(--duration-hover) var(--ease-out-cinema), border-color var(--duration-hover) var(--ease-out-cinema), box-shadow var(--duration-hover) var(--ease-out-cinema)`,
    opacity: disabled ? 0.4 : 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  const variants = {
    primary: {
      backgroundColor: 'var(--signal-orange)',
      color: 'var(--reel-black)',
      border: 'none',
      padding: '16px 32px',
      boxShadow: 'var(--shadow-elevation-1)'
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--projection-white)',
      border: '1px solid var(--grain-line)',
      padding: '15px 31px'
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? variant === 'primary' ? {
    backgroundColor: 'var(--signal-orange-deep)',
    transform: 'translateY(-2px)',
    boxShadow: 'var(--shadow-glow-orange)'
  } : {
    borderColor: 'var(--signal-orange)',
    boxShadow: 'var(--shadow-elevation-1)'
  } : {};
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...hoverStyle
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/card/ReelCard.jsx
try { (() => {
function ReelCard({
  title,
  date,
  duration,
  platforms = [],
  thumbnailColor = '#2A2825',
  onClick
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-gradient-card)',
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      cursor: 'pointer',
      transform: hover ? 'translateY(-4px)' : 'translateY(0)',
      boxShadow: hover ? 'var(--shadow-glow-orange), var(--shadow-elevation-2)' : 'var(--shadow-elevation-1)',
      transition: `box-shadow var(--duration-hover) var(--ease-out-cinema), transform var(--duration-hover) var(--ease-out-cinema)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '16/9',
      backgroundColor: thumbnailColor,
      transform: hover ? 'scale(1.03)' : 'scale(1)',
      transition: `transform 400ms var(--ease-out-cinema)`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(200deg,rgba(0,0,0,0) 45%,rgba(0,0,0,0.55) 100%)'
    }
  }), !hover && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: 0,
      height: 0,
      borderTop: '11px solid transparent',
      borderBottom: '11px solid transparent',
      borderLeft: '18px solid var(--projection-white)',
      opacity: 0.85,
      filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.5))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'var(--space-sm)',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-title-size)',
      fontWeight: 'var(--text-title-weight)',
      lineHeight: 'var(--text-title-leading)',
      color: 'var(--projection-white)'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-mono-size)',
      fontWeight: 'var(--text-mono-weight)',
      letterSpacing: 'var(--text-mono-tracking)',
      color: 'var(--ash-grey)'
    }
  }, duration, " \xB7 ", date), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }
  }, platforms.map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.6875rem',
      textTransform: 'uppercase',
      color: 'var(--signal-gray)',
      border: '1px solid rgba(191,202,209,0.45)',
      borderRadius: 'var(--radius-pill)',
      padding: '4px 10px'
    }
  }, p)))));
}
Object.assign(__ds_scope, { ReelCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/card/ReelCard.jsx", error: String((e && e.message) || e) }); }

// components/chip/Chip.jsx
try { (() => {
function Chip({
  children,
  active = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-mono-size)',
      fontWeight: 'var(--text-mono-weight)',
      letterSpacing: 'var(--text-mono-tracking)',
      textTransform: 'uppercase',
      color: 'var(--signal-gray)',
      border: '1px solid rgba(191,202,209,0.45)',
      borderRadius: 'var(--radius-pill)',
      padding: '6px 14px',
      backgroundColor: active ? 'rgba(191,202,209,0.14)' : 'transparent',
      boxShadow: active ? '0 0 20px rgba(191,202,209,0.25)' : 'none'
    }
  }, children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/chip/Chip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  placeholder,
  type = 'text',
  error,
  disabled = false,
  multiline = false
}) {
  const [focused, setFocused] = React.useState(false);
  const fieldStyle = {
    width: '100%',
    background: 'transparent',
    border: 'none',
    borderBottom: `1px solid ${error ? 'var(--error-red)' : focused ? 'var(--signal-orange)' : 'var(--grain-line)'}`,
    boxShadow: focused && !error ? '0 1px 0 0 var(--signal-orange), 0 8px 24px rgba(232,96,12,0.12)' : 'none',
    color: 'var(--projection-white)',
    fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-body-size)',
    lineHeight: 'var(--text-body-leading)',
    padding: '10px 0',
    outline: 'none',
    opacity: disabled ? 0.4 : 1,
    borderColor: disabled ? 'var(--ash-grey)' : undefined,
    transition: 'border-color 200ms ease-out, box-shadow 200ms ease-out'
  };
  const Field = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-label-size)',
      fontWeight: 'var(--text-label-weight)',
      letterSpacing: 'var(--text-label-tracking)',
      color: 'var(--projection-white)'
    }
  }, label), /*#__PURE__*/React.createElement(Field, {
    type: multiline ? undefined : type,
    placeholder: placeholder,
    disabled: disabled,
    rows: multiline ? 4 : undefined,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      ...fieldStyle,
      resize: multiline ? 'vertical' : undefined
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-label-size)',
      color: 'var(--error-red)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Nav.jsx
try { (() => {
function Nav({
  wordmark = 'Aftermatch',
  links = ['Work', 'About', 'Contact'],
  activeLink,
  ctaLabel = 'Contact',
  onCta,
  scrolled = false
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: 'var(--nav-height)',
      padding: '0 var(--layout-padding-inline-md)',
      backgroundColor: scrolled ? 'rgba(14,13,12,0.85)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 1px 0 var(--grain-line), var(--shadow-elevation-1)' : 'none',
      transition: 'background-color var(--duration-hover) var(--ease-out-cinema), box-shadow var(--duration-hover) var(--ease-out-cinema)',
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '1.125rem',
      color: 'var(--projection-white)',
      letterSpacing: '-0.01em'
    }
  }, wordmark), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-md)'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 'var(--text-label-size)',
      fontWeight: 'var(--text-label-weight)',
      letterSpacing: 'var(--text-label-tracking)',
      color: l === activeLink ? 'var(--signal-orange)' : 'var(--projection-white)',
      textDecoration: 'none'
    }
  }, l))), /*#__PURE__*/React.createElement("button", {
    onClick: onCta,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-label-size)',
      fontWeight: 'var(--text-label-weight)',
      backgroundColor: 'transparent',
      color: 'var(--projection-white)',
      border: '1px solid var(--grain-line)',
      borderRadius: 'var(--radius-sm)',
      padding: '15px 31px',
      cursor: 'pointer'
    }
  }, ctaLabel)));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/ContactSection.jsx
try { (() => {
function ContactSection({
  onSubmit
}) {
  const {
    Input
  } = window.TheScreeningRoomDesignSystem_396844;
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--layout-max-width)',
      margin: '0 auto',
      padding: 'var(--space-2xl) var(--layout-padding-inline-md)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 'var(--space-xl)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-headline-size)',
      fontWeight: 'var(--text-headline-weight)',
      color: 'var(--projection-white)',
      margin: 0
    }
  }, "Let's talk about the next reel."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      color: 'var(--ash-grey)',
      fontSize: 'var(--text-body-size)',
      maxWidth: '40ch'
    }
  }, "Tell me about the project, the platform, and the deadline.")), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      color: 'var(--signal-gray)',
      fontSize: 'var(--text-mono-size)',
      alignSelf: 'start'
    }
  }, "Message sent. I'll reply within 48 hours.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
      onSubmit && onSubmit();
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    placeholder: "you@studio.com",
    type: "email"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Message",
    placeholder: "Tell me about the project",
    multiline: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-label-size)',
      fontWeight: 'var(--text-label-weight)',
      backgroundColor: 'var(--signal-orange)',
      color: 'var(--reel-black)',
      border: 'none',
      padding: '16px 32px',
      cursor: 'pointer',
      alignSelf: 'start',
      marginTop: 'var(--space-xs)'
    }
  }, "Send message")));
}
Object.assign(__ds_scope, { ContactSection });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/ContactSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '92vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 var(--layout-padding-inline-md)',
      maxWidth: 'var(--layout-max-width)',
      margin: '0 auto',
      gap: 'var(--space-xl)',
      background: 'var(--surface-gradient-hero)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1.4',
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-md)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-mono-size)',
      letterSpacing: 'var(--text-mono-tracking)',
      color: 'var(--signal-gray)',
      textTransform: 'uppercase'
    }
  }, "Game clips, cut for the feed"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-display-size)',
      fontWeight: 'var(--text-display-weight)',
      lineHeight: 'var(--text-display-leading)',
      letterSpacing: 'var(--text-display-tracking)',
      color: 'var(--projection-white)',
      margin: 0
    }
  }, "Highlights that hold the frame."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-body-size)',
      lineHeight: 'var(--text-body-leading)',
      color: 'var(--ash-grey)',
      maxWidth: '46ch',
      margin: 0
    }
  }, "Reels and shorts built from real gameplay, edited with the pacing of a feed and the patience of a real shot."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'var(--space-sm)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onCta,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-label-size)',
      fontWeight: 'var(--text-label-weight)',
      backgroundColor: 'var(--signal-orange)',
      color: 'var(--reel-black)',
      border: 'none',
      borderRadius: 'var(--radius-sm)',
      padding: '16px 32px',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-elevation-1)'
    }
  }, "View work"))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1',
      aspectRatio: '4/5',
      background: 'var(--surface-gradient-card)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-elevation-3)'
    }
  }));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/WorkGrid.jsx
try { (() => {
const projects = [{
  title: 'Midnight Runners — Launch Reel',
  date: '2026.02',
  duration: '00:00:24',
  platforms: ['Instagram', 'TikTok'],
  span: 2
}, {
  title: 'Harbor Coffee — Brand Film',
  date: '2025.11',
  duration: '00:01:12',
  platforms: ['YouTube'],
  span: 1
}, {
  title: 'Nightline — Season Trailer',
  date: '2025.09',
  duration: '00:00:38',
  platforms: ['TikTok'],
  span: 1
}, {
  title: 'Faro Studio — Case Study Reel',
  date: '2025.06',
  duration: '00:00:52',
  platforms: ['Instagram'],
  span: 2
}, {
  title: 'Loose Thread — Behind the Scenes',
  date: '2025.03',
  duration: '00:02:04',
  platforms: ['YouTube', 'Instagram'],
  span: 1
}];
function WorkGrid({
  onSelect
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--layout-max-width)',
      margin: '0 auto',
      padding: '0 var(--layout-padding-inline-md)'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-headline-size)',
      fontWeight: 'var(--text-headline-weight)',
      color: 'var(--projection-white)',
      marginBottom: 'var(--space-lg)'
    }
  }, "Selected work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--space-sm)'
    }
  }, projects.map((p, i) => {
    const {
      ReelCard
    } = window.TheScreeningRoomDesignSystem_396844;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        gridColumn: `span ${p.span}`
      }
    }, /*#__PURE__*/React.createElement(ReelCard, {
      title: p.title,
      date: p.date,
      duration: p.duration,
      platforms: p.platforms,
      onClick: () => onSelect && onSelect(p)
    }));
  })));
}
Object.assign(__ds_scope, { WorkGrid });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/WorkGrid.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.ReelCard = __ds_scope.ReelCard;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.ContactSection = __ds_scope.ContactSection;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.WorkGrid = __ds_scope.WorkGrid;

})();
