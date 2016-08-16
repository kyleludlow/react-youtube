import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      starter: 'Welcome to my React-Boiler.'
    };
  }

  render() {

    return (
      <div>
        {this.state.starter}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
