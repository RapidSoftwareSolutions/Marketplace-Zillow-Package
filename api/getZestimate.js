const lib     = require('../lib/functions');
const request = require('request');

module.exports = (req, res, callback) => {
	req.body.args = lib.clearArgs(req.body.args, false);

	let { 
		zwsId,
		zpid,
		rentzestimate,
		to="to" } = req.body.args;

	if(!zwsId || !zpid) {
		callback('Fill in required fields.', res, {to}, ['zwsId', 'zpid']);
    	return;
	}

	let options = lib.clearArgs({
		'zws-id': zwsId,
		'zpid': zpid,
		'rentzestimate': rentzestimate
	});

	request({
		url: 'http://www.zillow.com/webservice/GetZestimate.htm',
		qs: options,
	}, (error, response, body) => {
	  	callback(error, res, {to, response, body, code: 'Zestimate:zestimate'})
	})
}