import React, {useState} from 'react'

import InvoiceItems from './InvoiceItems'



export default function InvoiceDetails(props) {
	const itemsData = JSON.parse(localStorage.getItem('itemsData'))
	var firstData = {"0":{"itemName":""}}
	var firstRow = ["0"]
	var addRows = []

	function delMe(id,pos){

		
		var localRows = JSON.parse(localStorage.getItem('localRows'))
		if(localRows.length <= 1){
			localStorage.setItem('localRows', JSON.stringify(firstRow))
			localStorage.setItem('itemsData', JSON.stringify(firstData))
			setitemLength(1)
		}else{
		var itemsData = JSON.parse(localStorage.getItem('itemsData'))
		var position = localRows.indexOf(id)
		var x = localRows.splice(position, 1)
		localStorage.setItem('localRows', JSON.stringify(localRows))
		setitemLength(localRows)
		delete itemsData[id]
		localStorage.setItem('itemsData', JSON.stringify(itemsData))
		}
		
		
	}

	
	
	if(JSON.parse(localStorage.getItem('itemsData')) !=null){
		var dataLength = Object.keys(JSON.parse(localStorage.getItem('itemsData'))).length
		var items = JSON.parse(localStorage.getItem('localRows'))
	} else{
		localStorage.setItem("itemsData", JSON.stringify(firstData))
		localStorage.setItem("localRows", JSON.stringify(firstRow))
	}

	const [count, setCount] = useState(1)
	const [noItems, setnoItems] = useState(dataLength)
	const [itemLength, setitemLength] = useState(items)


const nextItem = itemsData != null && dataLength > 1? Object.keys(itemsData)[dataLength-1]: 0


if( localStorage.getItem('localRows') && JSON.parse(localStorage.getItem('localRows')).length != 0){
	for(let x=0; x < JSON.parse(localStorage.getItem('localRows')).length; x++){
		var data = JSON.parse(localStorage.getItem('localRows'))
		addRows.push(data[x])
		
	}
}else{
	for(let x=0; x < dataLength; x++){
		addRows.push(Object.keys(itemsData)[x])
		
	}
	localStorage.setItem('localRows', JSON.stringify(addRows))
}

function addMore(){
	
	const mydateLength = JSON.parse(localStorage.getItem('localRows')).length;
	var data = JSON.parse(localStorage.getItem('localRows'))
	var totalCount = parseInt(data[mydateLength - 1]) + 1
		addRows = data
		addRows.push(String(totalCount))
		localStorage.setItem('localRows', JSON.stringify(addRows))
}
const getRows = JSON.parse(localStorage.getItem('localRows'))

const invoiceItems = getRows.map((addRow, index) => <InvoiceItems itemId={addRows[index]} idx={addRows[index]} removeMe={props.removeMe}  handleChange={props.handleChange} delMe={delMe}/>)
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
                   
                 {invoiceItems}
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
