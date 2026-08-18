/* @ds-bundle: {"format":4,"namespace":"RotaryBaliDenpasarDesignSystem_7b6ed3","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Input.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"},{"name":"SiteHeader","sourcePath":"components/navigation/SiteHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"Dialog","sourcePath":"components/surfaces/Dialog.jsx"},{"name":"Toast","sourcePath":"components/surfaces/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/surfaces/Tooltip.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"4012765e8976","components/core/Button.jsx":"54f6f88af9bb","components/core/IconButton.jsx":"848e46325374","components/core/Tag.jsx":"0a8df0868b2f","components/forms/Checkbox.jsx":"de6f6ea192a7","components/forms/Input.jsx":"341910425a21","components/forms/Radio.jsx":"2cb018a04c2a","components/forms/Select.jsx":"5411aaf12758","components/forms/Switch.jsx":"4dbb2caf5026","components/navigation/SiteFooter.jsx":"48ffb1c726c6","components/navigation/SiteHeader.jsx":"978719ed4d71","components/navigation/Tabs.jsx":"2423c69415cd","components/surfaces/Card.jsx":"4a7ce728308f","components/surfaces/Dialog.jsx":"2f24ce74c1af","components/surfaces/Toast.jsx":"0993491d8860","components/surfaces/Tooltip.jsx":"12d33cfd347b","doc-page.js":"371bab66f42d","ui_kits/club-website/HomeScreen.jsx":"ccc3a730a7f3","ui_kits/club-website/JoinScreen.jsx":"ef72584d95e2","ui_kits/club-website/ProjectsScreen.jsx":"0efd5453d8e0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.RotaryBaliDenpasarDesignSystem_7b6ed3 = window.RotaryBaliDenpasarDesignSystem_7b6ed3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
const TONES = {
  royal: ['var(--royal-blue)', '#fff'],
  gold: ['var(--gold)', 'var(--royal-blue)'],
  info: ['var(--sky-blue)', '#fff'],
  success: ['var(--grass)', '#fff'],
  warning: ['var(--orange)', '#fff'],
  danger: ['var(--cardinal)', '#fff'],
  neutral: ['var(--surface-tint)', 'var(--slate)']
};
function Badge({
  tone = 'royal',
  children,
  style
}) {
  const [bg, fg] = TONES[tone] || TONES.royal;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      background: bg,
      color: fg,
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 11.5,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      padding: '3px 9px',
      borderRadius: 'var(--radius-sm)',
      lineHeight: 1.5,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  children,
  href,
  onClick,
  type = 'button',
  style
}) {
  const [hov, setHov] = useState(false);
  const pads = {
    sm: '7px 14px',
    md: '10px 20px',
    lg: '13px 28px'
  };
  const fs = {
    sm: 13,
    md: 15,
    lg: 16
  };
  const v = {
    primary: {
      background: hov ? '#e89a0c' : 'var(--cta-bg)',
      color: 'var(--cta-text)',
      border: '1px solid transparent'
    },
    secondary: {
      background: hov ? '#102f61' : 'var(--royal-blue)',
      color: '#fff',
      border: '1px solid transparent'
    },
    outline: {
      background: hov ? 'var(--surface-tint)' : 'transparent',
      color: 'var(--azure)',
      border: '1px solid var(--azure)'
    },
    ghost: {
      background: hov ? 'var(--surface-tint)' : 'transparent',
      color: 'var(--azure)',
      border: '1px solid transparent'
    }
  }[variant];
  const s = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: fs[size],
    lineHeight: 1.2,
    padding: pads[size],
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    transition: 'background .15s ease,color .15s ease',
    ...v,
    ...(disabled ? {
      background: 'var(--silver)',
      color: 'var(--pewter)',
      border: '1px solid transparent'
    } : {}),
    ...style
  };
  const props = {
    style: s,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    onClick: disabled ? undefined : onClick
  };
  return href && !disabled ? /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, props), children) : /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const {
  useState
} = React;
function IconButton({
  label,
  size = 'md',
  variant = 'ghost',
  onClick,
  children,
  style
}) {
  const [hov, setHov] = useState(false);
  const dim = {
    sm: 32,
    md: 40,
    lg: 48
  }[size];
  const v = {
    ghost: {
      background: hov ? 'var(--surface-tint)' : 'transparent',
      color: 'var(--azure)',
      border: '1px solid transparent'
    },
    outline: {
      background: hov ? 'var(--surface-tint)' : 'transparent',
      color: 'var(--azure)',
      border: '1px solid var(--azure)'
    },
    solid: {
      background: hov ? '#102f61' : 'var(--royal-blue)',
      color: '#fff',
      border: '1px solid transparent'
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    onClick: onClick,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      width: dim,
      height: dim,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      transition: 'background .15s ease',
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const COLORS = {
  azure: 'var(--azure)',
  'sky-blue': 'var(--sky-blue)',
  cranberry: 'var(--cranberry)',
  cardinal: 'var(--cardinal)',
  turquoise: 'var(--turquoise)',
  orange: 'var(--orange)',
  violet: 'var(--violet)',
  grass: 'var(--grass)',
  slate: 'var(--slate)'
};
function Tag({
  color = 'azure',
  children,
  style
}) {
  const c = COLORS[color] || color;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      border: `1px solid ${c}`,
      color: c,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 13,
      padding: '3px 12px',
      borderRadius: 'var(--radius-full)',
      lineHeight: 1.5,
      background: '#fff',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: disabled ? 'var(--pewter)' : 'var(--charcoal)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      lineHeight: 1.4,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      accentColor: 'var(--azure)',
      width: 18,
      height: 18,
      marginTop: 1,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Field({
  label,
  help,
  error,
  htmlFor,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)'
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--royal-blue)'
    }
  }, label), children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--cardinal)'
    }
  }, error) : help ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--pewter)'
    }
  }, help) : null);
}
function Input({
  label,
  help,
  error,
  multiline = false,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const s = {
    fontFamily: 'var(--font-sans)',
    fontSize: 15,
    color: 'var(--charcoal)',
    padding: '10px 12px',
    borderRadius: 'var(--radius-sm)',
    background: '#fff',
    outline: 'none',
    width: '100%',
    border: `1px solid ${error ? 'var(--cardinal)' : focus ? 'var(--azure)' : 'var(--border-strong)'}`,
    boxShadow: focus ? '0 0 0 2px rgba(0,103,200,.18)' : 'none',
    transition: 'border-color .15s ease, box-shadow .15s ease',
    ...style
  };
  const props = {
    id,
    style: s,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    ...rest
  };
  return /*#__PURE__*/React.createElement(Field, {
    label: label,
    help: help,
    error: error,
    htmlFor: id
  }, multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: 4
  }, props)) : /*#__PURE__*/React.createElement("input", props));
}
Object.assign(__ds_scope, { Field, Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  value,
  checked,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: disabled ? 'var(--pewter)' : 'var(--charcoal)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      accentColor: 'var(--azure)',
      width: 18,
      height: 18,
      cursor: 'inherit'
    }
  }), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const CHEV = "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23657f99' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")";
function Select({
  label,
  help,
  error,
  options = [],
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    help: help,
    error: error,
    htmlFor: id
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--charcoal)',
      padding: '10px 36px 10px 12px',
      borderRadius: 'var(--radius-sm)',
      background: `#fff ${CHEV} no-repeat right 12px center`,
      appearance: 'none',
      WebkitAppearance: 'none',
      outline: 'none',
      width: '100%',
      cursor: 'pointer',
      border: `1px solid ${error ? 'var(--cardinal)' : focus ? 'var(--azure)' : 'var(--border-strong)'}`,
      boxShadow: focus ? '0 0 0 2px rgba(0,103,200,.18)' : 'none',
      ...style
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked = false,
  onChange,
  disabled = false,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: disabled ? 'var(--pewter)' : 'var(--charcoal)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": checked,
    tabIndex: disabled ? -1 : 0,
    onClick: () => !disabled && onChange && onChange(!checked),
    onKeyDown: e => {
      if (!disabled && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault();
        onChange && onChange(!checked);
      }
    },
    style: {
      width: 40,
      height: 22,
      borderRadius: 999,
      background: disabled ? 'var(--silver)' : checked ? 'var(--azure)' : 'var(--smoke)',
      position: 'relative',
      transition: 'background .15s ease',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 2,
      left: checked ? 20 : 2,
      width: 18,
      height: 18,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left .15s ease',
      boxShadow: '0 1px 2px rgba(0,0,0,.25)'
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function SiteFooter({
  logoSrc = 'assets/logo-white.png',
  columns = [],
  note = 'Rotary Club of Bali Denpasar · District 3420 · Chartered club of Rotary International',
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--royal-blue)',
      color: '#fff',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '56px 24px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      flexWrap: 'wrap',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: '1 1 280px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Rotary Club of Bali Denpasar",
    style: {
      height: 52,
      width: 'auto',
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 15,
      color: 'var(--powder-blue)'
    }
  }, "Service Above Self")), columns.map((c, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--powder-blue)',
      marginBottom: 12
    }
  }, c.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, (c.links || []).map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: '#fff',
      textDecoration: 'none',
      fontSize: 14.5,
      opacity: .92
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,255,255,.2)',
      marginTop: 40,
      paddingTop: 20,
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--powder-blue)'
    }
  }, note)));
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteHeader.jsx
try { (() => {
const {
  useState,
  useEffect
} = React;
function Pill({
  label,
  variant = 'solid',
  onClick,
  full
}) {
  const [h, setH] = useState(false);
  const st = variant === 'solid' ? {
    background: h ? '#0056a8' : 'var(--azure)',
    color: '#fff'
  } : {
    background: h ? '#cde6f5' : 'var(--powder-blue)',
    color: 'var(--royal-blue)'
  };
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      ...st,
      border: 'none',
      borderRadius: 999,
      padding: '12px 24px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 15,
      cursor: 'pointer',
      transition: 'background .15s ease',
      width: full ? '100%' : 'auto'
    }
  }, label);
}
const SearchIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "19",
  height: "19",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("circle", {
  cx: "11",
  cy: "11",
  r: "7"
}), /*#__PURE__*/React.createElement("path", {
  d: "m21 21-4.3-4.3"
}));
const Chevron = ({
  open
}) => /*#__PURE__*/React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  style: {
    transform: open ? 'rotate(180deg)' : 'none',
    transition: 'transform .2s ease',
    flex: 'none'
  }
}, /*#__PURE__*/React.createElement("path", {
  d: "m6 9 6 6 6-6"
}));
const Burger = () => /*#__PURE__*/React.createElement("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M4 6h16M4 12h16M4 18h16"
}));
const XIcon = () => /*#__PURE__*/React.createElement("svg", {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: "2",
  strokeLinecap: "round"
}, /*#__PURE__*/React.createElement("path", {
  d: "M18 6 6 18M6 6l12 12"
}));
function SiteHeader({
  logoSrc = 'assets/logo-reverse.png',
  nav = [],
  links,
  cta,
  onCta,
  active = '',
  actions = [],
  showSearch = true,
  onSearch,
  onNavigate,
  previewOpen = '',
  previewMobile,
  previewMenuOpen = false,
  style
}) {
  const raw = nav && nav.length ? nav : links || [];
  const items = raw.map(i => typeof i === 'string' ? {
    label: i
  } : i);
  const acts = actions.length ? actions : cta ? [{
    label: cta,
    variant: 'tint',
    onClick: onCta
  }] : [];
  const [isMobile, setIsMobile] = useState(previewMobile === true);
  useEffect(() => {
    if (typeof previewMobile === 'boolean') {
      setIsMobile(previewMobile);
      return;
    }
    const mq = window.matchMedia('(max-width: 820px)');
    const f = () => setIsMobile(mq.matches);
    f();
    mq.addEventListener('change', f);
    return () => mq.removeEventListener('change', f);
  }, [previewMobile]);
  const [open, setOpen] = useState(previewOpen);
  const [menu, setMenu] = useState(previewMenuOpen);
  const [exp, setExp] = useState(previewOpen);
  const [hovS, setHovS] = useState('');
  const go = (label, sub) => {
    setMenu(false);
    setOpen('');
    onNavigate && onNavigate(label, sub);
  };
  const container = {
    maxWidth: 'var(--container)',
    margin: '0 auto',
    padding: '0 24px'
  };
  const circle = {
    width: 44,
    height: 44,
    borderRadius: '50%',
    border: '2px solid #fff',
    background: 'transparent',
    color: '#fff',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    flex: 'none'
  };
  const headerSt = {
    background: 'var(--royal-blue)',
    position: 'sticky',
    top: 0,
    zIndex: 50,
    ...style
  };
  const logoLink = h => /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('Home');
    },
    style: {
      lineHeight: 0,
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "Rotary Club of Bali Denpasar",
    style: {
      height: h,
      width: 'auto',
      display: 'block'
    }
  }));
  if (isMobile) {
    return /*#__PURE__*/React.createElement("header", {
      style: headerSt
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 16px',
        gap: 6
      }
    }, logoLink(38), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 'auto',
        display: 'flex',
        gap: 10,
        alignItems: 'center'
      }
    }, showSearch && /*#__PURE__*/React.createElement("button", {
      "aria-label": "Search",
      onClick: onSearch,
      style: circle
    }, /*#__PURE__*/React.createElement(SearchIcon, null)), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Menu",
      onClick: () => setMenu(true),
      style: {
        width: 44,
        height: 44,
        background: 'none',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(Burger, null)))), menu && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'fixed',
        inset: 0,
        background: 'var(--royal-blue)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        padding: '10px 16px'
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: logoSrc,
      alt: "",
      style: {
        height: 38,
        width: 'auto'
      }
    }), /*#__PURE__*/React.createElement("button", {
      "aria-label": "Close menu",
      onClick: () => setMenu(false),
      style: {
        marginLeft: 'auto',
        width: 44,
        height: 44,
        background: 'none',
        border: 'none',
        color: '#fff',
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center'
      }
    }, /*#__PURE__*/React.createElement(XIcon, null))), /*#__PURE__*/React.createElement("nav", {
      style: {
        display: 'flex',
        flexDirection: 'column',
        padding: '8px 20px 0'
      }
    }, items.map(it => {
      const expd = exp === it.label;
      return /*#__PURE__*/React.createElement("div", {
        key: it.label,
        style: {
          borderBottom: '1px solid rgba(255,255,255,.18)'
        }
      }, /*#__PURE__*/React.createElement("button", {
        onClick: () => it.items ? setExp(expd ? '' : it.label) : go(it.label),
        style: {
          width: '100%',
          minHeight: 52,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'none',
          border: 'none',
          color: '#fff',
          fontFamily: 'var(--font-sans)',
          fontWeight: 700,
          fontSize: 17,
          cursor: 'pointer',
          padding: '4px 2px',
          textAlign: 'left'
        }
      }, it.label, it.items && /*#__PURE__*/React.createElement(Chevron, {
        open: expd
      })), it.items && expd && /*#__PURE__*/React.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          paddingBottom: 10
        }
      }, it.items.map(s => /*#__PURE__*/React.createElement("a", {
        key: s,
        href: "#",
        onClick: e => {
          e.preventDefault();
          go(it.label, s);
        },
        style: {
          color: 'var(--powder-blue)',
          fontFamily: 'var(--font-sans)',
          fontSize: 16,
          textDecoration: 'none',
          padding: '12px 2px 12px 14px',
          minHeight: 44,
          display: 'flex',
          alignItems: 'center'
        }
      }, s))));
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: 'auto',
        display: 'flex',
        gap: 12,
        padding: '24px 20px 28px'
      }
    }, acts.map(a => /*#__PURE__*/React.createElement(Pill, {
      key: a.label,
      label: a.label,
      variant: a.variant,
      full: true,
      onClick: () => {
        setMenu(false);
        a.onClick && a.onClick();
      }
    })))));
  }
  const openItem = items.find(i => i.label === open && i.items);
  return /*#__PURE__*/React.createElement("header", {
    style: headerSt,
    onMouseLeave: () => setOpen(previewOpen)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: 'flex',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 6
    }
  }, logoLink(46), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 'auto',
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, acts.map(a => /*#__PURE__*/React.createElement(Pill, {
    key: a.label,
    label: a.label,
    variant: a.variant,
    onClick: a.onClick
  })), showSearch && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Search",
    onClick: onSearch,
    style: circle
  }, /*#__PURE__*/React.createElement(SearchIcon, null)))), /*#__PURE__*/React.createElement("nav", {
    style: {
      ...container,
      display: 'flex',
      gap: 36
    }
  }, items.map(it => {
    const on = it.label === active;
    return /*#__PURE__*/React.createElement("a", {
      key: it.label,
      href: "#",
      onClick: e => {
        e.preventDefault();
        go(it.label);
      },
      onMouseEnter: () => {
        setOpen(it.items ? it.label : '');
        setHovS('nav:' + it.label);
      },
      onMouseLeave: () => setHovS(''),
      style: {
        fontFamily: 'var(--font-sans)',
        fontWeight: 700,
        fontSize: 16,
        color: on || hovS === 'nav:' + it.label ? '#fff' : 'rgba(255,255,255,.85)',
        textDecoration: 'none',
        padding: '10px 0 14px',
        borderBottom: on ? '2px solid #fff' : '2px solid transparent'
      }
    }, it.label);
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      maxHeight: openItem ? 320 : 0,
      overflow: 'hidden',
      transition: 'max-height .25s ease'
    }
  }, openItem && /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: `repeat(${Math.ceil(openItem.items.length / 2)},auto)`,
      gridAutoFlow: 'column',
      justifyContent: 'start',
      columnGap: 150,
      padding: '16px 0 40px'
    }
  }, openItem.items.map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    onClick: e => {
      e.preventDefault();
      go(openItem.label, s);
    },
    onMouseEnter: () => setHovS(s),
    onMouseLeave: () => setHovS(''),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15.5,
      color: hovS === s ? 'var(--powder-blue)' : '#fff',
      textDecoration: 'none',
      padding: '11px 0'
    }
  }, s))))));
}
Object.assign(__ds_scope, { SiteHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
const {
  useState
} = React;
function Tabs({
  items = [],
  active = 0,
  onChange,
  style
}) {
  const [hov, setHov] = useState(-1);
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border)',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, items.map((it, i) => {
    const sel = i === active;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      role: "tab",
      "aria-selected": sel,
      onClick: () => onChange && onChange(i),
      onMouseEnter: () => setHov(i),
      onMouseLeave: () => setHov(-1),
      style: {
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '10px 16px',
        fontFamily: 'inherit',
        fontSize: 15,
        fontWeight: sel ? 700 : 600,
        color: sel ? 'var(--royal-blue)' : hov === i ? 'var(--royal-blue)' : 'var(--slate)',
        borderBottom: sel ? '3px solid var(--azure)' : '3px solid transparent',
        marginBottom: -1,
        transition: 'color .15s ease'
      }
    }, it);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
const {
  useState
} = React;
function Card({
  eyebrow,
  title,
  media,
  footer,
  interactive = false,
  href,
  padding = 24,
  children,
  style
}) {
  const [hov, setHov] = useState(false);
  const Tag = href ? 'a' : 'div';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false),
    style: {
      display: 'block',
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      textDecoration: 'none',
      color: 'inherit',
      transition: 'box-shadow .2s ease, transform .2s ease',
      boxShadow: interactive && hov ? 'var(--shadow-md)' : 'none',
      transform: interactive && hov ? 'translateY(-2px)' : 'none',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, media, /*#__PURE__*/React.createElement("div", {
    style: {
      padding
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11.5,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--pewter)',
      marginBottom: 8
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--royal-blue)',
      lineHeight: 1.25,
      marginBottom: children ? 8 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15.5,
      lineHeight: 1.55,
      color: 'var(--charcoal)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16
    }
  }, footer)));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Dialog.jsx
try { (() => {
function Dialog({
  open,
  onClose,
  title,
  actions,
  width = 480,
  children
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      background: 'rgba(23,69,143,.45)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      background: '#fff',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-lg)',
      width,
      maxWidth: '100%',
      maxHeight: '90vh',
      overflow: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 16,
      padding: '20px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 20,
      fontWeight: 700,
      color: 'var(--royal-blue)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Close",
    size: "sm",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 24px 24px',
      fontFamily: 'var(--font-serif)',
      fontSize: 15.5,
      lineHeight: 1.55,
      color: 'var(--charcoal)'
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '0 24px 24px'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Toast.jsx
try { (() => {
const TONES = {
  info: 'var(--sky-blue)',
  success: 'var(--grass)',
  warning: 'var(--orange)',
  danger: 'var(--cardinal)'
};
function Toast({
  tone = 'info',
  title,
  fixed = false,
  onDismiss,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      background: '#fff',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-md)',
      padding: '14px 16px',
      maxWidth: 380,
      ...(fixed ? {
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 110
      } : {}),
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 4,
      alignSelf: 'stretch',
      borderRadius: 2,
      background: TONES[tone] || TONES.info,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5,
      fontWeight: 700,
      color: 'var(--charcoal)',
      marginBottom: children ? 3 : 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--pewter)',
      lineHeight: 1.45
    }
  }, children)), onDismiss && /*#__PURE__*/React.createElement("button", {
    onClick: onDismiss,
    "aria-label": "Dismiss",
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: 'var(--pewter)',
      padding: 2,
      lineHeight: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Toast.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  text,
  position = 'top',
  children
}) {
  const [show, setShow] = useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translate(-50%,-6px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translate(-50%,6px)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translate(6px,-50%)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translate(-6px,-50%)'
    }
  }[position];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      whiteSpace: 'nowrap',
      background: 'var(--charcoal)',
      color: '#fff',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      padding: '5px 10px',
      borderRadius: 'var(--radius-md)',
      zIndex: 120,
      pointerEvents: 'none',
      ...pos
    }
  }, text));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tooltip.jsx", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// ui_kits/club-website/HomeScreen.jsx
try { (() => {
function PhotoPh({
  label,
  height = 200,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      background: 'var(--powder-blue)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--slate)',
      textAlign: 'center',
      padding: 12,
      ...style
    }
  }, "photo placeholder \u2014 ", label);
}
function Section({
  tint = false,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: tint ? 'var(--surface-tint)' : '#fff',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '64px 24px'
    }
  }, children));
}
function HomeScreen({
  go
}) {
  const {
    Button,
    Card,
    Tag,
    Badge
  } = window.RotaryBaliDenpasarDesignSystem_7b6ed3;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--royal-blue)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '72px 24px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--powder-blue)',
      marginBottom: 16
    }
  }, "Rotary Club of Bali Denpasar \xB7 District 3420"), /*#__PURE__*/React.createElement("h1", {
    style: {
      color: '#fff',
      fontSize: 'clamp(34px,5vw,52px)',
      fontWeight: 800,
      lineHeight: 1.08,
      margin: '0 0 20px',
      letterSpacing: '-0.01em'
    }
  }, "Together, we ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--gold)'
    }
  }, "transform"), " Bali."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 19,
      lineHeight: 1.6,
      color: 'var(--powder-blue)',
      margin: '0 0 32px',
      maxWidth: '46ch'
    }
  }, "We are neighbors, leaders, and friends who see a world where people unite and take action to create lasting change in Denpasar and beyond."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 18,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('Join us')
  }, "Become a member"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('Projects');
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 16,
      color: '#fff'
    }
  }, "See our projects"))), /*#__PURE__*/React.createElement(PhotoPh, {
    label: "members in action, documentary style",
    height: 340,
    style: {
      borderRadius: 'var(--radius-lg)'
    }
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0
    }
  }, "What we do"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      go('Projects');
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15
    }
  }, "All projects")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    title: "Clean water for Sanur",
    media: /*#__PURE__*/React.createElement(PhotoPh, {
      label: "well construction",
      height: 160
    }),
    footer: /*#__PURE__*/React.createElement(Tag, {
      color: "turquoise"
    }, "Water and sanitation")
  }, "Two new wells now serve 400 families in coastal Sanur."), /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    title: "Books for Banjar schools",
    media: /*#__PURE__*/React.createElement(PhotoPh, {
      label: "reading session",
      height: 160
    }),
    footer: /*#__PURE__*/React.createElement(Tag, {
      color: "violet"
    }, "Basic education")
  }, "1,200 children's books donated across six primary schools."), /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    title: "Mangroves in Benoa Bay",
    media: /*#__PURE__*/React.createElement(PhotoPh, {
      label: "planting day",
      height: 160
    }),
    footer: /*#__PURE__*/React.createElement(Tag, {
      color: "grass"
    }, "Environment")
  }, "Members and Rotaract planted 2,400 seedlings this year."))), /*#__PURE__*/React.createElement(Section, {
    tint: true
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
      gap: 56,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", null, "Visit us this Thursday"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '52ch'
    }
  }, "Guests are always welcome at our weekly meeting. Come hear what we're working on, meet our members, and see if Rotary is for you."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15.5,
      color: 'var(--charcoal)',
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      margin: '20px 0 28px'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--royal-blue)'
    }
  }, "Thursdays, 18.30\u201320.00 WITA"), /*#__PURE__*/React.createElement("span", null, "Denpasar, Bali \u2014 venue shared on RSVP")), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go('Join us')
  }, "RSVP as a guest")), /*#__PURE__*/React.createElement(PhotoPh, {
    label: "weekly meeting",
    height: 280,
    style: {
      borderRadius: 'var(--radius-lg)'
    }
  }))), /*#__PURE__*/React.createElement(Section, null, /*#__PURE__*/React.createElement("h2", {
    style: {
      marginBottom: 28
    }
  }, "News from the club"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    eyebrow: "June 2026",
    title: "District grant approved for health screenings"
  }, "Free screenings for 300 elders across three banjars begin in August."), /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    eyebrow: "May 2026",
    title: "Rotaract Denpasar joins beach cleanup"
  }, "Sixty volunteers cleared 800 kg of plastic from Sanur beach."), /*#__PURE__*/React.createElement(Card, {
    interactive: true,
    eyebrow: "April 2026",
    title: "New members inducted",
    footer: /*#__PURE__*/React.createElement(Badge, {
      tone: "gold"
    }, "Welcome")
  }, "Four professionals joined our club this quarter."))));
}
Object.assign(window, {
  HomeScreen,
  PhotoPh,
  Section
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/club-website/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/club-website/JoinScreen.jsx
try { (() => {
function JoinScreen() {
  const {
    Button,
    Card,
    Input,
    Select,
    Checkbox,
    Dialog,
    Toast
  } = window.RotaryBaliDenpasarDesignSystem_7b6ed3;
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  const submit = () => {
    setSent(true);
  };
  const close = () => {
    setSent(false);
    setToast(true);
    setTimeout(() => setToast(false), 4000);
  };
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '56px 24px 72px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 12
    }
  }, "Join people of action"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '54ch'
    }
  }, "Membership is an invitation to do good, together. Our members are professionals and neighbors from across Denpasar who give a few hours a month to projects that last."), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '54ch'
    }
  }, "Fill in the form and our membership chair will invite you to a Thursday meeting as our guest \u2014 no commitment, just come see how we work."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 16,
      color: 'var(--slate)',
      borderLeft: '3px solid var(--gold)',
      paddingLeft: 16,
      marginTop: 28
    }
  }, "\"Service Above Self\"")), /*#__PURE__*/React.createElement(Card, {
    padding: 28,
    title: "Tell us about yourself"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(Input, {
    id: "jn",
    label: "Full name",
    placeholder: "Made Wirawan",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    id: "je",
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(Select, {
    id: "ji",
    label: "Area of interest",
    options: ['Clean water and sanitation', 'Basic education and literacy', 'Community health', 'Environment', 'Economic development']
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Send me the club newsletter",
    checked: true,
    onChange: () => {}
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: submit,
    style: {
      alignSelf: 'flex-start'
    }
  }, "Request an invitation"))))), /*#__PURE__*/React.createElement(Dialog, {
    open: sent,
    onClose: close,
    title: "Thank you!",
    actions: /*#__PURE__*/React.createElement(Button, {
      onClick: close
    }, "Done")
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0
    }
  }, name ? `${name}, w` : 'W', "e've received your request. Our membership chair will email you this week with an invitation to Thursday's meeting.")), toast && /*#__PURE__*/React.createElement(Toast, {
    fixed: true,
    tone: "success",
    title: "Request sent",
    onDismiss: () => setToast(false)
  }, "See you Thursday at 18.30."));
}
Object.assign(window, {
  JoinScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/club-website/JoinScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/club-website/ProjectsScreen.jsx
try { (() => {
function ProjectsScreen({
  go,
  initialTab = 0
}) {
  const {
    Button,
    Card,
    Tag,
    Badge,
    Tabs
  } = window.RotaryBaliDenpasarDesignSystem_7b6ed3;
  const [tab, setTab] = React.useState(initialTab);
  const upcoming = [{
    t: 'Elder health screenings',
    d: 'Free screenings for 300 elders across three banjars, with local clinics.',
    tag: ['sky-blue', 'Community health'],
    ph: 'clinic day'
  }, {
    t: 'School sanitation upgrade',
    d: 'New handwashing stations for two primary schools in East Denpasar.',
    tag: ['turquoise', 'Water and sanitation'],
    ph: 'school visit'
  }, {
    t: 'Vocational scholarships',
    d: 'Tuition support for ten hospitality students beginning this term.',
    tag: ['orange', 'Economic development'],
    ph: 'award ceremony'
  }];
  const past = [{
    t: 'Clean water for Sanur',
    d: 'Two wells serving 400 families, funded by a District 3420 grant.',
    tag: ['turquoise', 'Water and sanitation'],
    ph: 'well construction'
  }, {
    t: 'Books for Banjar schools',
    d: '1,200 children\u2019s books across six primary schools.',
    tag: ['violet', 'Basic education'],
    ph: 'reading session'
  }, {
    t: 'Mangroves in Benoa Bay',
    d: '2,400 seedlings planted with Rotaract Denpasar.',
    tag: ['grass', 'Environment'],
    ph: 'planting day'
  }];
  const list = tab === 0 ? upcoming : past;
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-tint)',
      borderBottom: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '48px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      marginBottom: 8
    }
  }, "Our service projects"), /*#__PURE__*/React.createElement("p", {
    style: {
      maxWidth: '60ch',
      marginBottom: 24
    }
  }, "Everything we do is hands-on and local, guided by Rotary's areas of focus. Here is what we're working on now and what your support has already built."), /*#__PURE__*/React.createElement(Tabs, {
    items: ['Upcoming', 'Completed'],
    active: tab,
    onChange: setTab,
    style: {
      borderBottom: 'none'
    }
  }))), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '40px 24px 64px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
      gap: 24
    }
  }, list.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.t,
    interactive: true,
    title: p.t,
    media: /*#__PURE__*/React.createElement(window.PhotoPh, {
      label: p.ph,
      height: 160
    }),
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        gap: 8,
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Tag, {
      color: p.tag[0]
    }, p.tag[1]), tab === 1 && /*#__PURE__*/React.createElement(Badge, {
      tone: "success"
    }, "Completed"))
  }, p.d)))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--royal-blue)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container)',
      margin: '0 auto',
      padding: '48px 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      marginBottom: 6
    }
  }, "Have a project idea?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      color: 'var(--powder-blue)',
      margin: 0
    }
  }, "Tell us where Denpasar needs people of action next.")), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: () => go('Join us')
  }, "Get in touch"))));
}
Object.assign(window, {
  ProjectsScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/club-website/ProjectsScreen.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

__ds_ns.SiteHeader = __ds_scope.SiteHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

})();
