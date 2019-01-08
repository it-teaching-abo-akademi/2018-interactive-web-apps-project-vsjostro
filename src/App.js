import React, { Component } from 'react';
import './App.css';
import Portfolios from './components/Portfolios';
import AddPortfolio from './components/AddPortfolio';



class App extends Component {
  constructor() {
    super();
    this.state = {
      portfolios: [],
      stocks: []
    }
  }

  componentWillMount() {
    this.setState({
      portfolios: [
      {
        id: '1',
        name: 'my first portfolio'
      },
      {
        id: '2',
        name: 'aaaa'
      },
      {
        id: '3',
        name: 'hehhe'
      }
    ]
  });
  }


  render() {
    return (
      <div className="App">
        <AddPortfolio />
        <Portfolios portfolios={this.state.portfolios}/>
      
        
      </div>
    );
  }
}

export default App;
