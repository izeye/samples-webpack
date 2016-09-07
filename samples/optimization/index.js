'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("Component did mount!");
  }

  render() {
    return (
      <p>Hello, world!</p>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
