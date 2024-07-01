class SingUpPage{
    //click the sing up button
    SingupButton(){
        return cy.contains("Sign In").eq(0)
    }
    //singUppage checking
    SingUpPage(){
        return cy.url().should("include","/login")
    }
    //click on the new account singup link
    clicknewaccount(){
        return cy.get('[href="/register"]')
    }
    //check the  new registration page is open 
    registationPage(){
        return cy.url().should("include","/register")
    }
    //enter the first name
    FirstName(){
        return cy.get("#name")
    }
    //enter the second name of the costumer
    SecondName(){
        return cy.get("#last_name")
    }
    //enter the email address
    email(){
        return cy.get("#email")
    }
    //enter the password
    password(){
        return cy.get("#password")
    }
    //re-enter password
    repassword(){
        return cy.get('#password_confirmation')
    }
    //check the robort capture
    checkrobort(){
        return cy.get('#recaptcha-anchor')
    }
    //click the sing up button 
    singupbuttonfinally(){
        return cy.get('[value="Sign Up"]')
    }
}
const SingUpObjects = new SingUpPage
Cypress.Commands.add("SingUpPageTotal",()=>{
    //click the sing up button
    SingUpObjects.SingupButton().should("be.visible").click()
    //once check the enter the song up page
    SingUpObjects.SingUpPage()
    //enter the new account
    SingUpObjects.clicknewaccount().click()
    //check the registration page is open or not
    SingUpObjects.registationPage()
    //enter the first name
    SingUpObjects.FirstName().type("Hari")
    //enter the second name of the customer
    SingUpObjects.SecondName().type("krishna")
    //Enter the email of the customer
    SingUpObjects.email().type("harikrishna@gmail.com")
    //enter the password of the customer
    SingUpObjects.password().type("Hari@2000")
    //conformation the password
    SingUpObjects.repassword().type("Hari@2000")
    //check the robort check box
    SingUpObjects.checkrobort().click()
    //finally click the sing up button 
    SingUpObjects.singupbuttonfinally().click()

})


export default SingUpObjects