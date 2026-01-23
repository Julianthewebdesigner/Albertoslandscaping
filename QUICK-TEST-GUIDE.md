# Quick Testing Guide - EmailJS Forms

## Start the Dev Server
```bash
npm run dev
```
Then open: http://localhost:5173

---

## ✅ Test #1: Home Page Hero Form

1. **Navigate to:** Home page (/)
2. **Find:** "Get a Free Quotation" form (right side of hero section)
3. **Fill out:**
   - Full Name: "Test User"
   - Email: your-email@example.com
   - Phone: "206-555-1234"
   - Type of Service: "Lawn Maintenance"
   - City: "Kent, WA"
4. **Click:** "Request My Free Quote"
5. **Verify:**
   - ✅ Button shows "Sending..." and is disabled
   - ✅ Green success message appears: "Thanks! We'll contact you within 24 hours."
   - ✅ Form fields reset to empty
6. **Check email:** Verify you received the lead notification

**Expected EmailJS Data:**
```
name: "Test User"
email: "your-email@example.com"
phone: "206-555-1234"
service: "Lawn Maintenance"
city: "Kent, WA"
message: "Quick quote request for Lawn Maintenance in Kent, WA"
time: "anytime"
```

---

## ✅ Test #2: Contact Page Form

1. **Navigate to:** Click "Contact" in navigation (or go to /contact)
2. **Find:** "Project Inquiry" form (left side)
3. **Fill out:**
   - Full Name: "Test Contact"
   - Email: your-email@example.com
   - Phone: "206-555-5678"
   - City: "Seattle"
   - Preferred Contact Time: "Morning (8AM - 12PM)"
   - Service Type: "Landscape Design"
   - How can we help?: "I need help with my backyard"
4. **Click:** "Send Your Message"
5. **Verify:**
   - ✅ Button shows "Sending..." and is disabled
   - ✅ Green success message appears: "Thanks! We'll contact you within 24 hours."
   - ✅ Form fields reset to empty
6. **Check email:** Verify you received the lead notification

**Expected EmailJS Data:**
```
name: "Test Contact"
email: "your-email@example.com"
phone: "206-555-5678"
service: "Landscape Design"
city: "Seattle"
message: "I need help with my backyard"
time: "morning"
```

---

## 🚨 Error Test (Optional)

1. **Temporarily break EmailJS:**
   - Open `emailConfig.ts`
   - Change `serviceId: 'INVALID'`
2. **Submit any form**
3. **Verify:**
   - ✅ Red error message appears: "Something went wrong, please call or text us at..."
   - ✅ Button re-enables
4. **Restore:**
   - Change back to `serviceId: 'service_5s81v0f'`

---

## 📱 Mobile Test

1. **Open on phone/tablet** or resize browser to mobile width
2. **Test both forms:**
   - Home page hero form
   - Contact page form
3. **Verify:**
   - ✅ Forms are responsive
   - ✅ Fields stack vertically
   - ✅ Submit button works
   - ✅ Success/error messages display correctly

---

## All Good? ✅

If both forms work correctly:
- ✅ EmailJS is configured properly
- ✅ All forms are standardized
- ✅ Ready for production deployment!

---

## Troubleshooting

**"Failed to send email" error:**
- Check EmailJS credentials in `/emailConfig.ts`
- Verify EmailJS service is active in dashboard
- Check browser console for detailed error

**Form doesn't reset:**
- This is expected during error - form keeps data so user can retry

**No email received:**
- Check EmailJS dashboard for delivery status
- Check spam folder
- Verify template is configured with correct email
