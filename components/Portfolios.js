import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem';


class Portfolios extends Component {

    removePortfolio(id){
        this.props.remove(id);
    }
    
  render() {
    
    let portfolioItems;
    if(this.props.portfolios) {
        portfolioItems = this.props.portfolios.map(portfolio => {
            
            return (
                <PortfolioItem remove={this.removePortfolio.bind(this)} key={portfolio.id} portfolio = {portfolio} />
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
