import React from 'react';

import { CardList } from '../../components/CardList/CardList';

import './QuizPage.scss';

class QuizPage extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    name: 'Quiz 1: CSS3 Transforms',
                    id: 'q0001',
                    description: 'CSS3 Transforms Quiz',
                    linkTo: 'quiz1'
                },
                {
                    name: 'Quiz 2: CSS3 Transitions',
                    id: 'q0002',
                    description: 'CSS3 Transitions Quiz',
                    linkTo: 'quiz2'
                },
                {
                    name: 'Quiz 3: CSS3 Animations',
                    id: 'q0003',
                    description: 'CSS3 Animations Quiz',
                    linkTo: 'quiz3'
                }
            ],
            searchField: ''
        }
    }

    render() {

        const {sections, searchField} = this.state;

        const filteredSections = sections.filter(section =>
            section.name.toLowerCase().includes(searchField.toLowerCase())
        );

        return (
            <section className='quiz-page-container'>
                <div className='search-box-container'>
                    <input 
                        type='search' 
                        className='search-box' 
                        placeholder='search for a keyword...' 
                        onChange={event => this.setState({ searchField: event.target.value })} 
                    />
                </div>
                <CardList sections={filteredSections} />

            </section>
        );
    }
}

export default QuizPage;