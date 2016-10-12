'use strict';

/** IMPORTS **/
const express       = require('express'),
    bodyParser      = require('body-parser'),
    fs              = require('fs'),
    xml2js          = require('xml2js');


const PORT          = process.env.PORT || 8080;
global.PACKAGE_NAME = "Zillow";

const app = express();
app.use(bodyParser.json(({limit: '50mb'})));
app.use(bodyParser.urlencoded({limit: '50mb', extended:true}));
app.all(`/api/${PACKAGE_NAME}`, require('./api/metadata.js').do);

const errors = {
    '2': `Check if you have provided a ZWSID in your API call. If yes, check if the ZWSID is keyed in correctly. If it still doesn't work, contact API Network@zillow.com to get help on fixing your ZWSID.`,
    '3': `The Zillow Web Service is currently not available. Please come back later and try again.`,
    '4': `The Zillow Web Service is currently not available. Please come back later and try again.`,
}   

let callback = (err, res, r) => {
 	let response = {
        callback     : "",
        contextWrites: {}
    };
        
    if(err || r.response.statusCode !== 200) {
        response.callback = 'error';
        response.contextWrites[r.to] = typeof err == 'object' ? JSON.stringify(err) : err;
    } else {
        var parser = new xml2js.Parser();

        parser.parseString(r.body, function (err, result) {            
            let code    = Object.keys(result)[0],
                message = result[code]['message'][0];

            if(errors[message.code[0]] || message.code[0].match(/50/)) {
                response.callback = 'error';
                response.contextWrites[r.to] = errors[message.code[0]] || message.text[0];
            } else {
                response.callback = 'success';
                response.contextWrites[r.to] = JSON.stringify(result[code]['response'][0]);
            }
        });
    }

    res.status(200).send(response);
}

fs.readdirSync('api/').forEach((file) => {
    try {
        var type    = file.substring(file.lastIndexOf('.') + 1),
            route   = file.substring(0, file.length - type.length - 1);

       if(!type == 'js') return;

       let fn = require(`./api/${file}`);
       app.all(`/api/${PACKAGE_NAME}/${route}`, function(req, res) {return fn(req, res, callback)});
       
    } catch(e) { 
    	console.log(e);
    	return; 
    }
});

app.listen(PORT);
module.exports = app;

