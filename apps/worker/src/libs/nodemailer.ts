import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com", 
  port: 587,
  secure: false,
  auth: {
    user: "vasudevgarg7@gmail.com",
    pass: "ffqj bolp kahl wcne",
  },
});

export function sendMail(address, body) {
  const mailOptions = {
    from: "vasudevgarg7@gmail.com",
    to:address,
    subject: "Mail regarding zapier",
    text: body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
