import React, { Component } from 'react';
import LoginForm from '../forms/LoginForm'
import {connect} from 'react-redux';
import {login} from '../actions/auth';


class LoginPage extends Component {

  handleSubmit = (data) => (
    this.props.login(data)
      .then(() => this.props.history.push('/'))
  )
    
  

  render() {
        return (
          <div className="container">
            <LoginForm onSubmit={this.handleSubmit}/>
          </div>
                
        );
    }
}

export default connect(null, {login})(LoginPage)