import React, { Component } from 'react';
import ArrowDropDownCircle from '@material-ui/icons/ArrowDropDownCircle';
import MethodForm from './methods/MethodForm';

import './Methods.css';

class Methods extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showForm: false,
            data: {}
        };

        this.toggleFormDisplay = this.toggleFormDisplay.bind(this);
        this.handleMethodClick = this.handleMethodClick.bind(this);
    }

    componentDidMount() {
        
    }

    toggleFormDisplay() {
        let toShow;
        if (this.state.showForm) toShow = false;
        else toShow = true;

        this.setState({ showForm: toShow });
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
        const { showForm } = this.state;
        const { signatures } = this.props;

        return (
            <div className="Methods">
                
                {signatures.map(sig => (
                    <div key={sig.methodName} className="methods-list-item">

                        <div className="generatedMethodDisplay" onClick={this.handleMethodClick.bind(this, sig.methodName)}>
                            <div className="generatedMethodDisplay__name">{sig.methodName}</div>
                            <div className="generatedMethodDisplay__signature">
                                ( {this.buildParameterDisplay(sig.methodParams)} )
                            </div>
                        </div>

                        <div className={showForm ? null : 'hide'}>
                            <ArrowDropDownCircle onClick={this.toggleFormDisplay} />
                            <MethodForm formParams={sig.methodParams} />
                        </div>

                    </div>
                ))}

            </div>
        );
    }
}

export default Methods;