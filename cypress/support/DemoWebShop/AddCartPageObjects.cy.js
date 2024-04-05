class AddCortPage{
    SelectRam(){
        return cy.get("#product_attribute_16_6_5")
    }
    SelectHdd(){
        return cy.get("#product_attribute_16_3_6_19")
    }
    SelectOS(){
        return cy.get("#product_attribute_16_4_7_21")
    }
    SelectSoftware(){
        return cy.xpath('(//input[@name="product_attribute_16_8_8"])[2]')
    }
    ClickTheAddCart(){
        return cy.get("#add-to-cart-button-16")
    }
    ClickOnShopingCort(){
        return cy.xpath('(//a[@class="ico-cart"])[1]')
    }
    ClickAgreeCheckBox(){
        return cy.xpath('//input[@name="termsofservice"]')
    }
    CheckOut(){
        return cy.get("#checkout")
    }
}
const AddCortObjects = new AddCortPage
Cypress.Commands.add("AddToElementOnCart",()=>{
    //Selct The RAM On the Objet
    AddCortObjects.SelectRam().select(1)
    //Selct The HDD on the object
    AddCortObjects.SelectHdd().check()
    //Slect os on the object
    AddCortObjects.SelectOS().check()
    //select softwaere on the object
    AddCortObjects.SelectSoftware().check()
    //select on the add cart button
    AddCortObjects.ClickTheAddCart().click()
    //click on the Shopping cort button
    AddCortObjects.ClickOnShopingCort().click()
    //click on the agrre check box
    AddCortObjects.ClickAgreeCheckBox().check()
    //Click on the CheckOut Button
    AddCortObjects.CheckOut().click()
})
export default AddCortPage