import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MatchCard from '../components/MatchCard';
import './matchPage.css';

const MatchPage = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.footballReducer.matches);

  return (

    <>
      <h1 className="header-title">Match Page</h1>
      <div className="header">
        <div className="mathcard-img">
          <img src="https://c.tenor.com/NU5YIC1HLyIAAAAC/lingard-celebration.gif" alt="lingard dance " />
        </div>
      </div>
      <div>
        <div>
          <h1 className="header-title">List of available Matches</h1>
        </div>
        <div className="mathcard-body">

          {data.map((match) => (
            <MatchCard
              key={match.title}
              title={match.title}
              thumbnail={match.thumbnail}
              onClick={() => {
                navigate('/matchHighlights', { state: { title: match.title } });
              }}
            />
          ))}
        </div>
      </div>
    </>

  );
};

export default MatchPage;
