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
        cy.CreateEmailFLname(this.data.fname,this.data.lname)
        cy.createaccountpagedata(this.data.company,this.data.street,this.data.city,
                                 this.data.State,this.data.zip,this.data.Country,this.data.pnumber)

    })

    it("Create a account after place the order",function(){

        cy.createAnAccountPage(this.data.fname,this.data.lname)
        cy.PlaceTheOrderWithOutSingUPnew(this.data.url,this.data.url)
        cy.wait(10000)
        cy.createaccountpagedata(this.data.company,this.data.street,this.data.city,
                                this.data.State,this.data.zip,this.data.Country,this.data.pnumber)
        cy.PlaceOrderCheck()
        cy.SingOutThePage()

    })
}) 