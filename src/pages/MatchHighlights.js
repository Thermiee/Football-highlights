import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './matchPage.css';

const MatchHighlights = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { title, videos } = location.state || {}; // Retrieve data from state

  if (!title || !videos) {
    navigate('/');
    return null;
  }

  return (
    <div className="match-highlights">
      <h1 className="highlights-title">
        Match Highlights:
        {title}
      </h1>
      <div className="videos-container">
        {videos.map((video) => (
          <div key={video.id} className="video-card">
            <h3>{video.title}</h3>
            <div
              className="video-embed"
              dangerouslySetInnerHTML={{ __html: video.embed }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchHighlights;
