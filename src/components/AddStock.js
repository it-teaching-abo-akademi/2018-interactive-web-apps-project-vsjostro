import React, { Component } from 'react';


class AddStock extends Component {

    constructor() {
        super();
        this.state = {
            newStock: {},
            amount: 0, 
            currency:"usd",
            portfolioTotal: 0
        }
    }

     submitRequest(e){

        if(this.refs.name.value.length === 3 || this.refs.name.value.length === 4) {
            console.log("asd");
            

            //If no number is entered, the quantity will be 1
            if(this.refs.quantity.value === ""){
                this.refs.quantity.value = 1;
            }
           
            var url = "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+ this.refs.name.value +"&apikey=GIPEQQ1A1341LBC4";
            
            let unitPrice;
            let total;
            let usd;
            let usdTotal;

            fetch(url)
            .then(function(response) {
            return response.json();
            })
            .then(data => {

                
                usd = data["Global Quote"]["05. price"];
                usdTotal = usd * this.refs.quantity.value;
                

                if(this.state.currency === "euro"){
                    
                    total = (0.871842 * usdTotal).toFixed(2) + "€";
                    unitPrice = ((usd * 0.871842).toFixed(2)) + "€";
                    
                }
                
                if(this.state.currency === "usd") {
                    total = usdTotal + "$";
                    unitPrice = (parseFloat(usd).toFixed(2)) + "$";
                    
                }

                
                this.setState({newStock: {
                    id: this.state.amount,
                    name: this.refs.name.value,
                    unit: unitPrice,
                    quantity: this.refs.quantity.value,
                    total: total},
                    amount: this.state.amount + 1}, 
                function(){ 
                    this.props.addStock(this.state.newStock, usdTotal);
                });
        
            });
            
        }
        
        else {
            alert("Not correct symbol");
        }

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

    changeCurrency(e) {
        var currency = e.target.value;
        this.setState({currency:currency});
    }

  render() {
    
    return (
    <div>

        <button onClick={this.toggleStock.bind(this)}>Add stock</button>

        <div className="addStockForm" id={"addstock" + this.props.id} style={{display:"none"}}>

            <form onSubmit={this.submitRequest.bind(this)}>
                <label>Stock symbol:</label>
                <input type="text" ref="name"></input>
                <br></br>

                <label>Amount of shares:</label>
                <input type="number" ref="quantity"></input>
                
                <input type="radio" ref="usd" name="currency" value="usd" onChange={this.changeCurrency.bind(this)} defaultChecked={true}></input>USD
                <input type="radio" ref="euro" name="currency" value="euro" onChange={this.changeCurrency.bind(this)} ></input>Euro
                <br></br>
                <input type="submit" value="Add new Stock"></input>
            </form>
        

        </div>
    </div>

    
    );
  }
}

export default AddStock;
