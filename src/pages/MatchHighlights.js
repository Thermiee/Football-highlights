import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './matchPage.css';

// Helper function to parse embed HTML as React components
const parseEmbed = (embed) => {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(embed, 'text/html');

    // Example: Render iframe safely
    const iframe = doc.querySelector('iframe');
    if (iframe) {
      return (
        <iframe
          src={iframe.src}
          title="Video"
          frameBorder="0"
          allow={iframe.getAttribute('allow') || 'autoplay; fullscreen'}
          allowFullScreen
          className="video-iframe"
        />
      );
    }

    // Handle other cases if necessary
    return <p>Unsupported embed format</p>;
  } catch (error) {
    // console.error('Failed to parse embed:', error);
    return <p>Error loading video</p>;
  }
};

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
            {/* Parse video.embed and render elements */}
            {parseEmbed(video.embed)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchHighlights;
