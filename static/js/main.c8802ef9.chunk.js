(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,o){},16:function(t,e,o){},18:function(t,e,o){},20:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o.n(n),s=o(7),l=o.n(s),i=(o(14),o(1)),r=o(2),c=o(4),u=o(3),d=o(5),m=(o(16),function(t){function e(){return Object(i.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(r.a)(e,[{key:"toggleCheckbox",value:function(t){document.getElementById(t).checked&&this.props.stockSelect(t)}},{key:"render",value:function(){return a.a.createElement("tr",{className:this.props.stock.name},a.a.createElement("td",null,this.props.stock.name),a.a.createElement("td",null,this.props.stock.unit),a.a.createElement("td",null,this.props.stock.quantity),a.a.createElement("td",null,this.props.stock.total),a.a.createElement("td",null,a.a.createElement("input",{onClick:this.toggleCheckbox.bind(this,this.props.stock.id),id:this.props.stock.id,type:"checkbox",value:this.props.stock.id})))}}]),e}(n.Component)),h=function(t){function e(){return Object(i.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(r.a)(e,[{key:"stockSelect",value:function(t){this.props.stockSelect(t)}},{key:"render",value:function(){var t,e=this;return this.props.stocks&&(t=this.props.stocks.map(function(t){return a.a.createElement(m,{key:t.id,stock:t,stockSelect:e.stockSelect.bind(e)})})),a.a.createElement("div",{className:"Stocks"},a.a.createElement("table",{className:"stocksTable"},a.a.createElement("thead",{id:"tableHead"},a.a.createElement("tr",null,a.a.createElement("th",null,"Name"),a.a.createElement("th",null,"Unit value"),a.a.createElement("th",null,"Quantity"),a.a.createElement("th",null,"Total value"),a.a.createElement("th",null,"Select"))),a.a.createElement("tbody",{id:"tableBody"},t)))}}]),e}(n.Component),p=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(c.a)(this,Object(u.a)(e).call(this))).state={newStock:{},amount:0,currency:"usd",portfolioTotal:0},t}return Object(d.a)(e,t),Object(r.a)(e,[{key:"submitRequest",value:function(t){var e=this;if(3===this.refs.name.value.length||4===this.refs.name.value.length){""===this.refs.quantity.value&&(this.refs.quantity.value=1);var o,n,a,s,l="https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol="+this.refs.name.value+"&apikey=GIPEQQ1A1341LBC4";fetch(l).then(function(t){return t.json()}).then(function(t){a=t["Global Quote"]["05. price"],s=a*e.refs.quantity.value,"euro"===e.state.currency&&(n=(.871842*s).toFixed(2)+"\u20ac",o=(.871842*a).toFixed(2)+"\u20ac"),"usd"===e.state.currency&&(n=s+"$",o=parseFloat(a).toFixed(2)+"$"),e.setState({newStock:{id:e.state.amount,name:e.refs.name.value,unit:o,quantity:e.refs.quantity.value,total:n},amount:e.state.amount+1},function(){this.props.addStock(this.state.newStock,s)})})}else alert("Not correct symbol");t.preventDefault()}},{key:"toggleStock",value:function(){var t=document.getElementById("addstock"+this.props.id);"none"===t.style.display||""===t.style.display?t.style.display="block":t.style.display="none"}},{key:"changeCurrency",value:function(t){var e=t.target.value;this.setState({currency:e})}},{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("button",{onClick:this.toggleStock.bind(this)},"Add stock"),a.a.createElement("div",{className:"addStockForm",id:"addstock"+this.props.id,style:{display:"none"}},a.a.createElement("form",{onSubmit:this.submitRequest.bind(this)},a.a.createElement("label",null,"Stock symbol:"),a.a.createElement("input",{type:"text",ref:"name"}),a.a.createElement("br",null),a.a.createElement("label",null,"Amount of shares:"),a.a.createElement("input",{type:"number",ref:"quantity"}),a.a.createElement("input",{type:"radio",ref:"usd",name:"currency",value:"usd",onChange:this.changeCurrency.bind(this),defaultChecked:!0}),"USD",a.a.createElement("input",{type:"radio",ref:"euro",name:"currency",value:"euro",onChange:this.changeCurrency.bind(this)}),"Euro",a.a.createElement("br",null),a.a.createElement("input",{type:"submit",value:"Add new Stock"}))))}}]),e}(n.Component),f=(o(18),function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(c.a)(this,Object(u.a)(e).call(this))).state={stocks:[],selectedStocks:[],amount:0,currency:"$",portfolioTotal:0},t}return Object(d.a)(e,t),Object(r.a)(e,[{key:"removePortfolio",value:function(t){window.confirm("Are you sure you want to delete this portfolio?")&&this.props.remove(t)}},{key:"handleAddStock",value:function(t,e){var o=this.state.stocks,n=this.state.portfolioTotal;o.push(t),this.setState({stocks:o,portfolioTotal:(parseFloat(e)+parseFloat(n)).toFixed(2)})}},{key:"handleRemoveStock",value:function(t){for(var e=this.state.stocks,o=this.state.selectedStocks,n=0;n<o.length;n++)for(var a=o[n],s=0;s<e.length;s++){var l=e[s];a===l.id&&(e.splice(l,1),this.setState({stocks:e}),this.setState({amount:this.props.amount-1}))}this.setState({selectedStocks:[]})}},{key:"selectedStock",value:function(t){var e=this.state.selectedStocks;e.push(t),this.setState({selectedStocks:e})}},{key:"render",value:function(){return a.a.createElement("div",{className:"Portfolio"},a.a.createElement("strong",null,this.props.portfolio.name),a.a.createElement("button",{id:"removeButton",onClick:this.removePortfolio.bind(this,this.props.portfolio.id)},"Remove Portfolio"),a.a.createElement(h,{stocks:this.state.stocks,name:this.props.portfolio.name,stockSelect:this.selectedStock.bind(this)}),a.a.createElement("label",null,"Total value of ",this.props.portfolio.name,": ",this.state.portfolioTotal,this.state.currency," "),a.a.createElement("br",null),a.a.createElement(p,{addStock:this.handleAddStock.bind(this),id:this.props.portfolio.id,amount:this.props.amount}),a.a.createElement("button",{onClick:this.handleRemoveStock.bind(this)},"Remove selected"),a.a.createElement("br",null),a.a.createElement("br",null))}}]),e}(n.Component)),y=function(t){function e(){return Object(i.a)(this,e),Object(c.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(r.a)(e,[{key:"removePortfolio",value:function(t){this.props.remove(t)}},{key:"render",value:function(){var t,e=this;return this.props.portfolios&&(t=this.props.portfolios.map(function(t){return a.a.createElement(f,{remove:e.removePortfolio.bind(e),key:t.id,portfolio:t})})),a.a.createElement("div",{className:"Portfolios"},t)}}]),e}(n.Component),k=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(c.a)(this,Object(u.a)(e).call(this))).state={newPortfolio:{}},t}return Object(d.a)(e,t),Object(r.a)(e,[{key:"submitPortfolio",value:function(t){if(""===this.refs.name.value)alert("No name entered!");else if(10===this.props.amount)alert("10 portfolios max!");else{this.setState({newPortfolio:{name:this.refs.name.value,id:this.props.amount}},function(){this.props.addPortfolio(this.state.newPortfolio)}),document.getElementById("textInput").value="",document.getElementById("addPortfolio").style.display="none"}t.preventDefault()}},{key:"togglePortfolio",value:function(){var t=document.getElementById("addPortfolio");"none"===t.style.display||""===t.style.display?t.style.display="block":t.style.display="none"}},{key:"render",value:function(){return a.a.createElement("div",{id:"newPortfolio"},a.a.createElement("button",{onClick:this.togglePortfolio},"Add new portfolio"),a.a.createElement("div",{id:"addPortfolio"},a.a.createElement("form",{onSubmit:this.submitPortfolio.bind(this)},a.a.createElement("label",null,"Portfolio name:"),a.a.createElement("input",{type:"text",ref:"name",id:"textInput"}),a.a.createElement("input",{type:"submit",value:"Add"}))))}}]),e}(n.Component),b=function(t){function e(){var t;return Object(i.a)(this,e),(t=Object(c.a)(this,Object(u.a)(e).call(this))).state={portfolios:[],currency:[]},t}return Object(d.a)(e,t),Object(r.a)(e,[{key:"componentWillMount",value:function(){this.setState({portfolios:[],amount:0})}},{key:"handleAddPortfolio",value:function(t){var e=this.state.portfolios;e.push(t),this.setState({portfolios:e}),this.setState({amount:this.state.amount+1})}},{key:"handleRemovePortfolio",value:function(t){var e=this.state.portfolios,o=e.findIndex(function(e){return e.id===t});e.splice(o,1),this.setState({portfolios:e}),this.setState({amount:this.state.amount-1})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(k,{addPortfolio:this.handleAddPortfolio.bind(this),amount:this.state.amount}),a.a.createElement(y,{portfolios:this.state.portfolios,remove:this.handleRemovePortfolio.bind(this)}))}}]),e}(n.Component);l.a.render(a.a.createElement(b,null),document.getElementById("root"))},8:function(t,e,o){t.exports=o(20)}},[[8,2,1]]]);
//# sourceMappingURL=main.c8802ef9.chunk.js.map