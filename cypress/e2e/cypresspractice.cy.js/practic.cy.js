/// <reference types="cypress"/>
describe('testing_the_page',() =>{
    beforeEach(()=>{
        //visit the url page
        cy.visit('https://automationexercise.com/')
        //verify title
        cy.title().should('eq','Automation Exercise')
        //click on singup&login buttton
        cy.xpath("//a[@href='/login']").click()
    })
    it.skip('ente',() =>{
        //new user sing up link verify
        cy.xpath("//h2[contains(text(),'New User Signup!')]").should('be.visible')
        //enter name
        cy.xpath("//input[@data-qa='signup-name']").type("hari")
        //create random email
        const randomEmail=Math.random().toString(32).substring(2,15)+"@gmail.com"
        cy.log(randomEmail)
        //enter email_id
        cy.xpath("//input[@data-qa='signup-email']").type(randomEmail)
        //click on the sign up 
        cy.xpath("//button[@data-qa='signup-button']").click()
        //enter accout is visible
        cy.url().should('include','/signup')
        //fill the details
        cy.xpath("//input[@id='id_gender1']").click()
        //ramdom password
        const randompassword=Math.random().toString(32).substring(2,13)
        cy.log(randompassword)
        //enter password
        cy.xpath("//input[@id='password']").type(randompassword)
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

it.skip("login usere As correct email",function(){

    //log in user mail&password
    cy.user_login()
    //accout name is vissible
    cy.xpath("//i[@class='fa fa-user']").should("be.visible")
    
    })

it.skip("incorrect user name",()=>{
    //log in account
    cy.User_login()
    //incorrect is vissible
    cy.xpath("//p[normalize-space()='Your email or password is incorrect!']").should('be.visible')
    })
it.skip("log out user",()=>{
    //log in account
    cy.user_login()
    //log in vissible
    cy.xpath("//i[@class='fa fa-user']").should("be.visible")
    //log out user
    cy.xpath("//a[@href='/logout']").click()
    //login page vissible
    cy.url().should('include','/login')
    })
it.skip("regster email and existing email",()=>{

    //new user singup is visible
    cy.xpath("//h2[contains(text(),'New User Signup!')]").should('be.visible')
    //enter the user name
    cy.xpath("//input[@data-qa='signup-name']").type("hari")
    //enter valid email
    cy.xpath("//input[@data-qa='signup-email']").type("cmmfpatri48@gmail.com")   
    //entr sign up button
    cy.xpath("//button[@data-qa='signup-button']").click()  
    //allready existed on email
    cy.xpath("//p[contains(text(),'Email Address already exist!')]").should("be.visible")
})

it.only("contact form",()=>{
    //log in user mail&password
    cy.user_login()
    //accout name is vissible
    cy.xpath("//i[@class='fa fa-user']").should("be.visible")
    //enter into the contact form
    cy.xpath("//a[@href='/contact_us']").click()
    //visible the contact form
    cy.xpath("(//h2[@class='title text-center'])[2]").should("be.visible")
    //fill the contact form
    cy.xpath("//input[@data-qa='name']").type("hari")
    cy.xpath("//input[@data-qa='email']").type("hari123@gmail.com")
    cy.xpath("//input[@data-qa='subject']").type("my name is hari,just like a wow")
    cy.xpath("//textarea[@data-qa='message']").type("inki pinki ponki dad was a donkiii")
    //cy.xpath("//input[@name='upload_file']").type("hari")
    cy.xpath("//input[@name='submit']").click()
    cy.wait(5000)
    //alert conformation
    cy.on('window:confirm',(h)=> {
        expect(h).to.contains("Press OK to proceed!");
        
    })
    cy.wait(5000)
    //alert msg visible
    cy.xpath("//div[@class='status alert alert-success']").should("be.visible")
    //click on home button
    cy.xpath("//a[@class='btn btn-success']").click()
    //home page verification
    cy.url().should('include','https://automationexercise.com/')
    
})

it.skip("veriffy the test case page",()=>{
    //log in user mail&password
    cy.user_login()
    //accout name is vissible
    cy.xpath("//i[@class='fa fa-user']").should("be.visible")
    //click on the test_case page
    cy.xpath("(//a[@href='/test_cases'])[1]").click()
    //test case page visible
    cy.url().should("include","/test_cases")
})
it.skip("products page",()=>{
    //log in user mail&password
    cy.user_login()
    //accout name is vissible
    cy.xpath("//i[@class='fa fa-user']").should("be.visible")
    //open on the products
    cy.xpath("//a[@href='/products']").click()
    //products page is visible
    cy.url().should("include","/products")
    //navigate all products
    cy.xpath("//h2[@class='title text-center']").should("be.visible")
    //action the first_product
    cy.xpath("//a[@href='/product_details/1']").click()
    //product_details page checking
    cy.url().should('include',"/product_details/1")
    //product information visuvals
    cy.xpath("//div[@class='product-information']").should("be.visible")
})
it.skip("searchin the product",()=>{
    //log in user mail&password
    cy.user_login()
    //accout name is vissible
    cy.xpath("//i[@class='fa fa-user']").should("be.visible")
    //open on the products
    cy.xpath("//a[@href='/products']").click()
    //products page is visible
    cy.url().should("include","/products")
    //all products is visible
    cy.xpath("//h2[@class='title text-center']").should("be.visible")
    //search on the product
    cy.xpath("//input[@id='search_product']").type("white top")
    cy.xpath("//button[@id='submit_search']").click()
    //search product is visible
    cy.xpath("//img[@alt='ecommerce website products']").should("be.visible")
    //related products serch
    cy.xpath("//div[@class='features_items']").should("be.visible")
})
it.skip("verify subscription on h_p",()=>{
    //log in user mail&password
    cy.user_login()
    //scrolling to down page
    cy.scrollTo('bottom')
    //visualization
    cy.xpath("//h2[contains(text(),'Subscription')]").should("be.visible")
    //searh the mail
    cy.xpath("//input[@id='susbscribe_email']").type("cmmfpatri48@gmail.com")
    cy.xpath("//button[@id='subscribe']").click()
    //You have been successfully subscribed!
    cy.xpath("//div[@class='alert-success alert']").should("be.visible")
})
it.skip("verify cart_page",()=>{
    //log in user mail&password
    cy.user_login()
    //accout name is vissible
    cy.xpath("//i[@class='fa fa-user']").should("be.visible")
    //click on cart page
    cy.xpath("(//a[@href='/view_cart'])[1]").click()
    //scroll down to footer
    cy.scrollTo("bottom")
    //verify the subscription
    cy.xpath("//h2[contains(text(),'Subscription')]").should("be.visible")
    //Enter email address in input and click arrow button
    cy.xpath("//input[@id='susbscribe_email']").type("cmmfpatri48@gmail.com")
    cy.xpath("//button[@id='subscribe']").click()
    
    //Verify success message 'You have been successfully subscribed!' is visible
    cy.xpath("//div[@class='alert-success alert']").should("be.visible")
    cy.wait(2000)
})
it.skip("add_product in cart",()=>{
    //log in user mail&password
    cy.user_login()
    //accout name is vissible
    cy.xpath("//i[@class='fa fa-user']").should("be.visible")
    //click on products page
    cy.xpath("//a[@href='/products']").click()
    //click on add cart
    cy.xpath("(//a[@data-product-id='1'])[1]").click()
    //click on continew button
    cy.xpath("//button[@class='btn btn-success close-modal btn-block']").click()
    //Hover over second product and click 'Add to cart'
    cy.xpath("(//a[@data-product-id='2'])[1]").click() 
    //click on continew button
    cy.xpath("//button[@class='btn btn-success close-modal btn-block']").click()
    //click on cart page
    cy.xpath("(//a[@href='/view_cart'])[1]").click()
    //Verify both products are added to Cart
    cy.url().should("include","/view_cart")
    //Verify their prices, quantity and total price
    cy.xpath("//td[@class='price']").should("be.visible")
    cy.xpath("//td[@class='quantity']").should("be.visible")
    cy.xpath("//td[@class='total']").should("be.visible")

})
it.skip("view product on biew cart",()=>{
    //log in user mail&password
    cy.user_login()
    //accout name is vissible
    cy.xpath("//i[@class='fa fa-user']").should("be.visible")
    //click view product on any home page
    cy.xpath("//a[@href='/product_details/1']").click()
    //product page visible
    cy.url().should('include',"/product_details/1")
    //Increase quantity to 4
    // Get the input element by its name attribute
    cy.xpath('//input[@name="quantity"]').then(($input) => {
        // Get the current value
        const currentValue = parseInt($input.val())
        // Increase the value (you can adjust the increment as needed)
        const newValue = currentValue + 1
        // Set the new value
        cy.wrap($input).clear().type(4)
    })
    //click add cort
    cy.xpath("//button[@type='button']").click()
    //click on cart page
    cy.xpath("(//a[@href='/view_cart'])[2]").click()
    // Verify that product is displayed in cart page with exact quantity
    cy.url().should("include","/view_cart")
    cy.xpath("(//td[@class='cart_quantity'])[2]").should("be.visible")
  
})
it.skip("place_order_checkout",()=>{
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
    //Click 'Register / Login' button
     //log in user mail&password
     cy.get('.modal-body > :nth-child(2) > a > u').click()
    cy.user_login()
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
    //Verify success message 'Your order has been placed successfully!'
    //cy.xpath("(//div[@class='alert-success alert'])[1]").should("be.visible")
})
it.skip("place order:beforecheck out",()=>{
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
    //Click 'Register / Login' button
     //log in user mail&password
     cy.get('.modal-body > :nth-child(2) > a > u').click()
    cy.user_login()
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
it.skip("log in before check out",()=>{
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
  //Click 'Register / Login' button
   //log in user mail&password
   cy.get('.modal-body > :nth-child(2) > a > u').click()
  cy.user_login()
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
it.skip("remove product from the cart",()=>{
    //click on add cart
  cy.xpath("(//a[@data-product-id='1'])[1]").click()
  //click on continew button
  cy.xpath("//button[@class='btn btn-success close-modal btn-block']").click()
  //click on cart page
  cy.xpath("(//a[@href='/view_cart'])[1]").click()
  //Verify that cart page is displayed
  cy.url().should("include","/view_cart")
  //Click 'X' button corresponding to particular product
  cy.xpath("//a[@class='cart_quantity_delete']").click()
  // Verify that product is removed from the cart
  cy.xpath("//span[@id='empty_cart']").should("be.visible")
})
it.skip("view_categery_products",()=>{
    cy.user_login()
    //Verify that categories are visible on left side bar
    cy.xpath("//div[@id='accordian']").should("be.visible")
    // Click on 'Women' category
    cy.xpath("//a[@href='#Women']").click()
    cy.wait(5000)
    // Click on any category link under 'Women' category, for example: Dress
    cy.xpath("(//a[contains(text(),'Dress')])[1]").click()
    // Verify that category page is displayed and confirm text 'WOMEN - TOPS PRODUCTS'
    cy.url().should("include","/category_products/1")
    cy.xpath("//h2[@class='title text-center']").should("be.visible")
    // On left side bar, click on any sub-category link of 'Men' category
    cy.xpath("//a[@href='#Men']").click()
    cy.xpath("//a[@href='/category_products/3']").click()
    // Verify that user is navigated to that category page
    cy.url().should("include","/category_products/3")
})
it.skip("view&cart brand products",()=>{
    cy.user_login()
    //Click on 'Products' button
    cy.xpath("//a[@href='/products']").click()
    //Verify that Brands are visible on left side bar
    cy.xpath("//div[@class='brands_products']").should("be.visible")
    //Click on any brand name
    cy.xpath("//a[@href='/brand_products/Polo']").click()
    //Verify that user is navigated to brand page and brand products are displayed
    cy.url().should("include","/brand_products/Polo")
    cy.xpath("//div[@class='features_items']").should("be.visible")
    //On left side bar, click on any other brand link
    cy.xpath("//a[@href='/brand_products/Madame']").click()
    //Verify that user is navigated to that brand page and can see products
    cy.url().should("include","/brand_products/Madame")
    cy.xpath("//div[@class='features_items']").should("be.visible")
})
it.skip("Search Products and Verify Cart After Login",()=>{
    //Click on 'Products' button
    cy.xpath("//a[@href='/products']").click()
    //Verify user is navigated to ALL PRODUCTS page successfully
    cy.url().should("include","/products")
    // Enter product name in search input and click search button
    cy.xpath("//input[@id='search_product']").type("Winter Top{enter}")
    cy.xpath("//button[@id='submit_search']").click()
    // Verify 'SEARCHED PRODUCTS' is visible
    cy.xpath("//div[@class='productinfo text-center']").should("be.visible")
    // Verify all the products related to search are visible
    cy.xpath("//div[@class='features_items']").should("be.visible")
    // Add those products to cart
    cy.xpath("(//a[@class='btn btn-default add-to-cart'])[1]").click()
    // Click 'Cart' button and verify that products are visible in cart
    cy.xpath("(//a[@href='/view_cart'])[2]").click()
    cy.xpath("//div[@id='cart_info']").should("be.visible")
    // Click 'Signup / Login' button and submit login details
    cy.get(':nth-child(4) > a').click()
    cy.user_login()
    // Again, go to Cart page
    cy.xpath("(//a[@href='/view_cart'])[1]").click()
    // Verify that those products are visible in cart after login as well
    cy.xpath("//div[@id='cart_info']").should("be.visible")
})
it.skip("Add review on product",()=>{
    cy.user_login()
    //Click on 'Products' button& products page visible
    cy.xpath("//a[@href='/products']").click()
    cy.url().should("include","/products")
    //Click on 'view-Products' button
    cy.xpath("//a[@href='/product_details/1']").click()
    // Verify 'Write Your Review' is visible
    cy.xpath("//div[@class='category-tab shop-details-tab']").should("be.visible")
    // Enter name, email and review
    cy.xpath("//input[@id='name']").type("hari")
    cy.xpath("//input[@id='email']").type("hari@gmail.com")
    cy.xpath("//textarea[@id='review']").type("hari is  a good boy,and its look like a super dress")
    // Click 'Submit' button
    cy.xpath("//button[@id='button-review']").click()
    // Verify success message 'Thank you for your review.'
    cy.wait(5000)
    //cy.xpath("//span[normalize-space()='Thank you for your review.']").should("be.visible")
})
it.skip("Add to cart from Recommended items",()=>{
    cy.user_login()
    //Scroll to bottom of page
    cy.scrollTo(0, 8000)
    //Verify 'RECOMMENDED ITEMS' are visible
    cy.xpath("//div[@class='recommended_items']").should("be.visible")
    // Click on 'Add To Cart' on Recommended product
    cy.xpath("(//a[@data-product-id='1'])[1]").click()
    // Click on 'View Cart' button
    cy.xpath("(//a[@href='/view_cart'])[2]").click()
    // Verify that product is displayed in cart page
    cy.xpath("//div[@id='cart_info']").should("be.visible")
})
})

