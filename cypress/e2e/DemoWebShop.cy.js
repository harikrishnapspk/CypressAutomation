//Describe the Project suit 
describe("Place Order Without Registration As a geust user",function() {
    //create the before each in every it block
    beforeEach(function(){
        //load the data from the fixtures
        cy.fixture("DemoWedShopTests").then((data)=>{
            this.data = data
            //visit the site
            cy.visit(this.data.url)
        })
        
    })
//create the place order without registration u enter guest user to place order
it("PlaceOrderWithOutRegistarion",function(){
    //page visibulation
    cy.LogoVisible()
    //click on the product to the cart
    cy.ClickOnAddCart()
    //click the specific element on the cart
    cy.AddToElementOnCart()
    //geust user form fillup details
    cy.GuestUserCheckOutPAge(this.data.Fname,this.data.Lname,this.data.Email,this.data.Cname,this.data.CountryName,this.data.City,this.data.Address1,this.data.Zcode,this.data.Pnumber,this.data.Faxnumber)
    // Click on the storepic
    cy.ClickOnStorePic()
    //selct the shipping method
    cy.ShippingMethod()
    //payment information
    cy.PaymentInformation()
    //check conform order
    cy.ConformOrder()
    //after conform order
    cy.AftorBookingOrderConformation()
})
})