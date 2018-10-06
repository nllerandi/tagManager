import axios from "axios";

export const GET_TAGS = "GET_TAGS";

export const getTags = () => {
    let req = axios.get("/api/tags");
    console.log("getTags", req);

    return {
        type: GET_TAGS,
        payload: req
    }
};