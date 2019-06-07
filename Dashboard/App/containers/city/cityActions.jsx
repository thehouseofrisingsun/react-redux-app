import * as types from "../venue/venueConstants.jsx";

export function loadCitiesSuccess(cities) {
    return { type: types.LOAD_CITIES_SUCCESS, cities };
}

export function loadCities() {
    return dispatch => {
        return  fetch(window.constants.city)
            .then(response => {
                if (response.ok) {return response.json()}
            })
            .then(cities => {
                dispatch(loadCitiesSuccess(cities));
            })
            .catch(error => {
                throw error;
            });
    };
}
