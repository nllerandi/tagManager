import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import './App.css';

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Landing from "./components/layout/Landing";

// Standard Components
import WirelessTagList from "./components/WirelessTagList";
// import Fios from "./components/Fios";

class App extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Navbar/>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/wireless" component={WirelessTagList}/>
                    <Route exact path="/fios" component={WirelessTagList}/>
                    <Footer/>
                </div>
            </Router>
        </Provider>
    );
  }
}

export default App;
