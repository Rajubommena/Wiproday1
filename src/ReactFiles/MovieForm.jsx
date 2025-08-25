import React, { Component } from "react";

class MovieForm extends Component {
  constructor(props) {
    super(props);
    console.log("constructor executed");

    this.state = {
      title: "",
      director: "",
      year: "",
      genre: "Action",
      rating: "",
      description: "",
      platforms: {
        Netflix: false,
        "Amazon Prime": false,
        "Disney+": false,
        Others: false,
      },
      movies: [],
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps executed");
    return null; // no change to state
  }

  componentDidMount() {
    console.log("componentDidMount executed");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate executed");
    return true; // allow updates
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate executed");
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate executed");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount executed");
  }

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      this.setState((prevState) => ({
        platforms: {
          ...prevState.platforms,
          [name]: checked,
        },
      }));
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { title, director, year, genre, rating, description, platforms } =
      this.state;

    const newMovie = {
      title,
      director,
      year,
      genre,
      rating,
      description,
      platforms: Object.keys(platforms).filter((p) => platforms[p]),
    };

    this.setState((prevState) => ({
      movies: [...prevState.movies, newMovie],
      // reset form fields
      title: "",
      director: "",
      year: "",
      genre: "Action",
      rating: "",
      description: "",
      platforms: {
        Netflix: false,
        "Amazon Prime": false,
        "Disney+": false,
        Others: false,
      },
    }));
  };

  render() {
    console.log("render executed");

    const { title, director, year, genre, rating, description, platforms, movies } =
      this.state;

    return (
      <div className="container mt-4">
        <div className="card p-3 shadow">
          <h3 className="mb-3">Movie Form</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="mb-3">
              <label>Movie Title</label>
              <input
                type="text"
                name="title"
                className="form-control"
                value={title}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Director</label>
              <input
                type="text"
                name="director"
                className="form-control"
                value={director}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Release Year</label>
              <input
                type="number"
                name="year"
                className="form-control"
                value={year}
                onChange={this.handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label>Genre</label>
              <select
                name="genre"
                className="form-control"
                value={genre}
                onChange={this.handleChange}
              >
                <option>Action</option>
                <option>Comedy</option>
                <option>Drama</option>
                <option>Sci-Fi</option>
                <option>Horror</option>
              </select>
            </div>

            <div className="mb-3">
              <label>Rating</label>
              <div>
                {[1, 2, 3, 4, 5].map((num) => (
                  <div key={num} className="form-check form-check-inline">
                    <input
                      type="radio"
                      name="rating"
                      value={num}
                      checked={rating === String(num)}
                      onChange={this.handleChange}
                      className="form-check-input"
                    />
                    <label className="form-check-label">{num}</label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-3">
              <label>Description</label>
              <textarea
                name="description"
                className="form-control"
                value={description}
                onChange={this.handleChange}
              ></textarea>
            </div>

            <div className="mb-3">
              <label>Available on Platforms</label>
              <div>
                {Object.keys(platforms).map((platform) => (
                  <div key={platform} className="form-check form-check-inline">
                    <input
                      type="checkbox"
                      name={platform}
                      checked={platforms[platform]}
                      onChange={this.handleChange}
                      className="form-check-input"
                    />
                    <label className="form-check-label">{platform}</label>
                  </div>
                ))}
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Add Movie
            </button>
          </form>
        </div>

        {movies.length > 0 && (
          <div className="mt-4">
            <h4>Movies List</h4>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Director</th>
                  <th>Year</th>
                  <th>Genre</th>
                  <th>Rating</th>
                  <th>Description</th>
                  <th>Platforms</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie, index) => (
                  <tr key={index}>
                    <td>{movie.title}</td>
                    <td>{movie.director}</td>
                    <td>{movie.year}</td>
                    <td>{movie.genre}</td>
                    <td>{movie.rating}</td>
                    <td>{movie.description}</td>
                    <td>{movie.platforms.join(", ")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

export default MovieForm;
