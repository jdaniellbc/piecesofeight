
import React, { Component } from 'react';
import React from 'react';
// import Header from '../Header';
// import Wrapper from '../Wrapper';
// import Footer from '../Footer';
// import data from '../data.json';
import './Pirate.css';


// class Game extends Component {
//     state = {
//         data,
//         score: 0,
//         topScore: 0
//     };
  

//     componentDidMount() {
//         this.setState({ data: this.shuffleData(this.state.data) });
//     };


//     shuffleData = data => {
//         let i = data.length - 1;
//         while (i > 0) {
//             const j = Math.floor(Math.random() * (i + 1));
//             const temp = data[i];
//             data[i] = data[j];
//             data[j] = temp;
//             i--;
//         }
//         return pirates;
//     };

// };

const Pirate = props => (
    <div onClick={() => props.setClicked(props.id)} className="pirate-pic">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
);


export default Pirate;