# Form Submission Setup

## Overview
Your website forms now work automatically without any configuration needed. When customers submit a form, their default email client will open with all the information pre-filled and ready to send to **Alberto.30am@yahoo.com**.

## How It Works

### Quick Quote Form (Home Page)
Located on the hero section of the home page, this form collects:
- Type of Service
- Location
- Phone Number

When submitted, it opens the user's email client with:
- **To:** Alberto.30am@yahoo.com
- **Subject:** Free Quote Request - [Service Type]
- **Body:** All form details including service, location, and phone number

### Contact Form (Contact Page)
Located on the contact page, this form collects:
- Name
- Email
- Phone
- Service Type
- Message

When submitted, it opens the user's email client with:
- **To:** Alberto.30am@yahoo.com
- **Subject:** Contact Form - [Service Type] Inquiry
- **Body:** All form details including name, email, phone, service, and message

## User Experience

1. Customer fills out the form on your website
2. Customer clicks "Submit" or "Request Quote"
3. Their default email client (Gmail, Outlook, Apple Mail, etc.) opens automatically
4. All form information is pre-filled in the email
5. Customer clicks "Send" in their email client
6. You receive the email at Alberto.30am@yahoo.com

## Benefits

✅ **No Configuration Required** - Works immediately, no API keys or third-party services needed

✅ **No Cost** - Completely free, no monthly fees or usage limits

✅ **Privacy-Friendly** - Customer's email stays private, form data goes directly through their email

✅ **Reliable** - Uses standard email protocols, works with any email client

✅ **Verified Emails** - Customers send from their own email, so you can reply directly to them

## Important Notes

### Customer Email Client Required
This method requires the customer to have an email client configured on their device. This works for:
- Desktop computers with Outlook, Apple Mail, Thunderbird, etc.
- Mobile devices with email apps configured
- Gmail users (opens Gmail in browser)

### Alternative for Users Without Email Client
If a customer doesn't have an email client configured, they can still contact you via:
- Phone: (206) 853-1582 (displayed throughout the site)
- Direct email link: Alberto.30am@yahoo.com (in footer and contact page)

## Customization

To change where form submissions go, update the `EMAIL` constant in `constants.tsx`:

```tsx
export const EMAIL = "Alberto.30am@yahoo.com"; // Change this to your desired email
```

## Files Modified

- **`components/Hero.tsx`** - Updated quick quote form submission
- **`components/ContactPage.tsx`** - Updated contact form submission
- **`constants.tsx`** - Contains the email address constant
- **`package.json`** - Removed @emailjs/browser dependency (no longer needed)

## Previous Setup (EmailJS)

The previous setup used EmailJS which required:
- Creating an EmailJS account
- Configuring API keys
- Setting up email templates
- Monthly usage limits on free tier

This has been replaced with a simpler, more reliable email approach that requires no configuration.

## Testing

To test the forms:
1. Fill out a form on your website
2. Click submit
3. Your email client should open with the form data
4. Send the email
5. Check Alberto.30am@yahoo.com for the submission

## Support

If you need to make changes:
- Update email address: Edit `constants.tsx` line 8
- Change form fields: Edit `components/Hero.tsx` or `components/ContactPage.tsx`
- Modify email format: Update the `subject` and `body` variables in the `handleSubmit` functions
