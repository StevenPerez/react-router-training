import React from 'react';

import Header from './header';

export default React.createClass({
	getInitialState() {
		return {
			pwd: ''
		}
	},
	logIn(pwd = '') {
		this.setState({pwd});
	},
	render() {
		return (
			<div>
				<Header logIn={this.logIn} pwd={this.state.pwd}/>
				{this.props.children}
			</div>
		);
	}
});
