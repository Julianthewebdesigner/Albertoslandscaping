# Social Media Preview Setup

## Overview
Your website now has dynamic Open Graph (OG) images and meta tags for every page. When you share any page on social media (Facebook, Twitter, LinkedIn, etc.), it will display a beautiful preview with a custom image and description.

## What Was Implemented

### 1. Installed Dependencies
- `react-helmet-async` - Manages dynamic meta tags for each page

### 2. Created Components
- **`components/MetaTags.tsx`** - Reusable component that sets Open Graph and Twitter Card meta tags

### 3. Updated Pages
Each page now has its own custom preview:

#### Home Page
- **Image**: Complete lawn solutions photo
- **Title**: Professional Landscaping Services Seattle, Kent & Bellevue WA
- **URL**: https://albertoslandscaping.com

#### Services Page
- **Image**: Hardscape installation photo
- **Title**: Our Services - Professional Landscaping Seattle & Kent
- **URL**: https://albertoslandscaping.com/services

#### About Page
- **Image**: Alberto's photo
- **Title**: About Us - Family-Owned Landscaping Since 2012
- **URL**: https://albertoslandscaping.com/about

#### Projects Page
- **Image**: Grass installation project photo
- **Title**: Our Projects - Landscaping Portfolio Seattle & Kent
- **URL**: https://albertoslandscaping.com/projects

#### Reviews Page
- **Image**: Complete lawn solutions photo
- **Title**: Customer Reviews - 5-Star Landscaping Seattle & Kent
- **URL**: https://albertoslandscaping.com/reviews

#### Contact Page
- **Image**: Material delivery photo
- **Title**: Contact Us - Free Quote for Landscaping Seattle & Kent
- **URL**: https://albertoslandscaping.com/contact

## How It Works

1. **HelmetProvider** wraps the entire app in `App.tsx`
2. **MetaTags component** is added to each page with custom props
3. When a page loads, `react-helmet-async` updates the `<head>` meta tags
4. Social media crawlers read these meta tags and display the preview

## Testing Your Social Previews

### Facebook Debugger
1. Go to: https://developers.facebook.com/tools/debug/
2. Enter your URL (e.g., `https://albertoslandscaping.com/services`)
3. Click "Debug" to see the preview
4. Click "Scrape Again" if you make changes

### Twitter Card Validator
1. Go to: https://cards-dev.twitter.com/validator
2. Enter your URL
3. See the preview

### LinkedIn Post Inspector
1. Go to: https://www.linkedin.com/post-inspector/
2. Enter your URL
3. See the preview

## Important Notes

### Image Requirements
- **Size**: 1200x630 pixels (recommended for best display)
- **Format**: JPG or PNG
- **URL**: Must be absolute URLs (starting with `https://`)
- **Accessibility**: Images must be publicly accessible (not behind authentication)

### Current Image URLs
All images are set to use `https://albertoslandscaping.com` as the base URL. Make sure:
1. Your images are in the `public/images/` folder
2. They're accessible at the URLs specified in each page
3. The domain matches your actual deployed website URL

### Changing Images or Text

To update the preview for any page, edit the `<MetaTags>` component in that page file:

```tsx
<MetaTags
  title="Your Custom Title"
  description="Your custom description"
  image="https://albertoslandscaping.com/path/to/image.jpg"
  url="https://albertoslandscaping.com/page-path"
/>
```

## Deployment Checklist

Before going live:
- [ ] Update all `albertoslandscaping.com` URLs to your actual domain
- [ ] Ensure all images are in the `public/images/` folder
- [ ] Test social previews using the tools above
- [ ] Verify images are 1200x630px for best results
- [ ] Check that all URLs are absolute (start with https://)

## Support

If you need to change the preview image for a page:
1. Open the page component file (e.g., `components/ServicesPage.tsx`)
2. Find the `<MetaTags>` component at the top of the return statement
3. Update the `image` prop with your new image URL
4. Rebuild and redeploy your site
5. Use Facebook Debugger to force a refresh of the cached preview
