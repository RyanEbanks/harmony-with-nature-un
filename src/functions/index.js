const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');

admin.initializeApp();
const db = admin.firestore();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'YOUR_EMAIL@gmail.com',
    pass: 'YOUR_APP_PASSWORD', // App password from Gmail settings
  },
});

exports.sendTwoFactorCode = functions.https.onRequest(async (req, res) => {
  const { email } = req.body;

  // Generate a random 6-digit code
  const code = Math.floor(100000 + Math.random() * 900000).toString();

  // Store the code in Firestore (optional expiration timestamp)
  await db.collection('twoFactorCodes').doc(email).set({
    code,
    createdAt: admin.firestore.FieldValue.serverTimestamp(),
  });

  // Send the email
  const mailOptions = {
    from: 'YOUR_EMAIL@gmail.com',
    to: email,
    subject: 'Your 2FA Code',
    text: `Your verification code is: ${code}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).send('Error sending email');
    }
    return res.status(200).send('Email sent successfully');
  });
});
