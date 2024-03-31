
describe("fixtures_folder",()=>{
    let chandu
        beforeEach(()=>{
           //visit website
           
           cy.fixture("login").then((hari)=>{
            //visit website
            cy.visit(hari.url)
             chandu=hari
           }) 
        })
        it("login_page",()=>{


            //enter the email$password
            cy.get('[name="username"]').type(chandu.username,{log:false})
            cy.get('[name="password"]').type(chandu.password,{log:false})
         
            
            //check that log in page
            cy.url().should("include","/login")

            //click on the login button
            cy.get('[type="submit"]').click()
        })
        it("login_page",()=>{

       
            //enter the email$password
            cy.get('[name="username"]').type(chandu.username,{log:false})
            cy.get('[name="password"]').type(chandu.password,{log:false})
        
            
            //check that log in page
            cy.url().should("include","/login")

            //click on the login button
            cy.get('[type="submit"]').click()
        })
    })