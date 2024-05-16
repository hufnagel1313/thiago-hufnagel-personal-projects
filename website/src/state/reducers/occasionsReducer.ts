import { OccassionModel } from '../../models/OccasionModel';
import { ActionTypes } from '../action-types';
import { OccassionAction } from '../actions/occasionsActions';

interface OccassionState {
    loading: boolean;
    error: string | null;
    data: OccassionModel[];
}

const initialState = {
    loading: false,
    error: null,
    data: []
};

const ocasionsReducer = (
    state: OccassionState = initialState,
    action: OccassionAction
): OccassionState => {
    switch (action.type) {
        case ActionTypes.SEARCH_OCCASIONS_REQUEST:
            return { loading: true, error: null, data: [] };
        case ActionTypes.SEARCH_OCCASIONS_SUCCESS:
            return { loading: false, error: null, data: action.payload };
        case ActionTypes.SEARCH_OCCASIONS_ERROR:
            return { loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
};

export default ocasionsReducer;