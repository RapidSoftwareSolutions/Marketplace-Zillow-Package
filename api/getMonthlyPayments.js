const lib     = require('../lib/functions');
const request = require('request');

module.exports = (req, res, callback) => {
	req.body.args = lib.clearArgs(req.body.args, false);

	let { 
		zwsId,
		price,
		down,
		dollarsdown,
		zip,
		to="to" } = req.body.args;

	if(!zwsId || !price) {
		callback('Fill in required fields.', res, {to}, ['zwsId', 'price']);
    	return;
	}

	let options = lib.clearArgs({
		'zws-id': zwsId,
		price,
		down,
		dollarsdown,
		zip
	});

	request({
		url: 'http://www.zillow.com/webservice/GetMonthlyPayments.htm',
		qs: options,
	}, (error, response, body) => {
	  	callback(error, res, {to, response, body})
	})
}