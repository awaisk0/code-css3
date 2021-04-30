import React, { Component } from 'react';

import './Quiz.scss';

class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentQuestion: 0,
            score: 0,
            displayScore: false,
            correctAnswers: []
        }
    }

    handleSelectedAnswerClick = (isCorrect) => {
        const { score, currentQuestion, correctAnswers } = this.state;
        const { questions } = this.props;

        const nextQuestion = currentQuestion + 1;
		if (isCorrect) {
			this.setState({score: score + 1});
		} else {
            correctAnswers.push(questions[currentQuestion].answerChoices.map( 
                answerChoice =>
                    answerChoice.isCorrect === true ? answerChoice.selectedAnswer : null
            ));
        }
		nextQuestion < questions.length ? this.setState({currentQuestion: nextQuestion}) 
        : this.setState({displayScore: true});
    }

    render() {
        const { score, displayScore, correctAnswers, currentQuestion } = this.state;
        const { questions } = this.props;

        return (
            <div className='outer-quiz-container'>
                <div className='inner-quiz-container'>
                    {displayScore ?
                        <section className='score-section'>
                            You scored {score} out of {questions.length}
                            <br />
                            {correctAnswers[0] !== undefined ? `The correct answer for Q1 was: ${correctAnswers[0].toString().split(',').join('')}` : null}
                            <br />
                            {correctAnswers[1] !== undefined ? `The correct answer for Q2 was: ${correctAnswers[1].toString().split(',').join('')}` : null}
                            <br />
                            {correctAnswers[2] !== undefined ? `The correct answer for Q3 was: ${correctAnswers[2].toString().split(',').join('')}` : null}
                            <br />
                            {correctAnswers[3] !== undefined ? `The correct answer for Q4 was: ${correctAnswers[3].toString().split(',').join('')}` : null}
                        </section>
                    : (
                        <>
                            <section className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <div className='question-text'>
                                    {questions[currentQuestion].question}
                                </div>
                            </section>
                            <section className='answer-section'>
                                {questions[currentQuestion].answerChoices.map( 
                                    answerChoice => (
                                        <button 
                                            key={answerChoice.id}
                                            className='selected-button' 
                                            onClick={() => this.handleSelectedAnswerClick(answerChoice.isCorrect) }
                                        >
                                            {answerChoice.selectedAnswer}
                                        </button>
                                    )
                                )}
                            </section>
                        </>	
                    )}
                </div>
            </div>
        );
    }
}

export default Quiz;