You are building a single self-contained HTML landing page for Reignland Media — a commercial FPV drone media company based on the Sunshine Coast, Queensland.

## Brand identity
- Logo: assets/Google_AI_Studio_2025-11-19T09_47_52.323Z.png (neon emblem, pink→violet→cyan gradient on near-black #14151B)
- Brand text: "Reignland Media" in nav, "Media" has the gradient
- Use Space Grotesk font (Google Fonts, weights 600, 700) for headings. System-ui for body text.

## Key changes from previous version (DO NOT INCLUDE)
- NO "Vertical aerials for social" service at $80 — remove entirely
- Location wording: "Servicing From North Brisbane Suburbs, Sunshine Coast and Fraser Coast" — not the old wording

## Exact page structure (in this exact order)

### 1. Nav bar
- Logo image (assets/Google_AI_Studio_2025-11-19T09_47_52.323Z.png, height 32px) + "Reignland Media" text (nav bar, top-left)
- One CTA button: "Get a quote" linking to https://www.facebook.com/profile.php?id=100078208865922

### 2. Hero (full-viewport)
- Background image: assets/web_hero.jpg (darkly overlaid so text is readable)
- Kicker (small gradient text): "FPV drone tours · Sunshine Coast to Fraser Coast"
- Headline: "Your venue, from inside the action." (big, bold, white)
- Subheadline: "One-take FPV fly-throughs that make viewers feel like they're there. Commercial drone tours, aerials and vertical video — CASA-approved, fully insured." (muted colour)
- Two CTAs: "Message for a quote" (gradient button, primary) + "See our work" (ghost button, links to #portfolio)
- NO other nav links, NO competing options above the fold

### 3. Portfolio / Featured work section
- Heading: "Featured work"
- Grid of 4 video cards (equal width, 16:9 ratio):
  1. https://www.youtube.com/embed/8Pe-GUB29eQ — "Terella Brewing — FPV Venue Tour"
  2. https://www.youtube.com/embed/HK7Ze9S3kC4 — "138 Callistemon Court — Property Fly-through"
  3. https://www.youtube.com/embed/6D-DWX2U0mY — "Real Estate FPV Tours"
  4. https://www.youtube.com/embed/P2C3zVjFlac — "Developer Project — Mavic 3 Pro"
- Each card: iframe + title + short description below
- Subtle hover glow effect (violet)

### 4. Gallery section
- Heading: "Portfolio gallery"
- Grid of 8 images using these URLs (EXACTLY these, in this order):
  1. https://dronesforhire.com.au/assets/uploads/2025-4/5410-v924z1ofpt.jpg
  2. https://dronesforhire.com.au/assets/uploads/2024-5/5410-v2kgqk1pjh.jpg
  3. https://dronesforhire.com.au/assets/uploads/2023-0/5410-s7p4mol8xd.jpg
  4. https://dronesforhire.com.au/assets/uploads/2022-5/5410-lszldej2bm.jpg
  5. https://dronesforhire.com.au/assets/uploads/2022-4/5410-fv8zy5p5md.jpg
  6. https://dronesforhire.com.au/assets/uploads/2022-1/5410-qvyr9v6q3j.jpg
  7. https://dronesforhire.com.au/assets/uploads/2022-0/5410-zig7azm8av.jpg
  8. https://dronesforhire.com.au/assets/uploads/2022-4/5410-lj5m0389gv.jpg
- **CRITICAL: ALL images must be the SAME aspect ratio (4:3) with consistent gap sizing. The grid must look even and uniform — no uneven rows.**
- Each image is a clickable link to the full-res version
- Hover: slight scale-up + violet border glow

### 5. Trust / Licensing section
- Heading: "CASA-approved · Fully insured"
- Compact badge row: CASA ReOC operator | EVLOS-approved FPV | Public liability insured | SCC operating permit | Night ops approved
- A short framed block with two questions:
  "Do you hold a CASA EVLOS approval for commercial FPV?" — "We do."
  "Are you insured for commercial FPV work?" — "Yes."
  Closing line: "If the answer is vague, the risk is yours. Ours is covered."

### 6. Services section (EXACTLY 3 services, in this order)
1. **FPV drone tours** — From $495 — "One-take fly-throughs for venues, listings and events. Indoor and outdoor — planned around your space and your busiest hour."
2. **Standard aerials & 360°** — Quoted per job — "Photo and video for property listings, site progress, roof inspections and commercial projects — including 360° panoramas."
3. **Night operations** — Quoted per job — "ReOC-approved after-dark work — twilight listings, lit venues, events under lights. Non-standard ops available on application."
- NO vertical/social aerials service at $80 — do not include it

### 7. Stats + Testimonials section
- Stats row: 9 yrs | 300+ flight hours | 5.0★ client rating | 7NEWS credited footage
- EXACTLY 2 testimonials (in this order):
  1. "Extremely professional, high quality work outputs, reasonable cost, great response time and communication." — Olivia McCubbin, Niecon
  2. "Very professional and quick turnaround — will be sending more work in the future." — Michelle Jones, Professionals Newlands Real Estate

### 8. FAQ section (4 questions)
1. What areas do you cover? — "Servicing From North Brisbane Suburbs, Sunshine Coast and Fraser Coast. Extended-hours council permits across the Sunshine Coast region (4:30am–10pm)."
2. How much does an FPV tour cost? — "FPV venue tours start at $495. Standard aerials quoted per job. Every project priced with no surprises."
3. Are you insured and licensed? — "Yes. CASA ReOC holder, EVLOS-approved for commercial FPV, public liability insured. Both questions answered."
4. How fast can I get the footage? — "Most projects delivered within 24 hours. Rush turnaround available."

### 9. Footer
- Logo at larger size (assets/Google_AI_Studio_2025-11-19T09_47_52.323Z.png, height 64–80px) displayed prominently near the top of the footer, centred or left-aligned
- Heading below the logo: "Ready to see your place from inside the action?"
- Sub: "Message us with your venue or listing and we'll come back with a same-day quote."
- Three CTAs: "Message on Facebook" (gradient, primary), "Email us" (ghost), "Quote via DronesForHire" (ghost)
- Footer credentials line: CASA ReOC · EVLOS-approved FPV · Public liability insured · SCC permit (4:30am–10pm)

## Design rules (follow these exactly)
- Dark background (#0b0d12), gradient colours (pink #ff1493 → violet #8b5cf6 → cyan #22d3ee) used SPARINGLY — ONLY on CTA buttons, stat numbers, accent line, and the "Media" in the brand text. NOT on section headers or decorative elements.
- The portfolio imagery IS the visual interest — not CSS gradients or glowing borders
- Every section has a thin gradient accent line (48px wide) before the heading
- Mobile responsive — stack columns on small screens
- One primary CTA role per section (gradient button), any secondary options are ghost buttons
- Gallery grid: images MUST be uniform 4:3 aspect ratio, equal gap spacing, no uneven rows

## Output
Write the complete HTML file to /opt/data/reignland/landing/Reignland Media Landing v5.html
Use relative asset paths (assets/...) for local files and full URLs for external images/videos.