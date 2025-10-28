#!/usr/bin/env python3
"""Replace all placeholder text with Leadstack Marketing content"""

import re
import glob

# Define replacements
replacements = {
    # Review section placeholder intro
    "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point of using lorem the is Ipsum less normal distribution of letters.": "Real results from real Gulf Coast businesses. See how Leadstack Marketing has helped local companies generate more leads, dominate local search, and grow their revenue.",
    
    # Review placeholder text
    "Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo": "Our results speak for themselves - more calls, better leads, and measurable ROI for Gulf Coast businesses.",
    
    # Footer About placeholder
    "It is a long established fact that a reader will be distracted the road readable content of a page when looking at layout.": "Leadstack Marketing drives real results for Gulf Coast businesses through Google Business Profile optimization, SEO/AEO, and conversion-focused strategies. We stack your leads and simplify your growth.",
    
    # Generic reviewer names
    ("Kathryn Murphy", "Medical Assistant"): [
        ("Sarah Johnson", "Coastal Realty Group"),
        ("Dr. Michael Chen", "Mobile Dental Care"),
        ("Tom Martinez", "Gulf Marine Services")
    ]
}

# Specific review testimonials
review_testimonials = [
    "Leadstack optimized our Google Business Profile and we jumped to #2 in the Map Pack within 6 weeks. Our phone is ringing off the hook with qualified leads. Best ROI we've ever seen from marketing.",
    "Our GBP views increased 3.2x after Leadstack's AEO optimization. We've gone from struggling to fill appointments to having a waitlist. Their Gulf Coast local expertise made all the difference.",
    "We're completely booked out thanks to Leadstack's local SEO strategy. Their landing pages convert like crazy and the lead quality is outstanding. Finally found a marketing team that actually delivers results."
]

# Update homepage reviews
def replace_in_file(filepath):
    """Replace placeholder text in a file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Replace common placeholders
    for old, new in replacements.items():
        if not isinstance(old, tuple):
            content = content.replace(old, new)
    
    # Replace Consectetur placeholder with testimonials
    review_pattern = 'Consectetur adipiscing elit\\. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo "'
    count = 0
    for testimonial in review_testimonials:
        content = content.replace(
            'Consectetur adipiscing elit. Integer nunc viverra laoreet est the is porta pretium metus aliquam eget maecenas porta is nunc viverra Aenean pulvinar maximus leo "',
            f'"{testimonial}"',
            1
        )
        count += 1
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Updated {filepath}")
        return True
    return False

# Process all HTML files
html_files = glob.glob('*.html')
updated = 0
for html_file in html_files:
    if replace_in_file(html_file):
        updated += 1

print(f"\n✓ Updated {updated} files")
