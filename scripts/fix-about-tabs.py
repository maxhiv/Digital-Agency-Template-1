#!/usr/bin/env python3
"""Fix About section placeholder text"""

import glob

replacements = {
    # About tab descriptions
    "It is a long established fact that a reader will be distracted the readable content of a page when looking at layout the point.": "Gulf Coast businesses trust us to deliver results-driven digital marketing strategies that generate real leads and measurable ROI.",
    
    # Bullet point placeholders
    "Nam varius mauris quis magna pellentesque gravida.": "Data-driven strategies tailored to your market",
    "Phasellus porttitor dui vitae pretium ornare.": "Local expertise with Gulf Coast business focus",
    "Maecenas suscipit nisi ac nisi tristique mattis.": "Proven track record of measurable results"
}

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original = content
    
    for old, new in replacements.items():
        content = content.replace(old, new)
    
    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"✓ Updated {filepath}")
        return True
    return False

html_files = glob.glob('*.html')
updated = 0
for html_file in html_files:
    if update_file(html_file):
        updated += 1

print(f"\n✓ Updated {updated} files")
