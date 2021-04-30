// Quiz 2: CSS Transitions
const Questions2 = [
    {
        question: 'What is the correct CSS3 syntax to delay a transition by 2s?',
        answerChoices: [
            { 
                id: 'q2000',
                selectedAnswer: 'delay(2);', 
                isCorrect: false 
            },
            { 
                id: 'q2001',
                selectedAnswer: 'delay(2s);', 
                isCorrect: false 
            },
            { 
                id: 'q2002',
                selectedAnswer: 'transition-delay(2);', 
                isCorrect: false 
            },
            { 
                id: 'q2003',
                selectedAnswer: 'transition-delay: 2s;', 
                isCorrect: true 
            },
        ],
    },
    {
        question: 'Which of the following is correct CSS3 syntax to set the duration of a transition to 5s?',
        answerChoices: [
            { 
                id: 'q2004',
                selectedAnswer: 'duration: 5;', 
                isCorrect: false
            },
            { 
                id: 'q2005',
                selectedAnswer: 'duration: 5s;', 
                isCorrect: false 
            },
            { 
                id: 'q2006',
                selectedAnswer: 'transition-timing-function: 5s;', 
                isCorrect: false 
            },
            { 
                id: 'q2007',
                selectedAnswer: 'transition-duration: 5s;', 
                isCorrect: true 
            }
        ],
    },
    {
        question: 'How would you specify that an element ease-in?',
        answerChoices: [
            { 
                id: 'q2008',
                selectedAnswer: 'transition-timing-function: ease-in;', 
                isCorrect: true 
            },
            { 
                id: 'q2009',
                selectedAnswer: 'transition-property: ease-in;', 
                isCorrect: false 
            },
            { 
                id: 'q2010',
                selectedAnswer: 'property: ease-in;', 
                isCorrect: false 
            },
            { 
                id: 'q2011',
                selectedAnswer: 'transition: easein;', 
                isCorrect: false 
            }
        ],
    },
    {
        question: 'What is the correct CSS3 syntax to specify that a transition apply to the background?',
        answerChoices: [
            { 
                id: 'q2012',
                selectedAnswer: 'property: background;', 
                isCorrect: false 
            },
            { 
                id: 'q2013',
                selectedAnswer: 'transiton-property: background;', 
                isCorrect: true 
            },
            { 
                id: 'q2014',
                selectedAnswer: 'property(3);', 
                isCorrect: false 
            },
            { 
                id: 'q2015',
                selectedAnswer: 'transition(background);', 
                isCorrect: false 
            }
        ],
    },
];

export default Questions2;