const lib     = require('../lib/functions');
const request = require('request');

module.exports = (req, res, callback) => {
	req.body.args = lib.clearArgs(req.body.args, false);

	let { 
		zwsId,
		zpid,
		count,
		rentzestimate,
		to="to" } = req.body.args;

	if(!zwsId || !zpid || !count) {
		callback('Fill in required fields.', res, {to});
    	return;
	}

	let options = lib.clearArgs({
		'zws-id': zwsId,
		zpid,
		count,
		rentzestimate
	});

	request({
		url: 'http://www.zillow.com/webservice/GetDeepComps.htm',
		qs: options,
	}, (error, response, body) => {
	  	callback(error, res, {to, response, body})
	})
}