import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';

import './MethodForm.css';

class MethodForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }

    componentDidMount() {
        
    }

    render() {
        const { formParams } = this.props;

        return (
            <div className="MethodForm">

                {formParams.map(p => (
                    <li key={p.paramName}>
                        
                        { p.paramPropertyInfo.map( pi => (
                            <TextField 
                                className="methodForm__textField" 
                                value="" 
                                label={pi.paramName} 
                                margin="normal" 
                            />
                        ))}

                    </li>
                ))}

            </div>
        );
    }
}

export default MethodForm;