import  harikrishna from '../fixtures/login.json'
describe("custom_commands",()=>{
    beforeEach(()=>{
        cy.viewport(1980,1024)
        cy.fixture("login").then((hari)=>{
            //enter website
            cy.visit(hari.url)
        })
            cy.login()
    })
  
    it("lengthofpepoples",()=>{
        cy.get(".oxd-main-menu-item.active").click()
        cy.LengthOfThePeples(14)
    })
})