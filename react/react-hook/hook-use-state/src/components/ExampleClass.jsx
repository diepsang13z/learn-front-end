import { Component } from 'react';

export default class ExampleClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      user: {
        name: 'init user',
        age: 99,
      },
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1,
      user: { name: 'updated user' },
    });
  }

  render() {
    return (
      <div>
        <pre>Functional Component</pre>
        <p>You clicked {this.state.count} times</p>
        <button onClick={this.handleClick}>Click me</button>
        <p>{JSON.stringify(this.state.user)}</p>
      </div>
    );
  }
}
