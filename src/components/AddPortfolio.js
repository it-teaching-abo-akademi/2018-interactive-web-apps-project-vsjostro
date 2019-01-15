import React, { Component } from 'react';


class AddPortfolio extends Component {
    

    constructor() {
        super();
        this.state = {
            newPortfolio:{},
            amount:1
        }
    }


    submitPortfolio(e) {
            if(this.refs.name.value === '') {
                console.log("no name entered");
            }

            else if(this.state.amount > 10) {
                console.log("10 portfolios max");
            }
           
            else {
                this.setState({newPortfolio: {
                    name: this.refs.name.value,
                    id: this.state.amount},
                    amount: this.state.amount + 1}, 
                function(){
                    this.props.addPortfolio(this.state.newPortfolio);
                });
                

                document.getElementById("textInput").value = "";
                var addPortfolio = document.getElementById("addPortfolio");
                addPortfolio.style.display = "none";
            }
        e.preventDefault();
    }

    togglePortfolio() {
        var addPortfolio = document.getElementById("addPortfolio");
        if (addPortfolio.style.display === "none" || addPortfolio.style.display === "") {
            addPortfolio.style.display = "block"
        }
        else {
            addPortfolio.style.display = "none";
        }
    }

  render() {

    
    return (
    <div>

        <button onClick= {this.togglePortfolio} >Add new portfolio</button>

        <div id="addPortfolio">
            <form onSubmit={this.submitPortfolio.bind(this)}>
                <label>Portfolio name:</label>
                <input type="text" ref="name" id="textInput"></input>

                <input type="submit" value="Add new portfolio"></input>
            </form>

        </div>
        
    </div>
    );
  }
}

export default AddPortfolio;