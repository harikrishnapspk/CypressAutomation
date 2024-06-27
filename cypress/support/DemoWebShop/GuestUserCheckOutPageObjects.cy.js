class GuestUserCheckOutPage{
    ClickOnGuestCheck(){
        return cy.get(".button-1.checkout-as-guest-button")
    }
    //billing address
    FirstName(){
        return cy.get("#BillingNewAddress_FirstName")
    }
    LastName(){
        return cy.get("#BillingNewAddress_LastName")
    }
    Email(){
        return cy.get("#BillingNewAddress_Email")
    }
    Company(){
        return cy.xpath('//input[@name="BillingNewAddress.Company"]')
    }
    Country(){
        return cy.xpath('//select[@id="BillingNewAddress_CountryId"]')
    }
    city(){
        return cy.xpath('//input[@data-val-required="City is required"]')
    }
    Address1(){
        return cy.xpath('//input[@id="BillingNewAddress_Address1"]')
    }
    ZipCode(){
        return cy.xpath('//input[@id="BillingNewAddress_ZipPostalCode"]')
    }
    PhoneNumber(){
        return cy.xpath('//input[@id="BillingNewAddress_PhoneNumber"]')
    }
    FaxNUmber(){
        return cy.xpath('//input[@id="BillingNewAddress_FaxNumber"]')
    }
    ClickONContinew(){
        return cy.xpath('//input[@onclick="Billing.save()"]')
    }
    //billing address close
    //shipping address
    ClickOnStorePIc(){
        return cy.xpath('(//input[@name="PickUpInStore"])[1]')
    }
    ClickONContinewButton(){
        return cy.xpath('//input[@onclick="Shipping.save()"]')
    }
    //payment method
    ClickOnContiewMOneyButton(){
        return cy.xpath('//input[@onclick="PaymentMethod.save()"]')
    }
    WillPayCod(){
        return cy.contains("You will pay by COD")
    }
    CODButton(){
        return cy.xpath('//input[@onclick="PaymentInfo.save()"]')
    }
    ProductCheck(){
        return cy.xpath('//div[@class="order-summary-content"]')
    }
    ClickOnContinewOnSummerButton(){
        return cy.xpath('//input[@onclick="ConfirmOrder.save()"]')
    }
    Odercheck(){
        return cy.contains("Your order has been successfully processed!")
    }
    DetailsCheck(){
        return cy.get('[class="details"]')
    }
    ClickOnContinewButtonToShop(){
        return cy.xpath('//input[@value="Continue"]')
    }
    ReturnBackHomeLogo(){
        return cy.contains("Tricentis Demo Web Shop")
    }
}
const GuestUserCheckOutObjects = new GuestUserCheckOutPage
Cypress.Commands.add("GuestUserCheckOutPAge",(Fname,Lname,email,Cname,Countryname,City,address1,zcode,Pnumber,Fnumber)=>{
    //Click on the GuestUserCheckOutPage
    GuestUserCheckOutObjects.ClickOnGuestCheck().click()
    //Enter First name
    GuestUserCheckOutObjects.FirstName().type(Fname)
    //enter Last name
    GuestUserCheckOutObjects.LastName().type(Lname)
    //Enter Email
    GuestUserCheckOutObjects.Email().type(email)
    //Enter Company Name
    GuestUserCheckOutObjects.Company().type(Cname)
    //select the country
    GuestUserCheckOutObjects.Country().select(Countryname)
    //entery the city
    GuestUserCheckOutObjects.city().type(City)
    //enter the address1
    GuestUserCheckOutObjects.Address1().type(address1)
    //enter the zip code
    GuestUserCheckOutObjects.ZipCode().type(zcode)
    //enter the phone number
    GuestUserCheckOutObjects.PhoneNumber().type(Pnumber)
    //enter fax number
    GuestUserCheckOutObjects.FaxNUmber().type(Fnumber)
})
Cypress.Commands.add("ClickOnStorePic",()=>{
    //click on the continew button
    GuestUserCheckOutObjects.ClickONContinew().click()
    //Check on the ClickOnStore
    GuestUserCheckOutObjects.ClickOnStorePIc().check()
    //Click on the countinew button
    GuestUserCheckOutObjects.ClickONContinewButton().click()
})
Cypress.Commands.add("ShippingMethod",()=>{
    //Click on payment method with continew button
    GuestUserCheckOutObjects.ClickOnContiewMOneyButton().click()
})
Cypress.Commands.add("PaymentInformation",()=>{
    //Check on the Cod 
    GuestUserCheckOutObjects.WillPayCod().should("be.visible")
    //click on the paymentinformarmation continew button
    GuestUserCheckOutObjects.CODButton().click()
})
Cypress.Commands.add("ConformOrder",()=>{
   //Check the Product details on the summeryy
   GuestUserCheckOutObjects.ProductCheck().should("be.visible")
   //click on the summery button on the continew button
   GuestUserCheckOutObjects.ClickOnContinewOnSummerButton().click() 
})
Cypress.Commands.add("AftorBookingOrderConformation",()=>{
//check on the product book succesfully
GuestUserCheckOutObjects.Odercheck().should("be.visible")
//check the product details
GuestUserCheckOutObjects.DetailsCheck().should("be.visible")
//Click on the continew button on shopping
GuestUserCheckOutObjects.ClickOnContinewButtonToShop().click()
//return back to shoping page
GuestUserCheckOutObjects.ReturnBackHomeLogo().should("be.visible")
})


export default GuestUserCheckOutPage