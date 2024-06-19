

describe('Make Appointment', () =>{

    it('enter link',() =>{

        cy.visit('https://apptsondemand.netlify.app/')    //enter the url page
        cy.get('#start_date').type('2000-02-18');          // enter stat date
        cy.get('#end_date').type('2000-08-15');             //enter end date
        cy.get('#is_weekend').click();              
        cy.get('#exclude').click();  
        cy.get('#min_time').select('3:00 AM').should('have.value','3');
        cy.get('#max_time').select('1:00 PM').should('have.value','1');
        cy.get('#min_dur').select('45').should('have.value','45');
        cy.get('.excludeCalendar > .form-control').type('2000-02-22');
        cy.get('#max_noon_before').as('maxNoonInput');
        cy.get('@maxNoonInput').clear().type(5);                    //first enter no. clean and enter new number
        cy.get('@maxNoonInput').should('have.value', String(5));        //its number check
        cy.get('#max_noon_after').clear().type(11);                 // same as above comment
        cy.get('#generateCsv').click();
        
        
    })
})