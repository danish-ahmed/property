import React, { Component } from 'react';
import ForgotPasswordForm from '../forms/ForgotPasswordForm'
import {connect} from 'react-redux';


class ForgotPasswordPage extends Component {

//   handleSubmit = (data) => (
    
//   )
    render() {
        return (
          <div className="container">
            <ForgotPasswordForm onSubmit={this.handleSubmit}/>
          </div>
        );
    }
}

export default connect(null, {})(ForgotPasswordPage)