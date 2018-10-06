import axios from "axios";

export const GET_TAGS = "GET_TAGS";

export const getTags = (lob) => {
    let req = axios.get(`/api/tags/${lob}`);
    console.log("getTags", req);

    return {
        type: GET_TAGS,
        payload: req
    }
};