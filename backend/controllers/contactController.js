import Contact from "../models/Contact.js"
import nodemailer from "nodemailer"

export const sendMessage = async (req, res) => {

  try {

    const { name, email, message } = req.body

    // Save message to database
    const newMessage = new Contact({
      name,
      email,
      message
    })

    await newMessage.save()

    // Email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    // Send email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New Message from ${name}`,
      html: `
        <h3>New Portfolio Message</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    })

    res.status(200).json({
      success: true,
      message: "Message sent successfully"
    })

  } catch (error) {

    console.error("Email Error:", error)

    res.status(500).json({
      success: false,
      message: "Email failed to send"
    })
  }
}