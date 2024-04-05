class GuestUser{
    //check on the product name
    LapNameCheck(){
        return cy.contains("Apple MacBook Pro 13-inch")
    }
    ClickAddcourt(){
        return cy.get(':nth-child(2) > .product-item > .details > .add-info > .buttons > .product-box-add-to-cart-button')
    }
}
const GuestUserObject = new GuestUser
Cypress.Commands.add("PlaceOrderNOPcmrs",()=>{
    //Check the produc name
    GuestUserObject.LapNameCheck().scrollIntoView().should("be.visible")
    //click on the addcourt
    GuestUserObject.ClickAddcourt().click()
})


export default GuestUser