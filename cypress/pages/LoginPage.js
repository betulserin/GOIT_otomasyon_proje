class LoginPage {
  get acceptCookiesBtn() { return cy.contains('Tümünü Kabul Et'); } 
  get closeBannerBtn() { return cy.get('.ti-close'); } 
  get avatarIcon() { return cy.get('.custom-user').first(); } 
  get emailField() { return cy.get('#header-email'); } 
  get passwordField() { return cy.get('#header-password, input[type="password"]'); } 
  get forgotPasswordLink() { return cy.get('a[href="/uye-sifre-hatirlat"]'); } 
  get rememberMeCheckbox() { return cy.get('.header-remember, label[for="header-remember"]').first(); }
  get loginButton() { return cy.get('[id^="login-btn-"]'); } 
  get registerButton() { return cy.contains('Kayıt Ol'); } 
  get errorMessage() { return cy.get('body'); } 
  get resetEmailField() { return cy.get('#reset-email, input[name*="email"]'); }
  get remindPasswordButton() { return cy.get('#remind-btn, button[type="submit"]'); }
  handlePopups() {
    cy.get('body').then(($body) => {
      if ($body.text().includes('Tümünü Kabul Et')) {
        cy.contains('Tümünü Kabul Et').click({ force: true });
      }
    });
    cy.wait(2000); 
    cy.get('body').then(($body) => {
      if ($body.find('.ti-close').length > 0) {
        cy.get('.ti-close').click({ multiple: true, force: true }); 
      } else {
        cy.get('body').click(10, 10, { force: true });
      }
    });
  }
  login(email, password) {
    this.avatarIcon.click({ force: true });
    if (email) this.emailField.clear().type(email);
    if (password) this.passwordField.clear().type(password);
    this.loginButton.click({ force: true });
  }
}

export default new LoginPage();