import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

class AuthenticatedRoute extends Component {
    render() {
        if(sessionStorage.JWT) {
            return <Route {...this.props}/>
        } else {
            return <Redirect to="/" />
        }
    }
}

export default AuthenticatedRoute;
