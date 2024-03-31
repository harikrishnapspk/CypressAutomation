describe('ticket booking', () =>{

    it('visit url', () =>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')
        cy.get('.showcoupon').click();
        cy.get('#coupon_code').type('hari123');
        cy.get('.form-row-last > .button').click();
        cy.get('#product_7441').click();
        cy.get('#travname').type('hari')          //first name
        cy.get('#travlastname').type('krishna')   //last name
        cy.get('#dob').click();
        cy.get('.ui-datepicker-year').select('2022') 
        cy.get('.ui-datepicker-month').select('Apr')
        cy.get(':nth-child(4) > :nth-child(7) > .ui-state-default').click();
        cy.get('#sex_1').click()
        cy.get('#addmorepax').click()
        cy.get('#fromcity').type('hyd')
        cy.get('#tocity').type('dub')
        cy.get('#departon').click();
        cy.get('.ui-datepicker-year').select('2024')
        cy.get('.ui-datepicker-month').select('Jun')
        cy.get(':nth-child(4) > :nth-child(5) > .ui-state-default').click()
        cy.get('#notes').type('i want go dubai on only masaj')
        cy.get('#reasondummy_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow').click()
        cy.get('.select2-search__field').type('visa')
        cy.get('#select2-reasondummy-container').click();
        cy.get('#deliverymethod_2').click();
        cy.get('#billname').type('tcs')
        cy.get('#billing_phone').type('987654321')
        cy.get('#billing_email').type('emial@gmail.com')
        cy.get('#billing_country_field > .woocommerce-input-wrapper > .select2 > .selection > .select2-selection > .select2-selection__arrow').click()
        cy.get('.select2-search__field').type('Japan')
        //cy.get('#select2-billing_country-result-2idg-JP').click('enter')        
        cy.get('#billing_postcode').type('hari@2000')
        cy.get('#select2-billing_state-container').click()
        //cy.get('.select2-search__field').type('kochi')
        cy.xpath("//textarea[@id='order_comments']").type('hari')
    })


})