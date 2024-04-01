class DandWpage{
    ClickOnDeposite(){
        return cy.xpath('//button[@ng-click="deposit()"]')
    }
    AmountEnter(){
        return cy.xpath('//input[@ng-model="amount"]')
    }
    ClickDepositeAmount(){
        return cy.xpath('//button[@class="btn btn-default"]')
    }
    ClickWithdraButton(){
        return cy.xpath('//button[@ng-class="btnClass3"]')
    }
    EnterWithdraAmount(){
        return cy.xpath('//input[@type="number"]')
    }
    ClickOnWithdraButton(){
        return cy.xpath('//button[@type="submit"]')
    }
    CheckDeposite(){
        return cy.contains("Deposit Successful")
    }
}
const DepositAndWithdra = new DandWpage
Cypress.Commands.add("ClickOnDepositButton",()=>{
    //click on the Deposit Button
    DepositAndWithdra.ClickOnDeposite().click()
})
Cypress.Commands.add("AmountDeposite",(data)=>{
    //Enter On the Amount
    DepositAndWithdra.AmountEnter().type(data)
})
Cypress.Commands.add("ClickDepositAmount",()=>{
    //Click on the Deposite Amount button
    DepositAndWithdra.ClickDepositeAmount().click()
    //Deposite Checking
    DepositAndWithdra.CheckDeposite().should("be.visible")
})
Cypress.Commands.add("ClickOnWithdraButtonAndEnterAmount",(data)=>{
    //click on the Withdra button
    DepositAndWithdra.ClickWithdraButton().click()
    //Enter On the Withdra Amount
    DepositAndWithdra.EnterWithdraAmount().type(data)
})
Cypress.Commands.add("ClickOnWithdraButton",()=>{
    //Click on the withdra button
    DepositAndWithdra.ClickOnWithdraButton().click
})

export default DandWpage