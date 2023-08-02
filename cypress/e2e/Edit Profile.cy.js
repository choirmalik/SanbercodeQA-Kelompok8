describe('Edit Profile', () => {
  it('Edit Profile', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')    
    cy.get('#email').type('febrison009@gmail.com') 
    cy.get('#pass').type('test1234!')
    cy.get('#send2').click({force: true})
    cy.get(":nth-child(2) > .customer-welcome > .customer-menu > .header > :nth-child(1) > a"). click({force : true})
    cy.get('.block-dashboard-info > .block-content > .box > .box-actions > .edit > span').click({force : true})
    cy.get('#firstname').type('Febri').clear()
    cy.get('#firstname').type('testing123')
    cy.get('#form-validate > .actions-toolbar > div.primary > .action > span').click({force : true})
  })
})  