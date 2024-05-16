import { OccassionModel } from '../../models/OccasionModel';
import { ActionTypes } from '../action-types'

interface SearchOccasionsRequestAction {
    type: ActionTypes.SEARCH_OCCASIONS_REQUEST;
}

interface SearchOccasionsSuccessAction {
    type: ActionTypes.SEARCH_OCCASIONS_SUCCESS;
    payload: OccassionModel[];
}

interface SearchOccasionsErrorAction {
    type: ActionTypes.SEARCH_OCCASIONS_ERROR;
    payload: string;
}

export type OccassionAction =
    SearchOccasionsRequestAction |
    SearchOccasionsSuccessAction |
    SearchOccasionsErrorAction;

