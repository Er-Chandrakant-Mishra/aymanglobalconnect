import nodemailer from "nodemailer";

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  MAIL_FROM,
  MAIL_TO,
} = process.env;

if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !MAIL_TO) {
  // eslint-disable-next-line no-console
  console.warn(
    "[email] SMTP environment variables are not fully configured. Contact form emails will not be sent."
  );
}

const transporter =
  SMTP_HOST && SMTP_PORT && SMTP_USER && SMTP_PASS
    ? nodemailer.createTransport({
        host: SMTP_HOST,
        port: Number(SMTP_PORT),
        secure: Number(SMTP_PORT) === 465,
        auth: {
          user: SMTP_USER,
          pass: SMTP_PASS,
        },
      })
    : null;

export async function sendContactEmails(payload: Record<string, string>) {
  if (!transporter || !MAIL_TO) {
    // eslint-disable-next-line no-console
    console.log("[email] Skipping email send, transporter not configured.", {
      to: MAIL_TO,
      payload,
    });
    return;
  }

  const {
    fullName,
    email,
    phone,
    service,
    preferredDateTime,
    message,
    language,
    duration,
    agentsCount,
    routeCoverage,
    company,
  } = payload;

  const fromAddress = MAIL_FROM || MAIL_TO;

  const adminText = `
New contact / booking from Ayman Global Connect website

Name: ${fullName}
Company: ${company}
Email: ${email}
Phone / WhatsApp: ${phone}
Service: ${service}
Preferred date/time: ${preferredDateTime}
Language: ${language}
Estimated duration/package: ${duration}
Agents / drivers: ${agentsCount}
Route / coverage: ${routeCoverage}

Message / Job details:
${message}
`.trim();

  // Email to admin
  await transporter.sendMail({
    from: fromAddress,
    to: MAIL_TO,
    replyTo: email || undefined,
    subject: `New ${service || "service"} enquiry from ${fullName || "website"}`,
    text: adminText,
  });

  // Simple auto-reply to user
  if (email) {
    const userText = `
Hello ${fullName || ""},

Thank you for contacting Ayman Global Connect.
We have received your request regarding:

- Service: ${service}
- Preferred date/time: ${preferredDateTime}
- Phone / WhatsApp: ${phone}

Our team will review your details and get back to you as soon as possible.

Best regards,
Ayman Global Connect
info@aymanglobalconnect.com
`.trim();

    await transporter.sendMail({
      from: fromAddress,
      to: email,
      subject: "We received your request – Ayman Global Connect",
      text: userText,
    });
  }
}


