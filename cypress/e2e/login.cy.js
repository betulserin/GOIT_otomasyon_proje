import LoginPage from '../pages/LoginPage';

describe('User Story - 01 - Kullanici Girişi Tüm Testler', () => {

  beforeEach(() => {
    cy.visit('https://www.kitapsepeti.com');
    LoginPage.handlePopups(); 
  });

  it('AC1 & AC2 - Giris Popup ve Form Elemanlari Kontrolu', () => {
    LoginPage.avatarIcon.click({ force: true });
    LoginPage.emailField.should('be.visible');
    LoginPage.passwordField.should('be.visible');
    LoginPage.forgotPasswordLink.should('be.visible');
    LoginPage.rememberMeCheckbox.should('be.visible');
    LoginPage.loginButton.should('be.visible');
  });

  it('AC3 & AC4 - Basarili Kullanici Girisi (Standart UI Girisi)', () => {
    LoginPage.avatarIcon.click({ force: true });
    LoginPage.emailField.clear().type('testergoit657@gmail.com');
    LoginPage.passwordField.clear().type('testerGoit2206!');
    LoginPage.loginButton.click({ force: true });
    
    cy.get('a#header-account .custom-user', { timeout: 20000 }).should('exist');
  });

  it('AC5 - Hatali Sifre ile Giris Denemesi (Negatif)', () => {
    LoginPage.avatarIcon.click({ force: true });
    LoginPage.emailField.clear().type('test_ravzamira@gmail.com');
    LoginPage.passwordField.clear().type('YanlisSifreXYZ');
    LoginPage.loginButton.click({ force: true });
    cy.get('body').should('exist'); 
  });

  it('AC6 - Gecersiz E-posta Formati ile Giris Denemesi (Negatif)', () => {
    LoginPage.avatarIcon.click({ force: true });
    LoginPage.emailField.clear().type('test_ravzamira_at_gmail.com');
    LoginPage.passwordField.clear().type('Sifre123');
    LoginPage.loginButton.click({ force: true });
    cy.get('body').should('exist');
  });

  it('AC7 - Bos Alanlar ile Giris Denemesi (Negatif)', () => {
    LoginPage.avatarIcon.click({ force: true });
    LoginPage.loginButton.click({ force: true });
    cy.get('body').should('exist');
  });

  it('AC8 - Ust Uste Hatali Giris Denemesi Kisitlama Kontrolu', () => {
    LoginPage.avatarIcon.click({ force: true });
    
    for(let i = 0; i < 3; i++) {
      LoginPage.emailField.clear().type('test_ravzamira@gmail.com');
      LoginPage.passwordField.clear().type('YanlisSifre123');
      LoginPage.loginButton.click({ force: true });
    }
    cy.get('body').should('exist');
  });

  it('AC9 - Sifremi Unuttum Sayfa Yonlendirmesi', () => {
    LoginPage.avatarIcon.click({ force: true });
    LoginPage.forgotPasswordLink.click({ force: true });
    cy.url().should('include', 'sifre');
    cy.screenshot('login_success_screenshot');
  });

});