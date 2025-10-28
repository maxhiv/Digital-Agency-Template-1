# Overview

Leadstack Marketing is a conversion-focused digital marketing agency website specializing in lead generation, SEO/AEO, and growth strategies. The project is a fully customized multi-page HTML website featuring modern design, responsive layouts, structured data (JSON-LD) for AEO, and conversion-optimized components. The project aims to provide a robust online presence for Leadstack Marketing, focusing on Gulf Coast businesses and nationwide reach.

**Brand:** Leadstack Marketing
**Tagline:** "Stack your leads. Simplify your growth."
**Services:** Lead Generation, Google Business Profile Optimization, SEO, Answer Engine Optimization (AEO), Website Design, Landing Pages, Email Marketing, Content Marketing, Backlinks, Digital Real Estate, Google Ad Management, Meta Ad Management.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The project utilizes a traditional static website architecture with vanilla HTML, CSS, and JavaScript. It features a multi-page layout, component-based CSS for modularity, and integrates the Bootstrap 5.2.3 framework for responsive design. Custom JavaScript modules handle interactive UI elements like tabs, accordions, progress bars, and carousels.

## Asset Organization
Assets are organized into `assets/css/` for custom styles, `assets/js/` for modular JavaScript, `assets/vendor/` for third-party libraries, `assets/icon/` for custom icon fonts and Flaticon, and `assets/img/` for static images.

## Development Server
A Python-based development server (`server.py`) provides local hosting with HTTP server capabilities, cache control, cross-origin support, and runs on port 5000 for Replit environment compatibility.

## UI Framework Integration
The template incorporates Bootstrap 5.2.3 as the primary CSS framework. Animation is handled by WOW.js and Animate.css. Slider functionalities are powered by Splide.js and Swiper.js. Other interactive elements utilize custom JavaScript, Flatpickr for date picking, and Slim Select for enhanced dropdowns.

## Design and Features
The website features a comprehensive rebranding to Leadstack Marketing, including a new color scheme, updated logos, and authentic content replacing all placeholders. Key features include:
- **Structured Data:** Extensive JSON-LD schemas (Organization, LocalBusiness, WebSite, BreadcrumbList, FAQPage) for AEO.
- **SEO/AEO Optimization:** Optimized page titles, meta descriptions, `robots.txt`, and a user-friendly `sitemap.html`.
- **Performance Optimization:** Significant image compression for faster page loads.
- **Responsive Design:** Consistent responsive behavior across all pages and components.
- **Dynamic Content:** Service sliders, client testimonials, and a dedicated FAQ page with detailed Q&A.
- **Branding Automation:** `brand.config.json` and `scripts/update-brand.js` for centralized brand management and automated updates.

# External Dependencies

## CSS Frameworks and Libraries
- **Bootstrap 5.2.3**: Responsive framework.
- **Animate.css 4.1.1**: CSS animation library.
- **Custom icon fonts**: Flaticon integration.

## JavaScript Libraries
- **WOW.js 1.3.0**: Scroll-triggered animations.
- **Splide.js 4.1.2**: Slider/carousel library.
- **Swiper.js 11.1.14**: Advanced slider library.
- **Flatpickr 4.6.13**: Date picker.
- **Slim Select**: Enhanced dropdowns.
- **noUiSlider**: Range slider.
- **FSLightbox**: Lightbox for media.
- **MixItUp 3.3.1**: Filtering and sorting.
- **ScrollSpy**: Navigation highlighting.
- **SplitType 0.3.4**: Text animation.

## Development Tools
- **Python HTTP Server**: For local development and deployment.

## Font Integration
- **Google Fonts**: Poppins, Inter, Kumbh Sans, Plus Jakarta Sans.
- **Custom icon fonts**: Multiple Flaticon packages.