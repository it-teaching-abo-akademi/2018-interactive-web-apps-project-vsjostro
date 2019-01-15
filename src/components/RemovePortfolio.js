import React, { Component } from 'react';


class RemovePortfolio extends Component {
    
   
    removePortfolio() {

        this.props.removePortfolio();
        console.log(this.props.portfolio);

        //this.setState({portfolios: this.props.portfolio.concat([this.props.portfolio.id])});
        
    }


  render() {
      
    return (

        <button onClick= {this.removePortfolio.bind(this)} >Remove Portfolio</button>

    );
  }
}

export default RemovePortfolio;
