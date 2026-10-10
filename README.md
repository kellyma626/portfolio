# kelly ma portfolio

Next.js + React + TypeScript build of the "kelly" Figma design.

## Run it in VS Code

1. Open this folder in VS Code (File > Open Folder).
2. Open the terminal (Ctrl + ` or Cmd + `).
3. Run:

```bash
npm install
npm run dev
```

4. Go to http://localhost:3000

## Add your 3 images

Export these from Figma as PNG (select the layer, then Export in the right panel) and save them in `public/images/` with these exact names:

| Figma layer | File name |
| --- | --- |
| Photo on 9-12-26 at 11.56 AM #2 1 | `kelly.png` |
| GitHub | `github.png` |
| Medium Monogram | `medium.png` |

## Edit content

All text and links are in `lib/data.ts`. Fill in the `#` placeholders with your real GitHub, Medium, LinkedIn, resume and project links. To add a project preview image, put it in `public/images/` and set `image: "/images/your-file.png"` on that project.

## Where things are

- `app/layout.tsx` fonts (DM Sans + Instrument Serif) and page shell
- `app/globals.css` Tailwind setup, site colors (`text-ink`, `text-muted`, `bg-cream`, `border-line`, `text-accent`, `bg-pill`) and fonts (`font-sans`, `font-serif`)
- `components/` one file per section (Header, Hero, About, WorkSection, Blog, Contact), styled with Tailwind classes
