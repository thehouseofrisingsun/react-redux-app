import * as types from '../venue/venueConstants.jsx';
import initialState from "./initStateP.jsx";


export default function venuePReducer(state = initialState.venuesP, action){
    switch (action.type) {
        case types.LOAD_VENUESP_SUCCESS:
            return action.venuesP;
        default:
            return state;
    }

}