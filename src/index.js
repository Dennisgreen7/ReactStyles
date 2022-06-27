import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { StudentComp, StudentListComp } from './Components/StudentComp';
import { YoutubeVideoListComp } from './Components/YoutubeComp';

function GetYoutubeList() {
  let youtubeVideos = [
    {
      title: "The Day Cristiano Ronaldo Showed Zlatan Ibrahimovic Who Is The Boss",
      youtubeurl: "https://www.youtube.com/watch?v=dNeY679KNCo",
      width: 560,
      height: 315 
    },
    {
      title: "How Cristiano Ronaldo Plays at 37",
      youtubeurl: "https://www.youtube.com/watch?v=4x5snVAFwII",
      width: 560,
      height: 315
    },
    {
      title: "Cristiano Ronaldo ● Overall 2022 | HD",
      youtubeurl: "https://www.youtube.com/watch?v=QFGavQYP3ok",
      width: 560,
      height: 315
    },
    {
      title: "THANK YOU, CRISTIANO RONALDO | Real Madrid Official Video",
      youtubeurl: "https://www.youtube.com/watch?v=5hFd6zGkxLE&t=98s",
      width: 560,
      height: 315
    }
  ]
  return youtubeVideos;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <StudentListComp></StudentListComp>
  <YoutubeVideoListComp YoutubeVideos={GetYoutubeList()}></YoutubeVideoListComp>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
