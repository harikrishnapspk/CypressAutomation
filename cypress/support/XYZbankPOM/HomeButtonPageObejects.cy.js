class HomeButtonPage{
    HomeButton(){
        return cy.xpath('//button[@ng-click="home()"]')
    }
}
const HomeButton = new HomeButtonPage

Cypress.Commands.add("ClickOnHomePageButton",()=>{
    //click on the home page button
    HomeButton.HomeButton().click()
})





export default  HomeButtonPage