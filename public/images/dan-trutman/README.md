# Dan Trutman Project Images

Place all project photos for the Dan Trutman project in this folder.

## Guidelines

- **Format**: JPG or PNG
- **Size**: Keep files under 1-2MB for fast loading
- **Naming**: Use descriptive names (e.g., `front-yard-after.jpg`, `landscape-view-1.jpg`)
- **Order**: Images will be displayed alphabetically by filename

## How to Add More Projects

To add another project:

1. Create a new folder: `public/images/[project-name]/`
2. Add project photos to that folder
3. In `components/ProjectsPage.tsx`, add a new project entry to the `PROJECTS` array
4. The carousel will automatically display all JPG/PNG images from the folder

Example:
```typescript
{
  id: 'new-project',
  name: 'New Project Name',
  location: 'Seattle, WA',
  description: 'Description of the project...',
  services: ['Service 1', 'Service 2'],
  imageFolder: '/images/new-project'
}
```
