import React, { Component } from 'react';


class AddPortfolio extends Component {
    

    constructor() {
        super();
        this.state = {
            newPortfolio:{},
            amount:0
        }
    }


    submitPortfolio(e) {
            if(this.refs.name.value === '') {
                console.log("no name entered");
            }

            if(this.state.amount >= 10) {
                console.log("no name entered");
            }
           
            else {

                this.setState(
                    {newPortfolio: {
                    name: this.refs.name.value,
                    id: this.state.amount},
                amount: this.state.amount + 1 }, function(){
                    console.log(this.state);
                });
            }
        e.preventDefault();
    }

  render() {
    
    return (
    <div>

        <h3>Add Portfolio</h3>

        <form onSubmit={this.submitPortfolio.bind(this)}>
            <label>Portfolio name:</label>
            <input type="text" ref="name"></input>

            <input type="submit" value="Add new portfolio"></input>
        </form>
        

    </div>
    );
  }
}

export default AddPortfolio;
