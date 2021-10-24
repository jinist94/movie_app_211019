
import PropTypes from "prop-types";
import React from "react";
import axios from "axios";
import Movie from "./Movie";


class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () =>{
    const {data: {data : { movies }}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false }) // state에 넣는 방법. movies : movies 를 단축한 것. 불러옴과 동시에 isLoading을 false함
  }
  componentDidMount(){
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return <div>
      {isLoading 
      ? "Loading"
      : movies.map(movie =>(
        <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
        />
      ))}
    </div>;
  
  }
}


export default App;



