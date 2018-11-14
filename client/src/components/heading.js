import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getCustomers } from '../../store/actions/customer';

class Message extends Component {
	render() {
		return <h1>{this.props.text}</h1>;
	}
}

const mapStateToProps = (state) => ({
	text: state.text
});

export default connect(mapStateToProps)(Message);
