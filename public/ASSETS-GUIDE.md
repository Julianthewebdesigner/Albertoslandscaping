# Assets Guide - Alberto's Landscaping LLC Website

This guide explains how to customize images and videos throughout the website.

## Directory Structure

```
public/
├── images/          # All image files
│   └── README.md    # Detailed image guide
├── videos/          # All video files
│   └── README.md    # Detailed video guide
└── ASSETS-GUIDE.md  # This file
```

## Quick Start

### Step 1: Add Your Images

Place your images in the `public/images/` folder. Reference them in your code using `/images/filename.jpg`

### Step 2: Add Your Videos

Place your videos in the `public/videos/` folder. Reference them in your code using `/videos/filename.mp4`

### Step 3: Update Component Code

Look for `CUSTOMIZE` comments throughout the codebase. These comments show you exactly where and how to add your custom images/videos.

## Where to Customize

### 🏠 Hero Section (Homepage)
**File**: `components/Hero.tsx`
**Line**: ~77-91

Add your hero background image:
- **Path**: `public/images/hero-background.jpg`
- **Size**: 1920x1080 or larger
- **Alternative**: Use a video background (see `public/videos/README.md`)

---

### 👥 About Page (Team Photos)
**File**: `components/AboutPage.tsx`
**Lines**: ~51-55 (Alberto), ~68-72 (Julian)

Add team profile photos:
- **Paths**:
  - `public/images/alberto-profile.jpg`
  - `public/images/julian-profile.jpg`
- **Size**: 800x800 or larger (square format)

---

### 🌿 Services Page (Service Images)
**File**: `components/ServicesPage.tsx`
**Line**: ~35-49

Add images for each service:
- **Paths**:
  - `public/images/service-lawn-maintenance.jpg`
  - `public/images/service-tree-pruning.jpg`
  - `public/images/service-landscape-design.jpg`
  - `public/images/service-hardscaping.jpg`
  - `public/images/service-cleanup.jpg`
  - `public/images/service-materials.jpg`
  - `public/images/service-irrigation.jpg`
- **Size**: 1200x800 pixels

---

### ⭐ Reviews Section (Customer Photos - Optional)
**Files**:
- `components/ReviewsSection.tsx` (Line ~69-86)
- `components/ReviewsPage.tsx` (Line ~118-130)

Add customer photos (optional):
- **Paths**: `public/images/customer-[name].jpg`
- **Size**: 400x400 pixels (square format)

---

## File Naming Conventions

✅ **Good Names**:
- `hero-background.jpg`
- `alberto-profile.jpg`
- `service-lawn-maintenance.jpg`
- `customer-sarah.jpg`

❌ **Bad Names**:
- `Hero Background.jpg` (spaces)
- `ALBERTO_PROFILE.JPG` (uppercase)
- `Service 1.jpg` (unclear)

### Rules:
1. Use lowercase letters
2. Use hyphens instead of spaces
3. Use descriptive names
4. Keep file extensions lowercase (.jpg, .png, .mp4)

## Image Optimization Tips

1. **Compress images** before uploading
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Keep images under 500KB when possible

2. **Use correct formats**
   - JPG for photos
   - PNG for logos/graphics with transparency
   - WebP for best compression (optional)

3. **Resize to recommended dimensions**
   - Don't upload 4000x3000 images if you only need 1200x800
   - Use image editing software to resize first

4. **Use descriptive alt text**
   - Good: `alt="Alberto Aguilar working on landscape design"`
   - Bad: `alt="image1"`

## How to Replace Placeholder Images

### Example: Hero Background

1. **Find the current code** in `components/Hero.tsx`:
```jsx
<img
  src="https://images.unsplash.com/photo-1558905619-1714249d3744?auto=format&fit=crop&q=80&w=2000"
  alt="Alberto's Landscaping - Professional lawn care services"
  className="w-full h-full object-cover"
/>
```

2. **Add your image** to `public/images/hero-background.jpg`

3. **Update the code**:
```jsx
<img
  src="/images/hero-background.jpg"
  alt="Alberto's Landscaping - Professional lawn care services"
  className="w-full h-full object-cover"
/>
```

## Need Help?

- Check `public/images/README.md` for detailed image guidelines
- Check `public/videos/README.md` for detailed video guidelines
- Look for `CUSTOMIZE` comments in component files
- Contact Julian if you need assistance with customization

---

**Last Updated**: January 2026
