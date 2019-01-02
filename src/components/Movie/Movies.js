import React, {Component} from 'react';
import MovieList from "./MovieList";
import {getMovie,search} from "../../Actions/MoivesAction";
import {connect} from 'react-redux';
import {
  TextField
} from '@material-ui/core';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      text: '',
    }
  }

  componentDidMount() {
    this.props.getMovie()
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.status === 200) {
      this.setState({movies: nextProps.movies});
    }
  }

  handleGoClick = (e) => {
    e.preventDefault();
    this.props.search(this.state.text);
  };

  handleClear = (e) => {
    this.setState({text: ''}, () => {
      this.props.getMovie()
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="d-flex flex-row">
          <div>
            <TextField
              id="search"
              label="Search"
              onChange = {(event) => this.setState({text: event.target.value})}
              value={this.state.text}
              variant={"outlined"}
            />
            <button onClick={(e) => this.handleGoClick(e)}>
              Search
            </button>
            <button onClick={(e) => this.handleClear(e)}>
              Clear
            </button>
          </div>
        </div>
        <div className="d-flex flex-row">
          <div className="col-sm-12">
            <MovieList movies={this.state.movies}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    status: state.Movies.status,
    movies: state.Movies.movies,
  }
};

export default connect(mapStateToProps,{
  getMovie,
  search
})(Movies);

