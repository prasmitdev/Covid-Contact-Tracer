require('dotenv').config();

const accountSid ='ACdad7aac5dba84174f30f5a96a82f68b1'; // Your Account SID from www.twilio.com/console
const authToken =process.env.AUTH_TOKEN;   // Your Auth Token from www.twilio.com/console


const twilio = require('twilio');
const client = new twilio(accountSid, authToken);

client.messages.create({
    body: `Welcome to Covid Contact Tracer. You will recieve a warning text from this number if we suspect you have been contracted with COVID-19.`,
    to: '+19797392236',  // Text this number
    from: '+12314471102' // From a valid Twilio number
})
.then(console.log('Message Sent'));

