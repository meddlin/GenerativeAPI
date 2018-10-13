import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';

class Results extends Component {
	constructor(props) {
		super(props);

		this.state = { };
	}

	render() {
		const { resultData } = this.props;
		
		return (
			<div className="queryResult">
	            <Typography variant="headline" gutterBottom>Results</Typography>
	            {resultData.map( product => (
	                <li key={product.productId}>
	                  <div className="queryResult__item">
	                    <div className="queryResult__item-title">
	                      <Typography variant="body1" gutterBottom>Product ID:</Typography>
	                    </div>
	                    <div>
	                      <Typography variant="body2" gutterBottom>{product.prodcutId}</Typography>
	                    </div>
	                  </div>
	                  <div className="queryResult__item">
	                    <div className="queryResult__item-title">
	                      <Typography variant="body1" gutterBottom>Description:</Typography>
	                    </div>
	                    <div>
	                      <Typography variant="body2" gutterBottom>{product.description}</Typography>
	                    </div>
	                  </div>
	                  <div className="queryResult__item">
	                    <div className="queryResult__item-title">
	                      <Typography variant="body1" gutterBottom>Product #:</Typography>
	                    </div>
	                    <div>
	                      <Typography variant="body2" gutterBottom>{product.productNumber}</Typography>
	                    </div>
	                  </div>
	                  <div className="queryResult__item">
	                    <div className="queryResult__item-title">
	                      <Typography variant="body1" gutterBottom>Product Line:</Typography>
	                    </div>
	                    <div>
	                      <Typography variant="body2" gutterBottom>{product.productLine}</Typography>
	                    </div>
	                  </div>
	                  <hr />
	                </li>
	            ) )}
	        </div>
		);
	}
}

export default Results;