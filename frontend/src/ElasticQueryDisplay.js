import React, { Component } from 'react';
import ReactJson from 'react-json-view';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowDropDownCircle from '@material-ui/icons/ArrowDropDownCircle';

class ElasticQueryDisplay extends Component {
	constructor(props) {
		super(props);

		this.toggleQueryDisplay = this.toggleQueryDisplay.bind(this);

		this.state = {
			showQuery: true
		};
	}

	toggleQueryDisplay() {
		this.setState({ showQuery: !this.state.showQuery });
	}

	render() {
		const { isLoading, data } = this.props;
		const { showQuery } = this.state;

		let display;
		if (!isLoading) display = <ReactJson src={data} theme='monokai' />;

		return (
			<div>
				<div className="queryData__header">
	              <Typography variant="headline" gutterBottom>Debug -- Query</Typography>
	              <Button
	                variant="contained"
	                color="primary"
	                onClick={this.toggleQueryDisplay}>
	                  <span>Toggle</span><ArrowDropDownCircle />
	              </Button>
	            </div>

	            <div className={showQuery ? null : 'hide'}>
	            	{display}
	            </div>
            </div>
		);
	}
};

export default ElasticQueryDisplay;