import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    option: ""
  };
  changeRadio = e => {
    this.setState({ option: e.target.value });
  };
  render() {
    return (
      <div>
        <h1>Surveys</h1>

        <div>
          <h2>Engagement Survey</h2>

          <div>
            <div>
              <h3>Question #1: I enjoy working with Express</h3>

              <ul>
                <li>
                  <input
                    onChange={this.changeRadio}
                    checked={this.state.option === "StrongAgree"}
                    type="radio"
                    value="StrongAgree"
                  />{" "}
                  <label>Strongly Agree</label>
                </li>
                <li>
                  <input
                    onChange={this.changeRadio}
                    checked={this.state.option === "Agree"}
                    type="radio"
                    value="Agree"
                  />{" "}
                  <label>Agree</label>
                </li>

                <li>
                  <input
                    onChange={this.changeRadio}
                    checked={this.state.option === "Neutral"}
                    type="radio"
                    value="Neutral"
                  />{" "}
                  <label>Neutral</label>
                </li>
                <li>
                  <input
                    onChange={this.changeRadio}
                    checked={this.state.option === "Disagree"}
                    type="radio"
                    value="Disagree"
                  />{" "}
                  <label>Disagree</label>
                </li>
                <li>
                  <input
                    onChange={this.changeRadio}
                    checked={this.state.option === "StrongDisagree"}
                    type="radio"
                    value="StrongDisagree"
                  />{" "}
                  <label>Strongly Disagree</label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
