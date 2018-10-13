import React, { Component } from 'react';
import ReactJson from 'react-json-view';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ArrowDropDownCircle from '@material-ui/icons/ArrowDropDownCircle';

class ElasticRawDisplay extends Component {
	constructor(props) {
		super(props);

		this.toggleRawDisplay = this.toggleRawDisplay.bind(this);

		this.state = {
			showRaw: true
		};
	}

	toggleRawDisplay() {
	    this.setState({ showRaw: !this.state.showRaw });
	}

	render() {
		const { isLoading, data } = this.props;
		const { showRaw } = this.state;

		let display;
		if (!isLoading) display = <ReactJson src={data} theme='monokai' />;

		return (
			<div>
				<div className="queryData__header">
	              <Typography variant="headline" gutterBottom>Debug -- Query</Typography>
	              <Button
	                variant="contained"
	                color="primary"
	                onClick={this.toggleRawDisplay}>
	                  <span>Toggle</span><ArrowDropDownCircle />
	              </Button>
	            </div>

	            <div className={showRaw ? null : 'hide'}>
	            	{display}
	            </div>
            </div>
		);
	}
};

export default ElasticRawDisplay;