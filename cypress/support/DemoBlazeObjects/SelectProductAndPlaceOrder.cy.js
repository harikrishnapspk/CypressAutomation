
class SelectAndPlaceOrder{
    ProductId(){
        return cy.xpath('(//a[@class="hrefch"])[5]')
        }
    url(){
        return cy.url().should("include","/prod.html?idp_=5")
    }
    NameVerify(){
        return cy.contains("Iphone 6 32gb")
    }
    AddCart(){
        return cy.get('[onclick="addToCart(5)"]')
    }
    Alert(){
        return cy.on("window:alert",(data)=>{
            expect(data).to.contains("Product added")
        })
    }
    ClickCart(){
        return cy.get("#cartur")
    }
    carturl(){
        return cy.url()
    }
    ClickPlaceOrder(){
        return cy.get('[data-target="#orderModal"]')
    }
}


const PlaceOrder = new SelectAndPlaceOrder


Cypress.Commands.add("PlaceTheOrderInDirect",()=>{
    //click the product on the website
    PlaceOrder.ProductId().click()
    //check the page is open or not
    PlaceOrder.url()
    //product name verifying
    PlaceOrder.NameVerify().should("be.visible")
    //click on the add button
    PlaceOrder.AddCart().click()
    //click the cart page
    PlaceOrder.ClickCart().click()
    //checking the cart page is open or not
    PlaceOrder.carturl().should("include","/cart.html")
    //click the Place Order
    PlaceOrder.ClickPlaceOrder().click()
})




export default SelectAndPlaceOrder