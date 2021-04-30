import React from 'react';

import Card from '../Card/Card';

import './CardList.scss';

export const CardList = props => (
    <div className='card-list'>
        {props.sections.map(section => (
            <Card key={section.id} {...section} />
        ))}
    </div>
);