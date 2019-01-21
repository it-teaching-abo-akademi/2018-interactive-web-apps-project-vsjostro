import React, { Component } from 'react';

class StockItem extends Component {


  toggleCheckbox(id) {
    var checkbox = document.getElementById(id);
    
    if (checkbox.checked){
      this.props.stockSelect(id);
    }
  }


  render() {

    
    return (
        <tr className={this.props.stock.name}>
            <td>{this.props.stock.name}</td>
            <td>{this.props.stock.unit}$</td>
            <td>{this.props.stock.quantity}</td>
            <td>{this.props.stock.total}</td>
            <td>

            <input onClick={this.toggleCheckbox.bind(this, this.props.stock.id)} id={this.props.stock.id} type="checkbox" value={this.props.stock.id}></input>
          

            
            </td>

        </tr>
    );
  }
}

export default StockItem;
