describe('Edit Profile', () => {
  it('Edit Profile', () => {
    //url
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')    
    cy.get('#email').type('juand21695@gmail.com') 
    cy.get('#pass').type('juan1234!')
    cy.get('#send2').click({force: true})
  })
})  