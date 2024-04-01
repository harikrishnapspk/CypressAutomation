class CustomerPage {
    //Click on Customer Button
    CustomerButton() {
        return cy.xpath('//button[@ng-click="customer()"]')
    }
    //selct name on the customer
    SelectName() {
        return cy.get("#userSelect")
    }
    LogInButton() {
        return cy.xpath('//button[@type="submit"]')
    }
}
const CustomerpageObject = new CustomerPage
//Create The Custom Command On Click Button
Cypress.Commands.add("ClickTheCustomerButtonAndSelectName", (data) => {
    //click on the customer button
    CustomerpageObject.CustomerButton().click()
    //select the customer name
    CustomerpageObject.SelectName().select(data)
})
//click the login button
Cypress.Commands.add("ClickOnTheLogInButton", () => {
    CustomerpageObject.LogInButton().click()
})
export default CustomerPage