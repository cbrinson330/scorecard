import React, { Component } from 'react';
import './App.css';
import StepNav from './StepsNav';
import Question from './Question';

class Step extends Component {
  answeredQuestions = [];

  getQuestions() {
    const { curentStep, steps } = this.props;

    if(steps.length > 0) {
      const questions = steps[curentStep].questions;

      return questions.map(question => {
        return <Question 
                  question={question} 
                  key={question.question} 
                  onSelect={this.handleAnswer}
               />;
      });
    }
  }

  handleAnswer(id, value) {

  }

  getTitle() {
    const { curentStep, steps } = this.props;
    if(steps.length > 0) {
      return steps[curentStep].title;
    }
  }

  render() {
    return (
			<div className="step">
        <h2>{this.getTitle()}</h2>
        {this.getQuestions()}
        <StepNav />
			</div>
    );
  }
}

export default Step;
