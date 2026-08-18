# Rotary Club of Bali Denpasar — Design System

Official design system for the Rotary Club of Bali Denpasar, a chartered club of Rotary International (District 3420, Indonesia). It strictly follows Rotary International's global brand guidelines: the club may not invent its own identity — it applies Rotary's Masterbrand system with its club lockup.

**Sources provided**
- Club logo: `uploads/Rotary Logo_EN21_DynamicSize_FontUpdate.png` (Masterbrand Signature + "Club of Bali Denpasar" lockup) — cropped variants in `assets/`.
- Brand specs pasted by the club: full color palette (PMS/CMYK/hex), typography, photography, and voice guidance.
- Reference: Rotary Brand Center — https://brandcenter.rotary.org/en-us/our-brand/promote-rotary/websites (website guidance: show your work, keep it simple, clear calls to action, use official colors).

## CONTENT FUNDAMENTALS

**Voice attributes:** persevering, inspiring, compassionate, smart. The voice is clear, persuasive, and reliable — personal and sincere. Never boastful, never bureaucratic.

**How copy is written**
- First person plural: "we," "our members," "our community." Address the reader as "you" and invite them in ("Join us Thursday").
- Active, concrete verbs. Rotary people are "people of action": copy leads with what members *do* — build, fund, vaccinate, mentor, plant.
- The People of Action campaign formula: "Together, We ___" (Transform / Inspire / Connect / End Polio). The verb gets the emphasis (gold or bold).
- Sentence case everywhere: headlines, nav labels, buttons ("Become a member", not "BECOME A MEMBER"). Uppercase only for small overline labels.
- Short sentences, scannable structure, bullet points. Plain language over jargon; facts and specifics over superlatives ("2,400 trees planted in Sanur" beats "amazing impact").
- No emoji. No exclamation-point pileups.
- Official motto: "Service Above Self". Vision statement: "Together, we see a world where people unite and take action to create lasting change — across the globe, in our communities, and in ourselves."
- Example headline: "Together, we **transform** Bali." Example body: "Every Thursday, members from across Denpasar meet to plan projects that bring clean water, literacy, and health care to our neighbors."

## VISUAL FOUNDATIONS

**Color.** White pages with generous whitespace. Royal Blue `#17458f` is the anchor: headings, nav text, dark bands/footer. Gold `#f7a81b` is reserved for emphasis — the wheel, CTAs, highlighted words — never as a background wash. Azure `#0067c8` is the interactive color (links, focus). Secondary brights (Sky Blue, Cranberry, Cardinal, Turquoise, Orange, Violet, Grass) appear in small doses: cause tags, data, program identities (Cardinal = End Polio Now, Cranberry = Rotaract, Sky Blue = Interact). Pastels (Powder Blue, Lavender, Taupe, Moss) are tint surfaces; `--surface-tint #eef5fa` (Powder Blue tint) is the standard alternating section band. Max 1–2 background colors per artifact. Never place white text on Gold — use Royal Blue on Gold.

**Type.** Open Sans (free stand-in for Frutiger; Arial fallback) for headlines, nav, buttons, labels — bold (700) or heavy (800) headlines, tight leading. Georgia (free stand-in for Sentinel) for body text, secondary headlines, captions — 17px/1.6. The sans/serif contrast is the brand's editorial signature.

**Spacing & layout.** 4px scale (`--space-1..9`). 1140px container. Uncluttered, grid-driven; sections separated by whitespace or a tint band, not rules. Navy (Royal Blue) two-tier header: logo top-left, pill CTAs (Azure solid + Powder Blue tint) and a search circle top-right, bold white nav row below with a white active underline and a full-width sub-nav that expands on hover; below 820px it collapses to a hamburger opening a full-screen navy drawer with accordion sub-navs.

**Imagery.** Documentary photography — unposed members in action, relationships, community impact. Warm, natural color; no filters, no stock-posed shots. Full-bleed heroes with a Royal Blue protection gradient (left-to-right `rgba(23,69,143,.85) → transparent`) under white text. No photos were provided: UI kit uses labeled placeholder blocks — supply real club photos.

**Shape & depth.** Corners nearly square: 2px buttons/inputs/tags, 8px cards. Borders `--silver`; blue-tinted shadows (`--shadow-sm/md/lg`) used sparingly — cards sit flat with a 1px border until hovered. No gradients except photo protection. No blur/glass effects.

**Motion & states.** Restrained: 150–200ms ease transitions on color/shadow only. Hover: links shift Azure→Royal Blue; gold buttons darken slightly (`#e89a0c`); cards lift to `--shadow-md`. Press: darken one step further, no shrink. Focus: 2px Azure outline, offset 2px.

## ICONOGRAPHY

- **Logo** (in `assets/`): `logo.png` (full color — white/light backgrounds only), `logo-reverse.png` (white wordmark + gold wheel — the navy header), `logo-white.png` (all-white — footer, photos), `logo-azure.png` (one-color). All derived from the provided artwork; never redraw, recolor beyond these official variants, distort, or separate the wheel from the wordmark. Give it clear space ≈ height of the "R".
- **Icon system:** Rotary's official materials use simple 2px-stroke line icons; the official Areas of Focus icons were not provided (downloadable from Brand Center). **Substitution:** [Lucide](https://lucide.dev) from CDN matches the stroke style — use `stroke: currentColor`, 1.75–2px weight, sized 20/24px. Flagged: replace with official icon downloads when available.
- No emoji, no unicode-as-icons. The gold wheel is NOT a decorative element — it only appears inside the logo lockup.

## Index

- `styles.css` → imports `tokens/` (fonts, colors, typography, spacing, base element styles)
- `assets/` — logo variants (see ICONOGRAPHY)
- `guidelines/` — specimen cards shown in the Design System tab
- `components/core/` — Button, IconButton, Badge, Tag
- `components/forms/` — Input, Select, Checkbox, Radio, Switch
- `components/surfaces/` — Card, Dialog, Toast, Tooltip
- `components/navigation/` — Tabs, SiteHeader, SiteFooter
- `ui_kits/club-website/` — Home, Projects, Join screens (interactive index.html)
- `SKILL.md` — agent skill entry point

**Intentional additions:** SiteHeader/SiteFooter (every club page needs the mandated logo placement in header + footer per Brand Center website guidance). No component source existed, so the standard set above was authored from brand foundations.

**Caveats:** Frutiger and Sentinel are licensed and not included — Open Sans and Georgia are the brand's own free alternatives. Official Areas of Focus icons and club photography not provided.
