const chai = require('chai');
const chaiHttp = require('chai-http'); 
const server = require('../api/apiData');


chai.use(chaiHttp);

describe('Associate app', () => {
    it('Navigate to the URL', () => {
        chai.request(server)
        .get(loginEndpoint)
        .end((err, response) => {
            response.should.have.status(200);
        done();
        })
} )
    
//Login in to mobile app via the app 


//


//Grab the token 

    

})



