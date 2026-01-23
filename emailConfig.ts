/*
  EMAILJS CONFIGURATION
  =====================

  IMPORTANT: Before forms will work, you need to set up EmailJS:

  1. Go to https://www.emailjs.com/ and create a FREE account
  2. Add an email service (Gmail recommended):
     - Click "Email Services" → "Add New Service"
     - Choose Gmail
     - Connect your Gmail account: Alberto.30am@yahoo.com

  3. Create an email template:
     - Click "Email Templates" → "Create New Template"
     - Template Name: "Alberto's Landscaping Contact"
     - Use these template variables in your email template:
       {{from_name}} - Customer name
       {{phone}} - Customer phone
       {{email}} - Customer email
       {{service}} - Service requested
       {{location}} - Customer location (Quick Quote only)
       {{message}} - Customer message (Contact Page only)

     Example template:
     ---
     Subject: New Inquiry from {{from_name}}

     You have received a new inquiry:

     Name: {{from_name}}
     Phone: {{phone}}
     Email: {{email}}
     Service: {{service}}
     Location: {{location}}
     Message: {{message}}
     ---

  4. Get your credentials:
     - Service ID: Found in "Email Services" section
     - Template ID: Found in "Email Templates" section
     - Public Key: Found in "Account" → "General"

  5. Replace the placeholder values below with your actual credentials
  6. IMPORTANT: Email will be sent to the email address configured in your EmailJS service
*/

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',        // Replace with your EmailJS Service ID
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',      // Replace with your EmailJS Template ID
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',        // Replace with your EmailJS Public Key

  // This is the email that will RECEIVE the form submissions
  // Configure this in your EmailJS Email Service settings
  RECIPIENT_EMAIL: 'Alberto.30am@yahoo.com'
};

// Check if EmailJS is configured
export const isEmailConfigured = () => {
  return EMAILJS_CONFIG.SERVICE_ID !== 'YOUR_SERVICE_ID';
};
