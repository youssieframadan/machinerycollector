const sendmail = require('sendmail')();

sendmail({
    from: 'machinerycollector087@gmail.com',
    to: 'youssief.r@gmail.com',
    subject: 'machinery collector',
    html: 'Hooray NodeJS!!!'
}, function (err, reply) {
  console.log(err && err.stack)
  console.dir(reply)
})