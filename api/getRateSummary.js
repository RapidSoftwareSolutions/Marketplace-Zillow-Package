const lib     = require('../lib/functions');
const request = require('request');

module.exports = (req, res, callback) => {
	req.body.args = lib.clearArgs(req.body.args, false);

	let { 
		zwsId,
		state,
		to="to" } = req.body.args;

	if(!zwsId) {
		callback('Fill in required fields.', res, {to});
    	return;
	}

	let options = lib.clearArgs({
		'zws-id': zwsId,
		state,
	});

	request({
		url: 'http://www.zillow.com/webservice/GetRateSummary.htm',
		qs: options,
	}, (error, response, body) => {
	  	callback(error, res, {to, response, body})
	})
}