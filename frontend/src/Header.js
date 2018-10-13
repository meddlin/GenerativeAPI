import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header className="App-header">
	          <div className="App-header-title">
	            <Typography variant="headline" gutterBottom color="inherit">Generative API</Typography>
	          </div>
	          {/*<div className="App-header-subtitle">
	            <Typography variant="body2" gutterBottom color="inherit">Powered by ElasticSearch</Typography>
	          </div>*/}
	        </header>
		);
	}
}

export default Header;