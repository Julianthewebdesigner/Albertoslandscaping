# Alberto's Landscaping LLC - Business Website

A modern, professional website for Alberto's Landscaping LLC, a premier landscaping service provider. This single-page application showcases services, company information, customer reviews, and provides easy contact options for potential clients.

## Features

- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Clean, professional interface with smooth animations
- **Service Showcase** - Detailed information about landscaping services offered
- **About Page** - Company history, team information, and business values
- **Customer Reviews** - Testimonials from satisfied clients
- **Contact Forms** - Multiple ways for customers to get in touch
- **Client-Side Routing** - Smooth navigation without page reloads
- **Professional Animations** - Engaging scroll animations and transitions

## Technologies Used

- **React 19** - Modern UI library for building the user interface
- **TypeScript** - Type-safe JavaScript for better code quality
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework (via CDN)
- **Lucide React** - Beautiful, consistent icon library
- **EmailJS** - Email service integration for contact forms

## Project Structure

```
alberto's-landscaping-llc/
├── components/          # React components
│   ├── Hero.tsx        # Landing section with CTA
│   ├── ServicesSection.tsx  # Services showcase
│   ├── AboutPage.tsx   # About company page
│   ├── Reviews.tsx     # Customer testimonials
│   ├── ContactPage.tsx # Contact form and info
│   └── Footer.tsx      # Site footer
├── App.tsx             # Main app component with routing
├── main.tsx            # Application entry point
├── index.html          # HTML template
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies and scripts
```

## Installation

**Prerequisites:** Node.js (version 16 or higher)

1. Clone the repository:
   ```bash
   git clone https://github.com/Julianthewebdesigner/Albertoslandscaping.git
   cd alberto's-landscaping-llc
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## Production Build

Create an optimized production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## EmailJS Setup

This website uses EmailJS for contact form submissions. To enable email functionality:

1. Create a free account at [EmailJS](https://www.emailjs.com/)
2. Set up an email service (Gmail, Outlook, etc.)
3. Create an email template with the following variables:
   - `{{from_name}}` - Customer name
   - `{{phone}}` - Customer phone number
   - `{{service}}` - Requested service (for Hero form)
   - `{{location}}` - Service location (for Hero form)
   - `{{email}}` - Customer email (for Contact form)
   - `{{message}}` - Customer message
4. Update the EmailJS credentials in:
   - `components/Hero.tsx` (lines with `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY`)
   - `components/ContactPage.tsx` (lines with `YOUR_SERVICE_ID`, `YOUR_TEMPLATE_ID`, `YOUR_PUBLIC_KEY`)

## Contact Alberto's Landscaping LLC

- **Phone:** (253) 630-1741
- **Email:** Albertoslandscapingllc@gmail.com
- **Location:** Serving the greater Seattle area

## Credits

Website developed by **Julian Aguilar**

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

© 2026 Alberto's Landscaping LLC. All rights reserved.
