const lib     = require('../lib/functions');
const request = require('request');

module.exports = (req, res, callback) => {
	req.body.args = lib.clearArgs(req.body.args, false);

	let { 
		zwsId,
		price,
		down,
		amount,
		rate,
		schedule,
		terminmonths,
		propertytax,
		hazard,
		pmi,
		hoa,
		zip,
		to="to" } = req.body.args;

	if(!zwsId) {
		callback('Fill in required fields.', res, {to});
    	return;
	}

	let options = lib.clearArgs({
		'zws-id': zwsId,
		price,
		down,
		amount,
		rate,
		schedule,
		terminmonths,
		propertytax,
		hazard,
		pmi,
		hoa,
		zip
	});

	request({
		url: 'http://www.zillow.com/webservice/mortgage/CalculateMonthlyPaymentsAdvanced.htm',
		qs: options,
	}, (error, response, body) => {
	  	callback(error, res, {to, response, body})
	})
}