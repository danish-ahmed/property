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
import FlatButton from 'material-ui/FlatButton';

class ForgotPassword extends Component {
    state = {
        data:{
            email:'',
            password:''
        },
        errors: {},
        loading: false
    }
    handleChange = (e) => {
        this.setState({errors:{[e.target.value]:''}})
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
        if(! data.password) errors.password = 'Password is required'
        if(! validator.isEmail(data.email)) errors.email = "Invalid Email"
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
                        <h4>Password Reset</h4>
                        {(this.state.errors.global) ? message: ''}
                        <Input
                            className={this.state.errors.email?'':'error'}
                            floatingLabel={true} 
                            label="Email Address"
                            type="email" 
                            name="email"
                            onChange={this.handleChange}
                        />
                        <InlineError text={this.state.errors.email} />
                        <Button 
                            type="submit"
                            variant="raised"
                            onClick={this.handleSubmit} 
                            color="accent">
                            Send Link
                        </Button>
                        
                        </Panel>
                    </Col>
                </Row>
            </Container>
        );
    }
}
ForgotPassword.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default ForgotPassword;