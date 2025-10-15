#!/usr/bin/env python3
from PIL import Image
import os
import sys

def optimize_image(image_path, target_kb=200, max_width=1920):
    """Optimize an image to target file size by reducing quality and resizing if needed"""
    try:
        with Image.open(image_path) as img:
            # Convert RGBA to RGB if necessary
            if img.mode == 'RGBA':
                background = Image.new('RGB', img.size, (255, 255, 255))
                background.paste(img, mask=img.split()[3])
                img = background
            elif img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Resize if image is too large
            if img.width > max_width:
                ratio = max_width / img.width
                new_height = int(img.height * ratio)
                img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
            
            # Try different quality settings to hit target
            for quality in [75, 65, 55, 45, 35]:
                img.save(image_path, 'JPEG', quality=quality, optimize=True)
                size_kb = os.path.getsize(image_path) / 1024
                
                if size_kb <= target_kb:
                    print(f"✓ Optimized: {os.path.basename(image_path)} ({size_kb:.1f}KB at quality {quality})")
                    return True
            
            # If still too large, reduce dimensions
            for scale in [0.9, 0.8, 0.7, 0.6]:
                new_width = int(img.width * scale)
                new_height = int(img.height * scale)
                resized = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
                resized.save(image_path, 'JPEG', quality=65, optimize=True)
                size_kb = os.path.getsize(image_path) / 1024
                
                if size_kb <= target_kb:
                    print(f"✓ Optimized: {os.path.basename(image_path)} ({size_kb:.1f}KB at {int(scale*100)}% scale)")
                    return True
            
            print(f"⚠ {os.path.basename(image_path)} still {size_kb:.1f}KB after max compression")
            return False
    except Exception as e:
        print(f"✗ Error optimizing {image_path}: {e}")
        return False

def main():
    img_dir = "assets/img"
    
    # Find all large images (>200KB)
    large_images = []
    for filename in os.listdir(img_dir):
        if filename.lower().endswith(('.jpg', '.jpeg')):
            filepath = os.path.join(img_dir, filename)
            size_kb = os.path.getsize(filepath) / 1024
            if size_kb > 200:
                large_images.append((filepath, size_kb / 1024))
    
    if not large_images:
        print("No large images found!")
        return
    
    print(f"Found {len(large_images)} large images to optimize...\n")
    
    # Sort by size (largest first)
    large_images.sort(key=lambda x: x[1], reverse=True)
    
    for filepath, size_mb in large_images:
        print(f"Processing {os.path.basename(filepath)} ({size_mb:.1f}MB)...")
        optimize_image(filepath, target_kb=200, max_width=1920)
    
    print(f"\n✓ Optimization complete!")

if __name__ == "__main__":
    main()
