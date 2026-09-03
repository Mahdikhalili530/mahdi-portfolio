const nodemailer = require("nodemailer");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, message: "Method not allowed" });
  }

  try {
    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        ok: false,
        message: "Please complete all fields."
      });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return res.status(400).json({
        ok: false,
        message: "Please enter a valid email address."
      });
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const destination = process.env.CONTACT_TO_EMAIL || gmailUser;

    if (!gmailUser || !gmailAppPassword || !destination) {
      console.error("Missing Gmail environment variables.");
      return res.status(500).json({
        ok: false,
        message: "Email service is not configured."
      });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword
      }
    });

    await transporter.sendMail({
      from: `"Mahdi Khalili Portfolio" <${gmailUser}>`,
      to: destination,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text:
`New portfolio message

Name: ${name}
Email: ${email}

Message:
${message}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#1f2937">
          <h2>New portfolio message</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
          <hr>
          <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
        </div>
      `
    });

    return res.status(200).json({
      ok: true,
      message: "Message sent successfully."
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return res.status(500).json({
      ok: false,
      message: "Message could not be sent. Please try again."
    });
  }
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
