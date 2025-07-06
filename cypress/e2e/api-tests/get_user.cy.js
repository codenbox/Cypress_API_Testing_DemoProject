/// <reference types="cypress" />

describe('Learn REST API Testing with Cypress', () => {
    it('validate user details successfully', () => {
        cy.request({
            method: 'GET',
            url: '/api/users/2'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('data')
            expect(response.body.data).to.include.keys('id', 'email', 'first_name');
            expect(response.headers['content-type']).to.include('application/json')
            expect(response.body.data.id).to.eq(2)


        })


    })

        it('validate user details successfully', () => {
        cy.request({
            method: 'GET',
            url: '/api/users/2'
        }).as('user')
        cy.get('@user').its('status').should('eq', 200)
        cy.get('@user').its('body.data.id').should('eq', 2)
        cy.get('@user').its('headers').its('content-type')
            .should('include', 'application')


    })


    it.only('should handle 404 error gracefully', () => {
        cy.request({
            method: 'GET',
            url: '/api/users/23',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(404);
            //expect(response.body).to.be.empty;
            //codenbox2014@gmail.com
        });
    });



})
