import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import fetchHighlightsApi from '../redux/highlightsApi';
import HighlightsCard from '../components/HighlightsCard';

const navigate = useNavigate();
const [response, setResponse] = useState();
const { state } = useLocation();
useEffect(() => {
  fetchHighlightsApi(state.title).then((resp) => setResponse(resp));
}, [state.title]);

const MatchHighlights = () => (
  <>
    <IoIosArrowBack
      onClick={() => {
        navigate('/');
      }}
    />
    <div>MatchHighlights</div>
    <div>
      {' '}
      { response
      && (
      <>
        <h2>
          {state.title}
        </h2>
        <div className="highlights-url">
          <img src={response.url} alt={state.title} />
        </div>
      </>
      )}
      {(response && response.data.length > 0) && response.data.map((title) => (
        <HighlightsCard
          key={title.id}
          title={title.title}
          video = {title.video}
        />
      ))}
    </div>
  </>

);
export default MatchHighlights;
