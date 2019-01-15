import React, { Component } from 'react';
import StockItem from './StockItem';


class Stocks extends Component {

  

  render() {
    let stockItems;
    if(this.props.stocks) {
        stockItems = this.props.stocks.map(stock => {
          
            return (
                <StockItem key={stock.id} stock = {stock} />

            ); 
        });
    }


    return (
      
      <div className="Stocks">

        

        <table className="stocksTable">
        
        <thead id="tableHead">
          <tr>
              <th>Name</th>
              <th>Unit value</th>
              <th>Quantity</th>
              <th>Total value</th>
              <th>Select</th>
              

          </tr>

        </thead>
          <tbody id="tableBody">
            {stockItems}
          </tbody>
        
      </table>
      </div>
    );
  }
}

export default Stocks;
