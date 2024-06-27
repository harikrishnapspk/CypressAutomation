class DemoWebShopPage{
    Logo(){
        return cy.xpath('//img[@alt="Tricentis Demo Web Shop"]')
    }
    ComputerName(){
        return cy.contains("Build your own computer")
    }
    ClickOnSpecificElement(){
        return cy.xpath('(//input[@type="button"])[6]')
    }
    SpecElementVisible(){
        return cy.get(".overview")
    }
}

const DemoPageObjects = new DemoWebShopPage
Cypress.Commands.add("LogoVisible",()=>{
    //Logo Visubalation
    DemoPageObjects.Logo().should("be.visible")
    //Computer Name checking
    DemoPageObjects.ComputerName().scrollIntoView().should("be.visible")
})
Cypress.Commands.add("ClickOnAddCart",()=>{
    cy.wait(2000)
    //Click On Sepecific Add Cart BUtton
    DemoPageObjects.ClickOnSpecificElement().click()
    //Assrtion on the Specific element is visible
    DemoPageObjects.SpecElementVisible().should("be.visible")
})



export default DemoWebShopPage