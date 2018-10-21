import React, { Component } from 'react';
import MethodForm from './methods/MethodForm';

import './Methods.css';

class Methods extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {},
            showForm: false
        };

        this.toggleQueryDisplay = this.toggleQueryDisplay.bind(this);
        this.handleMethodClick = this.handleMethodClick.bind(this);
    }

    componentDidMount() {
        
    }

    toggleQueryDisplay() {
        this.setState({ showForm: !this.state.showForm });
    }

    handleMethodClick(method) {
        console.log(`clicked: ${method}`);

        fetch(`http://localhost:17889/api/Query/${method}`)
            .then(res => res.json())
            .then(res => {
                console.log('result => ');
                console.log(res);
            });
    }

    buildParameterDisplay(paramArray) {
        let display = "";
        paramArray.map( (p) => {
            var types = p.paramType.split('.');
            display = display + `${types[types.length - 1]} ${p.paramName}`
        });

        return display;
    }

    render() {
        const { signatures } = this.props;
        const { showForm } = this.state;

        return (
            <div className="Methods">

                {signatures.map(sig => (
                    <li key={sig.methodName} className="methods-list-item">
                        
                        <div className="generatedMethodDisplay" 
                             onClick={this.handleMethodClick.bind(this, sig.methodName)}>
                            <div className="generatedMethodDisplay__name">
                                {sig.methodName}
                            </div>
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