/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('the user visits the DemoBlaze website', () => {
    cy.visit('https://www.demoblaze.com/');
    cy.viewport(1800,1000)
  });

  When('the user clicks on the "Sign up" button', () => {
    cy.get('#signin2').click()
    cy.wait(2000)
});

Then("Verity that the sign up tag is displayed", function () {
  cy.get('#signInModalLabel')
    .should('be.visible');
});

When('the user enters valid {string} and {string}', (username, password) => {
  cy.get('#sign-username').type('Tommalyn');
  cy.get('#sign-password').type('schoolbag@123');
});

When('the user submits the sign-up form', () => {
  cy.contains('Sign up').click();

});