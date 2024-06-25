describe("checking_alret_messeges",()=>{
    beforeEach(()=>{
        cy.fixture("alerturl").then((harikrish)=>{
            cy.visit(harikrish.URL)
        })
    })
    it.skip("this is first method",()=>{
        cy.get(':nth-child(1) > button').click({force:true})
        cy.on("window:alert",(text)=>{
            expect(text).contains("I am a JS Alert")
        })
    })
    it.skip("this is second method",()=>{
        cy.get(':nth-child(2) > button').click({force:true})
        cy.on("window:conform",(text)=>{
            expect(text).equal("I am a JS Alert")
        })
    })
    it.skip("this is second method",()=>{
        cy.get(':nth-child(2) > button').click()
        cy.on("window:conform",()=>false)
    })
    it.skip("third method",()=>{
        cy.window().then((data)=>{
            cy.stub(data,"prompt").returns("i am a king")
            cy.get(':nth-child(3) > button').click()  
        })
    })
    it("4th method",()=>{
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register',{auth:{username:"admin",password:"admin4"}})
        cy.visit('https://admin:admin4@naveenautomationlabs.com/opencart/index.php?route=account/register')

    })
})