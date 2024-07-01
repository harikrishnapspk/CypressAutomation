describe("Alerts Practice for 3'models",()=>{
    beforeEach(()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    })
    it("it's First Method",()=>{
        cy.get('[onclick="jsAlert()"]').click()
        cy.on("window:alert",(data)=>{
            expect(data).to.contains("I am a JS Alert")
        })
        cy.get("#result").should("have.text","You successfully clicked an alert")
    })
    it("its second method",()=>{
        cy.get('[onclick="jsConfirm()"]').click()
        cy.on("window:confirm",(data)=>{
            expect(data).to.contains("I am a JS Confirm")
        })
        // cy.on("window:confirm",(data)=>{
        //     expect(data).to.equal("I am a JS Confirm")
        // })
        // cy.on("window:confirm",()=>false)
        
    })
    it.only("its third method",function(){
        
        cy.window().then((data)=>{
            cy.stub(data,"prompt").returns("i am king of my own kingdom")
            cy.get('[onclick="jsPrompt()"]').click()
        })
        // cy.window().then((data)=>{
        //     cy.stub(data,"prompt").returns(null)
        //     cy.get('[onclick="jsPrompt()"]').click()
        // })
    })
})

it("date example steps",()=>{
    cy.get("calender click id").click()
    cy.get("calender every element inside div element").each((data)=>{
    let datavalue =data.text()
    if(datavalue == 18)
        cy.wrap(data).click()
})
})
