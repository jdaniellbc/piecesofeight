import React, { Component } from 'react';
import Pirate from './components/Pirate';
import Wrapper from "./components/Wrapper";
import Footer from './components/Footer';
import Header from './components/Header';
import data from './data.json';
import './App.css';

class App extends Component {
        state = {
                data
        };
        render() {
                return (
                        <div>
                                <Header />
                                <Wrapper>
                                        {this.state.data.map(pirate => (
                                                <Pirate
                                                        // setClicked={this.setClicked}
                                                        id={pirate.id}
                                                        key={pirate.id}
                                                        image={pirate.image}
                                                />
                                        ))}
                                        
                                </Wrapper>
                                <Footer />
                        </div>
                );
        };
};

export default App;