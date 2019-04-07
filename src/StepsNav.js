import React, { Component } from 'react';
import './App.css';

class StepsNav extends Component {

  getQuestions() {
		//TODO output questions
  }

	getPreviousStep() {
		//TODO figure out if this is the first step if so render nothing else return the link
		return '<a href="#">Previous</a>';
	}

	getNextStep() {
		//TODO figure out if this is the last step if so render nothing else return the link
		return '<a href="#">Next</a>';
	}

  render() {
    return (
			<div class="stepNav">
				this.getPreviousStep();
				this.getNextStep();
			</div>
    );
  }
}

export default StepsNav;
