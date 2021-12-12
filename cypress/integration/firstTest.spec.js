/// <reference types="Cypress" />

it('Should', () => {
    cy.visit('/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
        .type(100)
        .should('have.value', 100)
        .and('be.visible');
})

it('Expect', () => {
    cy.visit('/mobile?lang=en')
    cy.get('[data-qa-node="amount"]')
        .type(100).then( input => {
            expect(input).to.have.value(100)
        })
    })

it('check default value for deposit', () => {
    cy.visit('/deposit?lang=en')
    cy.get('[data-qa-value="UAH"]')
        .should('be.checked')
        });

it('Check is visible Archive link ', () => {
    cy.visit('/deposit?lang=en')
    cy.contains('Мої депозити')
        .trigger('mouseover')
        .get('#archiveDeposits')
        .should('be.visible')
        });

it('check is correct attr button', () => {
    cy.visit('/?lang=en')
    cy.contains('Show cards')
        .should('have.attr', 'type')
        .and('match', /button/)
    })

it.only('check is correct URL', () => {
    cy.visit('https://next.privat24.ua/?lang=en')
    cy.url()
        .should('eq','https://next.privat24.ua/?lang=en')
    })