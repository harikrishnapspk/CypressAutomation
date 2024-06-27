describe("validate date picker",()=>{
  it("select the  random date",()=>{
    cy.visit("https://www.hyrtutorials.com/p/calendar-practice.html")
    cy.get('[title="Calendar-icon"]').click()
    cy.get('[title="Calendar-icon"]').each((data)=>{
      let datavalue = data.text()
      if(datavalue==18){
        cy.wrap(data).click()
      }
    })
  })
})
