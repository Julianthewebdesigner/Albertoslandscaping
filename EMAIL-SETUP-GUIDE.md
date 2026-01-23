# 📧 Email Form Setup Guide

## Overview
Your website has **2 contact forms** that need to be configured to send emails to **Alberto.30am@yahoo.com**:

1. **Quick Quote Form** (Home page hero section)
2. **Project Inquiry Form** (Contact page)

Both forms are ready to work - you just need to complete the EmailJS setup below.

---

## ⚡ Quick Setup (15 minutes)

### Step 1: Create EmailJS Account

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** (Free account - no credit card required)
3. Use email: **Alberto.30am@yahoo.com**
4. Verify your email address

---

### Step 2: Add Email Service

1. In EmailJS dashboard, click **"Email Services"** in the left menu
2. Click **"Add New Service"**
3. Choose **"Gmail"** (recommended) or **"Yahoo Mail"**
4. Follow the prompts to connect your **Alberto.30am@yahoo.com** account
5. **IMPORTANT:** This is where form submissions will be SENT TO
6. Copy the **Service ID** (looks like: `service_abc123`)

---

### Step 3: Create Email Template

1. Click **"Email Templates"** in the left menu
2. Click **"Create New Template"**
3. Give it a name: **"Landscaping Contact Form"**

#### Template Content:
Use this template for the email body:

```
Subject: 🌳 New Inquiry from {{from_name}}

You have received a new landscaping inquiry:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CUSTOMER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: {{from_name}}
Phone: {{phone}}
Email: {{email}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Service Type: {{service}}
Location: {{location}}

Message:
{{message}}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Reply to this customer at: {{email}}
Call them at: {{phone}}

---
Sent from albertoslandscaping.com
```

4. Click **"Save"**
5. Copy the **Template ID** (looks like: `template_xyz789`)

---

### Step 4: Get Public Key

1. Click **"Account"** in the left menu
2. Click **"General"** tab
3. Find your **Public Key** (looks like: `aBcD123-EfGh456`)
4. Copy it

---

### Step 5: Update Your Website

1. Open the file: **`emailConfig.ts`**
2. Replace the placeholder values:

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_abc123',      // ← Paste your Service ID here
  TEMPLATE_ID: 'template_xyz789',    // ← Paste your Template ID here
  PUBLIC_KEY: 'aBcD123-EfGh456',     // ← Paste your Public Key here

  RECIPIENT_EMAIL: 'Alberto.30am@yahoo.com'  // Already set ✓
};
```

3. Save the file

---

## ✅ Testing Your Forms

### Test the Quick Quote Form:
1. Go to your website home page
2. Fill out the "Get a Free Quotation" form
3. Click "Request My Free Quote"
4. Check **Alberto.30am@yahoo.com** inbox for the email

### Test the Contact Form:
1. Go to the Contact page
2. Fill out the "Project Inquiry" form
3. Click "Send Your Message"
4. Check **Alberto.30am@yahoo.com** inbox for the email

---

## 🔒 Security Notes

- Your Public Key is safe to expose (it's in the frontend code)
- EmailJS has built-in rate limiting to prevent spam
- All emails go ONLY to Alberto.30am@yahoo.com
- No credit card required (free tier includes 200 emails/month)

---

## 📊 Email Limits (Free Plan)

- **200 emails per month** included free
- If you get more than 200 form submissions, upgrade to paid plan
- Paid plans start at $7/month for unlimited emails

---

## 🆘 Troubleshooting

### "Email not configured" alert appears:
- You haven't updated `emailConfig.ts` yet
- Follow Step 5 above

### Form submits but no email arrives:
1. Check spam/junk folder in Alberto.30am@yahoo.com
2. Verify Service ID, Template ID, and Public Key in `emailConfig.ts`
3. Check EmailJS dashboard for error logs
4. Make sure the email service is connected and active

### "Something went wrong" error:
1. Open browser console (F12) to see detailed error
2. Common issues:
   - Wrong Template ID
   - Email service not verified
   - Exceeded monthly limit

---

## 📞 Alternative: Direct Email Links

If you prefer NOT to use EmailJS, you can replace forms with direct email links:

```html
<a href="mailto:Alberto.30am@yahoo.com?subject=Landscaping Quote Request">
  Contact Us
</a>
```

**Pros:** No setup required
**Cons:** Opens user's email app instead of inline form

---

## 📝 Summary

✅ **Forms configured:** Hero Quick Quote + Contact Page
✅ **Recipient email:** Alberto.30am@yahoo.com
✅ **Setup time:** ~15 minutes
✅ **Cost:** FREE (up to 200 emails/month)

**Next step:** Complete Steps 1-5 above to activate your forms!

---

Need help? Reference: https://www.emailjs.com/docs/
