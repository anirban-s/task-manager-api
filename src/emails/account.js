const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "codingtutorial101@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancellaionEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "codingtutorial101@gmail.com",
    subject: "We are sorry to lose you!",
    text: `Goodbye! ${name}. Let me know if you change your mind to stay in the app.`,
  });
};

module.exports = { sendWelcomeEmail, sendCancellaionEmail };
