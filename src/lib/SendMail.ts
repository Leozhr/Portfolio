import nodemailer from 'nodemailer';

type MailProps = {
  from: string;
  to: string;
  subject: string;
  text: string;
}

const sendMailer = async () => {
  const transporter = nodemailer.createTransport({
    host: 'sandbox.smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: '88a6764167e677',
      pass: 'cf710acc618841',
    },
  });

  const mailOptions = {
    from: 'ace784830c-8e9093+1@inbox.mailtrap.io',
    to: 'leonardo.tech7@proton.me',
    subject: 'Portfólio - Nova Mensagem 🌞',
    text: 'This is a test email sent using Mailtrap and Node.js',
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

export { sendMailer };

