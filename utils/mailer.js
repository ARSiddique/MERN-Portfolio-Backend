// src/utils/mailer.js
// Load environment variables before anything else
import 'dotenv/config';
import nodemailer from 'nodemailer';

// Create transporter with SMTP settings and timeouts to prevent long delays
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === 'true', // true for port 465, false for 587
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    // Timeouts in milliseconds
    connectionTimeout: 5000,  // Limits time to establish TCP connection
    greetingTimeout: 3000,    // Limits time to receive SMTP greeting
    socketTimeout: 10000,     // Limits inactivity on socket
});

// Verify SMTP connection on startup (optional) to confirm settings
transporter.verify()
    .then(() => console.log('SMTP connection successful'))
    .catch(err => console.error('SMTP connection error:', err));

export default transporter;
