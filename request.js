const request = require('request');

module.exports = function (apiKey, uri, callback) {

    let response       = {};
        response.items = [];    

    (function doRequest(uri, callback) {

        request(uri, (err, res, body) => {
            if(err || res.statusCode !== 200) {
                callback(err, res, body);
                return;
            }
            
            let parsed = JSON.parse(body);

            if(!parsed.items.length) {
                callback(null, res, response);
                return;
            }

            for (var i = parsed.items.length - 1; i >= 0; i--) {
                response.items.push(parsed.items[i]);
            }

            if(parsed.paging && parsed.paging.next) {
                doRequest(parsed.paging.next, callback);
            }
            else 
                callback(null, res, response);

        }).auth('api', apiKey);

    })(uri, callback);
}