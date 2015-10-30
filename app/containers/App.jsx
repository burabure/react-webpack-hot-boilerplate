import React, { Component } from 'react';

export const NICE = 'pink';
export const SUPER_NICE = 'darkred';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.increment}): {this.state.counter}
      </h1>
    );
  }
}

export const App = () => {
  return (
    <div>
      <Counter increment={1} color={NICE} />
      <Counter increment={5} color={SUPER_NICE} />
    </div>
  );
};
