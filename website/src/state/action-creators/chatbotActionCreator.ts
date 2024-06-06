import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../action-types';
import { ChatbotAction } from '../actions/chatbotActions';

export const postMessage = (message: string, chatLog: string) => {
    return async (dispatch: Dispatch<ChatbotAction>) => {
        dispatch({
            type: ActionTypes.POST_CHATBOT_MESSAGE,
            payload: ''
        });

        try {
            const baseUrl = process.env.REACT_APP_PERSONAL_API_URL;
            const { data } = await axios.post<any>(`${baseUrl}/chatbot/message`,
                {
                    message,
                    chatLog
                }
            );

            const response = data.message as string;

            dispatch({
                type: ActionTypes.POST_CHATBOT_MESSAGE_SUCCESS,
                payload: response
            });
        } catch (err: any) {
            dispatch({
                type: ActionTypes.POST_CHATBOT_MESSAGE_ERROR,
                payload: err.message
            });
        }
    };
}