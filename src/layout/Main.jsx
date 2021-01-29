import React, { Component } from "react";
import { MovieList } from "../components/MovieList";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends Component {
  state = {
    movies: [`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`],
    loading: true,
  };

  componentDidMount() {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchMovies = (str, type = "all") => {
    this.setState({ loading: true });
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
        type !== "all" ? `&type=${type}` : ""
      }`
    )
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  };
  render() {
    const { movies, loading } = this.state;
    return (
      <main className="container content ">
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <MovieList movies={movies} />}
      </main>
    );
  }
}
export default Main;
