import React from 'react'

export default function Header(props) {
    return (
        <div>
            <div className="row invoice-title">
	   	  		<div className="col-6 title">
	   	  			<h1>Create Invoice</h1>
	   	  		</div>
	   	  		<div className="col-6 action-link">
	   	  			<div><a className="btn primary">Preview</a></div>
	   	  			<div><a className="btn primary" onClick={() => props.handleClick()}>Save</a></div>
	   	  			<div><a className="btn primary">Send</a></div>
	   	  		</div>   	  		
	   	  	</div>
        </div>
    )
}
