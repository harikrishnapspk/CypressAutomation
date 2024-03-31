///reference types="cypress"
describe("mouseOverEx",()=>{
    it("mouseover",function(){
        //visit the site
        cy.login()
        cy.get(".oxd-main-menu-item.active").click()
        cy.get(".oxd-icon.bi-question-lg").trigger("mouseover{force:true}")
        cy.get('title="Assign Leave"').first().trigger("mousemove")
    })
})