import React from 'react'

export default function BillTo(props) {
    return (
        <>
            <div className="bill-to">
	   	  		<div className="bill-to-fields">
	   	  			<div className="bill-to">
	   	  				<label className="col-2">Bill to:</label>
	   	  				<input className="mail-input col-6" type="email" name="email" placeholder="Email address" onChange={props.handleChange}/>
	   	  			</div>
	   	  			<div className="cc-to">
	   	  				<label className="col-2">CC:</label>
	   	  				<input className="mail-input col-6" type="email" name="email" placeholder="Email address" onChange={props.handleChange}/>
	   	  			</div>
	   	  			
	   	  		</div>
	   	  	</div>
        </>
    )
}
