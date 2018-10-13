import React, { Component } from 'react';
import './Methods.css';

class Methods extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        
    }

    render() {
        const { signatures } = this.props;

        return (
            <div className="Methods">

                {signatures.map(sig => (
                    <li key={sig}>
                        <div>{sig.methodName}</div>
                    </li>
                ))}
            </div>
        );
    }
}

export default Methods;