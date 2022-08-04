import { useState } from 'react';

function MovieInput({onSaveMovie}) {
    const today = new Date().toISOString().substring(0,10);
    const [movieTitle, setMovieTitle] = useState("공각기동대")
    const [openDate, setOpenDate] = useState(today)

    function saveData(event) {
        // 1. props를 통해서 App.js에 선언데 setMovieList를 호출
        // 2. App.js에 선언된 영화정보를 저장하는 이벤트 핸들러 호출
        onSaveMovie(movieTitle, openDate);
    }

    return (<div>
        {/* input form */}
        <fieldset>
          <legend>영화 정보 입력</legend>
          <label>영화제목</label>
          <input type="text" value={movieTitle} onChange={(e)=>{
            setMovieTitle(e.currentTarget.value);
          }}/> <span>{movieTitle}</span><br/>
          <label>개봉날짜</label>
          <input type="date" value={openDate} onChange={(e)=>{
            setOpenDate(e.currentTarget.value);
          }}/> <button onClick={saveData}>저장</button>
        </fieldset>
      </div>);
}

export default MovieInput;