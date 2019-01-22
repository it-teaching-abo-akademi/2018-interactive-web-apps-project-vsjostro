import React, { Component } from 'react';
import Stocks from './Stocks';
import AddStock from './AddStock';
import './PortfolioItem.css';

class PortfolioItem extends Component {
    

    constructor() {
        super();
        this.state = {
            stocks: [],
            selectedStocks: [],
            amount: 0,
            currency: "$",
            portfolioTotal:0
        } 
    }
    

    removePortfolio(id){
        if(window.confirm("Are you sure you want to delete this portfolio?")){
            this.props.remove(id);
        }
    }
    

    handleAddStock(stock, total){

        let stocks = this.state.stocks;
        let portfolioTotal = this.state.portfolioTotal;

        stocks.push(stock);
        this.setState({stocks:stocks, portfolioTotal: (parseFloat(total) + parseFloat(portfolioTotal)).toFixed(2)});
    }

    handleRemoveStock(id) {
        let stocks = this.state.stocks;
        let selectedStocks = this.state.selectedStocks;

        

        for (let i = 0; i < selectedStocks.length; i++) {

            const selectedStock = selectedStocks[i];

            for (let j = 0; j < stocks.length; j++) {
                
                const stock = stocks[j];
                if(selectedStock === stock.id) {
                    
                    stocks.splice(stock, 1);
                    this.setState({stocks:stocks});
                    this.setState({amount:this.props.amount-1});
                    
                }
            }
            

        }

        this.setState({selectedStocks:[]});

    }

    selectedStock(id) {
        let selectedStocks = this.state.selectedStocks;
        selectedStocks.push(id);
        this.setState({selectedStocks:selectedStocks})
    }

    

  render() {

    return (
        <div className="Portfolio">
            <strong>{this.props.portfolio.name}</strong>
            <button id="removeButton" onClick={this.removePortfolio.bind(this, this.props.portfolio.id)}>Remove Portfolio</button>
            <Stocks stocks={this.state.stocks} name={this.props.portfolio.name} stockSelect={this.selectedStock.bind(this)}/>
            <label>Total value of {this.props.portfolio.name}: {this.state.portfolioTotal}{this.state.currency} </label><br></br>
            <AddStock addStock={this.handleAddStock.bind(this)} id={this.props.portfolio.id} amount={this.props.amount}/>
        
            <button onClick={this.handleRemoveStock.bind(this)}>Remove selected</button>
            <br></br><br></br>
            
        </div>
       
    )
  }
}

export default PortfolioItem;
