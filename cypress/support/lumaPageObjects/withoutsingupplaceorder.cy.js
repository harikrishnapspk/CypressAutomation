class PlaceOderDetails {
    HomePage(){
        return cy.get('[aria-label="store logo"]')
    }
    checkUrl(){
        return cy.url()
    }
    pageup(){
        return cy.get('[alt="Radiant Tee"]')
    }
    urlcheck(){
        return cy.url()
    }
    productcheck(){
        return cy.get('.base')
    }
    clickXL(){
        return cy.get('[option-label="XL"]')
    }
    ClkColour(){
        return cy.get('[aria-label="Blue"]')
    }
    SelectQuantity(){
        return cy.get('#qty')
    }
    clickcart(){
        return cy.get('[id="product-addtocart-button"]')
    }
    ClickCartButton(){
        return cy.get('.showcart')
    }
    procedcheck(){
        return cy.xpath('//button[@id="top-cart-btn-checkout"]')
    }
}

const PlaceOrderPO = new PlaceOderDetails

Cypress.Commands.add("PlaceTheOrderWithOutSingUPnew",function(url,url1){
    //check the home page is visible or not
    PlaceOrderPO.HomePage().should("be.visible")
    //check home page url link
    PlaceOrderPO.checkUrl().should("include",url)
    //scroll to the select product 
    PlaceOrderPO.pageup().scrollIntoView()
    //click to the select product on the page
    PlaceOrderPO.pageup().click()
    //again check the product page should be visible or not
    PlaceOrderPO.urlcheck().should("include",url1)
    //check the select product to visible in correct
    PlaceOrderPO.productcheck().should('have.text', 'Radiant Tee')
    //select the product size
    PlaceOrderPO.clickXL().click()
    //select the product color
    PlaceOrderPO.ClkColour().click()
    //select the quanty of the product
    PlaceOrderPO.SelectQuantity().clear().type("2")
    //click to the add cart button
    PlaceOrderPO.clickcart().click({force:true})
    cy.wait(5000)
    //go to the addcart page
    PlaceOrderPO.ClickCartButton().click({force:true})
    //click to the proceedcheck to the product
    PlaceOrderPO.procedcheck().click({force:true})
})


export default PlaceOderDetails