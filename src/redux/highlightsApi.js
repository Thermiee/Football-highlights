import { fetchHighlightsData } from './highlights/highlights';

const fetchHighlightsApi = () => async (dispatch) => {
  try {
    const response = await fetch(`https://scorebat.com/video/${title}`);
    const data = await response.json();
    dispatch(fetchHighlightsData(data));
  } catch (err) {
    throw new Error(err.message);
  }
};

export default fetchHighlightsApi;
