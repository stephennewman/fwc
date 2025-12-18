# Fahey's Window Cleaning - AI Onboarding Document

## Project Overview

**Business:** Fahey's Window Cleaning  
**Location:** Palm Harbor, FL (Pinellas County)  
**Services:** Residential and Commercial Window Cleaning  
**Website Type:** Public-facing marketing site with contact form

---

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 16.0.10 | React framework with App Router |
| React | 19.2.1 | UI library |
| TypeScript | ^5 | Type safety |
| Tailwind CSS | ^4 | Styling |
| lucide-react | latest | Icons |

---

## Project Structure

```
fwc/
├── app/
│   ├── components/
│   │   ├── Header.tsx      # Sticky nav with mobile menu
│   │   ├── Footer.tsx      # Contact info, service areas
│   │   ├── CTAButton.tsx   # Reusable CTA button
│   │   ├── ServiceCard.tsx # Service display cards
│   │   └── ContactForm.tsx # Contact form (placeholder)
│   ├── services/
│   │   └── page.tsx        # Services page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── contact/
│   │   └── page.tsx        # Contact page
│   ├── layout.tsx          # Root layout with SEO
│   ├── page.tsx            # Home page
│   ├── not-found.tsx       # 404 page
│   ├── sitemap.ts          # Auto-generated sitemap
│   ├── robots.ts           # Robots.txt config
│   └── globals.css         # Brand colors & styles
├── public/
│   └── images/             # Logo and images (to be added)
├── package.json
└── AI_Onboarding.md        # This file
```

---

## Brand Colors

```css
--primary: #1a5d1a;       /* Forest green (from clover logo) */
--primary-dark: #145214;
--secondary: #4aa8d8;     /* Sky blue (window panes) */
--accent: #d4a834;        /* Gold (brush bristles) */
```

---

## Service Areas

- Palm Harbor (HQ)
- Tarpon Springs
- Dunedin
- Clearwater
- Safety Harbor
- Oldsmar
- East Lake
- Trinity

---

## TODO Items (Owner Action Required)

### Critical - Before Launch

- [ ] **Phone Number:** Replace `(727) 555-0123` placeholder in:
  - `app/components/Header.tsx`
  - `app/components/Footer.tsx`
  - `app/components/CTAButton.tsx`
  - `app/contact/page.tsx`
  - `app/page.tsx`
  - `app/layout.tsx` (JSON-LD schema)

- [ ] **Email Address:** Update `info@faheywindowcleaning.com` in:
  - `app/components/Footer.tsx`
  - `app/contact/page.tsx`
  - `app/layout.tsx` (JSON-LD schema)

- [ ] **Logo Files:** Add to `/public/images/`:
  - `logo.png` - Full color, transparent background
  - `logo-white.png` - White version for footer
  - Update `Header.tsx` and `Footer.tsx` to use actual logos

- [ ] **Favicon:** Replace default with branded favicon

- [ ] **Domain:** Update `metadataBase` in `app/layout.tsx` with actual domain

### Before Go-Live

- [ ] **Contact Form:** Connect to email service (Formspree recommended)
  - Edit `app/components/ContactForm.tsx`
  - Add form submission endpoint

- [ ] **Photos:** Replace placeholder sections with actual photos:
  - Hero section background
  - Residential service photo
  - Commercial service photo
  - Team/owner photo
  - Service area map

- [ ] **Business Story:** Update `app/about/page.tsx` with real company story

- [ ] **Testimonials:** Replace placeholder testimonial with real customer reviews

### Post-Launch

- [ ] **Google Analytics:** Add tracking ID to layout
- [ ] **Google Search Console:** Add verification code
- [ ] **Google Business Profile:** Set up and link
- [ ] **Booking System:** Implement when ready (deferred)

---

## Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint check
npm run lint
```

---

## SEO Configuration

- **JSON-LD Schema:** LocalBusiness schema in `layout.tsx`
- **Sitemap:** Auto-generated via `sitemap.ts`
- **Robots.txt:** Configured via `robots.ts`
- **Meta Tags:** Per-page metadata with Open Graph

Target keywords:
- "window cleaning Palm Harbor FL"
- "residential window cleaning Pinellas County"
- "commercial window cleaning Tampa Bay area"

---

## Deployment Log

### December 18, 2025 - Theme Switcher with 6 Color Palettes
- Added client-facing theme preview system
- 6 distinct color palettes for customer selection:
  1. **Irish Green & Gold** - Original brand colors
  2. **Ocean Blue & Coral** - Florida waters feel
  3. **Coastal Teal & Pink** - Beachy, Miami vibes
  4. **Slate & Electric Blue** - Modern, corporate
  5. **Burgundy & Orange** - Warm sunset Florida
  6. **Chicago Bears** 🐻 - Navy & orange
- Theme switcher in footer for live preview
- CSS variables for dynamic theming
- Theme selection persists via localStorage

### December 18, 2025 - Initial Build
- Created complete 4-page website structure
- Implemented mobile-first responsive design
- Set up SEO with JSON-LD schema, sitemap, robots.txt
- Built reusable component library (Header, Footer, CTAButton, ServiceCard, ContactForm)
- Configured brand colors matching logo (green/blue/gold)
- Pages created: Home, Services, About, Contact, 404
- Contact form placeholder ready for email integration
- All placeholder content marked with TODO comments

---

## Known Limitations

1. **Contact form is non-functional** - Needs email service integration
2. **No real photos** - Using CSS gradient placeholders
3. **No analytics** - Tracking ID not yet provided
4. **No booking system** - Deferred for later implementation

---

## File Ownership

All TODO comments in code are marked for easy search:
```bash
grep -r "TODO:" app/
```


