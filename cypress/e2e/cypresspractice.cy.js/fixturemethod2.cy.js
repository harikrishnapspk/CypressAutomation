import testdata from "../fixtures/login.json"
describe("fixtures_folder",()=>{
        it("login_page",()=>{
            //enter website
            cy.visit(testdata.url)

            //enter the email$password
            cy.get('[name="username"]').type(testdata.username,{log:false})
            cy.get('[name="password"]').type(testdata.password,{log:false})
         
            
            //check that log in page
            cy.url().should("include","/login")

            //click on the login button
            cy.get('[type="submit"]').click()
        })
})