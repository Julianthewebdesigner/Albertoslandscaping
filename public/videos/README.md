# Videos Directory

Place all video assets for the website in this folder.

## Recommended Videos

### Hero Section Video Background (Optional)
- **hero-background.mp4** (1920x1080)
  - Short looping video for hero section background
  - 5-15 seconds recommended
  - Should be optimized for web (compressed)
  - Alternative to static hero image

### Service Demonstration Videos
- **service-lawn-maintenance.mp4**
- **service-tree-pruning.mp4**
- **service-hardscaping.mp4**
  - Short clips showing services in action
  - 10-30 seconds recommended
  - Can be added to service pages

### Project Showcase Videos
- **project-[name]-timelapse.mp4**
  - Time-lapse videos of projects
  - Great for social media and website
  - 15-60 seconds recommended

### Testimonial Videos (Optional)
- **testimonial-[customer-name].mp4**
  - Video testimonials from satisfied customers
  - 30-60 seconds recommended
  - Can enhance the reviews section

## Video Format Guidelines

- **Format**: MP4 (H.264 codec) for best browser compatibility
- **Size**: Keep files under 10MB for web use
- **Dimensions**: 1920x1080 (1080p) or 1280x720 (720p)
- **Frame Rate**: 30fps or 60fps
- **Compression**: Use web-optimized compression
- **Aspect Ratio**: 16:9 for full-width, 9:16 for mobile/stories

## How to Use Videos in Code

All videos in this folder can be referenced with `/videos/filename.mp4`

Example:
```jsx
<video autoPlay loop muted playsInline>
  <source src="/videos/hero-background.mp4" type="video/mp4" />
</video>
```

## Tips for Video Optimization

1. **Compress videos** before uploading using tools like HandBrake or FFmpeg
2. **Use poster images** (a placeholder image) for videos
3. **Provide fallbacks** for older browsers
4. **Consider mobile data** - videos can be large
5. **Loop short clips** for background videos
6. **Mute background videos** for better UX
