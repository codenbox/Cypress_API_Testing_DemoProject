/// <reference types="cypress" />

describe('Learn REST API Testing with Cypress', () => {
    it('should update user information', () => {
        cy.request({
            method: 'PUT',
            url: '/api/users/2',
            headers: {
                'x-api-key': 'reqres-free-v1' // Add your API key here from: https://reqres.in/signup
            },
            body: {
                name: 'Sariful',
                job: 'Automation Developer'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.include({
                name: 'Sariful',
                job: 'Automation Developer'
            });
            expect(response.headers['content-type']).to.include('application/json');

        })


    })
})