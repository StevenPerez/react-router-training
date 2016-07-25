import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default React.createClass({
	displayName: 'Header',
	render() {
		return (
				<Navbar className="nav-container">

					<Navbar.Header>
						<Navbar.Brand>
							<a>React Router Training</a>
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>

					<Navbar.Collapse>
						<Nav pullRight>
							<LinkContainer to={{ pathname: '/login', query: {key: 'abc'} }}>
								<NavItem eventKey={1}>Log In</NavItem>
							</LinkContainer>
							<LinkContainer to={{ pathname: '/home', query: {key: 'abc'} }}>
								<NavItem eventKey={2}>Home</NavItem>
							</LinkContainer>
						</Nav>
					</Navbar.Collapse>

				</Navbar>
		);
	}
});
