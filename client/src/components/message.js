import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onInputChange } from '../store/actions/oninputchange';

class Heading extends Component {
	render() {
		return (
			<div>
				<input type="text" onChange={this.props.onInputChange} />
				<h1>{this.props.text}</h1>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	text: state.text
});

const dispatchToProps = (dispatch) => ({
	onInputChange: (e) => dispatch(onInputChange(e))
});

export default connect(mapStateToProps, dispatchToProps)(Heading);
