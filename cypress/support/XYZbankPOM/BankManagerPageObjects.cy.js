class managerPageObjects{
    bankManagerLoginButton(){
        return cy.xpath('//button[@ng-click="manager()"]')
    }
}
//object create on BankManagerPage
const BankManagerPage= new managerPageObjects
//create costamcommand on log in button
Cypress.Commands.add("ClickOnManagerLoginButton",()=>{
    //assertion on login button
    BankManagerPage.bankManagerLoginButton().should("be.visible")
    //action do click on the log in buttotn
    BankManagerPage.bankManagerLoginButton().click()
})
//create custom command on log in wesuite
Cypress.Commands.add("LogInWebsite",(URL)=>{
    //visite the site
    cy.visit(URL)
    //login page visiblation
    cy.url().should("include","/login")
})
export default managerPageObjects