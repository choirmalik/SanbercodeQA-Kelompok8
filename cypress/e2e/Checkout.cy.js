describe('Fitur Proceed to Checkout', () => {
    it('Berhasil Checkout', () => {
        // Login
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/referer/aHR0cHM6Ly9tYWdlbnRvLnNvZnR3YXJldGVzdGluZ2JvYXJkLmNvbS8%2C/')
        cy.get('#email').type("abc@testmail.com")
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .password > .control > #pass').type("abcd1234!@#$")
        cy.get('.login-container > .block-customer-login > .block-content > #login-form > .fieldset > .actions-toolbar > div.primary > #send2 > span').click()
        
        // Add Product to Cart
        cy.visit('https://magento.softwaretestingboard.com/olivia-1-4-zip-light-jacket.html')
        cy.get('#option-label-size-143-item-168').click()
        cy.get('#option-label-color-93-item-50').click()
        cy.get('#product-addtocart-button').click()
        cy.wait(2000)

        // Proceed to Checkout
        cy.get('.showcart').click({multiple: true, force:true})
        cy.get('#top-cart-btn-checkout').click({multiple: true, force:true})
        cy.wait(2000)

        cy.get(':nth-child(1) > :nth-child(1) > .radio').click()
        cy.get('.button').click()
        cy.wait(2000)

        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click()
        cy.wait(2000)

        cy.get('.base').contains('Thank you for your purchase!')
    })
})