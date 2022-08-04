import { useState } from 'react';
import './App.css'

import MovieInput from './MovieInput';
import MovieList from './MovieList';
import MovieSearch from './MovieSearch';

function App() {
  const today = new Date().toISOString().substring(0,10);
  const [movieList, setMovieList] = useState([
    {no:1, movieTitle:"로키", openDate:"1982-01-15", rating:5},
    {no:2, movieTitle:"터미네이터", openDate:"1984-01-15", rating:4},
    {no:3, movieTitle:"그랑블루", openDate:"1988-01-15", rating:5}
  ]);
  const [searchList, setSearchList] = useState(movieList)
  function saveMovieFn(movieTitle, openDate) {
    let newData = {no:3, movieTitle:movieTitle, openDate:openDate, rating:5};
    let newList = [...movieList, newData];
    setMovieList(newList);
    setSearchList(newList);
    // Ract는 state 정보를 변경 하면 모든 콤포넌트가 새로 랜더링 된다.
  }
  function searchMovie(keyword) {
    let newList = movieList.filter(function(movie){
      return movie.movieTitle.indexOf(keyword) != -1;
    });
    if(newList) {
      setSearchList(newList);
    }
  }
  return (<>
    <div>
      <h1>영화 평점 정보 관리</h1>
      <h3>오늘날짜: {today}</h3>
    </div>
    <MovieInput  onSaveMovie={saveMovieFn} />
    <MovieSearch onSearchMovie={searchMovie} />
    <MovieList movieList={searchList} />
  </>);
}

export default App;
