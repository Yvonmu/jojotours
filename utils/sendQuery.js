import nodemailer from 'nodemailer';

// Function to send email using nodemailer
const sendEmail = async ({ to, subject, text, html, attachments }) => {
  try {
    // Create a nodemailer transporter using your Gmail account
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_QUERY,
        pass: process.env.PASS_QUERY,
      },
    });

    // Define email options
    const mailOptions = {
      from: 'infodesk@samengt.com',
      to,
      subject,
      text,
      html,
      attachments, 
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Error sending email');
  }
};

export default sendEmail;
