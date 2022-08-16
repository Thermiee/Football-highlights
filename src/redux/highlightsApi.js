const fetchHighlightsApi = () => async (dispatch) => {
  try {
    const api = await fetch('https://www.scorebat.com/video-api/v1/${title}');
    const response = await api.json();
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default fetchHighlightsApi;
