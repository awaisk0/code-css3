// Quiz 3: CSS Animations
const Questions3 = [
    {
        question: 'What is the the name of the @ rule when using CSS animations?',
        answerChoices: [
            { 
                id: 'q3000',
                selectedAnswer: '@frames', 
                isCorrect: false 
            },
            { 
                id: 'q3001',
                selectedAnswer: '@keys', 
                isCorrect: false 
            },
            { 
                id: 'q3002',
                selectedAnswer: '@key-frames', 
                isCorrect: false 
            },
            { 
                id: 'q3003',
                selectedAnswer: '@keyframes', 
                isCorrect: true 
            },
        ],
    },
    {
        question: 'Which of the following is correct CSS3 syntax to specify that an animation last 4s?',
        answerChoices: [
            { 
                id: 'q3004',
                selectedAnswer: 'animation-duration: 4s;', 
                isCorrect: true
            },
            { 
                id: 'q3005',
                selectedAnswer: 'animation-duration: 4;', 
                isCorrect: false 
            },
            { 
                id: 'q3006',
                selectedAnswer: 'animation-delay: 4s;', 
                isCorrect: false },
            { 
                id: 'q3007',
                selectedAnswer: 'delay: 4s;', 
                isCorrect: false 
            }
        ],
    },
    {
        question: 'Which is of the follow is the correct way to specify that the name of an animation is called example?',
        answerChoices: [
            { 
                id: 'q3008',
                selectedAnswer: 'name: example;', 
                isCorrect: false 
            },
            { 
                id: 'q3009',
                selectedAnswer: 'animation-name: example;', 
                isCorrect: true 
            },
            { 
                id: 'q3010',
                selectedAnswer: 'name(example);', 
                isCorrect: false 
            },
            { 
                id: 'q3011',
                selectedAnswer: 'animation(example);', 
                isCorrect: false 
            }
        ],
    },
    {
        question: 'What is the correct CSS3 syntax to specify that an animation start after 5s?',
        answerChoices: [
            { 
                id: 'q3012',
                selectedAnswer: 'animation-delay: 5s;', 
                isCorrect: true 
            },
            { 
                id: 'q3013',
                selectedAnswer: 'delay: 5s;', 
                isCorrect: false 
            },
            { 
                id: 'q3014',
                selectedAnswer: 'animation-delay: 5;', 
                isCorrect: false 
            },
            { 
                id: 'q3015',
                selectedAnswer: 'animation-delay(5);', 
                isCorrect: false 
            }
        ],
    },
];

export default Questions3;