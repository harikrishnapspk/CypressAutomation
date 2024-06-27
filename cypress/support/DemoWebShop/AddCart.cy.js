class AddCortToTHeProduct {
    addcart_button() {
        return cy.xpath('(//input[@value="Add to cart"])[3]')
    }
    product_visible(){
        return cy.url().should('include','/build-your-cheap-own-computer')
    }
    add_to_cart(){
        return cy.xpath('//input[@id="add-to-cart-button-72"]')
    }
}
const add_tocart = new AddCortToTHeProduct
// create custom command
Cypress.Commands.add("product_add_tocart", () => {
    // click product on add to cart
    add_tocart.addcart_button().click()
    // verify on product shoping cart
    add_tocart.product_visible()
    // clicck add product
    add_tocart.add_to_cart().click()

})
export default AddCortToTHeProduct