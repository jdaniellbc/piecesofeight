import React from 'react';
import './Pirate.css';

const Pirate = props => (
    <div className="img-container">
    <div onClick={() => props.selectPirate(props.id)} className="pirate-pic">
        
            <img alt={props.id} src={props.image} />
        </div>

    </div>
);

export default Pirate;