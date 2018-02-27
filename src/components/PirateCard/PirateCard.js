import React from 'react';
import './PirateCard.css';

const PirateCard = props => (
    <div onClick={() => props.setClicked(props.id)} className="pirate-card">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);

export default PirateCard;