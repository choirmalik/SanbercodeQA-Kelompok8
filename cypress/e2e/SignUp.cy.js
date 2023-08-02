describe('Sign UP', () => {
  it('Sign Up', () => {
    //url
    cy.visit('https://magento.softwaretestingboard.com/')
    cy.get('.panel > .header > :nth-child(3) > a').click({force : true})   
    cy.get('#firstname').type('Febri')
    cy.get('#lastname').type('Son')
    cy.get('#email_address').type('febrison009@gmail.com') 
    cy.get('#password').type('test1234!')
    cy.get('#password-confirmation').type('test1234!')
    cy.get('.submit').click()
    cy.get('.action.switch').click()
    cy.get('select').select('My Account')
    
  })
})