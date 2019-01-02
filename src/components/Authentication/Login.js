import React, { Component } from 'react';
import {
  Button,
  TextField
} from '@material-ui/core';
import {UserService} from "../../API/userService";
import Header from '../common/Header'
import style from "../../config/style";
import {authUser} from "../../Actions/UserAction";
import {connect} from 'react-redux';

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    };

    this.userService = new UserService();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.status === 200 && nextProps.token) {
      localStorage.setItem("authToken", nextProps.token);
      this.props.history.push('/home');
    } else {
      return alert("Kindly check your username or password");
    }
  }

  handleClick = () => {
    let payload = this.state;
    this.props.authUser(payload);
  };

  render() {
    return (
      <div>
        <div>
          <Header title={"LOGIN"} login style={{position: 'relative'}}/>
          <div className="container">
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
    token: state.Users.token
  }
};

export default connect(mapStateToProps,{
  authUser
})(Login);