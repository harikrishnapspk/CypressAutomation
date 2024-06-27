class LogInPage{
    //Click on the logIn Button
    LogInButton(){
        return cy.xpath('//a[@href="/login"]')
    }
    //check login page visible
    LogInPageVisible(){
        return cy.url().should("include","/login")
    }
    //click on the log in button to enter email
    EnterEmail(){
        return cy.get('#Email')
    }
    //Click to enter password
    EnterPassord(){
        return cy.get('#Password')
    }
    //check the remember check box
    CheckRemember(){
        return cy.get("#RememberMe")
    }
    //Click on the log in button
    ClickLogIn(){
        return cy.xpath('//input[@class="button-1 login-button"]')
    }

}
const LogInPageObjects = new LogInPage
Cypress.Commands.add("LogInIntoTheUser",(email,password)=>{
    //click on the log in page
    LogInPageObjects.LogInButton().click()
    //log in page visiblation
    LogInPageObjects.LogInPageVisible()
    //click on the log in button to enter email
    LogInPageObjects.EnterEmail().type(email)
    //Click to enter password
    LogInPageObjects.EnterPassord().type(password)
    //check the remember check box
    LogInPageObjects.CheckRemember().click()
    //Click on the log in button
    LogInPageObjects.ClickLogIn().click()
})

export default LogInPage