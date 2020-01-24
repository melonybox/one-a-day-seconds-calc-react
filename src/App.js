import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    timeType: "hours",
    timeTypeOptions: [
      {text: "Hours", value: "hours"},
      {text: "Minutes", value: "minutes"}
    ],
    timeAmount: "0",
    timePhrase: null
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let timeResult = 0
    const timeAmount = parseInt(this.state.timeAmount)

    if (this.state.timeType === "hours") {
      timeResult = (timeAmount * 60) * 60
    } else {
      timeResult = timeAmount * 60
    }

    this.setState({
      timePhrase: `${this.state.timeAmount} ${this.state.timeType} is ${timeResult.toString()} seconds.`
    })
  }

  render() {
    return (
      <div>
        <p>Hours/Minutes to seconds calculator.</p>
        <form id="mathForm" onSubmit={this.handleSubmit}>
          <span>Time Type:</span>
          <select id="selectTime" name="timeType" value={this.state.timeType} onChange={this.handleChange}>
          {this.state.timeTypeOptions.map((item,idx) => {
            return <option key={idx} value={item.value}>{item.text}</option>
          })}
          </select>
          <br />
          <span>Time Amount:</span>
          <input type="number" name="timeAmount" value={this.state.timeAmount} onChange={this.handleChange}/>
          <br />
          <input type="submit" name="submit" value="Submit" />
        </form>
        <span id="timeResult">
        {this.state.timeResult === null ?
        null
        :
        this.state.timePhrase}
        </span>
      </div>
    );
  }
}

export default App;
