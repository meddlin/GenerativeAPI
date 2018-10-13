import React, { Component } from 'react';

import Methods from './Methods';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            methodSignatures: ''
        };
    }

    getData() {
        
    }

    componentDidMount() {
        fetch('https://localhost:44324/api/example/getmethods')
            .then(results => results.json())
            .then(results => {
                this.setState({ methodSignatures: results });
            });
    }

    render() {
        const { methodSignatures, isLoading } = this.state;
    return (
      <div className="App">
        <header className="App-header">Generative API</header>
        <Methods isLoading={isLoading} signatures={methodSignatures} />
      </div>
    );
  }
}

export default App;
