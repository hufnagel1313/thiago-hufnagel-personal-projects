import { combineReducers } from "redux";
import occasionsReducer from "./occasionsReducer";

const reducers = combineReducers({
    occasions: occasionsReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

