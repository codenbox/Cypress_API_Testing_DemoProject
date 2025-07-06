/// <reference types="cypress" />

describe('Learn REST API Testing with Cypress', () => {
    it('should log in successfully and return a token', () => {

        cy.request({
            method: 'POST',
            url: '/api/login',
            headers: {
                'x-api-key': 'reqres-free-v1'
            },
            body: {
                email: 'eve.holt@reqres.in',
                password: 'cityslicka',
            }
        }).then((response) => {
            //assert status code
            expect(response.status).to.eq(200)
            // Assert token is returned in response body
            expect(response.body).to.have.property('token');
            expect(response.body.token).to.be.a('string');
            expect(response.body.token).to.eq('QpwL5tke4Pnpja7X4');


        })

    })

    it.only('should fail to log when password is missing', () => {

        cy.request({
            method: 'POST',
            url: '/api/login',
            failOnStatusCode:false, //avoid to failing the test automatically
            headers: {
                'x-api-key': 'reqres-free-v1'
            },
            body: {
                email: 'eve.holt@reqres.in',
                //password is missing
            }
        }).then((response) => {
            //assert status code
            expect(response.status).to.eq(400)
            // Assert resonse body 
            expect(response.body).to.have.property('error', 'Missing password');



        })


    })



})
