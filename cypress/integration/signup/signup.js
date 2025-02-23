/// <reference types="Cypress" />​

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('I open the Demoblaze homepage', () => {

  cy.visit('https://www.demoblaze.com');  // Visit the Demoblaze homepage

});
When('I click on the "Sign up" button', () => {
   cy.get('#signin2').click();
   cy.wait(2000)                    

});



Then('I should see the sign-up tag', () => {
   cy.get('h5').contains('Sign up').should('exist')
   .should('be.visible');

});

When('I enter a valid username and password', () => {

let username = "Tommalyn"

let password = "schoolbag@123"

//cy.get('#sign-username').type(this.data.username)

//cy.get('#sign-password').type(this.data.password)

cy.get('#sign-username').type("username"+ Cypress._.random(0, 1e6))

cy.get('#sign-password').type(password)

cy.wait(2000)

});



  

  Then('I submit the sign-up form',() => {

    cy.get('button').contains('Sign up').click({ force: true });

    cy.wait(2000)

    

    });



    When('I enter an existing valid username and password', () => {

      let username = "Tommalyn"

      let password = "schoolbag@123"

      //cy.get('#sign-username').type(this.data.username)

      //cy.get('#sign-password').type(this.data.password)

      cy.get('#sign-username').type(username)

      cy.get('#sign-password').type(password)

      cy.wait(2000)

    });



    Then("I should see an error message 'This user already exist'",() => {

            cy.on('window:alert',(txt)=>{

                expect(txt).to.contains('This user already exist.');

            })

        });



        When('I enter a valid username', () => {

          let username = "Tommalyn"

          //cy.get('#sign-username').type(this.data.username)

          //cy.get('#sign-password').type(this.data.password)

          cy.get('#sign-username').type(username)

          cy.wait(2000)

        });



        Then("I should see an error message {string}.", function (string) {

          cy.on('window:alert',(txt)=>{

            expect(txt).to.contains('Please fill out Username and Password.');

          })

      });