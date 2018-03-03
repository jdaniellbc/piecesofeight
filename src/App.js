import React, { Component } from 'react';
import Pirate from './components/Pirate';
import Wrapper from "./components/Wrapper";
import Footer from './components/Footer';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import data from './data.json';
import './App.css';

class App extends Component {
        state = {
                message: "click to begin",
                highScore: 0,
                score: 0,
                data: data,
                unselectedData: data
        };

        componentDidMount() {

        };

        shuffleArr = arr => {
                for (let i = arr.length - 1; i > 0; i--) {
                        let j = Math.floor(Math.random() * (i + 1));
                        [arr[i], arr[j]] = [arr[j], arr[i]];
                }
        }

        selectPirate = id => {
                const findPirate = this.state.unselectedData.find(item => item.id === id);

                if (findPirate === undefined) {
                        this.setState({
                                message: "Walk the plank!",
                                highScore: (this.state.score > this.state.highScore) ? this.state.score : this.state.highScore,
                                score: 0,
                                data: data,
                                unselectedData: data
                        });
                } else {
                        const newPirates = this.state.unselectedData.filter(item => item.id !== id);

                        this.setState({
                                message: "Aye, Matey! Ye guessed rrrrrright!",
                                score: this.state.score + 1,
                                data: data,
                                unselectedData: newPirates
                        });

                }

                this.shuffleArr(data);
        };

        render() {
                return (
                        <Wrapper>
                                <Scoreboard />
                                <Header />


                                {this.state.data.map(pirate => (
                                        <Pirate
                                                id={pirate.id}
                                                key={pirate.id}
                                                image={pirate.image}
                                                selectPirate={this.selectPirate}
                                                score={this.state.score}
                                        />
                                ))
                                }

                                <Footer />
                        </Wrapper>


                );
        };
};

export default App;