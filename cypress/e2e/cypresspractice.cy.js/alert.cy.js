describe("checking_alret_messeges",()=>{
    beforeEach(()=>{
        cy.fixture("alerturl").then((harikrish)=>{
            cy.visit(harikrish.URL)
    })
})
    
    it("first alert",()=>{
        cy.AltertMessegemethod1()
    })
    it("conformalert",()=>{
        cy.AltertMessegemethod2()
    })
    it("conformalert",()=>{
        cy.AltertMessegemethod2_()
    })
    it.only("promtalert",()=>{
        cy.AlertThirdMethod()
    })
})
