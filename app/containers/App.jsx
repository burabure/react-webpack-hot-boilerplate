import React, { Component } from 'react';

export const NICE = 'blue';
export const SUPER_NICE = 'purple';

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
        <br/>
        state: {JSON.stringify(this.state)}
      </h1>
    );
  }
}
export class App extends Component {
  render(){
  return (
    <div>
      <Counter increment={1} color={NICE} />
      <Counter increment={5} color={SUPER_NICE} />
    </div>
  );
}
}
