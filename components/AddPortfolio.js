import React, { Component } from 'react';


class AddPortfolio extends Component {
    

    constructor() {
        super();
        this.state = {
            newPortfolio:{}
        }
    }


    submitPortfolio(e) {
            if(this.refs.name.value === '') {
                alert("No name entered!");
            }

            else if(this.props.amount === 10) {
                alert("10 portfolios max!");
            }
           
            else {
                this.setState({newPortfolio: {
                    name: this.refs.name.value,
                    id: this.props.amount}}, 
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
    <div id="newPortfolio">

        <button onClick= {this.togglePortfolio} >Add new portfolio</button>

        <div id="addPortfolio">
            <form onSubmit={this.submitPortfolio.bind(this)}>
                <label>Portfolio name:</label>
                <input type="text" ref="name" id="textInput"></input>

                <input type="submit" value="Add"></input>
            </form>

        </div>
        
    </div>
    );
  }
}

export default AddPortfolio;