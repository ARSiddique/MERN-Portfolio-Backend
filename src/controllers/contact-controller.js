import { validationResult } from 'express-validator';
import transporter from '../utils/mailer.js';

export const sendContact = async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, message } = req.body;
    const mailOptions = {
        from: `"${name}" <${email}>`,
        to: process.env.CONTACT_EMAIL,
        subject: `Contact from ${name}`,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p>
           <p><strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong><br/>${message}</p>`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully.' });
};