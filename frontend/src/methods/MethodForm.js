import React, { Component } from 'react';
import ArrowDropDownCircle from '@material-ui/icons/ArrowDropDownCircle';
import TextField from '@material-ui/core/TextField';

import './MethodForm.css';

class MethodForm extends Component {
	constructor(props) {
        super(props);

        this.state = {
            showForm: false
        };

        this.toggleFormDisplay = this.toggleFormDisplay.bind(this);
    }

    toggleFormDisplay() {
        this.setState({ showForm: !this.state.showForm });
    }

    render() {
    	const { showForm } = this.state;
    	const { formParams } = this.props;

    	return (
    		<div>
    			<ArrowDropDownCircle onClick={this.toggleFormDisplay} />
    			<div className={showForm ? null : 'hide'}>
    				{formParams.map(p => (
    					<li key={p.paramName}>

    						{p.paramPropertyInfo.map( pi => (
    							<TextField value="" label={pi.paramName} margin="normal" />
    						))}

    					</li>
    				))}

                    {/*<TextField
                      id="standard-name"
                      label="Name"
                      className="methodForm__textField"
                      value="value for now"
                      margin="normal" />*/}
                </div>
    		</div>
    	);
    }
}

export default MethodForm;