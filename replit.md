# Overview

This is a static website template called "Digitics" - a creative digital agency and tech firm template. The project is a multi-page HTML website featuring modern design elements, responsive layouts, and interactive components. It includes various pages such as home, about, services, projects, blog, team, contact, FAQ, and pricing sections. The template is designed for digital agencies, tech companies, or creative firms looking for a professional web presence.

## Project Status
✅ **SETUP COMPLETE** - The project has been successfully configured for the Replit environment and is ready for use.

### Latest Changes (October 10, 2025)
- **Section Removal**: Removed "Why Choose Us" section from homepage
  - Deleted the entire section including "Seeing The Full potential of Your Brand" heading
  - Removed Quality Result, Best Team Members, and High Success Rate features
- **AI Technology Image**: Replaced placeholder image with AI/technology themed photo
  - Updated `functions-ss.png` with artificial intelligence and business technology image
  - Note: This image was previously used in deleted Home 2 page
- **Homepage Cleanup**: Removed Home 2 and Home 3 pages completely
  - Deleted `index-2.html` and `index-3.html` files
  - Simplified navigation by replacing Home dropdown menu with direct link to Home page
  - Updated all page headers to reflect the simplified navigation structure
- **Background Restoration**: Reverted the "Why Choose Us" section background (`why-choose-us-bg.jpg`) to its original image
  - Restored from git history to replace the stock image that was previously applied
- **Stock Image Replacement**: Replaced all placeholder images throughout the website with contextually appropriate professional stock photography
  - 42 JPG images replaced: blog posts, user profiles, services, case studies, process workflows, backgrounds
  - 10+ PNG images replaced: banner images, app screenshots, user avatars for alternate layouts
  - All images matched to their contextual headers (e.g., Digital Marketing → business meeting, SEO Analytics → dashboard, etc.)
- Server socket reuse enabled (`allow_reuse_address = True`) to prevent port conflicts on restart
- Verified all images loading successfully (HTTP 200 status) via server logs and screenshots

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