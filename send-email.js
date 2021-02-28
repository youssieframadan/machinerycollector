var nodemailer = require('nodemailer');
const product = require('./models/product');

async function sendEmail(){

  products = await product.find({emailSent:false}).then((prod)=>{
    var data=""
    prod.forEach((item)=>{
      
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
//Arabcorporationsupply@gmail.com,adamgces@gmail.com,khaled.mohamed.5811@gmail.com
  var mailOptions = {
    from: 'machinerycollector087@gmail.com',
    to: 'Arabcorporationsupply@gmail.com,adamgces@gmail.com,khaled.mohamed.5811@gmail.com,youssief.r@gmail.com',
    subject: 'machinery collector',
    text: data,
  };
if(data!==""){
  console.log("sending email");
  transporter.sendMail(mailOptions, async function(error, info){
    if (error) {
      console.log("error sending email");
      return;
    } else {
      console.log('E-mail successfully sent: ' + info.response);
      
    }
  });
}
})
  await product.updateMany({emailSent:false}, {"$set":{"emailSent": true}});
}
module.exports = sendEmail;