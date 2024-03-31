///reference types="cypress"
describe("Parabank_creations",()=>{
    beforeEach(()=>{
        cy.fixture("parabankdetails").then((muni)=>{
            cy.visit(muni)
        })
    })
    it.skip("Sign_Up_Creations",()=>{
        cy.FillUpTheDetails()
        //account created succesfully
        cy.contains("Your account was created successfully. You are now logged in.").should("be.visible")
    })
    it("log_in_account",() =>{
        cy.LogInIntoAccount()
        //Log In Successfully TO Visible
        cy.get(".smallText").should("be.visible")
    })
})