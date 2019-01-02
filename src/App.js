import React, { Component } from 'react';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { BrowserRouter as Router,Switch, Redirect } from 'react-router-dom'
import Login from './components/Authentication/Login';
import Home from './components/HomePage';
import {PrivateRoute} from './Routes/PrivateRoute';
import {PublicRoute} from './Routes/PublicRoute';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from  'redux';
import thunk from 'redux-thunk';
import AppReducer from "./Reducers/index";
import Slider from "./components/Slider";
import First from "./components/Animation/ReactPoseEx/First";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Provider store={(createStore(AppReducer,applyMiddleware(thunk)))}>
            <Router>
              <Switch>
                <PublicRoute exact path="/login" component={Login} />
                <PrivateRoute exact path="/home" component={Home} />
                <PrivateRoute exact path = "/slider" component = {Slider} />
                <PrivateRoute exact path = "/first" component = {First} />
                <Redirect from='/' to='/login'/>
              </Switch>
            </Router>
          </Provider>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;