import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import {Card, CardContent, CardMedia, Typography, CardActionArea, Button, CardActions} from '@material-ui/core';
import {removeMovie} from "../../Actions/MoivesAction";
import {connect} from 'react-redux';
import CustomModal from "../common/CustomModal";
import AddMovie from '../Movie/AddMovie';

class MovieCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
      editModal: false
    }
  }

  onBookPress = (e) => {
    e.preventDefault();
    this.showToggleModal();
  };

  showToggleModal = () => {
    this.setState({showModal: !this.state.showModal});
  };

  editToggleModal = () => {
    this.setState({editModal: !this.state.editModal});
  };

  onEdit = (id) => {
    this.editToggleModal();
  };

  onDelete = (id) => {
    this.props.removeMovie(id);
  };

  render() {
    const {movie} = this.props;
    const altimg = "data:image/jpeg;base64,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";

    return (
      <React.Fragment>
        <Card className="movie-card">
          <CardActionArea>
            <CardMedia
              className={"movie-card card"}
              image={movie.cover_photo || altimg}
              title={movie.name}
              alt=""
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {movie.name}
              </Typography>
              <Typography component="p">
                {movie.description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" onClick={(event) => this.onBookPress(event)}>
              More Detail
            </Button>
            <Button onClick={() => this.onEdit()}>
              <Edit color={'secondary'}/>
            </Button>
            <Button onClick={() => this.onDelete(movie.id)}>
              <Delete color={'secondary'}/>
            </Button>
          </CardActions>
        </Card>

        <CustomModal modalIsOpen={this.state.showModal}
                     closeModal={this.showToggleModal}>
              <h2 ref={subtitle => this.subtitle = subtitle}>{movie.name}</h2>
              <img src={movie.cover_photo || altimg} style={{height: 300, width: 300}} alt=""/>
              <button onClick={this.showToggleModal}>close</button>
              <div>{movie.description}</div>
        </CustomModal>

        <CustomModal modalIsOpen={this.state.editModal} closeModal={this.editToggleModal.bind(this)}>
          <AddMovie closeModal={() => this.editToggleModal()} fromEdit movie={movie}/>
        </CustomModal>

      </React.Fragment>
    )
  }
}

MovieCard.defaultProps = {
  movie: {}
};

MovieCard.propTypes = {
  movie: PropTypes.object
};

const mapStateToProps = state => {
  return{
    status: state.Movies.status,
  }
};

export default connect(mapStateToProps,{
  removeMovie
})(MovieCard);
