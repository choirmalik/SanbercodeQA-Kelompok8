describe('Sign UP', () => {
  it('Sign Up', () => {
    //url
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.visit('https://magento.softwaretestingboard.com/customer/account/create/')    
    cy.get('#firstname').type('Juan')
    cy.get('#lastname').type('Daniel')
    cy.get('#email_address').type('juand21695@gmail.com') 
    cy.get('#password').type('juan1234!')
    cy.get('#password-confirmation').type('juan1234!')
    cy.get('.submit').click()
    cy.get('.action.switch').click()
    
    cy.get('select').select('My Account')
    
  })
})