
describe("using css selectors",()=>{
    beforeEach(()=>{
        //visit the site
    cy.visit('https://naveenautomationlabs.com/opencart/')
    //site visible successfully
    cy.url().should('include',"/opencart/")
    })
it('login_using_selectors', function(){
    //enter the rigester
    cy.get(".list-inline .dropdown  .dropdown-toggle").click()
    //click the singup
    cy.get(".dropdown-menu > :nth-child(1)> a").click()
    //fill up the form details
    cy.get("#input-firstname").type("pavan")
    cy.get("[name='lastname']").type("kalyan")
    cy.get("[type='email']").type('hari123@gmail.com')
    cy.get("[placeholder='Telephone']").type("9010896009")
    cy.get("#input-password").type("hari@123")
    cy.get("#input-confirm").type("hari@123")
    //click the check box 
    cy.get(".col-sm-10 >:nth-child(1) >input").click()
    //click the agree check box
    cy.get("[name='agree']").click()
    //enter submit
    cy.get(".btn.btn-primary").click()
    //click to continue on the site
    cy.get(".pull-right>.btn").click()
    //account is already existed
    cy.get(".alert").should("be.visible")
    //click my account
    cy.get(".list-inline .dropdown  .dropdown-toggle").click()
    //click login 
    cy.get(".dropdown-menu.dropdown-menu-right>:nth-child(2)>a").click()
    //login page visible
    cy.url().should("include","/index.php?route=account/login")
    cy.get(".form-control").eq(1).type("hari123@gmail.com")

}) 

})