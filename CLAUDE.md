# Expansion Healthcare Partners — Project Instructions for Claude

## Client
- **Company:** Expansion Healthcare Partners (EHP)
- **Owner:** Pavlina (iga242006@gmail.com)
- **Key contact:** Mark Rowlands, Managing Principal, ACHE® Fellow
- **Formerly known as:** Freeman Heyne Healthcare Consulting (FHHC)
- **Location:** 121 Monument Circle, Suite 526, Indianapolis, IN 46204
- **Phone:** 317.275.1176
- **Fax:** 317.458.1970
- **Email:** markr@expansionhp.com
- **LinkedIn:** linkedin.com/company/freeman-heyne-healthcare-consulting

## Brand

### Colors
- Primary blue: `#2B7BB9`
- Primary pink/magenta: `#D6215E`
- Dark text: `#1A1A2E`
- Background: `#F7F8FA`
- White: `#FFFFFF`

### Typography
- Headings: Playfair Display (serif) — bold and elegant
- Body: Inter (sans-serif) — clean and readable

### Logo
- SVG starburst/compass mark with alternating blue (#2B7BB9) and pink (#D6215E) pointed petals radiating from center
- "Expansion" in bold Playfair Display beneath the mark
- "Healthcare Partners" in light Inter beneath that

### Tone
- Professional, warm, relationship-focused
- NOT clinical or cold
- Think McKinsey or premium consulting — not a generic medical site

## Technical Stack
- Pure HTML, CSS, JavaScript — no frameworks
- Single shared `styles.css` across all pages
- Single shared `main.js` across all pages
- Mobile-first responsive design
- All pages: sticky nav, consistent footer, JSON-LD LocalBusiness schema, meta title + description

## Pages
- `index.html` — Home
- `about.html` — Who We Are
- `services.html` — What We Offer
- `contact.html` — Contact

## Rules & Preferences

### Always do these
- Make the address **clickable** and link to Google Maps: `https://maps.google.com/?q=121+Monument+Circle+Suite+526+Indianapolis+IN+46204`
- Use `markr@expansionhp.com` as Mark's email everywhere
- Footer on every page must include: logo, address (clickable), phone, LinkedIn, © 2026 Expansion Healthcare Partners
- JSON-LD LocalBusiness schema on every page
- Unique `<title>` and `<meta name="description">` on every page
- Hamburger menu on mobile
- Smooth scroll behavior
- Active nav state on current page

### Never do these
- No decorative dashes or `<hr>` dividers between sections
- No em-dashes (—) used as decorative separators in pull quotes or citations
- No frameworks (no React, Vue, Tailwind, Bootstrap, etc.)
- Do not use `markr@teamfhhc.com` — that is the old email

### Images
- Mark Rowlands headshot: `images/mark-rowlands.jpg` (portrait, smiling, gray blazer, glasses, brick background)
- Service illustrations are SVG files in `images/` folder
- If external images can't be fetched, create custom SVG illustrations instead

## Git
- Development branch: `claude/expansion-healthcare-website-6fav8h`
- Remote: `iga242006-cloud/Expansion-Healthcare-Partners`
- Always push to the development branch, never to main without permission
