import React, { Component } from 'react';
import './App.css';

class Question extends Component {

  getOptions() {
    const { question } = this.props;

    return question.answers.map(answer => {
      return <option value={answer.value} key={answer.title}>{answer.title}</option>;
    });
  }
  
  getTitle() {
    const {question} = this.props;
    let title = question.question;
    if(question.isRequired) {
      title += '*';
    }
    return title;
  }

  render() {
    return (
      <div>
        <label>{this.getTitle()}</label>
        <select>{this.getOptions()}</select>
      </div>
    );
  }
}

export default Question;
