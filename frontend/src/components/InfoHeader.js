import React, {useState} from 'react'

export default function InfoHeader(props) {
    return (
        <>
            <div className="row info-header">
	   	  		<div className="company-info-div col-6">
	   	  			<div className="company-logo">
	   	  				<div className="logo-bg">
	   	  					<label className="logo-upload-label" for="logo-invoice"> 
	   	  						<span className="logo-img-span">
	   	  							<img src="./images/upload.png" className="company-logo-img" />
	   	  						</span>
	   	  						<span className="logo-text">Add company Logo</span>
	   	  					 </label>
	   	  					<span className='logo-invoice'>
	   	  						<input name="logo-invoice" type="file" className="logo-invoice" id="logo-invoice"/>
	   	  					</span>
	   	  				</div>   	  				
	   	  			</div>
	   	  			<div className="business-info col-6">
	   	  				<div className="business-info-editor">
	   	  					<span>[<span className="p-m">+</span>]</span>
	   	  					<span><h3>Your Business information</h3></span>
	   	  					<span className="b-edit">Edit</span>
	   	  				</div>
	   	  				<div className="sender-info">
	   	  					<p className="compnay-name">MUTE PAY</p>
	   	  					<p className="name">Karan Sharma</p>
	   	  					<br/>
	   	  					<p>Phone: <span className="phone">+64 224154321</span></p>
	   	  					<p>mearthkid@gmail.com</p>
	   	  					<p>mutepay.com</p>
	   	  				</div>
	   	  			</div>
	   	  		</div>            
			<div className="invoice-info-div col-6">
	   	  			<div className="invoice-flow"> Frequency 
		   	  			<select value="" onChange={props.handleChange} className="invoice-flow-input">
		   	  				<option value="">Select Frequency</option>	   	  				
		   	  				<option value="once-only">Once Only</option>	   	  				
		   	  				<option value="Every-week">Every week</option>	   	  				
		   	  				<option value="Every-1-week">Every 1 week</option>	   	  				
		   	  			</select>
	   	  			</div>
	   	  			<div className="invoice-flow"> Invoice Number 
		   	  			<input className="invoice-flow-input" type="text" name="invoie-number" onChange={props.handleChange}/>
	   	  			</div>
	   	  			<div className="invoice-flow"> Reference 
		   	  			<input className="invoice-flow-input" type="text" name="reference" onChange={props.handleChange}/>
	   	  			</div>
	   	  			<div className="invoice-flow"> Due Date 
		   	  			<select className="invoice-flow-input" onChange={props.handleChange}>
		   	  				<option value="">pease choose date</option>	   	  	 				
		   	  				<option value="1">Due in 1 week</option>	   	  	 				
		   	  				<option value="2">Due in 2 week</option>	   	  	 				
		   	  				<option value="3">Due in 3 week</option>	   	  	 				
		   	  			</select>
	   	  			</div>
	   	  		</div>
			</div>
	   	  	</> 		      
    )
}
