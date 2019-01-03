import React, {Component} from 'react';
import {
  Button,
  TextField,
  Input
} from '@material-ui/core';
import style from "../../config/style";
import {newMovie, editMovie} from "../../Actions/MoivesAction";
import {connect} from 'react-redux';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: ((props.movie && props.movie.id) || ''),
      name: ((props.movie && props.movie.name) || ''),
      description: ((props.movie && props.movie.description) || ''),
      image: ''
    }
  }

  handleClick = (e) => {
    e.preventDefault();

    let obj = {
      name: this.state.name,
      description: this.state.description
    };

    this.props.newMovie(obj);
    this.props.closeModal();
  };

  onEdit = (e) => {
    e.preventDefault();

    let obj = {
      id: this.state.id,
      name: this.state.name,
      description: this.state.description
    };

    this.props.editMovie(obj);
    this.props.closeModal();
  };

  render() {
    const {props} = this;

    return(
      <div>
          <div>
            <div className="container">
              <div className="text-container">
                <TextField
                  id="name"
                  label="Name"
                  onChange = {(event) => this.setState({name: event.target.value})}
                  value={this.state.name}
                  variant={"outlined"}
                />
              </div>
              <br/>
              <div className="text-container">
                <TextField
                  id="description"
                  label="Descrition"
                  onChange = {(event) => this.setState({description: event.target.value})}
                  value={this.state.description}
                  variant={"outlined"}
                />
              </div>
              <br/>
              <div className="text-container">
                <Input
                  accept="image/*"
                  id="raised-button-file"
                  type="file"
                  onChange={(event) => this.setState({image: event.target.value})}
                />
              </div>
              <br/>
              <Button style={style.button} onClick={(event) => props.fromEdit ? this.onEdit(event) : this.handleClick(event)}>{props.fromEdit ? 'Edit' : 'Add'}</Button>
              <Button style={style.button} onClick={(event) => this.props.closeModal()}>Close</Button>
            </div>
          </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    status: state.Movies.status,
  }
};

export default connect(mapStateToProps,{
  newMovie,
  editMovie
})(AddMovie);