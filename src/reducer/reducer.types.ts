import { Video } from "../data/data.types";
export type Action =
| { type: "INITIALIZE_VIDEOS"; payload: Video[] }
| { type: "INITIALIZE_HISTORY_VIDEOS"; payload: Video[] }
| { type: "ADD_TO_HISTORY"; payload: Video }
| { type: "REMOVE_FROM_HISTORY"; payload: Video }
| { type: "CLEAR_SEARCH_HISTORY" }



export type InitialState = {
    videos: Video[];
    history: Video[];
};