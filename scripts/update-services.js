/* Update services.html with Leadstack Marketing service content */
const fs = require("fs");

const servicesData = [
  {
    id: "lead-generation",
    icon: "flaticon-settings-1",
    title: "Lead Generation",
    desc: "Turn traffic into predictable leads. We design systems that capture, qualify, and deliver leads on autopilot.",
    cta: "Get Free Growth Plan",
    img: "inner-service-1.jpg",
    alt: "Lead Generation Services"
  },
  {
    id: "gbp-optimization",
    icon: "flaticon-seo",
    title: "Google Business Profile Optimization",
    desc: "Dominate local search & Maps. We optimize your GBP to make you the #1 choice.",
    cta: "Boost My Profile",
    img: "inner-service-2.jpg",
    alt: "Google Business Profile Optimization"
  },
  {
    id: "seo",
    icon: "flaticon-content-marketing",
    title: "Search Engine Optimization (SEO)",
    desc: "Rank higher. Stay there. On-page precision, technical health, and content that converts.",
    cta: "Get SEO Audit",
    img: "inner-service-3.jpg",
    alt: "SEO Services"
  },
  {
    id: "aeo",
    icon: "flaticon-ai",
    title: "Answer Engine Optimization (AEO)",
    desc: "Get found in AI answers. AEO ensures your business becomes the answer in voice & AI results.",
    cta: "Add AEO Strategy",
    img: "inner-service-1.jpg",
    alt: "Answer Engine Optimization (AEO)"
  },
  {
    id: "website-design",
    icon: "flaticon-coding",
    title: "Website Design",
    desc: "Websites built to convert, not just impress. Clean, fast, responsive builds engineered for SEO and lead flow.",
    cta: "Design My Website",
    img: "inner-service-5.jpg",
    alt: "Website Design Services"
  },
  {
    id: "landing-pages",
    icon: "flaticon-web-design",
    title: "Landing Page Design",
    desc: "High-converting pages for every campaign. Turn ad clicks into calls with clear messaging and frictionless UX.",
    cta: "Build My Landing Page",
    img: "inner-service-6.jpg",
    alt: "Landing Page Design"
  },
  {
    id: "email-marketing",
    icon: "flaticon-email-1",
    title: "Email Marketing",
    desc: "Turn subscribers into lifetime customers. Automated journeys that nurture, convert, and retain.",
    cta: "Start My Email Campaign",
    img: "inner-service-4.jpg",
    alt: "Email Marketing Services"
  },
  {
    id: "content-marketing",
    icon: "flaticon-content-marketing",
    title: "Content Marketing",
    desc: "Content that builds trust and traffic. Strategy → production → distribution. Authority you can measure.",
    cta: "Plan My Content",
    img: "inner-service-2.jpg",
    alt: "Content Marketing Services"
  },
  {
    id: "backlinks",
    icon: "flaticon-link",
    title: "Backlinks",
    desc: "Build authority the right way. Quality, relevance, relationships—not spam. Links that earn trust.",
    cta: "Grow My Authority",
    img: "inner-service-3.jpg",
    alt: "Backlink Building Services"
  },
  {
    id: "digital-real-estate",
    icon: "flaticon-building",
    title: "Digital Real Estate",
    desc: "Own the space before your competitors do. We build and rank niche local sites that route leads to you.",
    cta: "Explore Digital Real Estate",
    img: "inner-service-5.jpg",
    alt: "Digital Real Estate"
  }
];

const generateServiceHTML = (service) => `                    <!-- ${service.title} -->
                    <div class="col wow animate__fadeInUp" id="${service.id}">
                        <div class="ul-inner-service">
                            <div class="ul-inner-service-txt">
                                <div class="ul-inner-service-icon">
                                    <i class="${service.icon}"></i>
                                </div>
                                <div class="ul-inner-service-content">
                                    <h3 class="ul-inner-service-title"><a href="service-details.html">${service.title}</a></h3>
                                    <p class="ul-inner-service-descr">${service.desc}</p>
                                    <a href="contact.html" class="ul-inner-service-link">${service.cta} <i class="flaticon-next-1"></i></a>
                                </div>
                            </div>

                            <div class="ul-inner-service-img">
                                <img src="assets/img/${service.img}" alt="${service.alt}" class="">
                            </div>
                        </div>
                    </div>`;

const file = "services.html";
let html = fs.readFileSync(file, "utf8");

// Find the services section and replace it
const servicesHTML = servicesData.map(generateServiceHTML).join('\n\n');
const servicesSection = `                <div class="row row-cols-md-3 row-cols-2 row-cols-xxs-1 ul-bs-row">
${servicesHTML}
                </div>`;

// Replace the row containing services
const rowPattern = /<div class="row row-cols-md-3 row-cols-2 row-cols-xxs-1 ul-bs-row">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>\s*<!-- SERVICES SECTION END -->/;
const replacement = servicesSection + `
            </div>
        </section>
        <!-- SERVICES SECTION END -->`;

html = html.replace(rowPattern, replacement);

fs.writeFileSync(file, html, "utf8");
console.log("[update-services] Services updated successfully with 10 Leadstack services");
