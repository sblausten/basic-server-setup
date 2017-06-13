var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../../app/app');
var expect = chai.expect();

chai.use(chaiHttp);


describe('/', function() {
	it('should return 200', function(){
		chai.request(server)
			.get('/')
			.end(function(err, res){
				expect(err).to.be.null;
				expect(res).to.have.status(200);
			})
	})
	// xit('takes a value from url and saves it to local memory', function{

	// });
});