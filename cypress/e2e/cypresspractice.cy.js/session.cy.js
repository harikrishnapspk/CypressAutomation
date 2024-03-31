    describe('orangehrm',() =>{
        beforeEach(()=>{
        cy.session_clsss()
            })
    it('visit the url',() =>{
            cy.visit("/web/index.php/time/viewEmployeeTimesheet")
            cy.get(".oxd-main-menu-item.active").click()
        })
        it('visit the url',() =>{
            cy.visit("/web/index.php/buzz/viewBuzz")
            cy.get("oxd-main-menu-item active").click()
            cy.get('.oxd-file-div > .oxd-icon').selectfile("cypress\fixtures\hari.jpg")
            
            
        })
    })