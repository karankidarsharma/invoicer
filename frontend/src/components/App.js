import React, { Component , useState, useEffect} from "react";
import { render } from "react-dom";
import Header from './Header'
import InfoHeader from './InfoHeader'
import BillTo from './BillTo'
import InvoiceDetails from './invoiceDetails'


export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      itemsData: JSON.parse(localStorage.getItem("itemsData")),
      
    }
   
    if(!localStorage.getItem("itemsData")){
      localStorage.setItem("itemsData", this.state.itemsData) 
    }    
    this.handleClick = this.handleClick.bind(this)
    this.removeMe = this.removeMe.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.calculateIndividiualTax = this.calculateIndividiualTax.bind(this)
   

  }

handleClick(){
    console.log("working")
}

componentDidMount(){
  console.log("CDM run..")
  if(JSON.parse(localStorage.getItem('itemsData')) != null){
   const dataLength = Object.keys(JSON.parse(localStorage.getItem('itemsData'))).length
  var keyId = Object.keys(JSON.parse(localStorage.getItem('itemsData')))
    var data = JSON.parse(localStorage.getItem('itemsData'))
    for(let j=0; j < dataLength; j++){
      var input = document.getElementsByClassName('inval'+keyId[j])
      for(let i=0; i<input.length; i++){
        var dataName = input[i].getAttribute('data-name')
        if(data[keyId[j]][dataName] != undefined){
          input[i].value = data[keyId[j]][dataName]
        }
          
      }
      
    }
  }
 
  
 }


//################### Calculate Indivdiual Tax ####################
calculateIndividiualTax(id){
  // var itemsData = JSON.parse(localStorage.getItem('itemsData'))
  // var totalElement = document.getElementById('total'+id)
  // var qty = document.getElementById('quantity'+id).value
  // var price = document.getElementById('price'+id).value
  // var tax = document.getElementById('tax'+id).value


  // if(qty == "" || price == "" || tax == ""){

  // }else{
  //   var total = qty*price - tax

  //   totalElement.innerHTML = "$"+total
  //   itemsData[id] = {"total":total}
  //   localStorage.setItem('itemsData', itemsData)
  // }
  // console.log(totalElement)
}





// #######################End Individual Tax #######################

handleChange(event){
  var dataName = event.target.getAttribute("data-name")
  var id  = event.target.getAttribute("data-id")
  var val =  event.target.value
  this.calculateIndividiualTax(id)
//  var itemsCart = localStorage.getItem('itemsData')

 /////////////////////////////////////TEST BLOCK////////////
 if(JSON.parse(localStorage.getItem('itemsData')) == null){
   var itemsData = {}
 } else{
   itemsData = JSON.parse(localStorage.getItem('itemsData'))
 }
 var idStr = id.toString()
 if(itemsData[idStr] != undefined){
   if(dataName == "itemName"){
    itemsData[idStr]['itemName'] = val
   } else if(dataName == "quantity"){
    itemsData[idStr]['quantity'] = val
   } else if(dataName == "price"){
    itemsData[idStr]['price'] = val
   }else{
    itemsData[idStr]['tax'] = val
   }
   
 }else{
  if(dataName == "itemName"){
    itemsData[idStr] = {"itemName":val}
   } else if(dataName == "quantity"){
    itemsData[idStr] = {"quantity":val}
   } else if(dataName == "price"){
    itemsData[idStr] = {"price":val}
   }else{
    itemsData[idStr] = {"tax":val}
   }
   
 }
 localStorage.setItem('itemsData', JSON.stringify(itemsData));
}


  render() {
     var check = JSON.parse(localStorage.getItem('itemsData'))
     if(check != null && Object.keys(JSON.parse(localStorage.getItem('itemsData'))).length != 0){
      const dataLength = Object.keys(JSON.parse(localStorage.getItem('itemsData'))).length
      
        var invoiceDetails = <InvoiceDetails removeMe={this.removeMe} handleChange={this.handleChange} len={check!=null?dataLength:1}/>
     }else{
      var invoiceDetails = <InvoiceDetails removeMe={this.removeMe} handleChange={this.handleChange} len={1}/>

     }
   
  

   return (
        <div className="container" id="container">
            <div className="invoice-block">
                <Header handleClick={this.handleClick}/>
                <InfoHeader handleChange={this.handleChange}/>
                <BillTo handleChange={this.handleChange}/>
                {invoiceDetails}

            </div>
        </div>
    );
   }
  
}

const appDiv = document.getElementById("app");
render(<App/>, appDiv);