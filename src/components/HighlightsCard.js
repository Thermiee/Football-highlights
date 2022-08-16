import React from 'react';
import PropTypes from 'prop-types';

const HighlightsCard = (props) => {
  const { title, video } = props;

  return (
    <div>
      <div className="highlights-video">
        <img src={video} alt={title} />
      </div>
    </div>
  );
};

HighlightsCard.propTypes = {
  title: PropTypes.string.isRequired,
  video: PropTypes.string.isRequired,
};

export default HighlightsCard;
