describe("xyz bank sute",()=>{
    beforeEach(function(){
        //set viewport size
        cy.viewport(1920,1080)
       //load the fixture file
       cy.fixture("xyzbank").then((data)=>{
        this.data = data
        //launch the website
        cy.LogInWebsite(this.data.URL)
       }) 
    })
    it("Click on Maneger login button",function(){
        //click on the manager button
        cy.ClickOnManagerLoginButton()
        //click on the costmeralogin button
        cy.AddCustomerLogIn() 
        //fill the cutomer details
        cy.CustomerDetails(this.data.Fname,this.data.Lname,this.data.Pcode)
        //enter to click on the customer page button
        cy.ClickOnCustomerPageButton()
        //open to Openaccount button
        cy.OpenAccountButton()
        //select the name &currency 
        cy.SelectCustomerName(this.data.Name)
        cy.SelectCurrency(this.data.Currency)
        //click on the procces button 
        cy.ClickProccesButton()
        //enter to click on the customer button
        cy.ClickOnCustomerButton()
        //check the name in the list of custmer details
        cy.NameChecking()
        //return back to click on home button
        cy.ClickOnHomePageButton()
    })
    it.skip("Click On Customer Button",function(){
        cy.visit(this.data.LoginUrl)
        cy.AddCustomerLogIn() 
        cy.CustomerDetails(this.data.Fname,this.data.Lname,this.data.Pcode)
        cy.ClickOnCustomerPageButton()

    })
    it.skip("Open Customer Account",function(){
        cy.visit(this.data.OpenAccountUrl)
        cy.OpenAccountButton()
        cy.SelectCustomerName(this.data.Name)
        cy.SelectCurrency(this.data.Currency)
        cy.ClickProccesButton()
    })
    it.skip("Open Cusstomer Details",function(){
        cy.visit(this.data.customerdetalsurl)
        cy.ClickOnCustomerButton()
        cy.NameChecking()
        cy.ClickOnHomePageButton()
    })
})
