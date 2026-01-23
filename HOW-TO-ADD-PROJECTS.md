# How to Add Projects to Your Website

This guide explains how to add the Dan Trutman project images and how to add future projects.

## Quick Start: Adding Dan Trutman Images

### Step 1: Place Your Images

Put all your JPG photos in the folder:
```
public/images/dan-trutman/
```

You can name them anything you want. Examples:
- `front-yard.jpg`
- `backyard-after.jpg`
- `landscape-view-1.jpg`
- etc.

### Step 2: Update the ProjectsPage Component

Open the file: `components/ProjectsPage.tsx`

Find the Dan Trutman project entry (around line 40-55) and update the `images` array:

```typescript
{
  id: 'dan-trutman',
  name: 'Dan Trutman',
  location: 'Kent, WA',
  description: 'Complete landscape transformation...',
  services: ['Landscape Design', 'Lawn Maintenance', 'Hardscaping', 'Plant Installation'],
  images: [
    // Replace these placeholder images with your actual images:
    '/images/dan-trutman/photo-1.jpg',
    '/images/dan-trutman/photo-2.jpg',
    '/images/dan-trutman/photo-3.jpg',
    '/images/dan-trutman/photo-4.jpg',
    // Add as many as you want!
  ]
}
```

### Step 3: Test

Navigate to the Projects page in your browser to see the images in the carousel.

---

## Adding Another Project in the Future

### Step 1: Create a New Folder

Create a new folder in `public/images/` for your project:
```
public/images/[project-name]/
```

Example:
```
public/images/smith-residence/
```

### Step 2: Add Images to the Folder

Place all project photos in the new folder.

### Step 3: Add Project Entry to Code

Open `components/ProjectsPage.tsx` and add a new project object to the `PROJECTS` array:

```typescript
const PROJECTS: Project[] = [
  {
    id: 'dan-trutman',
    name: 'Dan Trutman',
    // ... existing project ...
  },
  // Add your new project here:
  {
    id: 'smith-residence',
    name: 'Smith Residence',
    location: 'Seattle, WA',
    description: 'Modern backyard oasis with custom water features and native plantings that create a serene outdoor living space.',
    services: ['Landscape Design', 'Irrigation', 'Water Features', 'Plant Installation'],
    images: [
      '/images/smith-residence/front-view.jpg',
      '/images/smith-residence/backyard-1.jpg',
      '/images/smith-residence/water-feature.jpg',
      '/images/smith-residence/plantings.jpg',
    ]
  },
];
```

### Step 4: Customize Details

Update these fields for your new project:
- **id**: Unique identifier (use folder name)
- **name**: Client name or project title
- **location**: City and state
- **description**: Brief description of the work completed
- **services**: Array of services you provided (e.g., 'Lawn Maintenance', 'Tree Pruning')
- **images**: Array of image paths (in the order you want them displayed)

---

## Tips & Best Practices

### Image Optimization

1. **Compress images** before uploading
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target: 200-500KB per image

2. **Resize to appropriate dimensions**
   - Recommended: 1920x1200 or 1600x1000
   - Don't upload 4000x3000 images

3. **Use descriptive filenames**
   - Good: `backyard-after.jpg`, `front-entrance.jpg`
   - Bad: `IMG_1234.jpg`, `photo.jpg`

### Services List

Common services you can use (copy/paste):
- Lawn Maintenance
- Tree Pruning & Removal
- Landscape Design
- Hardscaping
- Seasonal Clean-up
- Material Delivery & Install
- Irrigation Systems
- Plant Installation
- Mulching
- Edging & Borders

### Image Order

Images are displayed in the order listed in the `images` array. Consider ordering them:
1. Wide establishing shot
2. Before/after comparisons
3. Detail shots
4. Finished results

---

## Carousel Features

The carousel you created includes:

✅ **Next/Previous Arrows** - Appear on hover
✅ **Dot Indicators** - Below the image
✅ **Swipe Support** - Works on mobile/tablets
✅ **Keyboard Navigation** - Left/Right arrow keys
✅ **Image Counter** - Shows "1 / 5" in top right
✅ **Smooth Transitions** - Professional fade effects
✅ **Responsive** - Works on all screen sizes

---

## Troubleshooting

### Images not showing?

1. Check the file path is correct: `/images/folder-name/image.jpg`
2. Make sure images are in the `public/images/` folder
3. Verify image filenames match exactly (case-sensitive)
4. Check browser console for errors

### Carousel not working?

1. Make sure you have at least 1 image in the `images` array
2. Check that image paths are strings in quotes
3. Clear browser cache and reload

### Styling looks off?

The ProjectsPage uses the same styling as other pages:
- Make sure you haven't modified global CSS
- Check that all components are imported correctly

---

## Need Help?

- Check code comments in `components/ProjectsPage.tsx`
- Look at the example project entry for reference
- Contact Julian for assistance

**Last Updated**: January 2026
