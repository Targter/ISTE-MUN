require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: `"CUMUN 2025 Registration" <${process.env.EMAIL_USER}>`,
  to: process.env.EMAIL_USER,  // replace with recipient email when sending
  subject: 'Registration Confirmation for CUMUN 2025 – Welcome to Technisia 2025!',
  text: `
Dear [Full Name],

Thank you for registering for CUMUN 2025, a dynamic 3-day Model United Nations conference, proudly organized as part of the Technisia 2025 festival.

Event Details:
- Event: CUMUN 2025 – Model United Nations Conference
- Duration: 3 days
- Part of: Technisia 2025
- Dates: [Insert Event Dates]
- Venue: [Insert Venue or "Virtual" if online]

We are delighted to have you join us as a [Delegate Type] representing [University Name]. Your committee preferences have been recorded as:
- Primary Committee: [Committee Preference 1]
- Secondary Committee: [Committee Preference 2]

Your participation will provide an excellent opportunity to engage in diplomatic discourse, develop critical skills, and network with peers.

Important Information:
- Please carry a valid ID for registration verification.
- Dress code: Formal business attire or traditional ethnic wear.

For any queries, please contact us at iste.cu@chandigarh.edu or call +91-XXXXXXXXXX.
Follow us on Instagram: @iste.cuchandigarh for more updates.

We look forward to welcoming you to an inspiring and rewarding CUMUN 2025 experience.

Best regards,
The CUMUN 2025 Team
Technisia 2025 Organizing Committee
Website: https://mun-iste.vercel.app/
  `,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.error('Test email error:', error);
  }
  console.log('Test email sent:', info.response);
});
