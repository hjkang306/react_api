import React from "react";

const YoutubeVideos = ({ videos }) => {
  return (
    <li>
      <a href={`https://www.youtube.com/watch?v=${videos.id.videoId}`}>
        <img src={videos.snippet.thumbnails.medium.url} alt={videos.snippet.description} />
        <div className="youtubeTitle">{videos.snippet.title}</div>
      </a>
    </li>
  );
};

const YoutubeCont = ({ videos }) => {
  return (
    <section className="cont__youtube">
      <div className="container">
        <div className="youtube__inner">
          <ul>
            {videos.map((videos, index) => (
              <YoutubeVideos key={index} videos={videos} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default YoutubeCont;
