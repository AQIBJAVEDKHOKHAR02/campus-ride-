# CampusRide – Campus Sustainable Bike/Scooter Share (HCI Lab 07)

Figma-to-website conversion for PUCIT HCI Lab 07.

- Figma file: https://www.figma.com/design/EIZwxxN5j06hqeB2gU5PKi (Desktop 1440, Tablet 768, Mobile 375 + Components)
- Stack: semantic HTML5 + Tailwind CSS (CDN, config mirrors Figma variables) + a little vanilla JS
- MCP config: `.vscode/mcp.json` (remote Figma MCP server, `https://mcp.figma.com/mcp`)

## Figma → code mapping
| Figma | Web |
|---|---|
| Navbar / HeroSection / StationsSection / ReservationSection / Footer | `<header><nav>` / `<section>` / `<section>` / `<section>` + `<form>` / `<footer>` |
| Auto Layout (Fill / Hug) | flex + grid, `w-full`, no `position: absolute` |
| Variables (`color/*`, `space/*`, `radius/*`) | `tailwind.config` colors, spacing, radii |
| PrimaryButton / SecondaryButton (Default, Hover, Focus) | `.btn-primary` / `.btn-secondary` with `hover:` and `focus-visible:` |
| FeatureCard | station `<article>` with `role="progressbar"` battery bar |
| FormField | `<label for>` + `<input>` / `<select>` / `<textarea>` |

Breakpoints (mobile-first): base = 375, `md` = 768 (2-column cards), `lg` = 1024+ (4-column cards, full nav).

## Run
Static site: open `index.html` or run `npx serve .`.
