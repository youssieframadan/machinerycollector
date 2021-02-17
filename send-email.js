const sendmail = require('sendmail')({
  devPort: 1025, // Default: False
  devHost: 'localhost', // Default: localhost
  smtpPort: 2525, // Default: 25
  smtpHost: 'localhost' // Default: -1 - extra smtp host after resolveMX
});
const product = require('./models/product');

async function sendEmail(){
  console.log("sending email");
  products = await product.find({emailSent:false}).then((product)=>{
    var data=""
    product.forEach((item)=>{
      
      data += "product Title: "+item["title"]+'\n'
      +"product price: "+item["price"]+'\n'
      +"product country: "+item["country"]+'\n'
      +"Product Link:"+'\n'+item["link"]+'\n'+'\n'
      
    })
  //   var transporter = nodemailer.createTransport({
  //   service: 'gmail',
  //   auth: {
  //     user: 'machinerycollector087@gmail.com',
  //     pass: 'nLI77&SFGObufUyDrZ'
  //   }
  // });
//Arabcorporationsupply@gmail.com
  // var mailOptions = {
  //   from: 'machinerycollector087@gmail.com',
  //   to: 'youssief.r@gmail.com',
  //   subject: 'machinery collector',
  //   text: data,
  // };
if(data!==""){
  sendmail({
    from: 'machinerycollector087@gmail.com',
    to: 'youssief.r@gmail.com',
    subject: 'machinery collector',
    html: data,
  }, function(err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
});

  // transporter.sendMail(mailOptions, function(error, info){
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log('E-mail successfully sent: ' + info.response);
  //   }
  // });
}
})
  await product.updateMany({emailSent:false}, {"$set":{"emailSent": true}});
}

module.exports = sendEmail;