import React,{useState} from 'react'

export default function InvoiceItems(props) {
	const itemId = `item`+props.itemId
	const pos = props.itemId
	var delId  = props.idx[pos] != undefined?props.idx[pos]:props.itemId
	

	
	



  return (
        <>        
	   	  		<tbody className="itemsCount" id={`item`+pos}>
					{console.log(pos)}	
	   	  			<tr>
						
	   	  				<td className="col-5"><input type="text" className={`inval${pos}`}  data-id={pos} data-name="itemName" name={'item-name'+pos} placeholder="Item name" onChange={props.handleChange} /></td>
	   	  				<td><input className={`text-right inval${pos}`} type="number" data-name="quantity" data-id={pos} id={`quantity`+pos} name={`quantity`+pos} placeholder="0" onChange={props.handleChange}/></td>
	   	  				<td><input className={`text-right inval${pos}`} type="text" data-name="price" data-id={pos} id={`price`+pos} name={`price`+pos} placeholder="0.00" onChange={props.handleChange}/></td>
	   	  				<td><input className={`text-right inval${pos}`} type="text" data-name="tax" data-id={pos} id={`tax`+pos} name={`tax`+pos} placeholder="Tax" onChange={props.handleChange}/></td>
	   	  				<td className="col-2 text-right th-amount"><p data-name="total" data-id={`total`} id={`total`+pos} className={`text-right inval${pos}`}>$0.00</p></td>
	   	  				{/* <td className="delete-item"><span  className="delete-item-buton" onClick={() => props.removeMe(delId,pos)} >Delete</span></td> */}
	   	  				<td className="delete-item"><span  className="delete-item-buton" onClick={() => props.delMe(delId,pos)} >Delete</span></td>
	   	  			</tr>
	   	  			<tr>
	   	  				<td colspan="5" ><textarea type="text" name="item-description" placeholder="Item Description"></textarea></td>
	   	  				
	   	  			</tr>
	   	  				   <br/>	  			
	   	  		</tbody>	   	  		
	   	  	
                 </>
    )
}
