const emailSender = require('nodemailer');
require('dotenv').config();

let transporter = emailSender.createTransport({
    service: 'gmail',
    auth: {
        user: 'demoprasmit45@gmail.com',
        pass: process.env.PASSWORD
    }
});

let mailDetails = {
    from : 'demoprasmit45@gmail.com', 
    to   : 'prasmit.dev@tamu.edu',
    subject: 'Covid Contact Tracer',
    html : '<h4>Welcome! You will recieve an email if we suspect you have been contracted with COVID-19!</h4>' 
};

transporter.sendMail(mailDetails, (err, info) => {
    if(err){
        console.log('Error');
    } else{
        console.log('Email Sent Successfully');
    }
});