import React, { Component } from 'react';
import './App.css';
import ProgressBar from './ProgressBar.js';
import Step from './Step.js';

class App extends Component {

	state = {
		curentStep:0,
		steps:[],
		outcomes:[],
		questions: [],
	}

  loadScorecard(cardId) {
		let data = require(`./scorecardData/${cardId}.json`);

		const allQuestions = [];
		data.steps.forEach(function(step) {
			allQuestions.push(step.questions);
		});

		this.setState({steps: data.steps});
		this.setState({outcome: data.outcomes});
		this.setState({questions: allQuestions});
  }

  componentDidMount() {
    this.loadScorecard('salesforce');
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
