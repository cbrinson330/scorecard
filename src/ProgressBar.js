import React, { Component } from 'react';
import './App.css';

class ProgressBar extends Component {

  getSteps() {
    const { steps } = this.props;
    return steps.map(step => {
      return <li key={step.id}>{step.title}</li>;
    });
  }

  render() {
    return (
      <ul className="progressBar">
				{this.getSteps()}
      </ul>
    );
  }
}

export default ProgressBar;
