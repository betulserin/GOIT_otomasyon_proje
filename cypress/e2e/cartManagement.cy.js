import LoginPage from '../pages/LoginPage';

Cypress.on('uncaught:exception', () => false);

describe('User Story - 04 - Sepet Yönetimi ve Kontrolü', () => {

  it('AC1-AC10 Uçtan Uca Kesintisiz Sepet Akışı', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    
    cy.visit('https://www.kitapsepeti.com');
    LoginPage.handlePopups();
    cy.get('body').should('not.have.class', 'is-loading');
    cy.wait(1000);

    cy.get('#live-search').should('be.visible').clear().type('Hamnet');
    cy.wait(1500);
    cy.get('#live-search').type('{enter}');
    cy.get('body').should('not.have.class', 'is-loading');
    cy.wait(2000); 
    
    cy.get('a.image-wrapper.image-animate-zoom[href*="/hamnet"]').last().click({ force: true });
    
    cy.get('button#addToCartBtn').should('be.visible').click({ force: true });
    cy.get('a#cart-popup-go-cart', { timeout: 10000 }).should('be.visible').click({ force: true });
    cy.url().should('include', '/sepet');

    cy.get('#cart-page', { timeout: 10000 }).should('exist').and('be.visible');
    cy.get('.cart-price-box .row.fw-bold.text-body .col-6.pl-0.text-right').should('exist').and('be.visible');
    cy.get('a, button').contains('Satın Al', { matchCase: false }).should('be.visible');

    cy.get('span[id^="qty-plus"]').click({ force: true });
    cy.wait(1500); 

    cy.get('a[id^="delete-product"]').click({ force: true });
    cy.wait(1500);

    cy.visit('https://www.kitapsepeti.com/hamnet');
    cy.get('button#addToCartBtn', { timeout: 15000 }).should('be.visible').click({ force: true });
    cy.get('a#cart-popup-go-cart', { timeout: 10000 }).should('be.visible').click({ force: true });
    cy.url().should('include', '/sepet');

    cy.get('a[id^="clear-cart-btn"]').should('be.visible').click({ force: true });
    cy.wait(2000);
    
    cy.get('p.fw-light.text-center.mb-2').should('be.visible');
    cy.get('a#cart-back-btn.btn.btn-dark').should('be.visible');
  });

});