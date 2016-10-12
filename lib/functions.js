module.exports.echoBadEnd = (r, to, res) => {
    r.contextWrites[to] = `Error: Fill in required fields to use the ${PACKAGE_NAME}.`;
    r.callback = 'error';

    res.status(200).send(r);
};

module.exports.clearArgs = function fn(obj, recurse) {
    for (var i in obj) {
        if (obj[i] == undefined || obj[i] == '') {
            delete obj[i];
        } else if (recurse && typeof obj[i] === 'object') {
            if(JSON.stringify(obj[i]) == '{}') {
                delete obj[i];
            }

            fn(obj[i], true);
        }
    }

    return obj;
}
