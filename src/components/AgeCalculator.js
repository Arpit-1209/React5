// src/AgeCalculator.js
import React, { Component } from "react";

class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdate: "",
      age: "",
    };
  }

  handleInputChange = (e) => {
    this.setState({ birthdate: e.target.value });
  };

  calculateAge = () => {
    const birthdate = new Date(this.state.birthdate);
    if (isNaN(birthdate)) {
      this.setState({ age: "Invalid date" });
    } else {
      const today = new Date();
      const age = today.getFullYear() - birthdate.getFullYear();
      this.setState({ age });
    }
  };

  render() {
    return (
      <div>
        <h2>Age Calculator</h2>
        <label>Enter your birthdate:</label>
        <input
          type="date"
          value={this.state.birthdate}
          onChange={this.handleInputChange}
        />
        <button onClick={this.calculateAge}>Calculate Age</button>
        <p>{this.state.age}</p>
      </div>
    );
  }
}

export default AgeCalculator;
