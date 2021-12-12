/// <reference types="Cypress" />

//type

it('type', () => {
    cy.visit('mobile/lang=en')
        .get('[data-qa-node="phone-number"]')
        .type(111222333)
})


it('focus', () => {
    cy.visit('mobile/lang=en')
        .get('[data-qa-node="amount"]')
        .focus()
})


it('focus', () => {
    cy.visit('mobile/lang=en')
        .get('[data-qa-node="amount"]')
        .focus()
        .blur()
})


it('clear', () => {
    cy.visit('mobile/lang=en')
        .get('[data-qa-node="amount"]')
        .type(350)
        .wait(2000)
        .clear()
})

it('submit', () => {
    cy.visit('mobile/lang=en')
        .get('form[method="post"]')
        .submit()
})


it('click', () => {
    cy.visit('mobile/lang=en')
        .get('[data-qa-value="manual"]')
        .click()
})



it('rightclick', () => {
    cy.visit('https://example.cypress.io/commands/actions')
        .contains('Right click to edit')
        .rightclick()
})

it('doubleclick', () => {
    cy.visit('https://yari-demos.prod.mdn.mozit.cloud/en-US/docs/Web/API/Element/dblclick_event/_sample_.Examples.html')
        .contains('My Card')
        .dblclick()
})

it('check', () => {
    cy.visit('https://www.facebook.com/reg/?')
        .get('input[value="2"]')
        .check()         
})

it('uncheck', () => {
    cy.visit('https://en.privatbank.ua/')
        .get('#switch-input')
        .check({force: true})
        .wait(2000)
        .uncheck({force: true})

})

/* it.only('check', () => {
    cy.visit('https://facebook.com/')
    cy.contains('English (US)')
        .click()
    cy.contains('Create a Page')
        .click()
        .wait(2000)
    cy.get('a[tabindex="4"]')
        .focus()
        .click()
}) */

it('select', () => {
    cy.visit('https://facebook.com/')
    cy.contains('Створити обліковий запис')
        .click()
        .get('#month')
        .select('сен')
        .get('#day')
        .select('23')
        .get('#year')
        .select('1990')

})
it('scrollIntoView', () => {
    cy.visit('/')
        .get('[data-qa-node="lang"]')
        .wait(2000)
        .scrollIntoView()

})
it('scrollTo', () => {
    cy.visit('/')
        .wait(2000)
    cy.scrollTo(0, 500)
})

it.only('mouseover', () => {
    cy.visit('/deposit?lang=en')
    cy.contains('Мої депозити')
        .wait(2000)
        .trigger('mouseover')
        });








