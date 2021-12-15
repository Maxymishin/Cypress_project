export class MobilePhoneReplenishment {
  typePhoneNumber(phoneNumber) {
    cy.get('[data-qa-node="phone-number"]').type(phoneNumber);
  }

  // typeAmout(amount){
  //     cy.get('[data-qa-node="amount"]')
  //         .type(amount)
  // }

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

  // submitPayment(){
  //     cy.get('button[type="submit"]')
  //         .click()
  // }

  checkDebitCard(debitCard) {
    cy.get('[data-qa-node="card"]').should("have.text", debitCard);
  }

  checkMobileOperetorName(operatorName) {
    cy.get('[data-qa-node="nameB"]').should("have.text", operatorName);
  }

  checkСurrency(currency) {
    cy.get('[data-qa-node="amount"]').should("contain.text", currency);
  }
}

export const mobileReplenishment = new MobilePhoneReplenishment();
