# DS Interactive Website

Professional website for DS Interactive, showcasing premium mobile applications.

## Tech Stack
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion (Animations)
- next-themes (Dark/Light Mode)
- Static Export (`output: 'export'`)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment (Static Hosting)

This project is configured for a **static HTML export**. This means it can be deployed on any static hosting provider like Vercel, Netlify, GitHub Pages, or an AWS S3 bucket.

1. Build the project:
   ```bash
   npm run build
   ```
2. The static files will be generated in the `out` directory.
3. Upload the contents of the `out` directory to your hosting provider.

### Vercel / Netlify
If you are deploying on Vercel or Netlify, just link your Git repository and it will automatically detect Next.js and build it. Make sure the Build Command is `npm run build` and the Output Directory is `out`.

## Content Management
- **Apps Data**: Edit `data/apps.ts` to add or modify the apps displayed on the homepage and their details.
- **Privacy Policy**: Edit `app/privacy/page.tsx` to customize the generic privacy policy template.
- **Contact Details**: Update the `mailto` link and text in `app/contact/page.tsx` and `components/Footer.tsx`.
