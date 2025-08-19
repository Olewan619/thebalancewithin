import React from "react";
import "./VideoYouTube.scss";

function VideoYouTube() {
  return (
    <div className="about-me-video">
      <iframe
        src="https://www.youtube.com/embed/-1-Uavg_wyw"
        title="YouTube video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      <p className="video-description">
        Watch this video to understand how mindfulness practices can help you
        improve your mental health and well-being. It's a quick introduction to
        the techniques I use in my practice.
      </p>

      <div className="info-banner">
        <p className="info-text">
          Bei der Energieheilarbeit handelt es sich nicht um eine Therapie oder
          Diagnoseverfahren und es soll nicht die ärztliche, psychologische oder
          heilkundliche Behandlung ersetzen. Meine Arbeit hat die Intention,
          Körper, Geist und Seele zu harmonisieren, um die eigenen
          Heilungskräfte zu aktivieren.
        </p>
      </div>
    </div>
  );
}

export default VideoYouTube;
