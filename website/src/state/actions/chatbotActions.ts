import { ActionTypes } from '../action-types'

interface PostChatbotMessageAction {
    type: ActionTypes.POST_CHATBOT_MESSAGE;
}

interface PostChatbotMessageSuccessAction {
    type: ActionTypes.POST_CHATBOT_MESSAGE_SUCCESS;
    payload: string;
}


interface PostChatbotMessageErrorAction {
    type: ActionTypes.POST_CHATBOT_MESSAGE_ERROR;
    payload: string
}

export type ChatbotAction =
    PostChatbotMessageAction |
    PostChatbotMessageSuccessAction |
    PostChatbotMessageErrorAction;

