describe('Tech Quiz e2e', () => {
    beforeEach(() => {
        cy.fixture('questions.json').then((questions) => {
            cy.intercept("GET", '/api/questions', { body: questions}).as("getQuestions");
        });
        cy.visit('http://127.0.0.1:3001/');
    });

    it('starts the quiz and goes through questions', () => {
       cy.contains('Start Quiz').click();
       cy.get('[data-testid=question]').should('be.visible');

       cy.get('[data-testid=answer-0').click();
       cy.get('[data-testid=next-button').click();
    
       cy.contains('Your score').should('exist');
    });

    it('allows restarting the quiz', () => {
        cy.contains('Start Quiz').click();
        cy.get('[data-testid=answer-0]').click();
        cy.get('[data-testid=next-button]').click();

        cy.contains('Restart Quiz').click();
        cy.contains('Start Quiz').should('be.visible');
    });
});