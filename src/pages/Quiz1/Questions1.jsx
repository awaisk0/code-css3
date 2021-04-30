// Quiz 1: CSS Transforms
const Questions1 = [
    {
        question: 'What is the correct CSS3 syntax to double the size of an element?',
        answerChoices: [
            { 
                id: 'q1000',
                selectedAnswer: 'scale(2)', 
                isCorrect: true 
            },
            { 
                id: 'q1001',
                selectedAnswer: 'transform(2)', 
                isCorrect: false 
            },
            { 
                id: 'q1002',
                selectedAnswer: 'transition(2)', 
                isCorrect: false 
            },
            { 
                id: 'q1003',
                selectedAnswer: 'multiply(2)', 
                isCorrect: false 
            },
        ],
    },
    {
        question: 'Which of the following is correct CSS3 syntax to rotate an element?',
        answerChoices: [
            { 
                id: 'q1004',
                selectedAnswer: 'turn(20deg)', 
                isCorrect: false
            },
            { 
                id: 'q1005',
                selectedAnswer: 'transition(40)', 
                isCorrect: false 
            },
            { 
                id: 'q1006',
                selectedAnswer: 'rotate(45deg)', 
                isCorrect: true },
            { 
                id: 'q1007',
                selectedAnswer: 'rot(30)', 
                isCorrect: false 
            }
        ],
    },
    {
        question: 'What is the correct CSS3 syntax to half the size of an element?',
        answerChoices: [
            { 
                id: 'q1008',
                selectedAnswer: 'scale(0.5)', 
                isCorrect: true 
            },
            { 
                id: 'q1009',
                selectedAnswer: 'scale(2)', 
                isCorrect: false 
            },
            { 
                id: 'q1010',
                selectedAnswer: 'scale(1)', 
                isCorrect: false 
            },
            { 
                id: '1011',
                selectedAnswer: 'half(50)', 
                isCorrect: false 
            }
        ],
    },
    {
        question: 'What is the correct CSS3 syntax to make an element 3x bigger?',
        answerChoices: [
            { 
                id: '1012',
                selectedAnswer: 'scale(3x)', 
                isCorrect: false 
            },
            { 
                id: '1013',
                selectedAnswer: 'scale(3)', 
                isCorrect: true 
            },
            { 
                id: '1014',
                selectedAnswer: 'increase(3)', 
                isCorrect: false 
            },
            { 
                id: '1015',
                selectedAnswer: 'transform(3)', 
                isCorrect: false 
            }
        ],
    },
];

export default Questions1;