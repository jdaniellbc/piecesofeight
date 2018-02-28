import React from 'react';
import './Header.css';

const Header = props => (
    <header className="header">
        <h1>Pieces of Eight!</h1>
        <h3>A pirate themed memory game suitable for ages 4 to 8</h3>
        <h3>
            Click on each image in succession and don't repeat or you'll walk the plank!
        </h3>
    </header>
);

export default Header;