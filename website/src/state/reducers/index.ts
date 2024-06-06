import { combineReducers } from "redux";
import chatbotReducer from "./chatbotReducer";

const reducers = combineReducers({
    chatbot: chatbotReducer
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;

