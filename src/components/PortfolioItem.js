import React, { Component } from 'react';
import Buttons from './Buttons';
import Stocks from './Stocks';

class PortfolioItem extends Component {

    constructor() {
        super();
        this.state = {
          stocks: [
            {
                name: 'a', 
                unit: '10', 
                quantity: '5', 
                total: '100',
                select: 'true'
              },
              {
                name: 'a', 
                unit: '10', 
                quantity: '5', 
                total: '100',
                select: 'true'
              },
              {
                name: 'a', 
                unit: '10', 
                quantity: '5', 
                total: '100',
                select: 'true'
              }
          ]
        }
    }

  render() {
    return (
        <div className="Portfolio">
            This is portfolio nr {this.props.portfolio.id}<br></br>
            <strong>{this.props.portfolio.name}</strong>
            <Stocks stocks={this.state.stocks}/>
            <Buttons />
        </div>
       
    )
  }
}

export default PortfolioItem;
