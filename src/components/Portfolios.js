import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';


class Portfolios extends Component {

    
    
    
  render() {
    
    let portfolioItems;
    if(this.props.portfolios) {
        portfolioItems = this.props.portfolios.map(portfolio => {
            
            return (
                <PortfolioItem key={portfolio.id} portfolio = {portfolio}/>

            ); 
        });
    }
    return (

    <div className="Portfolios">


        {portfolioItems}

    </div>
    );
  }
}

export default Portfolios;
