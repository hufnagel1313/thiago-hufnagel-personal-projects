import { ActionTypes } from '../action-types';
import { ChatbotAction } from '../actions/chatbotActions';

interface ChatbotState {
    loading: boolean;
    error: string | null;
    data: string;
}

const initialState = {
    loading: false,
    error: null,
    data: ''
};

const chatbotReducer = (
    state: ChatbotState = initialState,
    action: ChatbotAction
): ChatbotState => {
    switch (action.type) {
        case ActionTypes.POST_CHATBOT_MESSAGE:
            return { loading: true, error: null, data: '' };
        case ActionTypes.POST_CHATBOT_MESSAGE_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionTypes.POST_CHATBOT_MESSAGE_ERROR:
            return { loading: false, error: action.payload, data: '' };
        default:
            return state;
    }
};

export default chatbotReducer;