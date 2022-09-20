const fetchHighlightsApi = async (title) => {
  try {
    const api = await fetch(`https://scorebat.com/video/${title}`);
    const response = await api.json();
    return response;
  } catch (err) {
    throw new Error(err.message);
  }
};

export default fetchHighlightsApi;
