import React from "react";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovie = async () => {
    const {
      data: { 
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
    // this.setState({movies:movies}) // 왼쪽 movies는 state, 오른쪽 movies는 data
  }
  componentDidMount() {
    this.getMovie();
  }
  render() {
    const { isLoading, movies } = this.state;
    return <div>{isLoading 
      ? "Loading" 
      : movies.map(movie => (
        <Movie
          key={movie.id}
          id={movie.id} 
          year={movie.year}
          title={movie.title} 
          summary={movie.summary} 
          poster={movie.medium_comver_image} 
        />
      ))}
    </div> 
  }
}

export default App;