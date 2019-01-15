import React, { Component } from 'react';

class StockItem extends Component {

  removeStock() {


  }


  render() {

    
    return (
        <tr className={this.props.stock.name + 1}>
            <td>{this.props.stock.name}</td>
            <td>{this.props.stock.unit}$</td>
            <td>{this.props.stock.quantity}</td>
            <td>{this.props.stock.total}</td>
            <td>

            <form onSubmit={this.removeStock.bind(this)}>
              <input id="select" type="checkbox" value={this.props.stock.id}></input>
            
            </form>

            
            </td>

        </tr>
    );
  }
}

export default StockItem;
