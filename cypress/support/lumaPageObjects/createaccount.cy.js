class createaccountobjects{
    email(){
        return cy.xpath('(//input[@type="email"])[2]')
    }
    fname(){
        return cy.get('[name="firstname"]')
    }
    lname(){
        return cy.get('[name="lastname"]')
    }
    cname(){
        return cy.get('[name="company"]')
    }
    sname(){
        return cy.get('[name="street[0]"]')
    }
    cityname(){
        return cy.get('[name="city"]')
    }
    state(){
        return cy.get('[name="region_id"]')
    }
    zcode(){
        return cy.get('[name="postcode"]')
    }
    pnumber(){
        return cy.get('[name="telephone"]')
    }
    country(){
        return cy.get('[name="country_id"]')
    }
    radio(){
        return cy.get('[value="flatrate_flatrate"]')
    }
    submit(){
        return cy.contains("Next")
    }
    payment(){
        return cy.contains("Payment Method")
    }
    details(){
        return cy.get('[class="billing-address-details"]')
    }
    placeorder(){
        return cy.contains('Place Order')
    }
    checkorderplace(){
        return cy.contains("Thank you for your purchase!")
    }
    logo(){
        return cy.get(".logo")
    }
    hometitle(){
        return cy.get('[class="page-title"]')
    }
}
const createobjects = new createaccountobjects

Cypress.Commands.add("CreateEmailFLname",function(Fname,Lname){
    //entry for the new email account
    cy.wait(10000)
    const email = `test${Date.now()}@example.com`
    createobjects.email().type(email,{force:true})
    //type customer first name
    createobjects.fname().type(Fname)
    //type customer last name
    createobjects.lname().type(Lname)
})
Cypress.Commands.add("createaccountpagedata",function(Cname,Sname,CityName,statename,Zcode,country,Pnumber){
    //type customer company name
    createobjects.cname().type(Cname)
    //type customer  street addres
    createobjects.sname().type(Sname)
    //type customer  city name
    createobjects.cityname().type(CityName)
    //enter customer state name
    createobjects.state().select(statename)
    //enter zipcode 
    createobjects.zcode().type(Zcode)
    //enter customer country 
    createobjects.country().select(country)
    //type customer phone number
    createobjects.pnumber().type(Pnumber)
    //click on the purchase radio button
    createobjects.radio().click()
    //click on the submit button
    createobjects.submit().click()
    //check on the payment page visible
    createobjects.payment().should("be.visible")
    //check the visuvulation on the customer delavery details
    createobjects.details().should("be.visible")
    //click on the placeorder button
    createobjects.placeorder().click()
    //check the order place or not
    createobjects.checkorderplace().should("be.visible")
    //again go to the home page to cclick the logo button
    createobjects.logo().click({force:true})
    //check the home page is visble or not
    createobjects.hometitle().should("be.visible")
})

export default createaccountobjects