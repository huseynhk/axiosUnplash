import axios from "axios";

const SearchImg = async (event) => {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID HEpksG6-H0GwpDeiyvknof_nbaSD3LcJkl-F-sxeTZ0",
      },
      params: {
        query: event,
      },
    });
    return res.data.results;
  };

export default SearchImg;