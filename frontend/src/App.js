import React, { Component } from 'react';
import Header from './Header';
import Results from './Results';
import ElasticQueryDisplay from './ElasticQueryDisplay';
import ElasticRawDisplay from './ElasticRawDisplay';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
          isLoading: true,
          query: '',
          raw: '',
          apiData: [],
          methods: []
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
        /*fetch("http://localhost:17889/api/Query/ProductSearch?locations=415A&phrase=test&pageSize=3&pageNum=1&debug=true")
          .then(res => res.json())
          .then( (res) => {
            this.setState({ apiData: res.data });
            this.setState({ query: JSON.parse(res.query) });
            this.setState({ raw: JSON.parse(res.raw) });
            this.setState({ isLoading: false });
          });*/

        fetch('https://localhost:44324/api/example/getmethods')
            .then(results => results.json() )
            .then(results => {
                this.setState({ methods: results });
                this.setState({ isLoading: false });
            });
    }

    render() {
    const { isLoading, apiData, query, raw, showQuery, showRaw, methods } = this.state;
    let queryDisplay, rawDisplay;

    return (
      <div className="App">
        <Header />

        <div className="debugPane">
          <Results resultData={methods} />
          <div className="queryData">
            /*<ElasticQueryDisplay isLoading={isLoading} data={query} />
            <ElasticRawDisplay isLoading={isLoading} data={raw} />*/
          </div>
        </div>

      </div>
    );
  }
}

export default App;
