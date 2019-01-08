import React, { Component } from 'react';

class StockItem extends Component {
  render() {
    return (
        <tr class="StockItem">
            <td>{this.props.stock.name}</td>
            <td>{this.props.stock.unit}</td>
            <td>{this.props.stock.quantity}</td>
            <td>{this.props.stock.total}</td>
            <td>{this.props.stock.select}</td>

        </tr>
    );
  }
}

export default StockItem;
