const FETCH_HIGHLIGHTS_DATA = 'FETCHHIGHLIGHTSDATA/HIGHLIGHTS/FETCH';
const initialState = { highlights: [] };

export const fetchHighlightsData = (payload) => ({
  type: FETCH_HIGHLIGHTS_DATA,
  payload,
});

const highlightsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_HIGHLIGHTS_DATA:
      return { highlights: [...payload] };

    default:
      return state;
  }
};

export default highlightsReducer;
