import React, {useState} from 'react'

import InvoiceItems from './InvoiceItems'



export default function InvoiceDetails(props) {
	const itemsData = JSON.parse(localStorage.getItem('itemsData'))
	var firstData = {"0":{"itemName":""}}
	var firstRow = ["0"]
	var addRows = []
	if(localStorage.getItem('localRows')){
			// console.log("Hello")
	}else{
		const localRows = localStorage.setItem('localRows', JSON.stringify([]))
	}
	
	
	if(JSON.parse(localStorage.getItem('itemsData')) !=null){
		var dataLength = Object.keys(JSON.parse(localStorage.getItem('itemsData'))).length
	} else{
		localStorage.setItem("itemsData", JSON.stringify(firstData))
		localStorage.setItem("localRows", JSON.stringify(firstRow))
	}

	// const [count, setCount] = useState(dataLength != 1 || itemsData != null?Object.keys(itemsData)[dataLength-1]:1)
	const [count, setCount] = useState(1)
	const [noItems, setnoItems] = useState(dataLength)

	// console.log(noItems+" <==Test count")

const nextItem = itemsData != null && dataLength > 1? Object.keys(itemsData)[dataLength-1]: 0


if( localStorage.getItem('localRows') && JSON.parse(localStorage.getItem('localRows')).length != 0){
	// console.log(JSON.parse(localStorage.getItem('localRows')))
	for(let x=0; x < JSON.parse(localStorage.getItem('localRows')).length; x++){
		var data = JSON.parse(localStorage.getItem('localRows'))
		// console.log(JSON.parse(localStorage.getItem('localRows'))[0])
		addRows.push(data[x])
		
	}
			// console.log(addRows)
	// localStorage.setItem('localRows', JSON.stringify(addRows))
	

}else{
	for(let x=0; x < dataLength; x++){
		addRows.push(Object.keys(itemsData)[x])
		
	}
	localStorage.setItem('localRows', JSON.stringify(addRows))
}

function addMore(){
	
	const mydateLength = JSON.parse(localStorage.getItem('localRows')).length;
	console.log(mydateLength)
	var data = JSON.parse(localStorage.getItem('localRows'))
	var totalCount = parseInt(data[mydateLength - 1]) + 1
	// if(!data.includes(String(totalCount))){
		addRows = data
		// console.log("OOO>>",totalCount)
		console.log("OOO>>",addRows)
		addRows.push(String(totalCount))
		localStorage.setItem('localRows', JSON.stringify(addRows))

	// }

// console.log("First Touch")
}
const getRows = JSON.parse(localStorage.getItem('localRows'))
// console.log("Touched")
console.log("===>>>>",getRows)

// for (var i = 0; i < 3; i++) {
//    addRows.push(i)
//    }
const invoiceItems = getRows.map((addRow, index) => <InvoiceItems  itemId={addRows[index]} idx={addRows[index]} removeMe={props.removeMe}  handleChange={props.handleChange}/>)
    return (
		
        <>
        <table>
	   	  		<thead>
	   	  			<th>Description</th>   	  				
	   	  			<th className="text-right">Quantity</th>   	  				
	   	  			<th className="text-right">Price</th>   	  				
	   	  			<th className="text-right">Tax</th>   	  				
	   	  			<th className="text-right ">Amount</th>   	  				
	   	  		</thead>  
                   
				    {getRows.length != 0? invoiceItems: <InvoiceItems itemId={0} idx={0} removeMe={props.removeMe}  handleChange={props.handleChange}/>} 
                 {/* {invoiceItems} */}
				 
				 <tr>
	   	  				<td colspan="6" className="add-item-holder">
	   	  					<br/>
						   	  	<div className="add-item-holderd" onClick={() => {
										 addMore(nextItem,count);
										 setCount(count + 1)
									 }
							  } >
							
						   	  			<span className="add-item">+ Add another item </span>
						   	  	</div>
	   	  				</td>
	   	  			</tr>
                 </table>
	   	  	<div className="final-total">
	   	  		<div>
		   	  		<table className="total-table">
		   	  			<tr>
		   	  				<td colspan="3">Subtotal</td>
		   	  				<td> $0.00</td>
		   	  			</tr>
		   	  			<tr>
		   	  				<td>Discount</td>
		   	  				<td><input type="text"  name="total-discount"/></td>
		   	  				<td>
		   	  					<select>
			   	  					<option>%</option>
			   	  					<option>$</option>
		   	  					</select>
		   	  				</td>
		   	  				<td>$0.00</td>
		   	  			</tr>
		   	  			<tr>
		   	  				<td>Shipping</td>
		   	  				<td colspan="2"><input type="text" name="total-shipping"/></td>
		   	  				<td>$0.00</td>
		   	  			</tr>
		   	  			<tr>
		   	  				<td colspan="3">Total</td>
		   	  				<td>$0.00NZD</td>
		   	  			</tr>
		   	  		</table>
		   	  	</div>
	   	  	</div>
                 </>
    )
}
