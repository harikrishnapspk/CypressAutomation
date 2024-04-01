class TransectionPageDetails{
    //click on Transection button
    TransectionButton(){
        return cy.xpath('//button[@ng-class="btnClass1"]')
    }
    //Transections check
    TransectionDetails(){
        return cy.get("tbody")
    }
    EnterStartDate(){
        return cy.get("#start")
    }
    EnterEndDate(){
        return cy.get("#end")
    }
    LogoutButton(){
        return cy.get('[ng-show="logout"]')
    }
}
const TransectionPage = new TransectionPageDetails
Cypress.Commands.add("TransectionPageDetails",()=>{
    //click on Transection button
    TransectionPage.TransectionButton().click()
    //Transection page visibulation
    TransectionPage.TransectionDetails().should("be.visible")
})
Cypress.Commands.add("DateSelection",(date1,date2)=>{
    //enter start date
    TransectionPage.EnterStartDate().invoke('attr', 'min', '2017-12-01T00:00:00');
    //enter end date
    TransectionPage.EnterEndDate().type(date2)
})
Cypress.Commands.add("ENterLogoutButton",()=>{
    //click on log out button
    TransectionPage.LogoutButton().click()
})


export default TransectionPageDetails