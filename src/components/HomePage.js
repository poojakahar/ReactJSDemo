import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import Movies from "./Movie/Movies";
import Header from "./common/Header";
import SubHeader from "./common/SubHeader";
import AddMovie from "./Movie/AddMovie";
import { Alert } from 'reactstrap';
import {connect} from 'react-redux';
import Global from '../config/Global'
import CustomModal from "./common/CustomModal";

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false,
      isOpen: false,
      msg: "",
      alertColor: "",
    }
  }

  success = (from) => {
    let alertColor = "success";
    switch(from) {
      case 'new':
        this.setState({isOpen: true, msg: 'Added Successfully', alertColor});
        break;

      case 'edit':
        this.setState({isOpen: true, msg: 'Updated Successfully', alertColor});
        break;

      case 'delete':
        this.setState({isOpen: true, msg: 'Deleted Successfully', alertColor});
        break;

      default:
        this.setState({isOpen: false, msg: '', alertColor});
    }
  };

  error = (msg) => {
    let alertColor = "danger";
    this.setState({isOpen: true, msg, alertColor});
  };

  componentWillReceiveProps(nextProps) {
    if(nextProps.status === 200) {
      if(nextProps.from) {
        this.success(nextProps.from)
      }
    } else {
      this.error(nextProps.error)
    }
  }

  openModal = () => {
    this.setState({modalIsOpen: true})
  };

  closeModal = () => {
    this.setState({modalIsOpen: false});
  };

  headerRight = () => (
    <Button onClick={() => this.openModal()}>
      <Add color={'secondary'}/>
    </Button>
  );

  render() {
    const {isOpen, msg, alertColor} = this.state;
    return (
      <div>
        <Header title={"HOME"} />
        <SubHeader title={"List of Movies"} right={this.headerRight()} style={{backgroundColor: Global.YELLOW, marginTop: 80}}/>
        <Alert color={alertColor} style={{marginLeft: 10, marginRight: 10}} isOpen={isOpen}>
          {msg}
        </Alert>

        <div className="mt-5" style={{marginTop: 10}}>
          <Movies openModal={() => this.openModal()}/>
        </div>

        <CustomModal modalIsOpen={this.state.modalIsOpen} closeModal={this.closeModal.bind(this)}>
          <AddMovie closeModal={() => this.closeModal()}/>
        </CustomModal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    from: state.Movies.from,
    status: state.Movies.status,
    error: state.Movies.error
  }
};

export default connect(mapStateToProps)(HomePage);
