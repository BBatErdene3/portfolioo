import sgMail from '@sendgrid/mail'

// Require env: SENDGRID_API_KEY, CONTACT_TO, CONTACT_FROM
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string)

export default defineEventHandler(async (event) => {
  try {
    const { name, email, message } = await readBody<{ name: string; email: string; message: string }>(event)

    const to = process.env.CONTACT_TO || process.env.SENDER_EMAI
    const from = process.env.CONTACT_FROM || process.env.RECIPIENT_EMAIL

    if (!process.env.SENDGRID_API_KEY || !to || !from) {
      return { success: false, message: 'Missing email configuration' }
    }

    const msg = {
      to: 'bbtrdene@yahoo.com',
      from: 'baterdeneb186@gmail.com', // must be a verified sender in SendGrid
      replyTo: email,
      subject: `New Contact from ${name}`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    }

    await sgMail.send(msg)
    return { success: true, message: 'Mail sent' }
  } catch (error: any) {
    console.error('MAIL ERROR:', error?.response?.body || error)
    return { success: false, message: 'Failed to send email' }
  }
})


