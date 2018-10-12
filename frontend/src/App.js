import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            methods: {}
        };
    }

    getData() {
        fetch('https://localhost:44324/api/example/getmethods')
            .then(results => {
                return results.json();
            })
            .then(data => {
                this.setState({ methods: data });
                console.log(data);
            });
    }

    componentDidMount() {
        this.getData();
    }

    render() {
    return (
      <div className="App">
        <header className="App-header">Generative API</header>

            <div>
                List of these here
                <a href="#">localhost/NameOfMethod</a>
            </div>
      </div>
    );
  }
}

export default App;
