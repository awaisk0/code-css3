import React from 'react';

import { CardList } from '../../components/CardList/CardList';

import './Learn.scss';

class Learn extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    name: 'Lesson 1: How to use Transforms',
                    id: 'l0001',
                    description: 'CSS3 Transforms',
                    linkTo: 'lesson1'
                },
                {
                    name: 'Lesson 2: Transforms example',
                    id: 'l0002',
                    description: 'CSS3 Transforms',
                    linkTo: 'lesson2'
                },
                {
                    name: 'Lesson 3: How to use Transitions',
                    id: 'l0003',
                    description: 'CSS3 Transitions',
                    linkTo: 'lesson3'
                },
                {
                    name: 'Lesson 4: Transitions example',
                    id: 'l0004',
                    description: 'CSS3 Transitions',
                    linkTo: 'lesson4'
                },
                {
                    name: 'Lesson 5: How to use Animations in CSS3',
                    id: 'l0005',
                    description: 'CSS3 Animations',
                    linkTo: 'lesson5'
                },
                {
                    name: 'Lesson 6: CSS3 Animations example',
                    id: 'l0006',
                    description: 'CSS3 Animations',
                    linkTo: 'lesson6'
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
            <section className='learn-container'>
                <div className='search-box-container'>
                    <input type='search' className='search-box' placeholder='search for a keyword...' onChange={event => this.setState({ searchField: event.target.value })} />
                </div>
                <CardList sections={filteredSections} />
            </section>
        );
    }
}

export default Learn;