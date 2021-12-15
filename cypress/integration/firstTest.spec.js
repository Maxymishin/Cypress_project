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




it('Money transfer between foreign cards', () => {
    cy.visit('/money-transfer/card')
        .wait(1000)

    basePage.typeDebitCard('4552331448138217', '0524', '111', 'Shayne', 'Mcconnell')
    transfers.typeReceiverCardData('5309233034765085', 'Juliana', 'Janssen')
    basePage.typeAmout('300')
    cy.wait(2000)
    basePage.submitPayment()
    transfers.checkDebitAndReceiverCard('4552 3314 4813 8217','5309 2330 3476 5085' )
    transfers.chaeckPayerCurrency('86.60')
    transfers.checkTotalPrice('386.60')

    
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
});


it('Example sending the GET request', () => {
    cy.request('https://next.privat24.ua')
        .then((response) => {
            console.log(response)
        });
});


it('Example sending the POST request', () => {
    
    const requestBody = {
        action:"info",
        phone:"+380661212151",
        amount:50,
        currency:"UAH",
        cardCvv:"111",
        card:"4552331448138217",
        cardExp:"0126",
        xref:"8ee6dec566280e7fe52336a538db3149",
        _:1639590442509
};

    const headersData = {
    cookie: '_ga=GA1.2.1888305688.1638718623; _gid=GA1.2.1345853324.1639237814; pubkey=b376e4a69f952eb631c4168661adf3f3; _gat_gtag_UA_29683426_11=1; fp=28; lfp=12/5/2021, 5:37:13 PM; pa=1639319285741.530.405423821440299next.privat24.ua0.9649893154639626+11'
    };
    
    cy.request({
        method: "POST",
        url: "https://next.privat24.ua/api/p24/pub/mobipay",
        body: requestBody,
        headers: headersData,
    })
        .then((response) => {
            console.log(response.body)
    });
});


//Example HTTP POST with expect verification of responce 
it('Example sending the POST request', () => {
    
    const requestBody = {
        action:"info",
        phone:"+380661212151",
        amount:50,
        currency:"UAH",
        cardCvv:"111",
        card:"4552331448138217",
        cardExp:"0126",
        xref:"8ee6dec566280e7fe52336a538db3149",
        _:1639590442509
};

    const headersData = {
    cookie: '_ga=GA1.2.1888305688.1638718623; _gid=GA1.2.1345853324.1639237814; pubkey=b376e4a69f952eb631c4168661adf3f3; _gat_gtag_UA_29683426_11=1; fp=28; lfp=12/5/2021, 5:37:13 PM; pa=1639319285741.530.405423821440299next.privat24.ua0.9649893154639626+11'
    };
    
    cy.request({
        method: "POST",
        url: "https://next.privat24.ua/api/p24/pub/mobipay",
        body: requestBody,
        headers: headersData,
    })
        .then((response) => {
            expect(response).to.have.property('status').to.equal(200)
            expect(response.body).to.have.property('status').to.equal('success')
            expect(response.body.data).to.have.property('amount').to.have.equal('50.0')
            console.log(response.body)
    });
});

//Example HTTP POST with shoul verification of responce 
it.only('Example sending the POST request', () => {
    
    const requestBody = {
        action:"info",
        phone:"+380661212151",
        amount:50,
        currency:"UAH",
        cardCvv:"111",
        card:"4552331448138217",
        cardExp:"0126",
        xref:"8ee6dec566280e7fe52336a538db3149",
        _:1639590442509
};

    const headersData = {
    cookie: '_ga=GA1.2.1888305688.1638718623; _gid=GA1.2.1345853324.1639237814; pubkey=b376e4a69f952eb631c4168661adf3f3; _gat_gtag_UA_29683426_11=1; fp=28; lfp=12/5/2021, 5:37:13 PM; pa=1639319285741.530.405423821440299next.privat24.ua0.9649893154639626+11'
    };
    
    cy.request({
        method: "POST",
        url: "https://next.privat24.ua/api/p24/pub/mobipay",
        body: requestBody,
        headers: headersData,
    }).its('body').should('contain', {
        status: 'success'
    }).its('data').should('contain', {
        status: 'ok'
    })
});
