import React, { Component } from 'react'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import HomePage from './Index/index'
import SignUp from './SignUp/signup'
import SignIN from './SignIn/signin'
import Dashboard from './Dashboard/dashboard'
import PrivateRoute from './PrivateRoute'

export default class App extends Component {
    render(){
        return(
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/signup" component={SignUp} />
                <Route path="/signin" component={SignIN} />
                <PrivateRoute path="/dashboard" component={Dashboard} />
              </Switch>
            </AuthProvider>
          </Router>
        )
    }
}