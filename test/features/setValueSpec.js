var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app/app');

chai.use(chaiHttp);


describe('set value via GET request', function() {
	it('takes a value from url and saves it to local memory', function(done){
		chai.request(server)
			.get('/set')
			.end(function(err, res) {
				chai.expect(err).to.be.null;
				chai.expect(res).to.have.status(200);
				done();
			});
	});
});