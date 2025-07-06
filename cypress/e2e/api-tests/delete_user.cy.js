/// <reference types="cypress" />

describe('Learn REST API Testing with Cypress', () => {
    it('should delete the user successfully', () => {

        cy.request({
            method:'DELETE',
            url:'/api/users/2',
            failOnStatusCode: false,
             headers: {
                'x-api-key': 'reqres-free-v1' // Add your API key here from: https://reqres.in/signup
            },

        }).then((response)=>{
            expect(response.status).to.eq(204)
            expect(response.body).to.be.empty;
        })
        
        })
    })

