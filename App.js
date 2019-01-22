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
        portfolios: [], 
        amount: 0,
    });
      
  }


  handleAddPortfolio(portfolio) {
  
    let portfolios = this.state.portfolios;
    portfolios.push(portfolio);
    this.setState({portfolios:portfolios});
    this.setState({amount: this.state.amount +1});

  }

  handleRemovePortfolio(id) {
    let portfolios = this.state.portfolios;
    let index = portfolios.findIndex(x => x.id === id);
    portfolios.splice(index, 1);
    this.setState({portfolios:portfolios});
    this.setState({amount: this.state.amount -1});
    
  }

  

  render() {
    return (
      <div className="App">
        <AddPortfolio addPortfolio={this.handleAddPortfolio.bind(this)} amount={this.state.amount}/>
        <Portfolios portfolios={this.state.portfolios} remove={this.handleRemovePortfolio.bind(this)}/>

        
      </div>
    );
  }
}

export default App;
