import React from 'react';

export default React.createClass({
	displayName: 'Home',
	render() {
		return (
			<div>
				<h1>Home {this.props.location.query.key}</h1>
			</div>
		);
	}
});
