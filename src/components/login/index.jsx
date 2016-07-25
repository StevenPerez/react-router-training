import React from 'react';
import ReactDOM from 'react-dom';
import {Grid, Row, Col, Button, FormGroup, FormControl} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

export default React.createClass({
	displayName: 'Login',
	render() {
		return (
			<Grid>
				<Row>
					<Col md={12} className="login-title-container">
						<h1>Log In</h1>
						<hr/>
					</Col>
				</Row>
				<Row>
					<Col md={4}/>
					<Col md={4} className="align-center">
						<br/><br/>
							<FormGroup>
								<FormControl
									type="password"
									placeholder="Enter the secret key"
									className="align-center login-secret-input"
									ref="pwd"
								/>
							</FormGroup>
					</Col>
					<Col md={4}/>
				</Row>
				<Row>
					<Col md={4}/>
					<Col md={4} className="align-center">
						<LinkContainer to={{ pathname: '/home', query: {key: this.props.pwd} }}>
							<Button bsSize="small" onClick={() => this.props.logIn(ReactDOM.findDOMNode(this.refs.pwd).value)}>
								Enter
							</Button>
						</LinkContainer>
					</Col>
					<Col md={4}/>
				</Row>
			</Grid>
		);
	}
});
