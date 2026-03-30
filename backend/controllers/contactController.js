import Contact from "../models/contact.js"
import nodemailer from "nodemailer"

export const sendMessage = async (req, res) => {

  try {

    const { name, email, message } = req.body

    const newMessage = new Contact({
      name,
      email,
      message
    })

    await newMessage.save()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: "New Portfolio Contact Message",
      text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
      `
    })

    res.json({
      success: true,
      message: "Message sent successfully"
    })

  } catch (error) {

    console.log(error)

    res.status(500).json({
      success: false,
      message: "Server Error"
    })

  }

}