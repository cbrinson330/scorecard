import React, { Component } from 'react';
import './App.css';
import ProgressBar from './ProgressBar.js';
import Step from './Step.js';

class App extends Component {

	state = {
		curentStep:0,
		steps:[],
		outcomes:[]
	}

  loadScorecard(cardId) {
		let data = require('./scorecardData/salesforce.json');
		this.setState({steps: data.steps});
		this.setState({outcome: data.outcomes});
  }

  componentDidMount() {
    this.loadScorecard('salesforce');
  }

	renderStep() {
		//TODO figure out 
	}

  render() {
		const { curentStep, steps, outcomes } = this.state;
    return (
      <div className="App">
				<ProgressBar steps={steps} curentStep={curentStep} />
				<Step steps={steps} curentStep={curentStep} outcomes={outcomes} />
      </div>
    );
  }
}

export default App;
