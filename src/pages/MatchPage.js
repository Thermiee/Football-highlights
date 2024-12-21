import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MatchCard from '../components/MatchCard';
import './matchPage.css';

const MatchPage = () => {
  const navigate = useNavigate();
  const matches = useSelector((state) => state.footballReducer.matches); // Destructured for clarity

  if (!matches || matches.length === 0) {
    return <h2>No matches available at the moment.</h2>;
  }

  return (
    <>
      <h1 className="header-title">Match Page</h1>
      <div className="header">
        <div className="mathcard-img">
          <img
            src="https://c.tenor.com/NU5YIC1HLyIAAAAC/lingard-celebration.gif"
            alt="Jesse Lingard celebration dance"
          />
        </div>
      </div>
      <div>
        <h1 className="header-title">List of available Matches</h1>
        <div className="mathcard-body">
          {matches.map((match) => (
            <MatchCard
              key={match.id} // Assuming each match has a unique id
              title={match.title}
              thumbnail={match.thumbnail}
              onClick={() => {
                navigate('/matchHighlights', {
                  state: { title: match.title, videos: match.videos },
                });
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MatchPage;
