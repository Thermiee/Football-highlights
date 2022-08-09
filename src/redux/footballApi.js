import { fetchFootballData } from "./footy/football";

const fetchFootballData = () =>  async (dispatch) => {
    try {
        const response = await fetch("https://www.scorebat.com/video-api/v1/").then(
            data => data.json(),
        );
        
        const payload = response.data.map(( item ) => ({
            id: item.id,
            title: item.title,
            thumbnail: item.thumbnail,
            
        }))
    }
    catch (error) {
        console.log(error);
    }            
}
