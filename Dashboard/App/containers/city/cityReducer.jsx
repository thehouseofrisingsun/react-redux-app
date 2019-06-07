import * as types from "../venue/venueConstants.jsx";
import initialState from "../venue/initialState.jsx";

export default function authorReducer(state = initialState.cities, action) {
    switch (action.type) {
        case types.LOAD_CITIES_SUCCESS:
            return action.cities;
        default:
            return state;
    }
}
