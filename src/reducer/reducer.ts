import { InitialState, Action } from "./reducer.types";


export const initialState: InitialState = {
    videos: []
};

export const reducerFunc = (
    state: InitialState,
    action: Action
  ): InitialState => {
    switch (action.type) {
      case "INITIALIZE_VIDEOS":
        return { ...state, videos: [...action.payload] };
    }
}  