
describe("file_uploding",()=>{
    it("file_uplode",()=>{
        cy.fixture("login").then((hari)=>{
            //enter website
            cy.visit(hari.url)
        })
            cy.login()
            cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').click()
            cy.get('.orangehrm-header-container > .oxd-button').click({force:true})
            cy.get('.oxd-file-div > .oxd-icon').click()
            cy.get(".oxd-icon.bi-upload.oxd-file-input-icon").attachFile("hari.jpg")
            //cy.get('.oxd-file-div > .oxd-icon').selectFile("cypress/fixtures/hari.jpg")
    })
   
})