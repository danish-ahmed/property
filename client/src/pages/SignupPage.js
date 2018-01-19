import React, { Component } from 'react';
import SignupForm from '../forms/SignupForm'
import {connect} from 'react-redux';
import {signup} from '../actions/auth';


class SignupPage extends Component {

    handleSubmit = (data) => (
        this.props.signup(data)
            .then(res => this.props.history.push('/'))
    )
    render() {
        return (
          <div className="container">
            <SignupForm onSubmit={this.handleSubmit}/>
          </div>
        );
    }
}

export default connect(null, {signup})(SignupPage)