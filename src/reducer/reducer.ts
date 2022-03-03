import { InitialState, Action } from "./reducer.types";


export const initialState: InitialState = {
    videos: [],
    history: [],
};

export const reducerFunc = (
    state: InitialState,
    action: Action
  ): InitialState => {
    switch (action.type) {
      case "INITIALIZE_VIDEOS":
        return { ...state, videos: [...action.payload] };


        case "INITIALIZE_HISTORY_VIDEOS":
          return { ...state, history: [...action.payload] };
          case "ADD_TO_HISTORY":
            return { ...state, history: [...state.history, action.payload] };
      
          case "REMOVE_FROM_HISTORY":
            return {
              ...state,
              history: state.history.filter(
                (historyVideoItem) => historyVideoItem._id !== action.payload._id
              ),
            };
      
          case "CLEAR_SEARCH_HISTORY":
            return { ...state, history: [] };
    }
}  