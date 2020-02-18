import React, { Component } from 'react'
import { Form, Label, Input, Button } from 'semantic-ui-react'
import './index.css'


export default class LoginRegisterForm extends Component {

	constructor(props) {
		super(props)

		this.state = {
			loggedInUser: {
			},
			registeredUser: {
			},
		}
	}

	handleRegisterChange = (e) => {
    	this.setState({
    		registeredUser: {
    			...this.state.registeredUser,
    			[e.target.name]: e.target.value
    		}
    	})
  	}

	handleLoginChange = (e) => {
		this.setState({
			loggedInUser: {
				...this.state.loggedInUser,
				[e.target.name]: e.target.value
			}
		})	
	}

  	// seperation of concerns between form submit and fetch call
  	handleRegisterSubmit = (e) => {
  		e.preventDefault()
  		this.register()	
  	}

  	handleLoginSubmit = (e) => {
  		e.preventDefault()
  		this.login()	
  	}

  	register = () => {
  		this.props.register(this.state.registeredUser)
  	}

  	login = () => {
  		console.log('hit login in LoginRegisterForm, this will connect to login fetch in App.js');	
  		this.props.login()
  	}

	render() {
		return(
			<React.Fragment>
				<div>
					<Form className="Login" onSubmit={this.handleLoginSubmit}>
						<Form.Group widths='equal'>
							<Form.Field>
								<Label>Email:</Label>
								<Input
									required
									type="email"
									name="email"
									placeholder='Enter Email'
									value={this.state.email}
									onChange={this.handleLoginChange}
								/>
							</Form.Field>
							<Form.Field>
								<Label>Password:</Label>
								<Input
									required
									type="password"
									name="password"
									placeholder='Enter Password'
									value={this.state.password}
									onChange={this.handleLoginChange}
								/>
							</Form.Field>
						</Form.Group>
						<Button color={'teal'} type="Submit">Login</Button>
					</Form>
					<Form className="Register" onSubmit={this.handleRegisterSubmit}>
						<Form.Group widths='equal'>
							<Form.Input
								label='Email:'
								required
								type="email"
								name="email"
								placeholder='Enter Email'
								value={this.state.email}
								onChange={this.handleRegisterChange}
							/>
							<Form.Input
								label='Username:'
								required
								type="text"
								name="username"
								placeholder='Enter Username'
								value={this.state.username}
								onChange={this.handleRegisterChange}
							/>
							<Form.Input
								label='Password:'
								required
								type="password"
								name="password"
								placeholder='Enter Password'
								value={this.state.password}
								onChange={this.handleRegisterChange}
							/>
						</Form.Group>
						<Form.Group widths='equal'>
							<Form.Input
								label='First Name:'
								required
								type="text"
								name="firstname"
								placeholder='Enter First Name'
								value={this.state.firstname}
								onChange={this.handleRegisterChange}
							/>
							<Form.Input
								label='Last Name:'
								required
								type="text"
								name="lastname"
								placeholder='Enter Last Name'
								value={this.state.lastname}
								onChange={this.handleRegisterChange}
							/>
							<Form.Input
								label='Hometown:'
								type="text"
								name="hometown"
								placeholder='Enter Hometown'
								value={this.state.hometown}
								onChange={this.handleRegisterChange}
							/>
						</Form.Group>
						<Form.Group widths='equal'>
							<Form.Input
								label='Account Recovery Question:'
								required
								type="text"
								name="secretquestion"
								placeholder='Create Recovery Question'
								value={this.state.secretquestion}
								onChange={this.handleRegisterChange}
							/>
							<Form.Input
								label='Account Recovery Answer:'
								required
								type="text"
								name="secretanswer"
								placeholder='Create Recovery Answer'
								value={this.state.secretanswer}
								onChange={this.handleRegisterChange}
							/>
						</Form.Group>
						<Form.Checkbox
							label='I agree to, in there lack of, the terms and conditions'
							required
						/>
					<Button color={'teal'} type="Submit">Register</Button>
					</Form>
				</div>
			</React.Fragment>
		)
	}
}
