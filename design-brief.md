You are building a single self-contained HTML landing page for Reignland Media — a commercial FPV drone media company based on the Sunshine Coast, Queensland.

## Brand identity (from the actual logo)
- Near-black background (#14151B)
- Gradient brand colours: hot pink → violet → bright cyan (horizontal gradient)
- Logo: "REIGNLAND" in uppercase bold geometric sans-serif on a dark cloud-contoured horizontal banner, with a 3D pinwheel/ribbon icon behind it (cyan ribbons vertically, magenta-purple horizontally) with neon glow
- Use the logo PNG from the assets folder

## What the page must include (in order)
1. **Nav bar** — logo (use assets/Google_AI_Studio_2025-11-19T09_47_52.323Z.png), text "Reignland Media", CTA "Get a quote" linking to Facebook
2. **Full-viewport hero** — background image assets/web_hero.jpg (darkly overlaid so text pops) — headline "Your venue, from inside the action." — subtitle about FPV tours, CTA buttons
3. **Featured work** — 4-video YouTube grid (embed these video IDs: 8Pe-GUB29eQ, HK7Ze9S3kC4, q60_UR-__EE, P2C3zVjFlac)
4. **Portfolio gallery** — 11 images from dronesforhire.com.au CDN (list below)
5. **Licensing section** — badges showing CASA ReOC, EVLOS-approved, insured; the two buyer-protection questions
6. **Services** — FPV tours from $495, vertical aerials from $80, standard aerials & 360°, night ops (prices as listed)
7. **Stats + testimonials** — 9 years, 300+ hours, 5.0★, 7NEWS credited; 4 real testimonials
8. **Region** — North Brisbane to Bundaberg, service tags
9. **Footer hero** — background image assets/web_yeppoonfav.jpg + CTA buttons (Facebook, email admin_derrick@proton.me, DronesForHire link)

## Assets
- Logo: assets/Google_AI_Studio_2025-11-19T09_47_52.323Z.png
- Hero BG: assets/web_hero.jpg
- Footer BG: assets/web_yeppoonfav.jpg
- Gallery images (use full URLs): https://dronesforhire.com.au/assets/uploads/2025-4/5410-v924z1ofpt.jpg, https://dronesforhire.com.au/assets/uploads/2024-5/5410-v2kgqk1pjh.jpg, https://dronesforhire.com.au/assets/uploads/2023-0/5410-s7p4mol8xd.jpg, https://dronesforhire.com.au/assets/uploads/2023-0/5410-fmwt3hr41r.jpg, https://dronesforhire.com.au/assets/uploads/2022-5/5410-lszldej2bm.jpg, https://dronesforhire.com.au/assets/uploads/2022-4/5410-fv8zy5p5md.jpg, https://dronesforhire.com.au/assets/uploads/2022-4/5410-lj5m0389gv.jpg, https://dronesforhire.com.au/assets/uploads/2022-1/5410-qvyr9v6q3j.jpg, https://dronesforhire.com.au/assets/uploads/2022-0/5410-zig7azm8av.jpg, https://dronesforhire.com.au/assets/uploads/2022-0/5410-wyalw9j6yr.jpg, https://dronesforhire.com.au/assets/uploads/2022-0/5410-oi51h4hmt5.jpg

## Design directives
- Match the logo's neon palette: hot pink (#ff1493 range), vivid violet (#8b5cf6), cyan (#22d3ee) on near-black backgrounds
- Use the logo PNG in the nav at appropriate size
- Font: a bold geometric sans-serif matching the logo's feel — use Google Fonts "Space Grotesk" (weights 500, 700) for headings and clean system-ui for body
- The page should feel premium, dark and cinematic with neon-tinged accents — not generic SaaS style
- Use subtle glowing borders/hover effects where tasteful, staying true to the neon/ribbon aesthetic
- Mobile responsive, zero console errors, no external dependencies besides Google Fonts CDN and the YouTube iframes

## Output
Write the complete HTML file to /opt/data/reignland/landing/Reignland Media Landing v3.html

## Content copy to use
- Kicker: "FPV drone tours · North Brisbane to Bundaberg"
- Hero headline: "Your venue, from inside the action."
- Hero subtitle: "One-take FPV fly-throughs that make viewers feel like they're there. Commercial drone tours, aerials and vertical video — CASA-approved, fully insured."
- FPV explainer (if used): describe FPV vs standard drone — the difference is FPV flies through the space at eye level, not around it from above
- Licensing: "Before you book an FPV operator, ask two questions" — (1) Do you hold a CASA EVLOS approval?, (2) Are you insured for commercial FPV? — "If the answer is vague, the risk is yours"
- Testimonials verbatim:
  - "Extremely professional, high quality work outputs, reasonable cost, great response time and communication." — Olivia McCubbin, Niecon
  - "Very professional and quick turnaround — will be sending more work in the future." — Michelle Jones, Professionals Newlands
  - "Stoked with the professionalism, local area knowledge and quality of work… delivered in less than 24 hours." — Reyne, private client
  - "Work ethic and prices are fantastic — you'd be missing an opportunity." — Brett Marks, repeat client
- CTA: Message on Facebook, Email us (admin_derrick@proton.me), Quotes via DronesForHire (https://dronesforhire.com.au/drone-operator/5410/reignscott%20drone%20imagery)
- Footer credentials: CASA ReOC · EVLOS-approved FPV · Public liability insured · SCC permit (4:30am–10pm)

The page will be previewed locally (file:// protocol), so use relative asset paths (assets/...) and avoid absolute paths. Gallery images can use the full DFH URLs.