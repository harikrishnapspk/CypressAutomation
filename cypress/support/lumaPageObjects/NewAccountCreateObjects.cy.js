class NewAccountObjects {
    accountbutton(){
        return cy.contains("Create an Account").eq(0)    
    }
    AccountPage(){
        return cy.get('[data-ui-id="page-title-wrapper"]')
    }
    Fname(){
        return cy.get('#firstname')
    }
    Lname(){
        return cy.get('#lastname')
    }
    Email(){
        return cy.get('#email_address')
    }
    Password(){
        return cy.get('#password')
    }
    ConformPassword(){
        return cy.get('[id="password-confirmation"]')
    }
    SubmitButton(){
        return cy.get('[type="submit"]').eq(1)
    }
    CheckACcreate(){
        return cy.contains('Thank you for registering with Main Website Store.')
    }
    CheckDetails(){
        return cy.get('[class="box-title"]').eq(0)
    }
    AccountHolderName(){
        return cy.get('[class="logged-in"]').eq(0)
    }
    Logo(){
        return cy.get('.logo')
    }
    clicktogglebutton(){
        return cy.xpath('(//button[@type="button"])[1]')
    }
    Myaccount(){
        return cy.contains('My Account').eq(0)
    }
    MyOders(){
        return cy.contains("My Orders")
    }
    MyOder(){
        return cy.xpath("//table[@id='my-orders-table']//tbody/tr")
    }
    SingOut(){
        return cy.xpath('(//div[@data-target="dropdown"]//ul//li)[3]')
    }

}
const accountobjects = new NewAccountObjects

Cypress.Commands.add("createAnAccountPage",function(Fname,Lname){
    //click the create account button
    accountobjects.accountbutton().click()
    //create account page is visible or not
    accountobjects.AccountPage().should("be.visible")
    //enter the first name
    accountobjects.Fname().type(Fname)
    //enter the last name
    accountobjects.Lname().type(Lname)
    //enter the email 
    const email = `test${Date.now()}@example.com`
    accountobjects.Email().type(email)
    //enter the password
    const password = `Pass${Math.floor(Math.random() * 100000)}!`
    accountobjects.Password().type(password)
    //enter the conform password
    accountobjects.ConformPassword().type(password)
    //click the submit buttoon
    accountobjects.SubmitButton().click()
    cy.wait(5000)
    //checking the account create or not
    accountobjects.CheckACcreate().should("be.visible")
    //Checking account details
    accountobjects.CheckDetails().should("be.visible")
    //checking account holder name visible or not
    accountobjects.AccountHolderName().should("be.visible")
    //back to the home page
    accountobjects.Logo().click({force:true})
})
Cypress.Commands.add("PlaceOrderCheck",function(){
    //click the account holder  page
    accountobjects.clicktogglebutton().click({force:true})
    //click the my account page
    accountobjects.Myaccount().click()
    //click the my orders page
    accountobjects.MyOders().click()
    //check my order is visible or not
    accountobjects.MyOder().should("be.visible")
    //back to the home page
    accountobjects.Logo().click({force:true})
})
Cypress.Commands.add("SingOutThePage",()=>{
    //click the toggle button on account holder
    accountobjects.clicktogglebutton().click({force:true})
    //click the sing out button 
    accountobjects.SingOut().click({force:true})

})

export default NewAccountObjects