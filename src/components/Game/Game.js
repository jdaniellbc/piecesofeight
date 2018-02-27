import React, { Component } from 'react';
// import Header from '../Header';
// import Container from '../Container';
// import Footer from '../Footer';
import data from '../data.json';



// class Game extends Component {
//   state = {
//     pirates,
//     score: 0,
//     topScore: 0
//   };

//   componentDidMount() {
//     this.setState({ pirates: this.shuffleData(this.state.pirates) });
//   }


//   shuffleData = data => {
//     let i = pirates.length - 1;
//     while (i > 0) {
//       const j = Math.floor(Math.random() * (i + 1));
//       const temp = pirates[i];
//       pirates[i] = pirates[j];
//       pirates[j] = temp;
//       i--;
//     }
//     return pirates;
//   };


 

// };


const Game = props => (
  <div onClick={() => props.setClicked(props.id)} className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>
);

export default Game;