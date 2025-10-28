#!/usr/bin/env python3
"""Update reviewer names and footer sections"""

import re
import glob

def update_file(filepath):
    """Update reviewer names and footer in a file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    # Update reviewer names (first occurrence)
    content = content.replace(
        '<h3 class="ul-review-reviewer-name">Kathryn Murphy</h3>\n                                                    <h4 class="ul-review-reviewer-role">Medical Assistant</h4>',
        '<h3 class="ul-review-reviewer-name">Sarah Johnson</h3>\n                                                    <h4 class="ul-review-reviewer-role">Coastal Realty Group</h4>',
        1
    )
    
    # Second reviewer
    content = re.sub(
        r'(<h3 class="ul-review-reviewer-name">)Kathryn Murphy(</h3>\s*<h4 class="ul-review-reviewer-role">)Medical Assistant(</h4>)',
        r'\1Dr. Michael Chen\2Mobile Dental Care\3',
        content,
        count=1
    )
    
    # Third reviewer
    content = re.sub(
        r'(<h3 class="ul-review-reviewer-name">)Kathryn Murphy(</h3>\s*<h4 class="ul-review-reviewer-role">)Medical Assistant(</h4>)',
        r'\1Tom Martinez\2Gulf Marine Services\3',
        content,
        count=1
    )
    
    # Update footer services
    old_services = [
        ("IT Management", "Lead Generation"),
        ("Web Development", "GBP Optimization"),
        ("Cyber Security", "SEO & AEO Services"),
        ("Data Security", "Landing Pages & CRO")
    ]
    
    for old, new in old_services:
        content = content.replace(f'>{old}</a>', f'>{new}</a>')
    
    # Update SEO Optimization to stay
    content = content.replace('>SEO Optimization</a>', '>Email Marketing</a>')
    
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
    if update_file(html_file):
        updated += 1

print(f"\n✓ Updated {updated} files")
