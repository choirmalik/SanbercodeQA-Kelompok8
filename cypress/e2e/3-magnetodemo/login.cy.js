describe('template spec', () => {
  it('Verifikasi dapat masuk dengan email dan password yang benar dan terdaftar', () => {
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
    cy.get('#email').type("yosephineherlina20040205@gmail.com")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("@Yosephine2004")
    cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
  })


it('Verifikasi tidak dapat masuk dengan email yang salah ', () => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
  cy.get('#email').type("yosephineherlina2004020c5@gmail.com")
  cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("@Yosephine2004")
  cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
})

it('Verifikasi tidak dapat masuk dengan password yang salah ', () => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
  cy.get('#email').type("yosephineherlina20040205@gmail.com")
  cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("@Yosephin8989")
  cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
})


it('Verifikasi dapat masuk dengan akun yang tidak terdaftar', () => {
  cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
  cy.get('#email').type("herlinayosepin@gmail.com")
  cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("Halohalo")
  cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
})
})
