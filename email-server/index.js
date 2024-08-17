// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'yahoo',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});
transporter.verify()
// Middleware
app.use(cors());
app.use(bodyParser.json());

// Configure Nodemailer transporter


// POST endpoint to send email
app.post('/send-email', (req, res) => {
  const { name, email, subject, message, number } = req.body;

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient-email@example.com', // Replace with the recipient's email address
    subject: subject,
    text: `
      Name: ${name}
      Email: ${email}
      Phone Number: ${number || 'Not provided'}
      
      Message:
      ${message}
    `
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ success: false, message: error.message });
    }
    res.status(200).json({ success: true, message: 'Email sent: ' + info.response });
  });
});
app.get('/', (req, res) => {
   res.send('hello')
    });
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
