import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { getCustomers } from '../../store/actions/customer';

class Message extends Component {
	render() {
		return <h1>{this.props.ob}</h1>;
	}
}

const mapStateToProps = (state) => ({
	ob: state.defaultText
});

export default connect(mapStateToProps)(Message);
