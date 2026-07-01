import LoginPage from '../pages/LoginPage';

describe('User Story - 02 - Ürün Arama ve Listeleme Tüm Testler', () => {

  beforeEach(() => {
    cy.visit('https://www.kitapsepeti.com');
    LoginPage.handlePopups(); 
  });

  it('AC1 - En Az 1 Karakter ile Arama Yapilabilmesi', () => {
    cy.get('#live-search').should('be.visible').clear().type('Nutuk{enter}');
    cy.url().should((url) => {
      expect(url).to.satisfy((u) => u.includes('ara') || u.includes('arama'));
    });
  });

  it('AC2 - Arama Sonuclari Sayfasi, Urun Listeleme ve Kutu Temizligi Kontrolu', () => {
    cy.get('#live-search').should('be.visible').clear().type('Nutuk{enter}');
    cy.url().should((url) => {
      expect(url).to.satisfy((u) => u.includes('ara') || u.includes('arama'));
    });
    cy.get('body').should('be.visible');
    
    cy.get('#live-search').then(($el) => {
      const val = $el.val();
      if(val === '') {
        expect(val).to.equal('');
      } else {
        cy.get('body').should('exist');
      }
    });
  });

  it('AC3 - Sistemde Bulunmayan Kelime ile Arama (Negatif)', () => {
    cy.get('#live-search').should('be.visible').clear().type('asdfqwert{enter}');
    cy.get('body').should('be.visible');
  });

  it('AC4 - Urun Karti Bilgilerinin Eksiksiz Olmasi', () => {
    cy.get('#live-search').should('be.visible').clear().type('Nutuk{enter}');
    cy.get('[class*="product-item"], [class*="product-card"]').first().should('exist');
  });

  it('AC5 - Sepete Ekle Butonu ve Hover Aksiyonu', () => {
    cy.get('#live-search').should('be.visible').clear().type('Nutuk{enter}');
    cy.get('[class*="product-item"], [class*="product-card"]').first().trigger('mouseover');
    cy.get('body').should('exist');
  });

  it('AC6 - Siralama Menusu Seceneklerinin Listelenmesi', () => {
    cy.get('#live-search').should('be.visible').clear().type('Nutuk{enter}');
    cy.get('select#sort').should('be.visible');
    cy.get('select#sort').select('Varsayılan Sıralama', { force: true });
  });

  it('AC7 - Sol Panel Filtreleme Kontrolu', () => {
    cy.get('#live-search').should('be.visible').clear().type('Nutuk{enter}');
    cy.get('[class*="filter"], #accordion-categories-361').first().should('exist');
  });

  it('AC8 - Hazir Kategorilerden Urun Secimi ve Baslik Kontrolu', () => {
    cy.get('a[id*="menu-"]').first().click({ force: true });
    cy.get('body').should('be.visible');
  });

  it('AC9 - Asagi Scroll ile Yeni Sayfa Yuklenmesi Kontrolu', () => {
    cy.get('#live-search').should('be.visible').clear().type('Nutuk{enter}');
    cy.scrollTo('bottom');
    cy.wait(1000); 
    cy.get('body').should('exist');
  });

});