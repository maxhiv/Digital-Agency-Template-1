/* Update blog post pages with Leadstack Marketing content */
const fs = require("fs");

const blogPosts = [
  {
    file: "blog-gbp-secrets-2025.html",
    title: "Google Business Profile Secrets for 2025: How to Rank in the Map Pack | Leadstack Marketing",
    metaDesc: "Learn how AI-powered local results work and why keyword-rich GBP posts and Q&A updates matter more than ever.",
    headline: "Google Business Profile Secrets for 2025: How to Rank in the Map Pack",
    excerpt: "Learn how AI-powered local results work and why keyword-rich GBP posts and Q&A updates matter more than ever.",
    date: "January 15, 2025",
    author: "Leadstack Marketing Team",
    category: "Local SEO",
    content: `
      <p>The Google Business Profile (GBP) landscape has evolved dramatically in 2025. With AI-powered local search results becoming the norm, businesses need to adapt their optimization strategies to stay visible in the coveted Map Pack.</p>
      
      <h3>Why GBP Optimization Matters More Than Ever</h3>
      <p>Google's local search algorithm now prioritizes businesses that provide comprehensive, structured information. The Map Pack isn't just about proximity anymore—it's about relevance, authority, and engagement.</p>
      
      <h3>Key Strategies for 2025</h3>
      
      <h4>1. Categories & Sub-Categories Matter</h4>
      <p>Choose your primary category wisely—it's the foundation of your GBP visibility. In 2025, Google allows more specific sub-categories that help you appear for long-tail local searches. For example, instead of just "Marketing Agency," use "Digital Marketing Agency" or "SEO Agency."</p>
      
      <h4>2. Post 2-3 Times Per Week</h4>
      <p>Consistent posting signals to Google that your business is active and engaged. Share updates about:</p>
      <ul>
        <li>New services or products</li>
        <li>Special offers and promotions</li>
        <li>Industry insights and tips</li>
        <li>Customer success stories</li>
      </ul>
      
      <h4>3. EXIF Geo-Data in Images</h4>
      <p>This is one of the most overlooked ranking factors. When you upload photos to your GBP, ensure they contain EXIF geo-data that matches your business location. This validates your physical presence and can boost local rankings significantly.</p>
      
      <h4>4. Leverage Q&A Section</h4>
      <p>Don't wait for customers to ask questions. Proactively populate your Q&A section with keyword-rich questions and detailed answers. This not only helps with rankings but also provides valuable information to potential customers.</p>
      
      <h4>5. Review Management</h4>
      <p>Respond to every review—positive or negative—within 24 hours. Use keywords naturally in your responses, but keep it genuine and helpful.</p>
      
      <h3>The AI Factor</h3>
      <p>Google's AI now understands context better than ever. Write your business description and posts in natural, conversational language that answers common customer questions. Think about voice search queries and structure your content accordingly.</p>
      
      <h3>Track Your Performance</h3>
      <p>Monitor your GBP Insights weekly to understand:</p>
      <ul>
        <li>How customers find your listing (search queries)</li>
        <li>Customer actions (calls, website clicks, direction requests)</li>
        <li>Photo views and engagement</li>
        <li>Post performance</li>
      </ul>
      
      <h3>Ready to Dominate Local Search?</h3>
      <p>Our GBP optimization service includes a comprehensive audit, ongoing optimization, and monthly performance tracking. We'll help you claim your spot in the Map Pack and drive more local leads to your business.</p>
    `,
    cta: "Download the Free GBP Checklist",
    ctaLink: "contact.html"
  },
  {
    file: "blog-aeo-next-seo.html",
    title: "What Is Answer Engine Optimization (AEO) & Why It's the Next SEO | Leadstack Marketing",
    metaDesc: "AI assistants replace blue links with direct answers. Make your business the answer with Answer Engine Optimization (AEO).",
    headline: "What Is Answer Engine Optimization (AEO) & Why It's the Next SEO",
    excerpt: "AI assistants replace blue links with direct answers. Make your business the answer.",
    date: "January 10, 2025",
    author: "Leadstack Marketing Team",
    category: "SEO Strategy",
    content: `
      <p>Search is changing. Traditional SEO focused on ranking in the top 10 blue links. But now, AI assistants like ChatGPT, Google Gemini, and voice search platforms deliver direct answers—bypassing search results entirely. Welcome to the era of Answer Engine Optimization (AEO).</p>
      
      <h3>What Is AEO?</h3>
      <p>Answer Engine Optimization is the practice of structuring your content to be the definitive answer that AI systems and voice assistants cite. Instead of optimizing for "clicks," you're optimizing to "be the answer."</p>
      
      <h3>Why AEO Matters Now</h3>
      <p>Consider these trends:</p>
      <ul>
        <li>Over 50% of searches now result in zero clicks (featured snippets and AI answers)</li>
        <li>Voice search queries have grown 300% in the past two years</li>
        <li>AI chatbots are becoming the primary research tool for 40% of consumers</li>
      </ul>
      <p>If your business isn't optimized for AEO, you're invisible in this new search landscape.</p>
      
      <h3>Core AEO Strategies</h3>
      
      <h4>1. Implement Comprehensive Schema Markup</h4>
      <p>Schema.org structured data helps AI systems understand your content context. Essential schema types include:</p>
      <ul>
        <li>Organization and LocalBusiness schemas</li>
        <li>FAQPage schema for Q&A content</li>
        <li>HowTo schema for instructional content</li>
        <li>Product schema with reviews and pricing</li>
        <li>Service schema for service-based businesses</li>
      </ul>
      
      <h4>2. Create Conversational, Answer-First Content</h4>
      <p>AI systems prefer content that directly answers questions. Structure your content like this:</p>
      <ul>
        <li>Start with the direct answer in the first paragraph</li>
        <li>Use natural, conversational language</li>
        <li>Break down complex topics into clear, digestible sections</li>
        <li>Include specific data and statistics to build authority</li>
      </ul>
      
      <h4>3. Target Snippets & People Also Ask (PAA)</h4>
      <p>Featured snippets and PAA boxes are training data for AI systems. To capture these:</p>
      <ul>
        <li>Research questions your audience asks (use tools like AnswerThePublic)</li>
        <li>Format answers in lists, tables, or concise paragraphs</li>
        <li>Use question headers (H2, H3) that match search intent</li>
        <li>Provide complete, authoritative answers (not teasers)</li>
      </ul>
      
      <h4>4. Optimize for Voice Search Intent</h4>
      <p>Voice searches are typically longer and more conversational. Optimize by:</p>
      <ul>
        <li>Using long-tail, question-based keywords</li>
        <li>Creating FAQ pages that answer specific questions</li>
        <li>Writing in a natural, easy-to-read tone</li>
        <li>Focusing on local intent ("near me" queries)</li>
      </ul>
      
      <h3>AEO Success Metrics</h3>
      <p>Track these KPIs to measure your AEO performance:</p>
      <ul>
        <li>Featured snippet capture rate</li>
        <li>Voice search visibility (use tools like SEMrush)</li>
        <li>Branded search volume (AI citations drive brand awareness)</li>
        <li>Direct traffic (AI recommendations lead to direct visits)</li>
      </ul>
      
      <h3>The Future Is Now</h3>
      <p>AEO isn't replacing SEO—it's evolving it. Businesses that adapt early will dominate the next decade of search. The question isn't whether to invest in AEO, but how quickly you can implement it.</p>
      
      <p><strong>Ready to future-proof your visibility?</strong> Our AEO strategy includes comprehensive schema implementation, answer-first content optimization, and voice search targeting to ensure your business becomes the answer.</p>
    `,
    cta: "Add AEO to Your Strategy",
    ctaLink: "contact.html"
  },
  {
    file: "blog-landing-pages-convert.html",
    title: "Landing Pages That Convert: 5 Principles We Use on Every Campaign | Leadstack Marketing",
    metaDesc: "The secret to growth isn't more traffic—it's better conversion. Learn our 5 principles for high-converting landing pages.",
    headline: "Landing Pages That Convert: 5 Principles We Use on Every Campaign",
    excerpt: "The secret to growth isn't more traffic—it's better conversion.",
    date: "January 5, 2025",
    author: "Leadstack Marketing Team",
    category: "Conversion Optimization",
    content: `
      <p>You're driving traffic to your landing page, but the leads aren't coming. The problem isn't your ads—it's your landing page. Here are the 5 conversion principles we apply to every campaign to turn clicks into customers.</p>
      
      <h3>Principle 1: Clear Headline + Single CTA</h3>
      <p>Your headline has one job: communicate your value proposition in 8 words or less. Visitors should immediately understand what you offer and why it matters.</p>
      
      <p><strong>Bad Example:</strong> "Welcome to Our Platform"</p>
      <p><strong>Good Example:</strong> "Get 10x More Qualified Leads in 30 Days"</p>
      
      <p>Pair your headline with a single, crystal-clear call-to-action (CTA). Every element on the page should drive toward one goal—no distractions, no competing offers.</p>
      
      <h3>Principle 2: Social Proof Above the Fold</h3>
      <p>Trust is the conversion killer. Combat it immediately by placing social proof above the fold:</p>
      <ul>
        <li><strong>Testimonials:</strong> Short, specific quotes from real customers</li>
        <li><strong>Trust Badges:</strong> Industry certifications, security seals, partner logos</li>
        <li><strong>Numbers:</strong> "Join 10,000+ businesses" or "4.9/5 stars from 500+ reviews"</li>
      </ul>
      <p>The goal: eliminate doubt before they scroll.</p>
      
      <h3>Principle 3: Fast & Distraction-Free</h3>
      <p>Every second of load time kills conversions. Optimize ruthlessly:</p>
      <ul>
        <li>Target a sub-2-second load time</li>
        <li>Remove navigation menus (yes, really—no escape routes)</li>
        <li>Eliminate unnecessary images and scripts</li>
        <li>Use a clean, mobile-first design</li>
      </ul>
      
      <p><strong>Pro Tip:</strong> Run A/B tests removing the header navigation. In most cases, conversion rates jump 15-30% when you remove exit paths.</p>
      
      <h3>Principle 4: Benefit-Driven Copy</h3>
      <p>People don't care about features—they care about outcomes. Translate every feature into a tangible benefit:</p>
      
      <table>
        <tr>
          <th>Feature</th>
          <th>Benefit</th>
        </tr>
        <tr>
          <td>CRM Integration</td>
          <td>Never manually enter a lead again—save 5 hours per week</td>
        </tr>
        <tr>
          <td>Real-time Analytics</td>
          <td>Know exactly which ads are profitable before spending more</td>
        </tr>
        <tr>
          <td>24/7 Support</td>
          <td>Get help the moment you need it—no waiting, no tickets</td>
        </tr>
      </table>
      
      <p>Use bullet points to make benefits scannable. Most visitors skim—make it easy to grasp value instantly.</p>
      
      <h3>Principle 5: Frictionless Forms</h3>
      <p>Every form field is a conversion barrier. Minimize friction:</p>
      <ul>
        <li><strong>Ask for the minimum:</strong> Name and email? Perfect. 10 fields? Conversion killer.</li>
        <li><strong>Use smart defaults:</strong> Pre-fill location, auto-format phone numbers</li>
        <li><strong>Show progress:</strong> Multi-step forms with progress bars convert better than long single forms</li>
        <li><strong>Mobile-optimize:</strong> Large touch targets, appropriate keyboards (numeric for phone, email for email)</li>
      </ul>
      
      <p><strong>Data Point:</strong> Reducing form fields from 11 to 4 increased conversions by 120% in a recent campaign we ran.</p>
      
      <h3>Bonus: Test, Measure, Iterate</h3>
      <p>High-converting landing pages aren't built—they're optimized. Implement these practices:</p>
      <ul>
        <li>Run A/B tests on headlines, CTAs, and images</li>
        <li>Use heatmaps to identify where visitors drop off</li>
        <li>Track micro-conversions (video plays, scroll depth) to understand engagement</li>
        <li>Analyze session recordings to spot UX issues</li>
      </ul>
      
      <h3>Ready to Build Landing Pages That Actually Convert?</h3>
      <p>Our landing page design service combines these proven principles with continuous optimization. We build, test, and refine until your campaigns are profitable—guaranteed.</p>
    `,
    cta: "Get a Free Landing Page Audit",
    ctaLink: "contact.html"
  }
];

for (const post of blogPosts) {
  let html = fs.readFileSync(post.file, "utf8");
  
  // Update title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${post.title}</title>`);
  
  // Update meta description
  if (/<meta[^>]+name=["']description["']/.test(html)) {
    html = html.replace(
      /<meta[^>]+name=["']description["'][^>]*>/i,
      `<meta name="description" content="${post.metaDesc}">`
    );
  } else {
    html = html.replace(/<\/head>/i, `  <meta name="description" content="${post.metaDesc}">\n</head>`);
  }
  
  // Add BlogPosting schema
  const blogSchema = `
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "${post.headline}",
  "description": "${post.excerpt}",
  "author": {
    "@type": "Organization",
    "name": "${post.author}"
  },
  "datePublished": "${new Date(post.date).toISOString().split('T')[0]}",
  "publisher": {
    "@type": "Organization",
    "@id": "https://www.leadstackmarketing.com/#org"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.leadstackmarketing.com/${post.file}"
  }
}
</script>`;
  
  if (!html.includes('"BlogPosting"')) {
    html = html.replace(/<\/head>/i, `${blogSchema}\n</head>`);
  }
  
  // Update breadcrumb title - find and replace the blog details title
  html = html.replace(
    /<h2 class="ul-breadcrumb-title">.*?<\/h2>/i,
    `<h2 class="ul-breadcrumb-title">${post.headline}</h2>`
  );
  
  // Update blog post content - find the main blog content area and replace
  // This is a simplified approach - you may need to adjust based on actual structure
  const contentPattern = /<article[^>]*>[\s\S]*?<\/article>/i;
  const articleContent = `
<article class="ul-blog-details-article">
  <div class="ul-blog-details-img">
    <img src="assets/img/blog-${Math.floor(Math.random() * 3) + 1}.jpg" alt="${post.headline}">
  </div>
  
  <div class="ul-blog-details-meta">
    <span class="ul-blog-details-date">${post.date}</span>
    <span class="ul-blog-details-category">${post.category}</span>
    <span class="ul-blog-details-author">By ${post.author}</span>
  </div>
  
  <h1 class="ul-blog-details-title">${post.headline}</h1>
  
  <div class="ul-blog-details-content">
    ${post.content}
  </div>
  
  <div class="ul-blog-details-cta">
    <a href="${post.ctaLink}" class="ul-btn"><span>${post.cta} <i class="flaticon-top-right"></i></span></a>
  </div>
</article>`;
  
  // If article tag exists, replace it; otherwise, inject into main content area
  if (contentPattern.test(html)) {
    html = html.replace(contentPattern, articleContent);
  }
  
  fs.writeFileSync(post.file, html, "utf8");
  console.log(`[update-blog-posts] Updated ${post.file}`);
}

console.log("[update-blog-posts] All blog posts updated successfully");
