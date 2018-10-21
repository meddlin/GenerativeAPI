import React, { Component } from 'react';
import MethodForm from './methods/MethodForm';

import './Methods.css';

class Methods extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };

        this.handleMethodClick = this.handleMethodClick.bind(this);
    }

    componentDidMount() {
        
    }

    handleMethodClick(method) {
        console.log(`clicked: ${method}`);

        /*fetch(``)
            .then(res => res.json())
            .then(res => {
                console.log(res);
            });*/
    }

    buildParameterDisplay(paramArray) {
        let display = "";
        paramArray.map( (p) => {
            let types = p.paramType.split('.');
            display = display + `${types[types.length - 1]} ${p.paramName}`
        });
    }

    render() {
        const { signatures } = this.props;

        return (
            <div className="Methods">
                
                {signatures.map(sig => (
                    <li key={sig.methodName} className="methods-list-item">

                        <div className="generatedMethodDisplay" onClick={this.handleMethodClick.bind(this, sig.methodName)}>
                            <div className="generatedMethodDisplay__name">{sig.methodName}</div>
                            <div className="generatedMethodDisplay__signature">
                                ( {this.buildParameterDisplay(sig.methodParams)} )
                            </div>
                        </div>

                        <MethodForm formParams={sig.methodParams} />

                    </li>
                ))}

            </div>
        );
    }
}

export default Methods;