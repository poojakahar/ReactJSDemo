import React from 'react';
import {AppBar} from '@material-ui/core';

import {
  Toolbar,
  Typography
} from '@material-ui/core';
import {withRouter} from 'react-router-dom';
import Global from "../../config/Global";

const SubHeader = (props) => {
  return(
    <div>
      <AppBar position="static" style={{backgroundColor: Global.WHITE, color: Global.MONARCH, ...props.style}} elevation={0}>
        <Toolbar>
          {props.left || <div style={{width: 50}}/>}
          <Typography variant="h6" color="inherit" style={{flexGrow: 1}}>
            {props.title}
          </Typography>
          {props.right || <div style={{width: 105}}/>}
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default withRouter(SubHeader);