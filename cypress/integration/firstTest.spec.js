/// <reference types="Cypress" />

import { basePage } from "../support/pages/basePage"
import { mobileReplenishment } from "../support/pages/mobileReplenishment"
import { transfers } from "../support/pages/transfer"

it('Replenisment of Ukraine mobile phone number', () => {
    cy.visit('/mobile')
    cy.wait(2000)

       mobileReplenishment.typePhoneNumber('662331223')
       basePage.typeAmout('10')
       basePage.typeDebitCard('4552331448138217', '0524', '111', 'Shayne', 'Mcconnell')
       basePage.submitPayment()
       mobileReplenishment.checkDebitCard('4552 **** **** 8217')
       mobileReplenishment.checkMobileOperetorName('Vodafone')
       mobileReplenishment.checkСurrency('UAH')
   

        // .get('[data-qa-node="phone-number"]')
        // .type('662331223')

        // .get('[data-qa-node="amount"]')
        // .type('1')

        // .get('[data-qa-node="numberdebitSource"]')
        // .type('4552331448138217')

        // .get('[data-qa-node="expiredebitSource"]')
        // .type('0524')

        // .get('[data-qa-node="cvvdebitSource"]')
        // .type('111')
        
        // .wait(1000)
        
        // .get('[data-qa-node="firstNamedebitSource"]')
        // .type('Shayne')
        
        // .get('[data-qa-node="lastNamedebitSource"]')
        // .type('Mcconnell')
        
        // .get('[data-qa-node="submit"]')
        // .click()

        // .get('[data-qa-node="card"]')
        // .should('have.text', '4552 **** **** 8217')

        // .get('[data-qa-node="nameB"]')
        // .should('have.text', 'Vodafone')
        
        // .get('[data-qa-node="amount"]')
        // .should('contain.text', 'UAH')    
        
})




it.only('Money transfer between foreign cards', () => {
    cy.visit('/money-transfer/card')
        .wait(1000)

    basePage.typeDebitCard('4552331448138217', '0524', '111', 'Shayne', 'Mcconnell')
    transfers.typeReceiverCardData('5309233034765085', 'Juliana', 'Janssen')
    basePage.typeAmout('300')
    cy.wait(2000)
    basePage.submitPayment()
    transfers.checkDebitAndReceiverCard('4552 3314 4813 8217','5309 2330 3476 5085' )
    transfers.chaeckPayerCurrency('85.95 UAH')
    transfers.checkTotalPrice('385.95')

    
        // .get('[data-qa-node="numberdebitSource"]')
        // .type('4552331448138217')

        // .get('[data-qa-node="expiredebitSource"]')
        // .type('0524')

        // .get('[data-qa-node="cvvdebitSource"]')
        // .type('111')

        // .get('[data-qa-node="cvvdebitSource"]')
        // .type('111')
        
        // .get('[data-qa-node="firstNamedebitSource"]')
        // .type('Shayne')

        // .get('[data-qa-node="lastNamedebitSource"]')
        // .type('Mcconnell')

        // .get('[data-qa-node="numberreceiver"]')
        // .type('5309233034765085')
        // .wait(1000)
        // .get('[data-qa-node="firstNamereceiver"]')
        // .type('Juliana')
        // .get('[data-qa-node="lastNamereceiver"]')
        // .type('Janssen')

        // .get('[data-qa-node="amount"]')
        // .type('300')

        // .get('button[type="submit"]')
        // .click()
        // .wait(2000)

        // cy.get('[data-qa-node="payer-card"]')
        // .should('have.text', '4552 3314 4813 8217')

        // .get('[data-qa-node="receiver-card"]')
        // .should('have.text', '5309 2330 3476 5085')

        // .get('[data-qa-node="payer-currency"]')
        // .should('contain.text', '85.95 UAH')

        // .get('[data-qa-node="total"]')
        // .should('contain.text', '385.95')
})





