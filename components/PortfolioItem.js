import React, { Component } from 'react';
import Stocks from './Stocks';
import AddStock from './AddStock';

class PortfolioItem extends Component {
    

    constructor() {
        super();
        this.state = {
          stocks: [],

            selectedStocks: [],
            amount: 0,
            currency: "usd"
        } 
        

        
    }
    

    removePortfolio(id){
        this.props.remove(id);
    }
    

    handleAddStock(stock){

        let stocks = this.state.stocks;
        stocks.push(stock);
        this.setState({stocks:stocks});
    }

    handleRemoveStock(id) {
        let stocks = this.state.stocks;
        let selectedStocks = this.state.selectedStocks;

        

        for (let i = 0; i < selectedStocks.length; i++) {

            const selectedStock = selectedStocks[i];

            for (let j = 0; j < stocks.length; j++) {
                
                const stock = stocks[j];
                if(selectedStock === stock.id) {

                    console.log(stock.id + " removed");
                    
                    stocks.splice(stock, 1);
                    this.setState({stocks:stocks});
                    
                    this.setState({amount:this.props.amount-1});
                    
                }
            }
            

        }

        this.setState({selectedStocks:[]});

    }

    //1USD = 0.871842EUR
    //1 EUR = 1.14700 USD

    switchCurrency() {

        if(this.state.currency === "usd") {
            this.setState({currency: "euro"});
            console.log("euro");
            for (let i = 0; i < this.state.stocks.length; i++) {

                const unit = Object.assign({}, this.state.stocks, {unit: (this.state.stocks[i].unit * 0.871842).toFixed(2)});
                this.setState({unit}, () => {
                    console.log(this.state.stocks[i].unit);
                });
                
            }
        }

        if(this.state.currency === "euro") {
            this.setState({currency: "usd"})
            console.log("usd");
            for (let i = 0; i < this.state.stocks.length; i++) {
                this.setState({
                    //stocks: update(this.state.stocks, {i: {unit: {$set: (this.state.stocks[i].unit * 0.871842).toFixed(2)}}})
                });
                this.forceUpdate();
                
            }
        }
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
            <button onClick={this.switchCurrency.bind(this)}>Switch Currency</button>
            <Stocks stocks={this.state.stocks} id={this.props.portfolio.id}  stockSelect={this.selectedStock.bind(this)}/>
            <AddStock addStock={this.handleAddStock.bind(this)} id={this.props.portfolio.id} amount={this.props.amount}/>
            <button onClick={this.handleRemoveStock.bind(this)}>Remove selected</button>
            <br></br><br></br>
            <button onClick={this.removePortfolio.bind(this, this.props.portfolio.id)}>Remove Portfolio</button>
            
        </div>
       
    )
  }
}

export default PortfolioItem;
