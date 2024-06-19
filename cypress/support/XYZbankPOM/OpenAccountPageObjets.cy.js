class OpenAccount{
    OpenAccountPage(){
        return cy.xpath('//button[@ng-class="btnClass2"]')
    }
    SelectCusumerName(){
        return cy.xpath('//select[@id="userSelect"]')
    }
    CurrencyButton(){
        return cy.xpath('//select[@id="currency"]')
    }
    ProccessButton(){
        return cy.xpath('//button[@type="submit"]')
    }
}
const OpenAccountPage = new OpenAccount
Cypress.Commands.add("OpenAccountButton",()=>{
    //click on the open page button
    OpenAccountPage.OpenAccountPage().should("be.visible")
    OpenAccountPage.OpenAccountPage().click()
})
Cypress.Commands.add("SelectCustomerName",(data)=>{
    //select the customer name
    OpenAccountPage.SelectCusumerName().select(data)
})
Cypress.Commands.add("SelectCurrency",(data)=>{
    //select the currency on the customer
    OpenAccountPage.CurrencyButton().select(data)
})
Cypress.Commands.add("ClickProccesButton",()=>{
    //click to proccess button
    OpenAccountPage.ProccessButton().click()
})





export default OpenAccount