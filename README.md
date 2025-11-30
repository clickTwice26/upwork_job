# SkyeEd Landing Page

A pixel-perfect Next.js implementation of the SkyeEd landing page hero section based on Figma design.

## Features

- 🎨 Pixel-perfect match to Figma design
- ⚡ Built with Next.js 14 and TypeScript
- 🎭 Tailwind CSS for styling
- 📱 Fully responsive design
- ♿ Accessible components
- 🚀 Optimized for performance

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

### Build

```bash
npm run build
npm start
```

## Design Specifications

### Colors
- Primary Blue: `#1565D8`
- Accent Orange: `#FF8C42`
- Neutral grays for text and backgrounds

### Typography
- Font: Inter
- Hero title: 64px, Bold
- Section headers: 42-44px, Bold
- Body text: 15-17px, Regular/Medium

### Components
- Navigation bar with dropdown menus
- Hero section with dual CTAs
- Statistics cards showcase
- Learning mode selector
- Feature cards with icons

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   └── HeroSection.tsx  # Main hero component
└── public/              # Static assets
```

## Customization

### Update Colors
Edit `tailwind.config.ts` to modify the color palette.

### Replace Images
Update the background image URL in `HeroSection.tsx` or add images to `/public` folder.

### Modify Content
Edit text content directly in `components/HeroSection.tsx`.

## Performance

- Optimized images with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Fast page loads with SSR and static generation

## License

MIT
