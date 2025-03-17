describe("test the Luma website for automation",()=>{
    beforeEach(()=>{
        cy.fixture("lumadata").then(function(data){
            this.data = data
            cy.visit(this.data.url)
        })
        cy.viewport(1440,900)
    })

    it("Place The Order WithOut SingIn ", function(){
        
        cy.PlaceTheOrderWithOutSingUPnew(this.data.url,this.data.url)
        cy.createaccountpage(this.data.email,this.data.fname,this.data.lname,
                            this.data.company,this.data.street,this.data.city,
                            this.data.State,this.data.zip,this.data.Country,this.data.pnumber)

    })
}) 