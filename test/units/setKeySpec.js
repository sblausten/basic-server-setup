var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app/app');

chai.use(chaiHttp);


describe('/', function() {
	it('should return 200', function(done) {
		chai.request(server)
			.get('/')
			.end(function(err, res){
				chai.expect(err).to.be.null;
				chai.expect(res).to.have.status(200);
				done();
			});
	});
	// query({name: 'foo', limit: 10}) // /search?name=foo&limit=10
});