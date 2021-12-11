/// <reference types="Cypress" />

it('By ID', () => {
    cy.visit("https://facebook.com/")
    cy.get('#email')
});

it('By CLass', () => {
    cy.visit("https://facebook.com/")
    cy.get('.email')
});

it('By Tag', () => {
    cy.visit("https://facebook.com/")
    cy.get('nav')
});

it('By Tag Value', () => {
    cy.visit("https://facebook.com/")
    cy.get('[name="pass"]')
});

it('By diffent tag ', () => {
    cy.visit("https://facebook.com/")
    cy.get('[data-testid="open-registration-form-button"]' /* [tag="value"]' */)
});

it.only('By Contains Name', () => {
    cy.visit("/")
    cy.get('*[class^="card"]')
});

it('Using Get with Find and Ea', () => {
    cy.visit("https://next.privat24.ua/deposit")
    cy.get('tbody').find('td').find('div').find('button').eq(0)
});

it.only('Using Get with Find and Ea', () => {
    cy.viewport(1800, 700)
    cy.visit("https://docs.cypress.io/api/commands/get#Arguments")
    cy.get('main').find('div').find('nav').find('ul').find('li').find('a').eq(0)
});





