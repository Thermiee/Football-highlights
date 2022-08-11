const FETCH_FOOTBALL_DATA = 'FETCHFOOTBALLDATA/FOOTBALL/FETCH';

const initialState = { matches: [] };

export const fetchFootballData = (payload) => ({
  type: FETCH_FOOTBALL_DATA,
  payload,
});

const footballReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_FOOTBALL_DATA:
      return { matches: [...payload] };

    default:
      return state;
  }
};

export default footballReducer;
