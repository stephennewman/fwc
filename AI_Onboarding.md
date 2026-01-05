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

### January 5, 2026 - Real Logos & Favicon
- Added **real logo** to header (full logo on desktop, shamrock icon on mobile)
- Added **shamrock icon** to footer
- Added **favicon** using shamrock icon (`app/icon.png`)
- Added **Apple touch icon** for iOS home screen (`app/apple-icon.png`)
- Logo files: `faheyswc_logo.png` (full), `faheywc_icon.png` (icon)

### January 5, 2026 - QR Code & Google Search Console
- Created `/qr` redirect page (hidden from Google) for print materials
- Generated QR code image at `/images/qr-code.png`
- Fixed domain URLs throughout (changed from faheywindowcleaning.com to faheyswc.com)
- Updated sitemap.xml, robots.txt, and JSON-LD schema with correct domain

### January 5, 2026 - Contact Form Email Integration (Resend)
- Integrated **Resend** email service for contact form
- **Two emails sent on form submission:**
  1. Internal notification to `faheyswc@gmail.com` with full customer details
  2. Confirmation email to customer thanking them for their inquiry
- Created `/api/contact` API route for form processing
- Removed Web3Forms dependency in favor of Resend
- Emails include branded HTML templates with:
  - Business green color scheme
  - Quick action links (call/email)
  - Mobile-friendly design
- Added `RESEND_API_KEY` environment variable requirement

### December 18, 2025 - Layout 3 Mobile Hero Fix
- Fixed text overflow on Layout 3 (Bold & Dynamic) mobile hero
- Reduced text sizes: `text-xl` for TRANSFORMED on mobile (was too wide)
- Added `tracking-tighter` for tighter letter spacing on mobile
- All hero text now fits within mobile viewport without cutoff

### December 18, 2025 - Sticky CTA, Before/After, Scroll-to-Top UX
- Added **sticky mobile CTA** - floating "Call for Free Quote" button on mobile (appears after 300px scroll)
- Added **Before/After sections** across all 4 layouts:
  - Layout 1: Interactive drag slider
  - Layout 2: Side-by-side comparison
  - Layout 3: Cards grid gallery
  - Layout 4: Interactive drag slider
- **Scroll-to-top** on layout/color switch for better UX
- Total combinations: **24** (4 layouts × 6 color palettes)

### December 18, 2025 - 4 Homepage Layouts + Value Template
- Added **Layout 4: Value & Emotion** - comprehensive conversion-focused template
  - What We Do (4 service cards)
  - How We Do It (4-step process)
  - Why It Matters (problems with $ costs)
  - Beyond Clean (emotional benefits)
  - Testimonials section
  - Pricing packages (Starter $149, Essential $249, Premium $399)
- **Layout 1**: Original (DM Sans font)
- **Layout 2**: Clean & Simple (Inter font) - minimalist homeowner focus
- **Layout 3**: Bold & Dynamic (Syne font) - animated, 2025 design principles
- All layouts share same theme/color switcher

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

## Environment Variables

The following environment variables must be set in Vercel (or `.env.local` for development):

| Variable | Description | Required |
|----------|-------------|----------|
| `RESEND_API_KEY` | Resend API key from https://resend.com/api-keys | Yes |
| `RESEND_FROM_EMAIL` | Verified sender email (default: `onboarding@resend.dev` for testing) | Optional |

### Resend Setup Instructions

1. **Create account** at https://resend.com
2. **Get API key** from https://resend.com/api-keys
3. **Add to Vercel**: Project Settings → Environment Variables → Add `RESEND_API_KEY`
4. **Verify domain** (optional but recommended): Add `faheyswc.com` to Resend for branded emails

**Note:** Until domain is verified, emails will be sent from `onboarding@resend.dev` (test mode).

---

## Known Limitations

1. **No real photos** - Using CSS gradient placeholders
2. **No analytics** - Tracking ID not yet provided
3. **No booking system** - Deferred for later implementation

---

## File Ownership

All TODO comments in code are marked for easy search:
```bash
grep -r "TODO:" app/
```


