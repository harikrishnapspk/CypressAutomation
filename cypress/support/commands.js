// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/// <reference types="cypress" />
/// <reference types="cypress-xpath" />
//luma website
import PlaceOderDetails from "./lumaPageObjects/withoutsingupplaceorder.cy"
import createaccountobjects   from "./lumaPageObjects/createaccount.cy"
import NewAccountObjects  from "./lumaPageObjects/NewAccountCreateObjects.cy"
//demoblaze 
import PlaceOrderDetailsPage from "./DemoBlazeObjects/PlaceOrderDetails.cy"
import PlaceTheOrderInDirect from "./DemoBlazeObjects/SelectProductAndPlaceOrder.cy"
import managerPageObjects from "./XYZbankPOM/BankManagerPageObjects.cy"
import addcustomerpage from "./XYZbankPOM/addcustomerpageobjects.cy"
import OpenAccount from "./XYZbankPOM/OpenAccountPageObjets.cy"
import CustomerPage from "./XYZbankPOM/CustomersPageObects.cy"
import HomeButtonPage from "./XYZbankPOM/HomeButtonPageObejects.cy"
import CustomerpageObject from "./XYZbankPOM/customerpagebutton.cy"
import AccountPage from "./XYZbankPOM/AccountPageObjects.cy"
import DepositAndWithdra from "./XYZbankPOM/Deposit&withdraObjects.cy"
import TransectionPageDetails from "./XYZbankPOM/TransectionPageObjects.cy"
import LogInPageObjects from "../support/nopcommersObjets/LogInPageObjects.cy"
import GuestUserObject from "../support/nopcommersObjets/GuestUserPOobjects.cy"
import AddCortPage from "../support/DemoWebShop/AddCartPageObjects.cy"
import GuestUserCheckOutPage from "../support/DemoWebShop/GuestUserCheckOutPageObjects.cy"
import addcart from "../support/DemoWebShop/AddCart.cy"
import Add_Cort_Page from "../support/DemoWebShop/AddCartPageObjects.cy"
import Billingaddress from "../support/DemoWebShop/BillingAddressObjects.cy"
import Register from "../support/DemoWebShop/RegistrationPageObjects.cy"
import LogInPage from "../support/DemoWebShop/LogInPageObjects.cy"
import AddCortToTHeProduct from "../support/DemoWebShop/AddCart.cy"
import shoping_cart from "../support/DemoWebShop/ShoppingCartPage.cy"

//everything example page objetcs connetors
import SingUpObjects from "./EverythingPageObjects/SingUpPOM.cy"
import practiceAll from "./EverythingPageObjects/practiceexamples.cy"



//import {faker} from '@faker-js/faker'
//import faker from 'faker';
import DemoWebShopPage from "./DemoWebShop/HomePageObjects.cy"
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
import 'cypress-file-upload';

// import pspk7 from "../fixtures/demoblaze.json"
import hari from '../fixtures/DemoWedShopTests.json'
import  harikrishna from '../fixtures/login.json'
import PavanKalyan from "../fixtures/parabankdetails.json"
import pspk from "../fixtures/AutomationLogin.json"
import BattaBalla from "../fixtures/excersiceautomation"
Cypress.Commands.add("user_login",function (){
     //login existing user
     cy.xpath("//input[@data-qa='login-email']").type("cmmfpatri48@gmail.com")     
     cy.xpath("//input[@data-qa='login-password']").type("d37sb2h44po")
     cy.xpath("//button[@data-qa='login-button']").click()
     //visuble account
     cy.xpath("//i[@class='fa fa-user']").should("be.visible")
})

Cypress.Commands.add("User_login",function (){
    //login existing user
    cy.xpath("//input[@data-qa='login-email']").type("cmmfpatri4@gmail.com")     
    cy.xpath("//input[@data-qa='login-password']").type("d37sb2h44p")
    cy.xpath("//button[@data-qa='login-button']").click()
})
Cypress.Commands.add("login",(krishna)=>{
    //enter the website
    cy.visit(harikrishna.url)
    //enter the email$password
    cy.get('[name="username"]').type(harikrishna.username,{log:false})
    cy.get('[name="password"]').type(harikrishna.password,{log:false})
    //click on the login button
    cy.get('[type="submit"]').click()  
})
Cypress.Commands.add("LengthOfThePeples",(lenthofboxs)=>{
    cy.get(".oxd-grid-item.oxd-grid-item--gutters").should("have.length",lenthofboxs)
})
Cypress.Commands.add("AltertMessegemethod1",()=>{
    //click on the alertmsg
    cy.get('[onclick="jsAlert()"]').click()
    //bydefault click on ok buttton
    cy.on('window:alert',(text)=>{
        expect(text).to.contain('I am a JS Alert')
    })
            //successfully log in
            cy.get("#result").should("have.text","You successfully clicked an alert")
})
Cypress.Commands.add("AltertMessegemethod2",()=>{
    //click on the alertmsg
    cy.get('[onclick="jsConfirm()"]').click()
    //ok on the alertmsg
    cy.on("window:confirm",(hari)=>{
        expect(hari).to.equal("I am a JS Confirm")
    })
    //successfull msg
    cy.get("#result").should("have.text","You clicked: Ok")
})
Cypress.Commands.add("AltertMessegemethod2_",()=>{
    //click on the alertmsg
    cy.get('[onclick="jsConfirm()"]').click()
    //ok on the alertmsg
    cy.on("window:confirm",()=>false)
    //successfull msg
    cy.get("#result").should("have.text","You clicked: Cancel")
})
Cypress.Commands.add("AlertThirdMethod",()=>{
    //conform alert
    cy.window().then((hari)=>{
        cy.stub(hari,'prompt').returns("i am  king")
                //click on alertmsg
                  cy.get('[onclick="jsPrompt()"]').click()
    })
//successfull msg
cy.get("#result").should("have.text","You entered: i am  king")
})
Cypress.Commands.add("session_clsss",()=>{
    cy.session(("Login"),()=>{
        cy.fixture("login").then((hari)=>{
            cy.visit(hari.url)
        })
        cy.login()
    })    
})
Cypress.Commands.add("FillUpTheDetails",()=>{
    // Enter the firstname
    cy.get('[id="customer.firstName"]').type(PavanKalyan.first_name)
    // Enter the lastname
     cy.get('[name="customer.lastName"]').type(PavanKalyan.last_name)
        // Enter the adderes
     cy.get('[type="text"]').eq(3).type(PavanKalyan.address)
       // Enter the city
     cy.get('.input').eq(5).type(PavanKalyan.city)
       // Enter the state
     cy.xpath("//input[@id='customer.address.state']").type(PavanKalyan.state)
       // Enter the Zip code
     cy.xpath("(//input[@type='text'])[7]").type(PavanKalyan.Zip_code)
       // Enter the phone number
     cy.get("[name='customer.phoneNumber']").type(PavanKalyan.phone)
       // Enter the SSN
     cy.get("[id='customer.ssn']").type(PavanKalyan.SSN,{log:false})
       // Enter the user name
     cy.get('[name="customer.username"]').type(PavanKalyan.user_name,{log:false})
       // Enter the password
     cy.get('[name="customer.password"]').type(PavanKalyan.password,{log:false})
       // Enter the confirm
     cy.get('[name="repeatedPassword"]').type(PavanKalyan.confirm_password,{log:false})
      //click on the register button
     cy.get('[value="Register"]').click()
})
Cypress.Commands.add("LogInIntoAccount",() =>{
    //enter user_name&password On the LogIn Page
    cy.get('[name="username"]').type(PavanKalyan.user_name,{log:false})
    cy.get('[name="password"]').type(PavanKalyan.password,{log:false})
    //Click On The LogIn Botton
    cy.get('.button').eq(1).click()
})
Cypress.Commands.add("Registration_Page",()=>{
  //enter name
  cy.xpath("//input[@data-qa='signup-name']").type(pspk.UserName)
  //enter email_id
  cy.xpath("//input[@data-qa='signup-email']").type(pspk.Email)
  //click on the sign up 
  cy.xpath("//button[@data-qa='signup-button']").click()
  //enter accout is visible
  cy.url().should('include','/signup')
  //fill the details
  cy.xpath("//input[@id='id_gender1']").click()
  //enter password
  cy.xpath("//input[@id='password']").type(pspk.Password)
  //selct date
  cy.xpath("//select[@id='days']").select("17")
  cy.xpath("//select[@id='months']").select("June")
  cy.xpath("//select[@id='years']").select("2000")
  //check box selection
  cy.xpath("//input[@id='newsletter']").click()
  cy.xpath("//input[@id='optin']").click()
  //enter the first&last name
  cy.xpath("//input[@data-qa='first_name']").type("hari")
  cy.xpath("//input[@data-qa='last_name']").type("krishna")
  //type C&A1&A2 fill_up
  cy.xpath("//input[@data-qa='company']").type("hari_company")
  cy.xpath("//input[@data-qa='address']").type("nellore")
  cy.xpath("//input[@data-qa='address2']").type("sullurpeta")
  //select country&state
  cy.xpath("//select[@data-qa='country']").select(5)
  cy.xpath("//input[@data-qa='state']").type("AP")
  cy.xpath("//input[@data-qa='city']").type("AP2")
  //type Z&M_N fill_up
  cy.xpath("//input[@data-qa='zipcode']").type("143143")
  cy.xpath("//input[@data-qa='mobile_number']").type("9010896009")
  cy.xpath("//button[@data-qa='create-account']").click()
  //account is visible!!!
  cy.get('b').should('be.visible')
  //continue to the button
  cy.xpath("//a[@data-qa='continue-button']").click()
  //user name is visible
  cy.xpath("//i[@class='fa fa-user']").should("be.visible")
})
Cypress.Commands.add("SingUpPageLogIn",()=>{
  //login existing user
  cy.xpath("//input[@data-qa='login-email']").type(pspk.Email)     
  cy.get('[data-qa="login-password"]').type(pspk.Password)
  cy.xpath("//button[@data-qa='login-button']").click()
  //visuble account
  cy.xpath("//i[@class='fa fa-user']").should("be.visible")
})
Cypress.Commands.add("PlaceOrder",()=>{
  //click on add cart
  cy.xpath("(//a[@data-product-id='1'])[1]").click()
  //click on continew button
  cy.xpath("//button[@class='btn btn-success close-modal btn-block']").click()
  //click on cart page
  cy.xpath("(//a[@href='/view_cart'])[1]").click()
   // Verify that product is displayed in cart page with exact quantity
  cy.url().should("include","/view_cart")
  //Click Proceed To Checkout
  cy.xpath("//a[@class='btn btn-default check_out']").click()
  //accout name is vissible
  cy.xpath("//i[@class='fa fa-user']").should("be.visible")
  //click on cart page
  cy.xpath("(//a[@href='/view_cart'])[1]").click()
  //Click Proceed To Checkout
  cy.xpath("//a[@class='btn btn-default check_out']").click()
  //Verify Address Details and Review Your Order
  cy.xpath("//ul[@class='address item box']").should("be.visible")
  cy.xpath("(//h2[@class='heading'])[1]").should("be.visible")
   //Enter description in comment text area and click 'Place Order'
   cy.xpath("//textarea[@class='form-control']").type("i like this order very much i love u baby much")
   cy.xpath("//a[@href='/payment']").click()
   //Enter payment details: Name on Card, Card Number, CVC, Expiration date
   cy.xpath("//input[@data-qa='name-on-card']").type("hari")
   cy.xpath("(//input[@name='card_number'])[1]").type("123456789")
   cy.xpath("//input[@name='cvc']").type("123")
   cy.xpath("//input[@name='expiry_month']").type("10")
   cy.xpath("//input[@name='expiry_year']").type("2000")
   //Click 'Pay and Confirm Order' button
  cy.xpath("//button[@id='submit']").click()  
})
Cypress.Commands.add("AutomaticGenarateCode",()=>{
  /* ==== Generated with Cypress Studio ==== */
  cy.get('[data-qa="signup-name"]').clear('b');
  cy.get('[data-qa="signup-name"]').type('bala');
  cy.get('[data-qa="signup-email"]').clear('b');
  cy.get('[data-qa="signup-email"]').type('bala@1234');
  cy.get('[data-qa="signup-button"]').click();
  cy.get('#id_gender1').check();
  cy.get('[data-qa="password"]').clear('b');
  cy.get('[data-qa="password"]').type('bala123');
  cy.get('[data-qa="days"]').select('26');
  cy.get('[data-qa="months"]').select('12');
  cy.get('[data-qa="years"]').select('2000');
  cy.get('#newsletter').check();
  cy.get('#optin').check();
  cy.get('[data-qa="first_name"]').clear('ba');
  cy.get('[data-qa="first_name"]').type('baala');
  cy.get('[data-qa="last_name"]').clear('kr');
  cy.get('[data-qa="last_name"]').type('krishna');
  cy.get('[data-qa="company"]').clear('t');
  cy.get('[data-qa="company"]').type('tehcdottom');
  cy.get('[data-qa="address"]').clear('s');
  cy.get('[data-qa="address"]').type('srnagar');
  cy.get('[data-qa="address2"]').clear('k');
  cy.get('[data-qa="address2"]').type('kphb');
  cy.get('[data-qa="state"]').clear('Telengana');
  cy.get('[data-qa="state"]').type('Telengana');
  cy.get('[data-qa="city"]').clear();
  cy.get('[data-qa="city"]').type('SR Nagar');
  cy.get('[data-qa="zipcode"]').clear();
  cy.get('[data-qa="zipcode"]').type('500038');
  cy.get('[data-qa="mobile_number"]').clear();
  cy.get('[data-qa="mobile_number"]').type('09010896009');
  cy.get('[data-qa="create-account"]').click();
  cy.get('b').should('be.visible');
  cy.get('.col-sm-9 > :nth-child(2)').should('be.visible');
  cy.get('[data-qa="continue-button"]').click();
  /* ==== End Cypress Studio ==== */
})
Cypress.Commands.add("SignUpPageAndPlaceOrder",()=>{
  /* ==== Generated with Cypress Studio ==== */
  cy.get('[data-qa="login-email"]').clear('bala@1234');
  cy.get('[data-qa="login-email"]').type('bala@1234');
  cy.get('[data-qa="login-password"]').clear('b');
  cy.get('[data-qa="login-password"]').type('bala123');
  cy.get('[data-qa="login-button"]').click();
  cy.xpath("(//a[@data-product-id='1'])[1]").click()
  cy.get('u').click();
  cy.get('.col-sm-6 > .btn').click();
  cy.get('#address_delivery > :nth-child(4)').click();
  cy.get('#address_delivery').click();
  cy.get('.form-control').click();
  cy.get(':nth-child(7) > .btn').click();
  cy.get('[data-qa="name-on-card"]').clear('p');
  cy.get('[data-qa="name-on-card"]').type('pspk');
  cy.get('[data-qa="card-number"]').clear('9');
  cy.get('[data-qa="card-number"]').type('987654321');
  cy.get('[data-qa="cvc"]').clear('6');
  cy.get('[data-qa="cvc"]').type('666');
  cy.get('[data-qa="expiry-month"]').clear('0');
  cy.get('[data-qa="expiry-month"]').type('01');
  cy.get('[data-qa="expiry-year"]').clear('1');
  cy.get('[data-qa="expiry-year"]').type('1999');
  cy.get('[data-qa="pay-button"]').click();
  cy.get('[data-qa="order-placed"] > b').should('be.visible');
  cy.get('.col-sm-9 > p').should('be.visible');
  cy.get('[data-qa="continue-button"]').click();
  /* ==== End Cypress Studio ==== */
})
Cypress.Commands.add("CardDetails",function(){
  cy.get('[data-qa="name-on-card"]').type(BattaBalla.CardName,{log:false})
  cy.get('[name="card_number"]').type(BattaBalla.CardNumber,{log:false})
  cy.get('[data-qa="cvc"]').type(BattaBalla.CVV,{log:false})
  cy.get('[name="expiry_month"]').type(BattaBalla.Month,{log:false})
  cy.get('[name="expiry_year"]').type(BattaBalla.Year,{log:false})
  // Click 'Pay and Confirm Order' button
  cy.get("#submit").click()
  // Verify success message 'Your order has been placed successfully!'
  cy.on('window:alert', (message) => {
  expect(message).to.equal('Your order has been placed successfully!')
})
})
Cypress.Commands.add("register_page",()=>{
    //Click on 'Signup / Login' button
    cy.get('[href="/login"]').click()
    //Verify 'Login to your account' is visible
    cy.url().should("include","/login")
    //Enter name and email address
    cy.get('[data-qa="signup-name"]').type(BattaBalla.Name)
    cy.get('[data-qa="signup-email"]').type(BattaBalla.Email,{log:false})
    //Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click()
    //Verify that 'ENTER ACCOUNT INFORMATION' is visible
    cy.contains("Enter Account Information").should("be.visible")
    //Fill details: Title, Name, Email, Password, Date of birth
    cy.get(".radio").first().click()
    cy.get("#password").type(BattaBalla.Password,{log:false})
    cy.get("#days").select(BattaBalla.day,{log:false})
    cy.get("#months").select(BattaBalla.month,{log:false})
    cy.get("#years").select(BattaBalla.year,{log:false})
    //Select checkbox 'Sign up for our newsletter!'
    cy.get("#newsletter").check()
    //Select checkbox 'Receive special offers from our partners!'
    cy.get("#optin").check()
    //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
    cy.get("#first_name").type(BattaBalla.Fname,{log:false})
    cy.get("#last_name").type(BattaBalla.Lname,{log:false})
    cy.get("#company").type(BattaBalla.Cname,{log:false})
    cy.get("#address1").type(BattaBalla.Address1,{log:false})
    cy.get(".form-control").eq(10).type(BattaBalla.Address2,{log:false})
    cy.get('[name="country"]').select(BattaBalla.Country,{log:false})
    cy.get('[data-qa="state"]').type(BattaBalla.State,{log:false})
    cy.get('#city').type(BattaBalla.city,{log:false})
    cy.get('[data-qa="zipcode"]').type(BattaBalla.ZipCode,{log:false})
    cy.get('#mobile_number').type(BattaBalla.Pno,{log:false})
    //Click 'Create Account button'
    cy.get(".btn.btn-default").first().click()
    //Verify that 'ACCOUNT CREATED!' is visible
    cy.contains("Account Created!").should("be.visible")
    //Click 'Continue' button
    cy.get('[data-qa="continue-button"]').click()
    //Verify that 'Logged in as username' is visible
    cy.contains(" Logged in as ").should("be.visible")
})
Cypress.Commands.add("LoginCorrectEmail",()=>{
    //Click on 'Signup / Login' button
    cy.get('[href="/login"]').click()
    //Verify 'Login to your account' is visible
    cy.contains("Login to your account").should("be.visible")
    //Enter correct email address and password
    cy.get('[data-qa="login-email"]').type(BattaBalla.Email,{log:false})
    cy.get('[data-qa="login-password"]').type(BattaBalla.Password,{log:false})
    //Click 'login' button
    cy.get('[type="submit"]').first().click()
    //Verify that 'Logged in as username' is visible
    cy.contains(" Logged in as ").should("be.visible")
})
Cypress.Commands.add("InCorrectLogIn",()=>{
    // Click on 'Signup / Login' button
    cy.get('[href="/login"]').click()
    //Verify 'Login to your account' is visible
    cy.contains("Login to your account").should("be.visible")
    //Enter incorrect email address and password
    cy.get('[data-qa="login-email"]').type(BattaBalla.ICEmail,{log:false})
    cy.get('[data-qa="login-password"]').type(BattaBalla.INpassword,{log:false})
    //Click 'login' button
    cy.get('[type="submit"]').first().click()
    //Verify error 'Your email or password is incorrect!' is visible
    cy.contains("Your email or password is incorrect!").should("be.visible")
})
Cypress.Commands.add("RegisterUserwithexistingemail",()=>{
    //Click on 'Signup / Login' button
    cy.get('[href="/login"]').click()
    //Verify 'New User Signup!' is visible
    cy.contains("New User Signup!").should("be.visible")
    //Enter name and already registered email address
    cy.get('[data-qa="signup-name"]').type(BattaBalla.Name)
    cy.get('[data-qa="signup-email"]').type(BattaBalla.Email,{log:false})
    //Click 'Signup' button
    cy.get('[data-qa="signup-button"]').click()
    //Verify error 'Email Address already exist!' is visible
    cy.contains("Email Address already exist!").should("be.visible")
})
Cypress.Commands.add("ContactUsForm",()=>{
    //Click on 'Contact Us' button
    cy.get(".fa.fa-envelope").click()
    //Verify 'GET IN TOUCH' is visible
    cy.contains("Get In Touch").should("be.visible")
    //Enter name, email, subject and message
    cy.get('[name="name"]').type(BattaBalla.Name)
    cy.get('[name="email"]').type(BattaBalla.Email,{log:false})
    cy.get('[name="subject"]').type(BattaBalla.Subject)
    cy.get("#message").type(BattaBalla.msg)
    //Upload file
    //Click 'Submit' button
    cy.get('[data-qa="submit-button"]').click()
    //Click OK button
    cy.on('window:alert',(check)=>{
      expect(check).to.contains("Press OK to proceed!")
    })
    //Verify success message 'Success! Your details have been submitted successfully.' is visible
    cy.contains("Success! Your details have been submitted successfully.").should("be.visible")
    //Click 'Home' button and verify that landed to home page successfully
    cy.get(".btn.btn-success").click()
    cy.get(".logo.pull-left").should("be.visible")
})
Cypress.Commands.add("VerifyTestCasesPage",()=>{
    cy.LoginCorrectEmail()
    //Click on 'Test Cases' button
    cy.get(".fa.fa-list").first().click()
    //Verify user is navigated to test cases page successfully
    cy.url().should("include","/test_cases")
})
Cypress.Commands.add("VerifyAllProductsAndProductDetailPage",()=>{
  cy.LoginCorrectEmail()
  //Click on 'Products' button
  cy.contains(" Products").click()
  //Verify user is navigated to ALL PRODUCTS page successfully
  cy.url().should("include","/products")
  //The products list is visible
  cy.get(".features_items").should("be.visible")
  //Click on 'View Product' of first product
  cy.get(".fa.fa-plus-square").first().click()
  //User is landed to product detail page
  cy.url().should("include","/product_details/1")
  //Verify that detail detail is visible: product name, category, price, availability, condition, brand
  cy.get(".product-information").should("be.visible")
})
Cypress.Commands.add("SearchProduct",()=>{
  cy.LoginCorrectEmail()
  //Click on 'Products' button
  cy.contains(" Products").click()
  //Verify user is navigated to ALL PRODUCTS page successfully
  cy.url().should("include","/products")
  // Enter product name in search input and click search button
  cy.get("#search_product").type("Blue")
  cy.get(".fa.fa-search").click()
  // Verify 'SEARCHED PRODUCTS' is visible
  cy.get(".features_items").should("be.visible")
  // Verify all the products related to search are visible
  cy.get(".features_items").should("be.visible")
})
Cypress.Commands.add("VerifySubscriptionHomePage",()=>{
  cy.LoginCorrectEmail()
  //Scroll down to footer
  cy.window().scrollTo('bottom')
  //Verify text 'SUBSCRIPTION'
  cy.contains("Subscription").should("be.visible")
  //Enter email address in input and click arrow button
  cy.get("#susbscribe_email").type(BattaBalla.Email,{log:false})
  cy.get(".fa.fa-arrow-circle-o-right").click()
  //Verify success message 'You have been successfully subscribed!' is visible
  cy.contains("You have been successfully subscribed!").should("be.visible")
})
Cypress.Commands.add("VerifySubscriptionCartPage",()=>{
  cy.LoginCorrectEmail()
  //Click 'Cart' button
  cy.contains("Cart").click()  
  //Scroll down to footer
  cy.window().scrollTo('bottom')
  //Verify text 'SUBSCRIPTION'
  cy.contains("Subscription").should("be.visible")
  //Enter email address in input and click arrow button
  cy.get("#susbscribe_email").type(BattaBalla.Email,{log:false})
  cy.get(".fa.fa-arrow-circle-o-right").click()
  //Verify success message 'You have been successfully subscribed!' is visible
  cy.contains("You have been successfully subscribed!").should("be.visible")
})
Cypress.Commands.add("AddProductsInCart",function(){
  cy.LoginCorrectEmail()
  //Click 'Products' button
  cy.contains(" Products").click()
  //. Hover over first product and click 'Add to cart'
  cy.get(".btn.btn-default.add-to-cart").eq(2).click()
  //. Click 'Continue Shopping' button
  cy.get('[data-dismiss="modal"]').click()
  //. Hover over second product and click 'Add to cart'
  cy.get(".btn.btn-default.add-to-cart").eq(4).click() 
  // Click 'View Cart' button
  cy.contains("View Cart").click()
  // Verify both products are added to Cart
  cy.get("tbody").should("be.visible")
  //. Verify their prices, quantity and total price
  cy.get(".price").should("be.visible")
  cy.get(".quantity").should("be.visible")
  cy.get(".total").should("be.visible")
})
Cypress.Commands.add("VerifyProductQuantityInCart",()=>{
  cy.LoginCorrectEmail()
  //Click 'View Product' for any product on home page
  cy.contains("View Product").first().click()
  // Verify product detail is opened
  cy.url().should("include","/product_details/1")
  // Increase quantity to 4
  cy.get("#quantity").clear().type("4")
  // Click 'Add to cart' button
  cy.get(".btn.btn-default.cart").click()
  // Click 'View Cart' button
  cy.contains("View Cart").click()
  // Verify that product is displayed in cart page with exact quantity
  cy.get(".cart_quantity").should("be.visible")
})
Cypress.Commands.add("RegisterWhileCheckout",()=>{
  //Add products to cart
  cy.get(".btn.btn-default.add-to-cart").eq(2).click()
  // Click 'Cart' button
  cy.contains("View Cart").click()
  // Verify that cart page is displayed
  cy.url().should("include","/view_cart")
  // Click Proceed To Checkout
  cy.contains("Proceed To Checkout").click()
  // Click 'Register / Login' button
  cy.get('[href="/login"]').eq(1).click()
  // Fill all details in Signup and create account
  cy.register_page()
  //.Click 'Cart' button
  cy.get(".fa.fa-shopping-cart").first().click()
  // Click 'Proceed To Checkout' button
  cy.contains("Proceed To Checkout").click()
  // Verify Address Details and Review Your Order
  cy.get('[class="col-xs-12 col-sm-6"]').should("be.visible")
  // Enter description in comment text area and click 'Place Order'
  cy.get('[name="message"]').type(BattaBalla.MSG,{log:false})
  cy.contains("Place Order").click()
  cy.CardDetails()
  // Click 'Delete Account' button
  // Verify 'ACCOUNT DELETED!' and click 'Continue' button
})
Cypress.Commands.add("RegisterBeforeCheckout",()=>{
  //Click on 'Signup / Login' button
  cy.get('[href="/login"]').click()
  cy.register_page()
  //Add products to cart
  cy.get(".btn.btn-default.add-to-cart").eq(2).click()
  // Click 'Cart' button
  cy.contains("View Cart").click()
  //. Verify that cart page is displayed
  cy.url().should("include","/view_cart")
  //. Click Proceed To Checkout
  cy.contains("Proceed To Checkout").click()
  //. Verify Address Details and Review Your Order
  cy.get('[class="col-xs-12 col-sm-6"]').should("be.visible")
  //. Enter description in comment text area and click 'Place Order'
  cy.get('[name="message"]').type(BattaBalla.MSG,{log:false})
  cy.contains("Place Order").click()
  //card details
  cy.CardDetails()
  //. Click 'Delete Account' button
  //. Verify 'ACCOUNT DELETED!' and click 'Continue' button
})
Cypress.Commands.add("LoginBeforeCheckout",()=>{
  //Click on 'Signup / Login' button
  cy.get('[href="/login"]').click()
  //log in correct email
  cy.LoginCorrectEmail()
  //Add products to cart
  cy.get(".btn.btn-default.add-to-cart").eq(2).click()
  // Click 'Cart' button
  cy.contains("View Cart").click()
  // Verify that cart page is displayed
  cy.url().should("include","/view_cart")
  //. Click Proceed To Checkout
  cy.contains("Proceed To Checkout").click()
  //. Verify Address Details and Review Your Order
  cy.get('[class="col-xs-12 col-sm-6"]').should("be.visible")
  //. Enter description in comment text area and click 'Place Order'
  cy.get('[name="message"]').type(BattaBalla.MSG,{log:false})
  cy.contains("Place Order").click()
  //card details
  cy.CardDetails()
})
Cypress.Commands.add("RemoveProductsFromCart",()=>{
  //Click on 'Signup / Login' button
  cy.get('[href="/login"]').click()
  //log in correct email
  cy.LoginCorrectEmail()
  //Add products to cart
  cy.get(".btn.btn-default.add-to-cart").eq(2).click()
  // Click 'Cart' button
  cy.contains("View Cart").click()
  // Verify that cart page is displayed
  cy.url().should("include","/view_cart")
  // Click 'X' button corresponding to particular product
  cy.get(".cart_quantity_delete").click()
  // Verify that product is removed from the cart
  cy.get("tbody").should("be.visible")
})
Cypress.Commands.add("ViewCategoryProducts",function(){
  //Click on 'Signup / Login' button
  cy.get('[href="/login"]').click()
  //log in correct email
  cy.LoginCorrectEmail()
  //Verify that categories are visible on left side bar
  cy.get(".left-sidebar").should("be.visible")
  //Click on 'Women' category
  cy.get('[data-toggle="collapse"]').first().click()
  //Click on any category link under 'Women' category, for example: Dress
  cy.contains("Dress").first().click()
  //Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
  cy.contains("Women - Dress Products").should("be.visible")
  // On left side bar, click on any sub-category link of 'Men' category
  cy.get('[data-toggle="collapse"]').eq(1).click()
  cy.contains("Tshirts ").click()
  //Verify that user is navigated to that category page
  cy.url().should("include","/category_products/3")
})
Cypress.Commands.add("View_CartBrandProducts",()=>{
    //Click on 'Signup / Login' button
    cy.get('[href="/login"]').click()
    //log in correct email
    cy.LoginCorrectEmail()
  //Click on 'Products' button
  cy.get('[href="/products"]').first().click()
  // Verify that Brands are visible on left side bar
  cy.get(".brands_products").should("be.visible")
  // Click on any brand name
  cy.contains("Polo").first().click()
  // Verify that user is navigated to brand page and brand products are displayed
  cy.url().should("include","/brand_products/Polo")
  // On left side bar, click on any other brand link
  cy.contains("Babyhug").first().click()
  // Verify that user is navigated to that brand page and can see products
  cy.url().should("include","/brand_products/Babyhug")
})
Cypress.Commands.add("SearchProductsVerifyCartAfterLogin",()=>{
  //Click on 'Products' button
  cy.get('[href="/products"]').first().click()
  // Verify user is navigated to ALL PRODUCTS page successfully
  cy.url().should("include","/products")
  // Enter product name in search input and click search button
  cy.get("#search_product").type("Men Tshirt")
  cy.get("#submit_search").click()
  // Verify 'SEARCHED PRODUCTS' is visible
  cy.get(".features_items").should("be.visible")
  // Verify all the products related to search are visible
  cy.get(".features_items").should("be.visible")
  // Add those products to cart
  cy.get(".fa.fa-shopping-cart").eq(1).click()
  // Click 'Cart' button and verify that products are visible in cart
  cy.contains("View Cart").click()
  cy.get("#cart_info").should("be.visible")
  //. Click 'Signup / Login' button and submit login details
  //Click on 'Signup / Login' button
  cy.get('.fa.fa-lock').click()
  //log in correct email
  cy.LoginCorrectEmail()
  //. Again, go to Cart page
  cy.get('[href="/view_cart"]').first().click()
  //. Verify that those products are visible in cart after login as well
  cy.get("#cart_info").should("be.visible")
})
Cypress.Commands.add("AddReviewOnProduct",()=>{
  //Click on 'Signup / Login' button
  cy.get('[href="/login"]').click()
  //log in correct email
  cy.LoginCorrectEmail()
  //Click on 'Products' button
  cy.get('[href="/products"]').first().click()
  //Verify user is navigated to ALL PRODUCTS page successfully
  cy.url().should("include","/products")
  //Click on 'View Product' button
  cy.get(".fa.fa-plus-square").first().click()
  //Verify 'Write Your Review' is visible
  cy.contains("Write Your Review").should("be.visible")
  //Enter name, email and review
  cy.get("#name").type(BattaBalla.Name,{log:false})
  cy.get("#email").type(BattaBalla.Email,{log:false})
  cy.get("#review").type(BattaBalla.review,{log:false})
  //Click 'Submit' button
  cy.get("#button-review").click()
  //Verify success message 'Thank you for your review.'
  cy.on("window:alert",(review)=>{
    expect(review).to.contain("Thank you for your review.")
  })
})
Cypress.Commands.add("AddCartFromRecommendedItems",()=>{
  //Click on 'Signup / Login' button
  cy.get('[href="/login"]').click()
  //log in correct email
  cy.LoginCorrectEmail()
  //Scroll to bottom of page
  cy.window().scrollTo('bottom')
  //Verify 'RECOMMENDED ITEMS' are visible
  cy.contains("recommended items").scrollIntoView().should("be.visible")
  //Click on 'Add To Cart' on Recommended product
  cy.get(".fa.fa-shopping-cart").eq(73).click()
  //Click on 'View Cart' button
  cy.contains("View Cart").click()
  //Verify that product is displayed in cart page
  cy.url().should("include","/view_cart")
})
Cypress.Commands.add("VerifyAddressDetailsInCheckoutPage",()=>{
  //Click on 'Signup / Login' button
  cy.get('[href="/login"]').click()
  cy.register_page()
  //Add products to cart
  cy.get(".fa.fa-shopping-cart").eq(1).click()
  // Click 'Cart' button
  cy.contains("View Cart").click()
  //. Verify that cart page is displayed
  cy.url().should("include","/view_cart")
  //. Click Proceed To Checkout
  cy.contains("Proceed To Checkout").click()
  //. Verify that the delivery address is same address filled at the time registration of account
  cy.get(".col-xs-12.col-sm-6").eq(0).should("be.visible")
  //. Verify that the billing address is same address filled at the time registration of account
  cy.get(".col-xs-12.col-sm-6").eq(1).should("be.visible")
})
Cypress.Commands.add("DownloadInvoiceAfterPurchaseOrder",function(){
  //Add products to cart
  cy.get(".fa.fa-shopping-cart").eq(1).click()
  // Click 'Cart' button
  cy.contains("View Cart").click()
  // Verify that cart page is displayed
  cy.url().should("include","/view_cart")
  // Click Proceed To Checkout
  cy.contains("Proceed To Checkout").click()
  // Click 'Register / Login' button
  cy.get('[href="/login"]').eq(1).click()
  //registrestion form
  cy.register_page()
  //.Click 'Cart' button
  cy.get(".fa.fa-shopping-cart").first().click()
  //. Click 'Proceed To Checkout' button
  cy.contains("Proceed To Checkout").click()
  //. Verify Address Details and Review Your Order
  cy.get(".col-xs-12.col-sm-6").eq(0).should("be.visible")
  cy.get('[name="message"]').type(BattaBalla.msg,{log:false})
  //. Enter description in comment text area and click 'Place Order'
  cy.contains("Place Order").click()
  //. Enter payment details: Name on Card, Card Number, CVC, Expiration date
  cy.CardDetails()
  //. Click 'Download Invoice' button and verify invoice is downloaded successfully.
  cy.contains("Download Invoice").click()
  //. Click 'Continue' button
  cy.contains("Continue").first().click()
  //. Click 'Delete Account' button
  //. Verify 'ACCOUNT DELETED!' and click 'Continue' button
})
Cypress.Commands.add("VerifyScrollUpUsingArrowScrollDownfunctionality",()=>{
  //Click on 'Signup / Login' button
  cy.get('[href="/login"]').click()
  //log in correct email
  cy.LoginCorrectEmail()
  //Scroll down page to bottom
  cy.scrollTo("bottom")
  //Verify 'SUBSCRIPTION' is visible
  cy.contains("Subscription").scrollIntoView().should("be.visible")
  //Click on arrow at bottom right side to move upward
  cy.get(".fa.fa-angle-up").click()
  //Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
  cy.get(".logo.pull-left").should("be.visible")
})
Cypress.Commands.add("VerifyScrollUpwithoutArrowbuttonScrolDownFunctionality",()=>{
  //Click on 'Signup / Login' button
  cy.get('[href="/login"]').click()
  //log in correct email
  cy.LoginCorrectEmail()
  //Scroll down page to bottom
  cy.scrollTo("bottom")
  //Verify 'SUBSCRIPTION' is visible
  cy.contains("Subscription").scrollIntoView().should("be.visible")
  // Scroll up page to top
  cy.scrollTo("top")
  // Verify that page is scrolled up and 'Full-Fledged practice website for Automation Engineers' text is visible on screen
  cy.get(".logo.pull-left").should("be.visible")
})