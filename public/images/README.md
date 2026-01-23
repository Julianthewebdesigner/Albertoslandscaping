# Images Directory

Place all image assets for the website in this folder.

## Recommended Images

### Hero Section
- **hero-background.jpg** (1920x1080 or larger)
  - Main hero background image for the homepage
  - Should be a high-quality landscaping photo
  - Used in: `Hero.tsx`

### Team Photos
- **alberto-profile.jpg** (800x800 or larger)
  - Photo of Alberto Aguilar
  - Square format works best
  - Used in: `AboutPage.tsx`

- **julian-profile.jpg** (800x800 or larger)
  - Photo of Julian Aguilar
  - Square format works best
  - Used in: `AboutPage.tsx`

### Service Images
- **service-lawn-maintenance.jpg** (1200x800)
- **service-tree-pruning.jpg** (1200x800)
- **service-landscape-design.jpg** (1200x800)
- **service-hardscaping.jpg** (1200x800)
- **service-cleanup.jpg** (1200x800)
- **service-materials.jpg** (1200x800)
- **service-irrigation.jpg** (1200x800)
  - High-quality photos for each service
  - Used in: `ServicesPage.tsx`

### Customer Photos (Optional)
- **customer-[name].jpg** (400x400)
  - Replace review initials with actual customer photos
  - Square format works best
  - Used in: `ReviewsSection.tsx` and `ReviewsPage.tsx`

### Before/After Gallery
- **project-[number]-before.jpg** (1200x800)
- **project-[number]-after.jpg** (1200x800)
  - Showcase your work with before/after photos
  - Can be added to a gallery section

## Image Format Guidelines

- **Format**: JPG for photos, PNG for logos/graphics with transparency
- **Size**: Keep files under 500KB for fast loading
- **Dimensions**: Use the recommended sizes above
- **Quality**: Use high-resolution images (72-150 DPI)
- **Naming**: Use lowercase, hyphens instead of spaces

## How to Use Images in Code

All images in this folder can be referenced with `/images/filename.jpg`

Example:
```jsx
<img src="/images/hero-background.jpg" alt="Description" />
```
