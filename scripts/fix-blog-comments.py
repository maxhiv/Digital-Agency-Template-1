#!/usr/bin/env python3
"""Fix blog comment placeholder text"""

import glob

replacement = "Thank you for sharing such insightful content. Your expertise in digital marketing strategy is evident, and the practical examples really help Gulf Coast businesses understand how to implement these tactics effectively."

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Replace the long Phasellus placeholder text
    old_text = "Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla. Integer non quam commodo, scelerisque felis id, eleifend turpis. Phasellus in nulla quis erat tempor tristique eget vel purus. Nulla pharetra pharetra pharetra. Praesent varius eget justo ut lacinia. Phasellus pharetra, velit viverra lacinia consequat, ipsum odio mollis dolor, nec facilisis arcu arcu ultricies sapien. Quisque ut dapibus nunc. Vivamus sit amet efficitur velit. Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla"
    
    content = content.replace(old_text, replacement)
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Updated {filepath}")
        return True
    return False

html_files = ['blog-aeo-next-seo.html', 'blog-details.html', 'blog-gbp-secrets-2025.html', 'blog-landing-pages-convert.html']
updated = 0
for html_file in html_files:
    if update_file(html_file):
        updated += 1

print(f"\n✓ Updated {updated} blog files")
