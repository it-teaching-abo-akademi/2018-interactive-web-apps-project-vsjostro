import React, { Component } from 'react';
import StockItem from './StockItem';


class Stocks extends Component {
  render() {
    let stockItems;
    if(this.props.stocks) {
        stockItems = this.props.stocks.map(stock => {
          
            return (
                <StockItem key={stock.name} stock = {stock} />

            ); 
        });
    }


    return (
      <table className="Stocks">
        <tr>
            <th>Name</th>
            <th>Unit value</th>
            <th>Quantity</th>
            <th>Total value</th>
            <th>Select</th>

        </tr>
        {stockItems}
        
      </table>
    );
  }
}

export default Stocks;
