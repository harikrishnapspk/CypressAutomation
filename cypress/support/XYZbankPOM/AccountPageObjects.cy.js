class AccountPageObjects{
    CheckCustomerName(){
        //customer name visible!!
        return cy.contains("SAi Chandhu")
    }
    AccountNumber(){
        //Acount number Checking
        return cy.contains("Account Number")
    }
    MoneyCheck(){
        return cy.contains("Dollar")
    }
}
const AccountPage =new AccountPageObjects
Cypress.Commands.add("AccountPageDetails",()=>{
    //customer name visible
    AccountPage.CheckCustomerName().should("be.visible")
    //Account Number Checking
    AccountPage.AccountNumber().should("be.visible")
    //Money checking
    AccountPage.MoneyCheck().should("be.visible")
})

export default AccountPageObjects