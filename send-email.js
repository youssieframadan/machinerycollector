var nodemailer = require('nodemailer');
const product = require('./models/product');

async function sendEmail(){

  products = await product.find({emailSent:false}).then((product)=>{
    var data=""
    product.forEach((item)=>{
      
      data += "product Title: "+item["title"]+'\n'
      +"product price: "+item["price"]+'\n'
      +"product country: "+item["country"]+'\n'
      +"Product Link:"+'\n'+item["link"]+'\n'+'\n'
      
    })
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'machinerycollector087@gmail.com',
      pass: 'nLI77&SFGObufUyDrZ'
    }
  });
//Arabcorporationsupply@gmail.com
  var mailOptions = {
    from: 'machinerycollector087@gmail.com',
    to: 'youssief.r@gmail.com',
    subject: 'machinery collector',
    text: data,
  };
if(data!==""){
  console.log("sending email");
  transporter.sendMail(mailOptions, async function(error, info){
    if (error) {
      console.log("error sending email");
    } else {
      console.log('E-mail successfully sent: ' + info.response);
      await product.updateMany({emailSent:false}, {"$set":{"emailSent": true}});
    }
  });
}
})
}
sendEmail()
// module.exports = sendEmail;