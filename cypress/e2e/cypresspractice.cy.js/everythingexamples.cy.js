///<reference types="cypress"/>
describe("its practice for moring",()=>{
    beforeEach(()=>{
        cy.fixture("everexample").then((data)=>{
            cy.visit(data.url)
        })
        cy.url().should("include","/practice")
    })
    it("sing up the page",()=>{
        //cy.SingUpPageTotal()

        cy.everythingpraticeExpls()
        

    })
})