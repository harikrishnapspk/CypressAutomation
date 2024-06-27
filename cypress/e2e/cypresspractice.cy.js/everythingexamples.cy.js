///<reference types="cypress"/>
describe("its practice for moring",()=>{
    beforeEach(()=>{
        cy.fixture("everexample").then((data)=>{
            cy.visit(data.url)
        })
    })
    it("radio butttons",()=>{

    })
})