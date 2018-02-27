import React, { Component } from 'react';
import PirateCard from './components/PirateCard';
import Wrapper from "./components/Wrapper";
// import Header from '.components/Header';
import data from './data.json';
import './App.css';

class App extends Component {
        state = {
                data
        };
        render() {
                return (
                        <Wrapper>
                        <div>{this.state.data.map(pirate => (
                                <PirateCard
                                        // setClicked={this.setClicked}
                                        id={pirate.id}
                                        key={pirate.id}
                                        image={pirate.image}
                                />
                        ))}
                        </div>
                        </Wrapper>
                );
        };
};

export default App;