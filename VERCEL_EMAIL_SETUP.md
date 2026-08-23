# Vercel Gmail Contact Form Setup

This version sends contact-form messages through a Vercel serverless function directly to Gmail.

## Important
The contact form will NOT send email when you double-click `index.html` on your computer.
The `/api/contact` endpoint exists only after deployment on Vercel.

## 1. Enable 2-Step Verification on your Google account
Open your Google Account security settings and enable 2-Step Verification.

## 2. Create a Google App Password
Create an App Password for the portfolio website.
Copy the 16-character app password.

Do NOT put this password inside `app.js`, `index.html`, GitHub, or any public file.

## 3. Deploy this project to Vercel
Import/upload the project to Vercel.

## 4. Add these Environment Variables in Vercel

Settings → Environment Variables:

GMAIL_USER
Your Gmail address used to send the email.

Example:
Mahdie.khalili.2015@gmail.com

GMAIL_APP_PASSWORD
The 16-character Google App Password you generated.

CONTACT_TO_EMAIL
The Gmail inbox where portfolio messages should arrive.

Example:
Mahdie.khalili.2015@gmail.com

Add these for Production, Preview and Development if desired.

## 5. Redeploy
After adding the variables, redeploy the Vercel project.

## What happens
Visitor fills the form
→ browser sends POST `/api/contact`
→ Vercel serverless function runs securely
→ Gmail SMTP sends the email
→ message arrives in your Gmail
→ visitor stays on the portfolio page

The visitor never sees your Gmail password or App Password.

## Files
- `api/contact.js` — secure server-side email function
- `app.js` — sends form data to `/api/contact`
- `package.json` — Nodemailer dependency
- `vercel.json` — Vercel function configuration
