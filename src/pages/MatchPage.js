import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import MatchCard from '../components/MatchCard';
import './matchPage.css';

const MatchPage = () => {
  const navigate = useNavigate();
  const data = useSelector((state) => state.footballReducer.matches);

  return (

    <div>
      <h1>Match Page</h1>
      <div className="mathcard-img">
        <img src="https://c.tenor.com/NU5YIC1HLyIAAAAC/lingard-celebration.gif" alt="lingard dance " />
      </div>
      <div>
        <h3> Welcome</h3>
      </div>
      <div>
        <h1>List of available Matches</h1>
      </div>
      <div>
        { data.map((match) => (
          <MatchCard
            key={match.id}
            title={match.title}
            thumbnail={match.thumbnail}
            onClick={() => {
              navigate(`/match/${match.id}`);
            }}
          />
        ))}
      </div>
    </div>

  );
};

export default MatchPage;
