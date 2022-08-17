import { fetchFootballData } from './footy/football';

const fetchMatchApi = () => async (dispatch) => {
  try {
    const response = await fetch('https://www.scorebat.com/video-api/v1/');
    const data = await response.json();
    dispatch(fetchFootballData(data));
  } catch (err) {
    throw new Error(err.message);
  }
};

export default fetchMatchApi;
