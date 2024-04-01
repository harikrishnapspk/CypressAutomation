describe("xyz bank sute", () => {
    beforeEach(function () {
        //set viewport size
        cy.viewport(1920, 1080)
        //load the fixture file
        cy.fixture("xyzbank").then((data) => {
            this.data = data
            //launch the website
            cy.LogInWebsite(this.data.URL)
        })
    })
        it("Click on Maneger login button", function () {
            //click on the manager button
            cy.ClickOnManagerLoginButton()
            //click on the costmeralogin button
            cy.AddCustomerLogIn()
            //fill the cutomer details
            cy.CustomerDetails(this.data.Fname, this.data.Lname, this.data.Pcode)
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
            //click On The Customer Button
            cy.ClickTheCustomerButtonAndSelectName(this.data.Name)
            //Click On The LogIn Button
            cy.ClickOnTheLogInButton()
            //CheckTHe CusomerNAme
            cy.AccountPageDetails()
            //Click On Deposite Button
            cy.ClickOnDepositButton()
            //enter the amount to deposit
            cy.AmountDeposite(this.data.DpositAmount)
            //Click on the deposite Amount Button
            cy.ClickDepositAmount()
            //Click on withdra amount and enter amount
            cy.ClickOnWithdraButtonAndEnterAmount(this.data.WithdraAmount)
            //Transections are visiblation
            cy.TransectionPageDetails()
            //Date selection
            //cy.DateSelection(this.data.StatDate,this.data.EndDate)
            //Enter LogOut Button
            cy.ENterLogoutButton()
            //return back to click on home button
            cy.ClickOnHomePageButton()
        })
})

