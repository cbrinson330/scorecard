import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

	this.state = {
		curentStep = 0
	}

  loadScorecard(cardId) {
    fetch('salesforce.json').
			then(function() {
				//TODO handle breaking up data
			});
  }

  componentDidMount() {
		//TODO determine which json file to load (presumably based on url)
    this.loadScorecard('salesforce');
  }

	renderStep() {
		//TODO figure out 
	}

  render() {
    return (
      <div className="App">
				//TODO render progress bar
				//TODO render step wrapper
				//TODO render steps Nav
      </div>
    );
  }
}

export default App;
