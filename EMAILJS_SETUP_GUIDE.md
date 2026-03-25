# EmailJS Integration Guide

This guide will help you set up EmailJS for the contact form integration.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/)
2. Click **Sign Up** and create your account
3. Verify your email address

## Step 2: Get Your Public Key

1. Log in to EmailJS Dashboard
2. Go to **Account** → **API Keys**
3. Copy your **Public Key**
4. Open `.env.local` in your project and paste it:
   ```
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

## Step 3: Create an Email Service

1. Go to **Email Services** in the left sidebar
2. Click **Add Service**
3. Choose your email provider:
   - **Gmail** (recommended for testing)
   - **Outlook**
   - **SendGrid**
   - Or connect your own SMTP server
4. Follow the authentication steps
5. After creating the service, copy the **Service ID**
6. Add it to `.env.local`:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   ```

## Step 4: Create an Email Template

1. Go to **Email Templates** in the left sidebar
2. Click **Create New Template**
3. Give it a name (e.g., "Contact Form Template")
4. Use the following template code:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}} <{{from_email}}>
Phone: {{phone}}

Message:
{{message}}

---
This message was sent from the Magnipay contact form.
```

### Template Variables Explanation:
- `{{from_name}}` - Customer's name
- `{{from_email}}` - Customer's email
- `{{phone}}` - Customer's phone number
- `{{message}}` - Customer's message
- `{{to_email}}` - Your email (where to send the message)

5. Copy the **Template ID** from the top right
6. Add it to `.env.local`:
   ```
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   ```

## Step 5: Set Your Recipient Email

1. Update this in `.env.local`:
   ```
   VITE_CONTACT_EMAIL=your-email@example.com
   ```

## Complete .env.local Example

```
# EmailJS Configuration
VITE_EMAILJS_PUBLIC_KEY=your_public_key_from_account_settings
VITE_EMAILJS_SERVICE_ID=your_service_id_from_email_services
VITE_EMAILJS_TEMPLATE_ID=your_template_id_from_email_templates

# Your Email (where to send notifications)
VITE_CONTACT_EMAIL=info@utkaldigital.in
```

## Testing the Form

1. Start your development server: `npm run dev`
2. Navigate to the contact form section
3. Fill out the form with test data
4. Click "Send Message"
5. Check your email inbox (and spam folder) for the test message

## Troubleshooting

### "Email service is not properly configured"
- Make sure all three environment variables are set correctly
- Restart your dev server after updating `.env.local`

### Emails not being received
- Check your spam folder
- Verify your EmailJS service is properly connected
- Check EmailJS Activity Dashboard for failed attempts

### "Invalid public key"
- Double-check your Public Key in the EmailJS Dashboard
- Make sure there are no extra spaces or characters

### Rate Limiting
- EmailJS has rate limits on the free plan (typically 200 emails/day)
- Consider upgrading your plan for production

## Features Included

✅ Custom form validation (name, email, phone, message)
✅ Loading state while sending
✅ Success/error message display
✅ Clear error messages for invalid fields
✅ Responsive design (mobile, tablet, desktop)
✅ Auto-clear form after successful submission
✅ Environment variable configuration
✅ Async/await with proper error handling
✅ Automatic message dismissal after 5-6 seconds

## Component Implementation Details

The ContactSection component includes:

### Validation Logic
- **Name**: Required, minimum 2 characters
- **Email**: Required, valid email format
- **Phone**: Optional, but if provided must be valid (10+ digits)
- **Message**: Required, minimum 10 characters

### Form States
- **loading**: Shows spinner while sending
- **submitted**: Shows success message for 5 seconds
- **error**: Shows error message for 6 seconds
- **validationErrors**: Shows field-specific validation errors

### Email Template Data
The form sends these variables to your EmailJS template:
```typescript
{
  from_name: form.name,
  from_email: form.email,
  phone: form.phone || "Not provided",
  message: form.message,
  to_email: import.meta.env.VITE_CONTACT_EMAIL,
}
```

## Next Steps

1. Deploy your website to production
2. Consider upgrading your EmailJS plan for higher email limits
3. Monitor the EmailJS Activity Dashboard for any issues
4. Add additional features like file attachments if needed
