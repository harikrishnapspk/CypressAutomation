class practice{
    //check radio button
    RadioButon(){
        return cy.get("#bmwradio")
    }
    //select the check boxes
    CheckBox(){
        return cy.get("#benzcheck")
    }
    //switch window page
    switchpage(){
        return cy.get("#openwindow")
    }
    //go back apage
    goback(){
        return cy.go("back")
    }
}
const practiceAll = new practice
Cypress.Commands.add("everythingpraticeExpls",()=>{
    // check the radio button on the check the currot item
    practiceAll.RadioButon().should("be.visible").click()               //check() also be work here

    //check the checkboxes
    practiceAll.CheckBox().should("be.visible").check()                 //click() also work here

    //open the switchpage on another page
    practiceAll.switchpage().should("be.visible").click()
    practiceAll.goback()
})


export default practice