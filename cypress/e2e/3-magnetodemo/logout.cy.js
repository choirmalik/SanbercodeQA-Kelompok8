describe('Logout Test', () => {
    it('Verifikasi dapat logout setelah berhasil login', () => {
      // Login
      cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
      cy.get('#email').type("yosephineherlina20040205@gmail.com")
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("@Yosephine2004")
      cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
      
      // Logout
      cy.get('[data-action="customer-menu-toggle"]').click({multiple : true, force: true})
      cy.get(':nth-child(2) > .customer-welcome > .customer-menu > .header > .authorization-link > a').click({multiple : true, force: true})
      
      cy.get('.panel > .header > .authorization-link > a').should('be.visible')
      cy.get('.panel > .header > :nth-child(3) > a').should('be.visible')
    })
  })