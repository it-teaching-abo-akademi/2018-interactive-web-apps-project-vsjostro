import React, { Component } from 'react';
import './App.css';
import Portfolios from './components/Portfolios';
import AddPortfolio from './components/AddPortfolio';



class App extends Component {
  constructor() {
    super();
    this.state = {
      portfolios: [],
      currency:[]
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


  handleAddPortfolio(portfolio) {
  
    let portfolios = this.state.portfolios;
    portfolios.push(portfolio);
    this.setState({portfolios:portfolios});

  }

  handleRemovePortfolio(id) {
    let portfolios = this.state.portfolios;
    let index = portfolios.findIndex(x => x.id === id);
    portfolios.splice(index, 1);
    this.setState({portfolios:portfolios});

  }

  

  render() {
    return (
      <div className="App">
        <AddPortfolio addPortfolio={this.handleAddPortfolio.bind(this)} />
        <Portfolios portfolios={this.state.portfolios} remove={this.handleRemovePortfolio.bind(this)}/>

        
      </div>
    );
  }
}

export default App;
