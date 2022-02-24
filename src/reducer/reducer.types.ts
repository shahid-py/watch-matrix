import { Video } from "../data/data.types";
export type Action =
| { type: "INITIALIZE_VIDEOS"; payload: Video[] }



export type InitialState = {
    videos: Video[];
};