const lib     = require('../lib/functions');
const request = require('request');

module.exports = (req, res, callback) => {
	req.body.args = lib.clearArgs(req.body.args, false);

	let { 
		zwsId,
		zpid,
		unitType,
		width,
		height,
		chartDuration,
		to="to" } = req.body.args;

	if(!zwsId || !zpid || !unitType) {
		callback('Fill in required fields.', res, {to});
    	return;
	}

	let options = lib.clearArgs({
		'zws-id': zwsId,
		'unit-type': unitType,
		zpid,
		width,
		height,
		chartDuration
	});

	request({
		url: 'http://www.zillow.com/webservice/GetChart.htm',
		qs: options,
	}, (error, response, body) => {
	  	callback(error, res, {to, response, body})
	})
}