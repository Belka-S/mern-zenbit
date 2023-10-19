const nm = require('nodemailer');

const { HttpError } = require('./HttpError');

const { NODEMAILER_HOST, NODEMAILER_USER, NODEMAILER_PASS } = process.env;

const transporter = nm.createTransport({
  host: NODEMAILER_HOST,
  port: 465,
  secure: true,
  auth: { user: NODEMAILER_USER, pass: NODEMAILER_PASS },
});

const nodemailer = async msg => {
  try {
    await transporter.sendMail(msg); // console.log(`Email sent to ${email}`);
  } catch (error) {
    throw HttpError(500, error.message);
  }
};

module.exports = { nodemailer };
