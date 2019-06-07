import * as types from "../venue/venueConstants.jsx";

export function loadVenuesSuccess(venues) {
    return { type: types.LOAD_VENUES_SUCCESS, venues };
}

export function createVenueSuccess(venue) {
    return { type: types.CREATE_VENUE_SUCCESS, venue };
}

export function updateVenueSuccess(venue) {
    return { type: types.UPDATE_VENUE_SUCCESS, venue };
}

export function deleteVenueOptimistic(venue) {
    return { type: types.DELETE_VENUE_OPTIMISTIC, venue };
}

export function loadVenues() {
    return dispatch => {
        fetch(window.constants.venue).then(respose => {
            if (respose.ok) return respose.json();
        }).then(venues => {
            dispatch(loadVenuesSuccess(venues));
        }).catch(error => {
                throw error;
            });
    };
}

export function saveVenue(venue) {
    //eslint-disable-next-line no-unused-vars
    return function (dispatch) {
        return fetch(window.constants.venue, {
            method: venue.id ? "PUT" : "POST", 
            headers: { "content-type": "application/json" },
            body: JSON.stringify(venue)
        }).then(response => {
            if (response.ok)
                return response.json();
        })
        .then(data => {
            venue.id
                ? dispatch(updateVenueSuccess(data))
                : dispatch(createVenueSuccess(data));
        })
        .catch(error => {
            throw error;
        });
    };
}

export function deleteVenue(venue) {
    return function (dispatch) {
        return fetch(window.constants.venue, {
            method:"DELETE",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(venue)
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
            })
            .then(data => {
                dispatch(deleteVenueOptimistic(data));
            });
    };
}
