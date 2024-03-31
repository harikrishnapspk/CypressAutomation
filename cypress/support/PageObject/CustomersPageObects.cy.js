class CustomerPage{
    CustomersButton(){
        return cy.xpath('//button[@ng-class="btnClass3"]')
    }
    TableBody(){
        return cy.get('tbody')
    }
}
const CustomerView = new CustomerPage
Cypress.Commands.add("ClickOnCustomerButton",()=>{
    //click on Customer Button
    CustomerView.CustomersButton().click()
})
Cypress.Commands.add("NameChecking",()=>{
    //visible on the name on custmer detals page
    CustomerView.TableBody().should("be.visible")
})
export default CustomerPage