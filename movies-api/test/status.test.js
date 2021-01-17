let expect  = require('chai').expect;
const request = require('request');

describe('API Status', function() {
    it('Search Page content should be 200', function(done) {
        request('http://localhost:3000/search' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });


    it('Detail Page content should be 200', function(done) {
        request('http://localhost:3000/detail' , function(error, response, body) {
            expect(response.statusCode).to.equal(200);
            done();
        });
    });
});