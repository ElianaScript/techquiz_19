import { mount } from '@cypress/react';
import Quiz from '../../src/components/Quiz';


describe('Quiz Component', () => {
    const mockQuestions = [
        { question: 'What is the capital of France?', answers: ['Paris', 'London', 'Berlin'], correct: 'Paris' },
    ];

    it('renders the quiz and shows the first question', () => {
        mount(<Quiz questions= {mockQuestions} />);
        cy.contains('What is the capital of France?');
    });

    it('selects an answer and moves to the next question', () => {
        mount(<Quiz questions={mockQuestions} />);
        cy.contains('Paris').click();
        cy.contains('Next').click();
        cy.contains('Your score').should('exist');
    });
});