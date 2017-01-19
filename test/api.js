let assert = require('chai').assert;
let request = require('supertest-as-promised');

let app = require('../index');


let zwsId        = 'X1-ZWz1fh6qrhfbij_4lr3d',
    zpid         = '48749425',
    address      = '2114 Bigelow Ave',
    citystatezip = 'Seattle',
    unitType     = 'percent',
    width        = 300,
    height       = 150,
    count        = 1,
    state        = 'wa',
    childtype    = 'neighborhood',
    city         = 'seattle',
    price        = 300000,
    down         = 15,
    amount       = 15,
    zip          = 98104;


describe('/Zillow Package', function() {

    it('/getZestimate', function() {
        this.timeout(10000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getZestimate')
        .send({args: { zwsId, zpid }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/getSearchResults', function() {
        this.timeout(10000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getSearchResults')
        .send({args: { zwsId, address, citystatezip }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/getDeepSearchResults', function() {
        this.timeout(10000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getSearchResults')
        .send({args: { zwsId, address, citystatezip }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/getChart', function() {
        this.timeout(10000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getChart')
        .send({args: { zwsId, zpid, unitType, width, height }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/getComps', function() {
        this.timeout(10000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getComps')
        .send({args: { zwsId, zpid, count }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/getDeepComps', function() {
        this.timeout(10000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getDeepComps')
        .send({args: { zwsId, zpid, count }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/getUpdatedPropertyDetails', function() {
        this.timeout(10000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getUpdatedPropertyDetails')
        .send({args: { zwsId, zpid }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });

    it('/getRegionChildren', function() {
        this.timeout(10000);

        return request(app)
        .post('/api/'+ global.PACKAGE_NAME +'/getRegionChildren')
        .send({args: { zwsId, state, city, childtype }})
        .expect(200)
        .then((data) => {
            assert.equal(data.body.callback, 'success');
        });
    });
});
