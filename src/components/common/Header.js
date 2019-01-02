import React, {Component} from 'react';
import {AppBar} from '@material-ui/core';

import {
  ListItem,
  ListItemText,
  List,
  SwipeableDrawer,
  Button,
  Toolbar,
  IconButton,
  Typography
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import {withRouter} from 'react-router-dom'
import {SHIRAZ} from "../../config/Global";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      left: false
    }
  }

  handleLogout = (e) => {
    console.log(this.props.history);
    this.props.history.push("/");
    localStorage.setItem("authToken", "");
  };

  toggleDrawer = (side, open) => (e) => {
    e.preventDefault();
    this.setState({
      [side]: open,
    });
  };

  render() {
    const {props} = this;
    const LeftNavItems = [
      {
        route: "/home",
        text: "Home"
      },
      {
        route: "/slider",
        text: "Slider"
      },
      {
        route: "/first",
        text: "React Pose First"
      },
    ];

    const menu = (
      <div style={{width: 250}}>
        <List>
          {LeftNavItems.map((text, index) => (
            <ListItem button key={index} onClick={(e) => this.props.history.push(text.route)}>
              <ListItemText primary={text.text} />
            </ListItem>
          ))}
        </List>

      </div>
    );

    return(
      <div>
        <AppBar position="static" style={{backgroundColor: SHIRAZ, position: 'fixed', top: 0, ...props.style}}>
          <Toolbar>
            {
              props && !props.login &&
                <IconButton color="inherit" aria-label="Menu" onClick={this.toggleDrawer('left', true)}>
                  <MenuIcon />
                </IconButton>
            }
            <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
              {props.title}
            </Typography>
            {
              props && !props.login &&
                <Button color="inherit" onClick={(e) => this.handleLogout(e)}>LOGOUT</Button>
            }
          </Toolbar>
        </AppBar>
        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {menu}
          </div>
        </SwipeableDrawer>
      </div>
    )
  }
}

export default withRouter(Header);