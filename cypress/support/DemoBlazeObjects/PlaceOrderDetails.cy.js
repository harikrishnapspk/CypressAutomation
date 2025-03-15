class PlaceOrderDetailsPage{
    firstname(){
        return cy.get('#name')
    }
    city(){
        return cy.get('#city')
    }
    country(){
        return cy.xpath('//input[@id="country"]')
    }
    creditcard(){
        return cy.xpath('//input[@id="card"]')
    }
    month(){
        return cy.xpath('//input[@id="month"]')
    }
    year(){
        return cy.xpath('//input[@id="year"]')
    }
    conform(){
        return cy.xpath('//button[@onclick="purchaseOrder()"]')
    }
    text(){
        return cy.contains("Thank you for your purchase!")
    }
    data(){
        return cy.get(".lead.text-muted ")
    }
    ok(){
        return cy.get('.confirm')
    }
}

const PODPage = new PlaceOrderDetailsPage

Cypress.Commands.add("CustomerDetailsPlaceOrder",()=>{
    
        PODPage.firstname().type("Hari",{force:true})
        PODPage.country().type("India")
        PODPage.city().type("hyderabad",{force:true})
        PODPage.creditcard().type("123456789")
        PODPage.month().type("02")
        PODPage.year().type("2000")
        PODPage.conform().click()
        PODPage.text().should("be.visible")
        PODPage.data().should("be.visible")
        cy.wait(5000)
        PODPage.ok().click({force:true})
})
export default PlaceOrderDetailsPage