
describe("Practice Alerts",()=>{

        beforeEach(()=>{
            cy.fixture("demoblaze").then((harikrish)=>{
                cy.visit(harikrish.URL)
            })

            cy.viewport(1440,900)
        })
it("enter the web site",()=>{
        cy.PlaceTheOrderInDirect()
        cy.CustomerDetailsPlaceOrder()
    })


})

