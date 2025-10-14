# Overview

**Leadstack Marketing** is a conversion-focused digital marketing agency website specializing in lead generation, SEO/AEO, and growth strategies. The project is a fully customized multi-page HTML website featuring modern design elements, responsive layouts, structured data (JSON-LD) for AEO, and conversion-optimized components.

**Brand:**
- Name: Leadstack Marketing  
- Tagline: "Stack your leads. Simplify your growth."
- Location: Fairhope, Alabama (Gulf Coast + nationwide)
- Contact: (251) 555-0199 | hello@leadstackmarketing.com

**Services:** Lead Generation, Google Business Profile Optimization, SEO, Answer Engine Optimization (AEO), Website Design, Landing Pages, Email Marketing, Content Marketing, Backlinks, Digital Real Estate, Google Ad Management, Meta Ad Management

## Project Status
✅ **SETUP COMPLETE** - The project has been successfully configured for the Replit environment and is ready for use.

### Latest Changes (October 14, 2025)
- **SERVICE EXPANSION & IMAGE UPDATES (Today)**
  - Added Google Ad Management service with Google logo image
  - Added Meta Ad Management service with Meta logo image
  - Updated 6 service images for better visual representation:
    - Lead Generation: funnel/conversion concept
    - SEO: scrabble tiles spelling 'SEO'
    - Backlinks: network connection visual
    - Digital Real Estate: for sale sign
    - Google Ads: Google logo
    - Meta Ads: Meta logo
  - Total services expanded from 10 to 12
  - Updated brand.config.json and sitemap.html

- **COMPLETE REBRAND TO LEADSTACK MARKETING**
  - Rebranded entire site from Digitics template to Leadstack Marketing
  - Brand identity: "Stack your leads. Simplify your growth."
  - New color scheme: Primary #2563EB, Secondary #7C3AED, Accent #10B981
  - Contact: (251) 555-0199, hello@leadstackmarketing.com, Fairhope, AL
  
- **Brand Infrastructure & Automation**
  - Created `brand.config.json` - centralized brand configuration
  - Built `scripts/update-brand.js` - automated rebranding script (updated 18 HTML + 4 CSS files)
  - Built `scripts/jsonld-lint.js` - JSON-LD validator and deduper
  - Built `scripts/postbuild.sh` - post-build validation script
  - Created brand assets: `leadstack-logo.svg`, `leadstack-logo-white.svg`, `favicon.png`
  
- **Structured Data & SEO**
  - Added comprehensive JSON-LD schemas (Organization, LocalBusiness, WebSite, BreadcrumbList)
  - Updated all page titles and meta descriptions for SEO/AEO optimization
  - Created `robots.txt` with proper disallow rules
  - Created `sitemap.html` for user-friendly navigation
  - Added Google Fonts (Poppins for headings, Inter for body)
  
- **Previous Changes (October 10, 2025)**
  - Section Removal: Removed "Why Choose Us" section from homepage
  - Homepage Cleanup: Removed Home 2 and Home 3 pages completely
  - Background Restoration: Reverted section background to original
  - Stock Image Replacement: Replaced placeholder images with professional photography

### Previous Changes (September 24, 2025)
- Reorganized project structure with proper `assets/` directory containing CSS, JS, images, icons, and vendor libraries
- Configured Python-based HTTP server for serving static files with cache control headers
- Set up workflow to serve the website on port 5000 with proper host configuration for Replit proxy
- Tested all pages and confirmed assets are loading correctly
- Configured deployment settings for production with autoscale target

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The project follows a traditional static website architecture built with vanilla HTML, CSS, and JavaScript. The main structure consists of:

- **Multi-page layout**: Individual HTML files for different sections (index.html, about.html, services.html, etc.)
- **Component-based CSS**: Modular stylesheet organization with separate files for different UI components
- **Responsive design**: Bootstrap 5.2.3 framework integration for mobile-first responsive layouts
- **Interactive elements**: Custom JavaScript modules for tabs, accordions, progress bars, carousels, and other UI interactions

## Asset Organization
The assets are systematically organized into logical directories:

- **CSS**: Custom styles in `assets/css/` with component-specific organization
- **JavaScript**: Modular JS files in `assets/js/` for specific functionality (tabs, accordions, sliders, etc.)
- **Vendor libraries**: Third-party dependencies housed in `assets/vendor/`
- **Icons**: Custom icon fonts and Flaticon integration in `assets/icon/`
- **Images**: Static assets in `assets/img/` (referenced but not visible in current structure)

## Development Server
A Python-based development server (`server.py`) provides local hosting capabilities with:

- **HTTP server**: Simple HTTP server using Python's built-in modules
- **Cache control**: Custom headers to prevent caching issues during development
- **Cross-origin support**: Configured for Replit environment compatibility
- **Port configuration**: Runs on port 5000 with external access support

## UI Framework Integration
The template leverages multiple frontend libraries and frameworks:

- **Bootstrap 5.2.3**: Primary CSS framework for layout and components
- **Animation libraries**: WOW.js and Animate.css for scroll-triggered animations
- **Slider components**: Splide.js and Swiper.js for carousel functionality
- **Interactive elements**: Custom JavaScript for tabs, accordions, and progress bars
- **Form enhancements**: Flatpickr for date picking and Slim Select for enhanced dropdowns

## Documentation System
A separate documentation system exists in the `documentation/` directory with:

- **Self-contained structure**: Independent HTML documentation with its own asset organization
- **Bootstrap 4.x framework**: Different Bootstrap version for documentation styling
- **Navigation system**: Sidebar navigation with progress tracking and scroll spy functionality
- **Responsive documentation**: Mobile-friendly documentation layout

# External Dependencies

## CSS Frameworks and Libraries
- **Bootstrap 5.2.3**: Primary responsive framework and component library
- **Animate.css 4.1.1**: CSS animation library for entrance and scroll effects
- **Custom icon fonts**: Flaticon integration for scalable vector icons

## JavaScript Libraries
- **WOW.js 1.3.0**: Scroll-triggered animation library working with Animate.css
- **Splide.js 4.1.2**: Modern slider/carousel library with touch support
- **Swiper.js 11.1.14**: Advanced slider library with extensive customization options
- **Flatpickr 4.6.13**: Lightweight date picker library
- **Slim Select**: Enhanced select dropdown component
- **noUiSlider**: Range slider component for forms
- **FSLightbox**: Lightbox library for image and video overlays
- **MixItUp 3.3.1**: Filtering and sorting library for portfolio/gallery sections

## Development Tools
- **Python HTTP Server**: Built-in server for local development and deployment
- **ScrollSpy**: Navigation highlighting based on scroll position
- **SplitType 0.3.4**: Text animation library for character/word level effects

## Font Integration
- **Google Fonts**: Kumbh Sans and Plus Jakarta Sans font families
- **Custom icon fonts**: Multiple Flaticon font packages for interface icons

The template is designed to be deployment-ready for static hosting platforms while maintaining compatibility with local development environments through the included Python server.