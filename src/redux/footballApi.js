import { fetchFootballData } from './footy/football';

const fetchMatchApi = () => async (dispatch) => {
  try {
    const res = await fetch(
      'https://www.scorebat.com/video-api/v3/feed/?token=MTc1NzhfMTczNDc5NDI0OV82MGNiZGM1OGVmODZjMjljZjg3NDRiMDNkNzk1MmZhNjdmNDdhZDRj',
    );
    // console.log(res);
    const data = await res.json();
    dispatch(fetchFootballData(data.response));
  } catch (err) {
    throw new Error(err.message);
  }
};

export default fetchMatchApi;
