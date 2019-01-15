import React, { Component } from 'react';
import Stocks from './Stocks';
import AddStock from './AddStock';

class PortfolioItem extends Component {

    constructor() {
        super();
        this.state = {
          stocks: [
            {
                id: '0',
                name: 'a',
                unit: 2,
                quantity: 33,
                total: 222,
                select: 'yes',
            },{
                id: '1',
                name: 'b',
                unit: 2,
                quantity: 33,
                total: 222,
                select: 'yes',
            },{
                id: '2',
                name: 'c',
                unit: 2,
                quantity: 33,
                total: 222,
                select: 'yes',
            }
          ],
         
            amount: 3,
            currency: "usd"
        } 
    }
    

    removePortfolio(id){
        this.props.remove(id);
    }
    

    handleAddStock(stock){
        let stocks = this.state.stocks;
        stocks.push(stock);
        this.setState({stocks:stocks})
    }

    handleRemoveStock(id) {
        let stocks = this.state.stocks;
        var rows = document.querySelectorAll("#select");

        for (let i = 0; i < rows.length; i++) {
            const element = rows[i];

            if(element.checked) {

                console.log(element.value);
                
                stocks.splice(element.value, 1);
                this.setState({stocks:stocks,amount: this.state.amount - 1});

                console.log(this.state.amount);
            }

        }

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

    

  render() {
    return (
        <div className="Portfolio">
            <strong>{this.props.portfolio.name}</strong>
            <button onClick={this.switchCurrency.bind(this)}>Switch Currency</button>
            <Stocks stocks={this.state.stocks} id={this.props.portfolio.id}/>
            <AddStock addStock={this.handleAddStock.bind(this)} id={this.props.portfolio.id}/>
            <button onClick={this.removePortfolio.bind(this, this.props.portfolio.id)}>Remove Portfolio</button>
            <button>Perf graph</button>
            <button onClick={this.handleRemoveStock.bind(this)}>Remove selected</button>
       
        </div>
       
    )
  }
}

export default PortfolioItem;
