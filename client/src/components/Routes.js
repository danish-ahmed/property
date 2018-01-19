import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage';
import ForgotPasswordPage from '../pages/ForgotPasswordPage';
import SignupPage from '../pages/SignupPage';

export default class Routes extends Component {
    render() {
        return (
            <main>
                <Switch>
                    <Route path="/" component={HomePage} exact={true} />
                    <Route path="/login" component={LoginPage} history/>
                    <Route path="/forgot-password" component={ForgotPasswordPage} history/>
                    <Route path="/signup" component={SignupPage} history/>
                </Switch>
            </main>
        );
    }
}