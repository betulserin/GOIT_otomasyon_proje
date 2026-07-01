import LoginPage from '../pages/LoginPage';

describe('User Story - 03 - Ürün Detay Sayfası Görüntüleme ve Sepete Ekleme', () => {

  beforeEach(() => {
    cy.visit('https://www.kitapsepeti.com');
    LoginPage.handlePopups(); 
    cy.wait(1500); 
  });

  it('AC1 - Urun Detay Sayfasina Yonlendirme Kontrolu', () => {
    cy.get('#live-search').should('be.visible').clear().type('Hamnet');
    cy.wait(1500);
    cy.get('#live-search').type('{enter}');
    cy.get('body').should('not.have.class', 'is-loading');
    cy.get('a.image-wrapper.image-animate-zoom[href*="/hamnet"]').first().click({ force: true });
    cy.url().should('include', '/hamnet');
  });

  it('AC2 ve AC3 - Urun Temel Bilgileri ve Ozellikler Tablosu Kontrolu', () => {
    cy.get('#live-search').should('be.visible').clear().type('Hamnet');
    cy.wait(1500);
    cy.get('#live-search').type('{enter}');
    cy.get('body').should('not.have.class', 'is-loading');
    cy.get('a.image-wrapper.image-animate-zoom[href*="/hamnet"]').first().click({ force: true });
    cy.get('#product-title').should('be.visible');
    cy.get('#model-title').should('be.visible');
    cy.get('body').should('contain', 'Tür').and('contain', 'ISBN');
  });

  it('AC4 ve AC5 ve AC6 - Sepete Ekleme, Onay Mesaji ve Sepet Sayaci Kontrolu', () => {
    cy.get('#live-search').should('be.visible').clear().type('Hamnet');
    cy.wait(1500);
    cy.get('#live-search').type('{enter}');
    cy.get('body').should('not.have.class', 'is-loading');
    cy.get('a.image-wrapper.image-animate-zoom[href*="/hamnet"]').first().click({ force: true });
    cy.get('button#addToCartBtn').should('be.visible').click({ force: true });
    cy.wait(2000);
    cy.get('span.badge.cart-soft-count').should('be.visible').and('have.text', '1');
  });

  it('AC_Negatif - Gecersiz Urun URL\'ine Gidildiginde Hata Sayfasinin Kontrolu', () => {
    cy.visit('https://www.kitapsepeti.com/gecersiz-urun-url-test-ravzamira', { failOnStatusCode: false });
    cy.get('body').should('be.visible');
  });

});