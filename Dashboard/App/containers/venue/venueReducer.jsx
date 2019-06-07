import * as types from "../venue/venueConstants.jsx";
import initialState from "../venue/initialState.jsx";

export default function venueReducer(state = initialState.venues, action) {
    switch (action.type) {
        case types.CREATE_VENUE_SUCCESS:
            return [...state, { ...action.venue }];
        case types.UPDATE_VENUE_SUCCESS:
            return state.map(venue =>
                venue.id === action.venue.id ? action.venue : venue
            );
        case types.LOAD_VENUES_SUCCESS:
            return action.venues;
        case types.DELETE_VENUE_OPTIMISTIC:
            return state.filter(venue => venue.id !== action.venue.id);
        default:
            return state;
    }
}
