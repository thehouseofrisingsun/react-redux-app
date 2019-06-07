import * as types from "../venue/venueConstants.jsx";

export function loadVenuesSuccess(venuesP) {
    return { type: types.LOAD_VENUESP_SUCCESS, venuesP };
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

export function loadVenues(pageIndex = 0) {
    return dispatch => {
        fetch(window.constants.venuePage + "?pageIndex=" + pageIndex)
            .then(response => {
                if (response.ok)
                    return response.json();
               
            }).then(data => {
                dispatch(loadVenuesSuccess(data))})
            .catch(error => {
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
            method: "DELETE",
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
