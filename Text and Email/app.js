const express = require('express');
const fs = require('fs');
require('dotenv').config();
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const { response } = require('express');

app.use(express.static(__dirname + '/UI'));

app.use('/',function(req,res,next){
    console.log('Request Url:' +req.url);

    let con = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "matlab",
        database: "users",
        port: 3306
    });
    

    con.connect(function(err){
        if(err) throw err;
        console.log(connected);
        let sql = `INSERT INTO userinfo(
                        first name,
                        last name,
                        phone number,
                        email)
                    VALUES (
                        'Sandy',
                        'Wilson,
                        '1234567863',
                        'lalu@tamu.edu'
                    )`;
        con.query(sql, function(err, result){
            if(err) throw err;
            console.log("1 record inserted");
        });
    });
    next();
});


app.get('/',function(req, res){
    res.send('Whats up!');
});

app.listen(process.env.PORT,function(err, success){
    if(err){
        console.log('Cant Connect');
    } else{
        console.log('Server is running.. PORT ' + process.env.PORT);
    }
});