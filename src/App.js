import React, { Component } from 'react';
import './App.css';
import data from './data'
import Citizen from './components/Citizen'


class App extends Component {
  constructor() {
    super()

    this.state = {
      citizens: []
    }
  }

  componentDidMount() {
    this.setState({
      citizens: data
    })
  }

  render() {
    console.log(this.state)
    let citizens = this.state.citizens.map(elem => {
      return <div>
        <Citizen citizen={elem} />
      </div>
    })
    return (
      <div className="App">
        {citizens}
      </div>
    );
  }
}

export default App;
