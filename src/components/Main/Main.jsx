import React from "react";

import { createMarks } from '../../utils';
import "./styles.css";

class Main extends React.PureComponent {
  state = {
    totalMarks: 0,
    marks: [],
    finallyMark: 0
  };

  handleChangeInput = (name, index) => ({ target }) => {
    if (!Number.isInteger(index)) {
      return this.setState({ [name]: target.value });
    }
    const marks = this.state[name].map((mark, i) => ({
      value: i === index ? target.value : mark.value
    }));

    this.setState({ marks });
  };

  handleAddsMarks = event => {
    const { marks } = this.state;

    if (event.key === "Enter") {
      const newMarks = createMarks(this.state.totalMarks);
      this.setState({
        marks: newMarks.map((mark, i) => {
          const value =
            i < marks.length && marks[i].value !== "" ? marks[i].value : "";
          return {
            value
          };
        })
      });
    }
  };

  handleButtonClick = () => {
    const sumMarks = this.state.marks.reduce((sum, mark) => {
      sum += +mark.value;
      return sum;
    }, 0);
    const finallyMark = this.state.marks.length
      ? sumMarks / this.state.marks.length
      : 0;
    this.setState({ finallyMark });
  };

  render() {
    const { totalMarks, marks, finallyMark } = this.state;

    return (
      <main className="container main">
        <h1 className="main__title">Система оценки успеваемости студента</h1>
        <div className="main__content">
          <div className="field">
            <span className="field__hint">Количество оценок</span>
            <input
              className="field__input"
              value={totalMarks}
              onChange={this.handleChangeInput("totalMarks")}
              onKeyPress={this.handleAddsMarks}
            />
          </div>
          {marks.map((mark, index) => (
            <div key={index} className="mark">
              <span className="mark__caption">Оценка №{index + 1}</span>
              <input
                onChange={this.handleChangeInput("marks", index)}
                value={mark.value}
              />
            </div>
          ))}
          <div>{!!totalMarks && finallyMark}</div>
          <button onClick={this.handleButtonClick}>Расчитать</button>
        </div>
      </main>
    );
  }
}

export default Main;
