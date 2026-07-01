import LoginPage from '../pages/LoginPage';

Cypress.on('uncaught:exception', () => false);

describe('User Story - 05 - Ödeme ve Sipariş Onayı', () => {

  it('AC1-AC8 Tüm Ödeme Akisi', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    
    cy.visit('https://www.kitapsepeti.com');
    LoginPage.handlePopups();

    cy.get('a#header-account').click({ force: true });
    cy.get('#header-email', { timeout: 10000 }).should('be.visible').clear().type('testergoit657@gmail.com');
    cy.get('#header-password').should('be.visible').clear().type('testerGoit2206!');
    cy.get('.drawer-body form[data-toggle="login-form"] button[type="submit"]').click();
    
    cy.get('a#header-account .custom-user', { timeout: 20000 }).should('exist');
    cy.wait(4000); 

    cy.visit('https://www.kitapsepeti.com/sepet');
    cy.wait(2000);
    cy.get('body').then(($body) => {
      if ($body.find('a[id^="clear-cart-btn"]').length > 0) {
        cy.get('a[id^="clear-cart-btn"]').click({ force: true });
        cy.wait(2000);
      }
    });

    cy.visit('https://www.kitapsepeti.com/hamnet');
    cy.get('button#addToCartBtn', { timeout: 15000 }).should('be.visible').click({ force: true });
    cy.wait(2000);
    
    cy.get('a#cart-popup-go-cart', { timeout: 10000 }).should('be.visible').click({ force: true });
    cy.url({ timeout: 15000 }).should('include', '/sepet');

    cy.get('a#cart-buy-btn', { timeout: 15000 }).should('be.visible').click({ force: true });
    cy.url({ timeout: 20000 }).should('include', '/order/');
    cy.wait(2000); 
    
    cy.get('button.order-next-btn', { timeout: 10000 }).should('be.visible').click({ force: true });
    
    cy.get('#iyzipay-checkout-form-container', { timeout: 20000 }).should('be.visible');
    cy.wait(4000); 

    cy.get('.cargo-options').should('be.visible').and('contain', 'PTT Kargo');
    cy.get('body').should('contain', 'Kartla Ödeme');

    cy.get('#iyzipay-checkout-form-container button').last().should('be.visible');

    cy.get('input#input-iyzico-agreements').check({ force: true });
    cy.wait(1000);

    cy.get('#iyzipay-checkout-form-container button').last().click({ force: true });
    cy.wait(2000);
    
    cy.get('body').should('contain', 'Sipariş Özet').and('contain', 'Genel Toplam');
  });

});