import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Results extends Component {
	constructor(props) {
		super(props);

		this.state = { };
	}

	buildParameterDisplay(methodParams) {
		var result = '';
		if (methodParams.length > 0) {
			methodParams.map( m => (
				result = result + `${m.paramType} ${m.paramName}`
			));
		}
		return result;
	}

	render() {
		const { resultData } = this.props;
		
		return (
			<div className="queryResult">
	            <Typography variant="headline" gutterBottom>Results</Typography>
	            {resultData.map( signature => (
	                <li key={signature.methodName}>
	                	<Typography variant="body1" gutterBottom>
	                      	Method: {`${signature.methodName} ${this.buildParameterDisplay(signature.methodParams)}`}
	                    </Typography>
	                  	<hr />
	                </li>
	            ) )}
	        </div>
		);
	}
}

export default Results;