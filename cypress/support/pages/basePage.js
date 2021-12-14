export class BasePage{
    typeDebitCard(cardNumber, exDate, cvv, firstName, lastName){
        cy.get('[data-qa-node="numberdebitSource"]')
            .type(cardNumber)
            .get('[data-qa-node="expiredebitSource"]')
            .type(exDate)
            .get('[data-qa-node="cvvdebitSource"]')
            .type(cvv)
            .wait(1000)
            .get('[data-qa-node="firstNamedebitSource"]')
            .type(firstName)
            .get('[data-qa-node="lastNamedebitSource"]')
            .type(lastName)
    }

    typeAmout(amount){
        cy.get('[data-qa-node="amount"]')
            .type(amount)
    }
    submitPayment(){
        cy.get('button[type="submit"]')
            .click()
    }

    
}

export const basePage = new BasePage()