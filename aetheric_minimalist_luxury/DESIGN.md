---
name: Aetheric Minimalist Luxury
colors:
  surface: '#131315'
  surface-dim: '#131315'
  surface-bright: '#39393b'
  surface-container-lowest: '#0e0e10'
  surface-container-low: '#1b1b1d'
  surface-container: '#1f1f21'
  surface-container-high: '#2a2a2c'
  surface-container-highest: '#353437'
  on-surface: '#e4e2e4'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e4e2e4'
  inverse-on-surface: '#303032'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c8c6c5'
  on-secondary: '#313030'
  secondary-container: '#4a4949'
  on-secondary-container: '#bab8b7'
  tertiary: '#ffffff'
  on-tertiary: '#2f3034'
  tertiary-container: '#e3e2e7'
  on-tertiary-container: '#636469'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#e3e2e7'
  tertiary-fixed-dim: '#c6c6cb'
  on-tertiary-fixed: '#1a1b1f'
  on-tertiary-fixed-variant: '#46464b'
  background: '#131315'
  on-background: '#e4e2e4'
  surface-variant: '#353437'
typography:
  display-xl:
    fontFamily: Inter
    fontSize: 72px
    fontWeight: '600'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.03em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '500'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '500'
    lineHeight: 38px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: 0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 24px
---

## Brand & Style

The design system is engineered for a future where technology is felt rather than seen. It targets an affluent, tech-literate audience that values discreet intelligence and high-end craftsmanship. The emotional response is one of **calm authority, precision, and effortless sophistication.**

The visual style is a fusion of **High-End Minimalism** and **Refined Glassmorphism**. It prioritizes extreme clarity, using "void-like" blacks and "ethereal" whites to create a sense of infinite space. Elements appear as if machined from solid blocks or suspended in a vacuum, utilizing light and shadow to define form rather than lines. The aesthetic is inspired by the precision of luxury timepieces and the immersive simplicity of premium wearable interfaces.

## Colors

The palette is strictly monochromatic to emphasize form and material quality. 

- **Primary (White):** Used for critical data, primary actions, and high-contrast typography. It represents the "light" of intelligence.
- **Secondary (Deep Black/Charcoal):** The foundation of the UI. Backgrounds use a true black (#000000) to blend with OLED displays and premium hardware finishes.
- **Silver-Gray:** Used for secondary information and subtle borders that mimic brushed aluminum or titanium.
- **Glass Effects:** Surfaces utilize a 15% opacity white overlay with a high-intensity backdrop blur (40px) to create the signature glassmorphic depth.

## Typography

This design system utilizes **Inter** for its systematic precision and neutral elegance. 

- **Hierarchy:** Dramatic scale differences between display heads and body text create an editorial feel.
- **Tracking:** Generous tracking (+0.1em) is applied to uppercase labels to evoke luxury branding.
- **Weights:** Use "Medium" for most headers to maintain a sophisticated profile; reserve "SemiBold" for primary actions only.
- **Micro-copy:** Small labels should remain legible with increased letter spacing to prevent "bleeding" on illuminated wearable displays.

## Layout & Spacing

The layout philosophy follows a **Fluid-Fixed hybrid**. While the grid stretches, content is often centered in "islands" of whitespace to draw focus to the hardware or specific biometric data points.

- **The 8px Rule:** All spacing and sizing must be multiples of 8px.
- **Negative Space:** Use "excessive" margins (64px+) between major sections to prevent visual clutter, reflecting a premium, unhurried brand experience.
- **Reflow:** On mobile, high-impact imagery (smart glasses/rings) should take up the top 50% of the viewport, with data cards sliding up from the bottom.

## Elevation & Depth

Hierarchy is established through **Luminous Depth** rather than traditional drop shadows.

- **The Z-Axis:** Lower levels are pure black. Higher levels (cards) use the semi-transparent glassmorphic finish.
- **Lighting Effects:** Instead of black shadows, use "Rim Lights"—a subtle 1px inner stroke of 20% white on the top and left edges to simulate light catching the edge of a glass surface.
- **Backdrop Blur:** A minimum of 32px-40px blur is required for all elevated surfaces to maintain legibility over complex background gradients or product photography.

## Shapes

The shape language is organic yet disciplined. 

- **Primary Radius:** A consistent 16px-20px radius is used for all containers and cards to echo the ergonomic curves of smart rings and eyewear.
- **Interactive Elements:** Buttons utilize a fully pill-shaped (rounded-full) geometry to provide a friendly, tactile contrast to the more structured layout.
- **Continuity:** Ensure "squircle" mathematics are applied where possible for smoother transitions between straight lines and curves.

## Components

- **Buttons:** Primary buttons are solid white with black text. Secondary buttons are "Ghost" style with a 1px silver-gray border. Hover states should feature a subtle outer glow (0px 0px 15px rgba(255,255,255,0.3)).
- **Glass Cards:** Used for grouping data. These feature the 40px backdrop blur, a 15% white fill, and a 1px "Rim Light" stroke.
- **Biometric Lists:** High-contrast typography with icon glyphs rendered in thin weights (1px stroke). Use ample vertical padding (24px) between list items.
- **Status Chips:** Small, pill-shaped elements with a subtle pulse animation for "Live" connectivity states.
- **Input Fields:** Minimalist underlines or glassmorphic boxes. Focus states are indicated by the underline thickening from 1px to 2px in pure white.
- **Visualizers:** Use thin-line charts and soft-glow circular progress rings to represent health metrics (Ring data) or battery life (Glasses data).