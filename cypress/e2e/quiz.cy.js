describe('Test Quiz Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });

    it('should start quiz, prompt questions, and then view score and start new quiz', () => {
       cy.contains('Start Quiz').click()
         cy.contains('Next').click()
         cy.get('Score').type(fixture.scoreNumber);
         cy.contains('Start New Quiz').click()
    })
})