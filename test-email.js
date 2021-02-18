var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'machinerycollector087@gmail.com',
      pass: 'nLI77&SFGObufUyDrZ'
    }
});

var mailOptions = {
    from: 'machinerycollector087@gmail.com',
    to: 'youssief.r@gmail.com',
    subject: 'machinery collector',
    text: "data",
};

transporter.sendMail(mailOptions, async function(error, info){
    if(error) console.log(error);
    else console.log(info);
})