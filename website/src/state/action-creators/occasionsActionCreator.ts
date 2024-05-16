import axios from 'axios';
import { Dispatch } from 'redux';
import { ActionTypes } from '../action-types';
import { OccassionAction } from '../actions/occasionsActions';
import { OccassionModel } from '../../models/OccasionModel';

export const searchOccasions = (term: string) => {
    return async (dispatch: Dispatch<OccassionAction>) => {
        dispatch({
            type: ActionTypes.SEARCH_OCCASIONS_REQUEST
        });

        try {
            // const { data } = await axios.get<any>('https://registry.npmjs.org/-/v1/search',{
            //     params: {
            //         text: term
            //     }
            // });

            // const names = data.objects.map((result: any) => {
            //     return result.package.name;
            // });

            const data = [{
                id: 1,
                date: new Date(),
                name: 'Birthday',
                location: 'Home'
            }, {
                id: 2,
                date: new Date(),
                name: 'Anniversary',
                location: 'Home'
            }, {
                id: 3,
                date: new Date(),
                name: 'Wedding',
                location: 'Home'
            }]

            const ocassionsList = data.map((result: OccassionModel) => {
                console.log(result);
                return result;
            });

            dispatch({
                type: ActionTypes.SEARCH_OCCASIONS_SUCCESS,
                payload: ocassionsList
            });
        } catch (err: any) {
            dispatch({
                type: ActionTypes.SEARCH_OCCASIONS_ERROR,
                payload: err.message
            });
        }
    };
}