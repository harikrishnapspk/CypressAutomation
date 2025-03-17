
describe("Practice Alerts",()=>{

        beforeEach(()=>{
            cy.fixture("demoblaze").then(function(data){
                this.data = data
                cy.visit(data.URL)
            })

            cy.viewport(1440,900)
        })
it("enter the web site",function(){
        cy.PlaceTheOrderInDirect()
        cy.CustomerDetailsPlaceOrder(this.data.name,this.data.country,this.data.city,this.data.CreditCard,this.data.Month,this.data.Year)
    })

})

