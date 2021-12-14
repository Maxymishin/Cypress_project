export class Transfers {
    // typeDebitCard(cardNumber, exDate, cvv, firstName, lastName){
    //     cy.get('[data-qa-node="numberdebitSource"]')
    //         .type(cardNumber)
    //         .get('[data-qa-node="expiredebitSource"]')
    //         .type(exDate)
    //         .get('[data-qa-node="cvvdebitSource"]')
    //         .type(cvv)
    //         .wait(1000)
    //         .get('[data-qa-node="firstNamedebitSource"]')
    //         .type(firstName)
    //         .get('[data-qa-node="lastNamedebitSource"]')
    //         .type(lastName)
    // }

    typeReceiverCardData(cardNumber, firstName, lastName){
        cy.get('[data-qa-node="numberreceiver"]')
        .type(cardNumber)
        .wait(1000)
        .get('[data-qa-node="firstNamereceiver"]')
        .type(firstName)
        .get('[data-qa-node="lastNamereceiver"]')
        .type(lastName)
    }

    // typeAmout(amount){
    //     cy.get('[data-qa-node="amount"]')
    //         .type(amount)
    // }
    
    // submitPayment(){
    //     cy.get('button[type="submit"]')
    //         .click()
    
    // }

    checkDebitAndReceiverCard(debitCard, receiverCard){
        cy.get('[data-qa-node="payer-card"]')
            .should('have.text', debitCard)
            .get('[data-qa-node="receiver-card"]')
            .should('have.text', receiverCard)
    }
    chaeckPayerCurrency(payerCurrency){
       cy.get('[data-qa-node="payer-currency"]')
            .should('contain.text', payerCurrency)
    }

    checkTotalPrice(total){
        cy.get('[data-qa-node="total"]')
            .should('contain.text', total)
    }
}
export const transfers = new Transfers()