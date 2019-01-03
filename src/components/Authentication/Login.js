import React, { Component } from 'react';
import {
  Button,
  TextField
} from '@material-ui/core';
import Header from '../common/Header'
import style from "../../config/style";
import {authUser} from "../../Actions/UserAction";
import {connect} from 'react-redux';
import Global from '../../config/Global';
import { Alert } from 'reactstrap';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      isOpen: false,
      msg: "",
      alertColor: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.status === 200 && nextProps.token) {
      localStorage.setItem(Global.AUTH_TOKEN, nextProps.token);
      this.props.history.push('/home');
    } else {
      let alertColor = "danger";
      this.setState({isOpen: true, msg: nextProps.error, alertColor});
    }
  }

  handleClick = () => {
    let payload = this.state;
    this.props.authUser(payload);
  };

  render() {
    const {isOpen, msg, alertColor} = this.state;
    return (
      <div>
        <div>
          <Header title={"LOGIN"} login style={{position: 'relative'}}/>
          <div className="container" style={{marginTop: 10}}>
            <Alert color={alertColor} style={{marginLeft: 10, marginRight: 10}} isOpen={isOpen}>
              {msg}
            </Alert>
            <div className="text-container">
              <TextField
                id="username"
                label="Username"
                onChange = {(event) => this.setState({username: event.target.value})}
                value={this.state.username}
                variant={"outlined"}
              />
            </div>
            <br/>
            <div className="text-container">
              <TextField
                id="password"
                label="Password"
                type="password"
                onChange = {(event) => this.setState({password: event.target.value})}
                value={this.state.password}
                variant={"outlined"}
              />
            </div>
            <br/>
            <Button style={style.button} onClick={(event) => this.handleClick(event)}>Login</Button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    status: state.Users.status,
    token: state.Users.token,
    error: state.Users.error,
  }
};

export default connect(mapStateToProps,{
  authUser
})(Login);