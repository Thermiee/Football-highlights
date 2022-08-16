import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import fetchHighlightsApi from '../redux/highlightsApi';

const MatchHighlights = () => {
  const navigate = useNavigate();
  const [response, setResponse] = useState();
  const { state } = useLocation();
  useEffect(() => {
    fetchHighlightsApi(state.title).then((resp) => setResponse(resp));
  }, []);

  return (
    <>
      <IoIosArrowBack
        onClick={() => {
          navigate('/');
        }}
      />
      <div>MatchHighlights</div>
    </>
  );
};

export default MatchHighlights;
