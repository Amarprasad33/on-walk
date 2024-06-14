const router = require("express").Router();
const nodemailer = require('nodemailer');


let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port: 587,               
    secure: false,           
    auth: {
      user: 'yadavrajsahil@gmail.com', 
    //   pass: ,    
    },
  });

router.post("/send-mail", async (req, res) => {
	
    const { to, subject, text, html } = req.body;

  let mailOptions = {
    from: 'on-walk', // Sender address
    to: to,                                         // List of recipients
    subject: subject,                               // Subject line
    text: text,                                     // Plain text body
    html: html,                                     // HTML body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    res.status(200).send(`Message sent: ${info.messageId}`);
  });

});

module.exports = router;

