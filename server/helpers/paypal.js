const paypal = require("paypal-rest-sdk");

require('dotenv').config();  

console.log('PAYPAL_MODE:', process.env.PAYPAL_MODE);
console.log('PAYPAL_CLIENT_ID:', process.env.PAYPAL_CLIENT_ID);
console.log('PAYPAL_CLIENT_SECRET:', process.env.PAYPAL_CLIENT_SECRET);

paypal.configure({
  mode: process.env.PAYPAL_MODE,  // 'sandbox' or 'live'
  client_id: process.env.PAYPAL_CLIENT_ID,
  client_secret: process.env.PAYPAL_CLIENT_SECRET,
});

module.exports = paypal;
