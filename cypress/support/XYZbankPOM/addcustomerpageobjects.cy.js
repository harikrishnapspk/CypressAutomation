
class addcustomerpage {
    addcustomerbutton(){
        return cy.xpath('//button[@ng-class="btnClass1"]')
    }
    CostomerFirstName(){
        return cy.xpath('//input[@ng-model="fName"]')
    }
    CostomerLastName(){
        return cy.xpath('//input[@ng-model="lName"]')
    }
    CostomerPcode(){
        return cy.xpath('//input[@ng-model="postCd"]')
    }
    AddButton(){
        return cy.xpath('//button[@type="submit"]')
    }

}
const Costomerpage = new addcustomerpage
Cypress.Commands.add("AddCustomerLogIn",()=>{
    //click on the customerbutton to add detals
    Costomerpage.addcustomerbutton().should("be.visible")
    Costomerpage.addcustomerbutton().click()
})
Cypress.Commands.add("CustomerDetails",(Fname,Lname,Pcode)=>{
    //enter the customer detalis
    Costomerpage.CostomerFirstName().should("be.visible")
    Costomerpage.CostomerFirstName().type(Fname)
    Costomerpage.CostomerLastName().type(Lname)
    Costomerpage.CostomerPcode().type(Pcode)
})
Cypress.Commands.add("ClickOnCustomerPageButton",()=>{
    //click on the add button 
    Costomerpage.AddButton().click()
})
export default addcustomerpage