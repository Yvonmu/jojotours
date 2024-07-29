import nodemailer from 'nodemailer';

interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

const sendEmail = async ({ to, subject, text, html }: EmailOptions): Promise<void> => {
  try {
    // Ensure environment variables are defined
    const user = process.env.EMAIL;
    const pass = process.env.KEYPASS;

    if (!user || !pass) {
      throw new Error('Email credentials are not defined in environment variables');
    }

    // Create a nodemailer transporter using your Gmail account
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    });

    // Define email options
    const mailOptions = {
      from: 'it@greenhillsacademy.rw',
      to,
      subject,
      text,
      html,
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
