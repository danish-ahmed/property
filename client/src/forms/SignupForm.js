import React, { Component } from 'react';
import Input from 'muicss/lib/react/input';
import Button from 'muicss/lib/react/button';
import Row from 'muicss/lib/react/row';
import Container from 'muicss/lib/react/container';
import Col from 'muicss/lib/react/col';
import Panel from 'muicss/lib/react/panel';
import validator from 'validator';
import InlineError from '../messages/InlineError';
import PropTypes from 'prop-types';

class SignupForm extends Component {
    state = {
        data:{
            firstName: '',
            lastName: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        errors: {},
        loading: false
    }
    handleChange = (e) => {
        this.setState({errors:{...this.state.errors,[e.target.name]:''}})
        this.setState({
            data: {...this.state.data, [e.target.name]: e.target.value}
        })
    }
    handleSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({errors});
        if(Object.keys(errors).length === 0){
            this.props.onSubmit(this.state.data)
            .catch(err => this.setState({errors: err.response.data.errors}))
        }
    }

    validate = (data) => {
        const errors = {};
        if(! data.firstName) errors.firstName = "First Name is Required"
        if(! data.username) errors.username = "Username is Required"
        if(! data.password) errors.password = "Password is required";
        if(! validator.isEmail(data.email)) errors.email = "Invalid Email"
        if( !(data.password === data.confirmPassword) ) errors.confirmPassword = "Confirm Password does not match"
        
        return errors;
    }

    render() {
        const styles = {'marginTop': '50px'}
        const message = (<Panel style={{background:'#F8BBD0'}}>
            <InlineError text={this.state.errors.global} /></Panel>)
        return (
            <Container fluid={true} style={styles}>
                <Row>
                    <Col md="6" md-offset="3">
                        <Panel>
                        <h4>Register</h4>
                        {(this.state.errors.global) ? message: ''}
                        <Row>
                            <Col md="6">
                                <Input
                                    className={this.state.errors.email?'':'error'}
                                    floatingLabel={true} 
                                    label="First Name"
                                    type="text" 
                                    name="firstName"
                                    onChange={this.handleChange}
                                />
                                <InlineError text={this.state.errors.firstName} />
                            </Col>
                            <Col md="6">
                                <Input
                                    className={this.state.errors.email?'':'error'}
                                    floatingLabel={true} 
                                    label="Last Name"
                                    type="text" 
                                    name="lastName"
                                    onChange={this.handleChange}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col md="6">
                                <Input
                                className={this.state.errors.email?'':'error'}
                                floatingLabel={true} 
                                label="Username"
                                type="text" 
                                name="username"
                                onChange={this.handleChange}
                            />
                                <InlineError text={this.state.errors.username} />
                            </Col>
                            <Col md="6">
                                <Input
                                    className={this.state.errors.email?'':'error'}
                                    floatingLabel={true} 
                                    label="Email Address"
                                    type="email" 
                                    name="email"
                                    onChange={this.handleChange}
                                />
                                <InlineError text={this.state.errors.email} />
                            </Col>
                        </Row>

                        <Row>
                            <Col md="6">
                                <Input 
                                    className={this.state.errors.email?'':'error'}
                                    floatingLabel={true} 
                                    label="Password" 
                                    type="password" 
                                    name="password"
                                    onChange={this.handleChange}
                                />
                                <InlineError text={this.state.errors.password} />

                            </Col>
                            <Col md="6">
                                <Input 
                                    className={this.state.errors.email?'':'error'}
                                    floatingLabel={true} 
                                    label="Confirm Password" 
                                    type="password" 
                                    name="confirmPassword"
                                    onChange={this.handleChange}
                                />
                                <InlineError text={this.state.errors.confirmPassword} /><br/>
                            </Col>
                        </Row>
                        <Button 
                            type="submit"
                            variant="raised"
                            onClick={this.handleSubmit} 
                            color="accent">
                            Register
                        </Button>
                        
                        </Panel>
                    </Col>
                </Row>
            </Container>
        );
    }
}
SignupForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default SignupForm;