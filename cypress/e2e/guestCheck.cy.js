import LoginPage from '../pages/LoginPage';

Cypress.on('uncaught:exception', () => false);

describe('User Story - 06 - Misafir Olarak Satın Alma Akışı', () => {

  it('AC1-AC6 Misafir Ödeme Uçtan Uca Akış', () => {
    cy.clearCookies();
    cy.clearLocalStorage();

    cy.visit('https://www.kitapsepeti.com');
    LoginPage.handlePopups();

    cy.visit('https://www.kitapsepeti.com/hamnet');
    
    cy.get('button#addToCartBtn', { timeout: 15000 }).should('be.visible').click({ force: true });
    cy.wait(2000);

    cy.get('a#cart-popup-go-cart', { timeout: 10000 }).should('be.visible').click({ force: true });
    cy.url({ timeout: 15000 }).should('include', '/sepet');

    cy.get('a#cart-buy-btn', { timeout: 15000 }).should('be.visible').click({ force: true });
    cy.url({ timeout: 20000 }).should('include', '/siparis-uye-giris');

    cy.contains('button', 'Üye Olmadan Devam Et').should('be.visible');

    cy.contains('button', 'Üye Olmadan Devam Et').click({ force: true });
    cy.get('form#order-address-form', { timeout: 15000 }).should('be.visible');
    
    cy.get('input#fullname').should('exist');
    cy.get('input[name="email"]').should('exist');
    cy.get('input#mobile_phone').should('exist');
    cy.get('select#city_code').should('exist');
    cy.get('.town-container').should('exist');
    cy.get('.district-container').should('exist');
    cy.get('textarea#address').should('exist');

    cy.contains('button', 'Adresi Kaydet').should('be.visible').click({ force: true });
    cy.get('span.popover-item').contains('Lütfen bu alanı doldurunuz').should('be.visible');

    cy.get('input#fullname').clear().type('Ravzamira Serin');
    cy.get('input[name="email"]').clear().type('testergoit657@gmail.com');
    cy.get('input#mobile_phone').clear().type('5555555555');

    cy.get('select#city_code').select('Ankara', { force: true });
    cy.wait(2000); 

    cy.get('.town-container select').should('be.visible').select(1, { force: true });
    cy.wait(2000); 

    cy.get('.district-container select').should('be.visible').select(1, { force: true });

    cy.get('textarea#address').clear().type('Yazılım Test Otomasyon Mahallesi, QA Sokak, No: 42');

    cy.contains('button', 'Adresi Kaydet').click({ force: true });

    cy.url({ timeout: 20000 }).should('include', '/order/');
    cy.get('#iyzipay-checkout-form-container', { timeout: 15000 }).should('exist');
  });

});