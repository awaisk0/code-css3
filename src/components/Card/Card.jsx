import React from 'react';

import { withRouter } from 'react-router-dom';

import './Card.scss';

const Card = ({ name, description, history, linkTo }) => (
    <div
      className={`card-container`}
      onClick={() => history.push(`${linkTo}`)}
    >
        <h2>{name}</h2>
        <p>{description}</p>
    </div>
  );
  
  export default withRouter(Card);