import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

const MatchCard = (props) => {
  const {
    title, thumbnail, onClick,
  } = props;

  return (
    <div
      role="button"
      tabIndex="0"
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          onClick();
        }
      }}
      className="match-card"
    >
      <div className="match-card-thumbnail">
        <img src={thumbnail} alt={title} />
      </div>
      <div className="match-card-title">
        <h3>{title}</h3>
        <BsArrowRightCircle />
      </div>
    </div>

  );
};

MatchCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default MatchCard;
