# Tula's International School (TIS) — Homepage Redesign

A modern, animated, responsive homepage concept for the Tula's International School frontend developer assessment.

## What is included

- React + Vite single-page application
- Responsive layout for mobile, tablet and desktop
- Custom mouse cursor on fine-pointer devices
- Scroll-triggered reveal animations using the browser Intersection Observer API
- Animated light/dark theme switcher with localStorage persistence
- Scroll progress indicator
- Semantic sections: header, hero, about, academics, campus life, admissions, testimonials and footer
- Accessible buttons, navigation labels and reduced-motion support
- No unnecessary UI libraries or animation dependencies

The assessment brief asks for a modern TIS homepage, retention of the school's core branding/copy, smooth animations, responsive design and at least two standout features. This implementation includes all four listed standout features. The brief also states that the final submission should be a public GitHub repository and deployed URL. 

## Tech stack

- React 18
- Vite 6
- CSS
- Browser Intersection Observer API
- No Framer Motion dependency — animations are implemented with lightweight CSS + native browser APIs.

## Requirements

Install Node.js 18+ (Node.js 20+ recommended).

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite, normally:

```text
http://localhost:5173
```

## Production build

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploy to Vercel

1. Create a GitHub repository.
2. Upload this project folder to the repository.
3. Go to Vercel and import the GitHub repository.
4. Vercel should detect Vite automatically.
5. Build command: `npm run build`
6. Output directory: `dist`
7. Deploy.

## Important before submission

Replace or review the external image URLs in the React components if the assessment expects locally hosted school assets. The current concept uses the official Tula's logo and one official student asset from the public TIS website, while the remaining visual treatment is CSS-generated.

Also review all copy against the live TIS site immediately before submitting because the live school website can change after this assessment project was created.

## Project structure

```text
src/
├── components/
│   ├── AcademicsSection.jsx
│   ├── AdmissionsSection.jsx
│   ├── CampusSection.jsx
│   ├── CustomCursor.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Icons.jsx
│   ├── IntroSection.jsx
│   ├── Reveal.jsx
│   ├── ScrollProgress.jsx
│   └── TestimonialSection.jsx
├── data/
│   └── siteData.js
├── hooks/
│   ├── useScrollProgress.js
│   └── useTheme.js
├── App.jsx
├── main.jsx
└── styles.css
```

## Standout features

### 1. Custom cursor

`CustomCursor.jsx` tracks pointer movement and enlarges when the pointer is over links/buttons. It is disabled for touch devices using `(pointer: coarse)`.

### 2. Scroll-triggered reveals

`Reveal.jsx` uses `IntersectionObserver` and CSS transitions. Each element animates once when it enters the viewport.

### 3. Theme switcher

`useTheme.js` stores `light` or `dark` in localStorage and sets `data-theme` on the root document.

### 4. Scroll progress

`useScrollProgress.js` calculates scroll depth and `ScrollProgress.jsx` scales the fixed progress bar from left to right.

## Assessment talking points

If you are asked to explain the code, be ready to describe:

- Why components are split by page section instead of putting everything in `App.jsx`.
- Why `IntersectionObserver` is used instead of listening to every scroll event for reveal animations.
- Why the custom cursor is disabled for touch devices.
- Why theme state is stored in localStorage.
- How CSS variables make theme switching simple.
- How responsive CSS changes the grid and navigation at 900px and 600px.
- Why `prefers-reduced-motion` is respected.

## Source/reference

The project was created from the supplied Frontend Developer Task Brief and the public Tula's International School website. The brief specifies React/Next/Vue, CSS/Tailwind/Styled Components, Framer Motion/GSAP/CSS animations, responsive UX, and at least two standout features.
