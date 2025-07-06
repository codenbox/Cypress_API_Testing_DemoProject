/// <reference types="cypress" />

describe('Learn REST API Testing with Cypress', ()=>{
    it('My first test', function(){
        cy.request('/api/users/2').then((response)=>{
            cy.log(JSON.stringify(response.body))
            cy.log(JSON.stringify(response.headers))
             cy.log(JSON.stringify(response.body.data.email))
        })

    })
})