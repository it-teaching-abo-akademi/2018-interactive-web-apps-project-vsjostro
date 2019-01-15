import React, { Component } from 'react';


class AddStock extends Component {

    //API key: GIPEQQ1A1341LBC4
    //API key: E2WSG1IAOGGPE6X4
    

    constructor() {
        super();
        this.state = {
            newStock:{},
            amount:1
        }
    }

     submitRequest(e){

        var url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+ this.refs.name.value +"&apikey=E2WSG1IAOGGPE6X4";
        
        let unitPrice;
        let total;

        fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(data => {
            console.log(data);

            unitPrice = data["Global Quote"]["05. price"];

            total = (unitPrice * this.refs.quantity.value).toFixed(2);
        

            this.setState({newStock: {
                id: this.state.amount,
                name: this.refs.name.value,
                unit: unitPrice,
                quantity: this.refs.quantity.value,
                total: total,
                select: 'yes',},
                amount: this.state.amount + 1}, 
            function(){ 
                this.props.addStock(this.state.newStock);
            });
    
        });

        e.preventDefault();
            
    }


    toggleStock() {
        
        var addStock = document.getElementById("addstock" + this.props.id);
        if (addStock.style.display === "none" || addStock.style.display === "") {
            addStock.style.display = "block"
        }
        else {
            addStock.style.display = "none";
        }
    }

  render() {
    
    return (
    <div>

        <button onClick={this.toggleStock.bind(this)}>Add stock</button>

        <div id={"addstock" + this.props.id} style={{display:"none"}}>

            <form onSubmit={this.submitRequest.bind(this)}>
                <label>Stock symbol:</label>
                <input type="text" ref="name"></input>

                <label>Amount of shares:</label>
                <input type="number" ref="quantity"></input>


                <input type="submit" value="Add new Stock"></input>
            </form>
        

        </div>
    </div>

    
    );
  }
}

export default AddStock;
