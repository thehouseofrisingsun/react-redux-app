import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERROR,DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_ERROR } from './categoriesConstants.jsx'
import "isomorphic-fetch"

export function getCategories(pageIndex = 0) {
    return (dispatch) => {
        let queryTrailer = '?pageIndex=' + pageIndex;
        fetch(window.constants.page + queryTrailer)
            .then((response) => {
		        return response.json();
            }).then((data) => {
                dispatch({ type: GET_CATEGORIES_SUCCESS, payload: data });
            }).catch((ex) => {
                dispatch({ type: GET_CATEGORIES_ERROR, payload: ex });
            });
    }
}


export function deleteCategory(categoryId, returnPageIndex) {
    return (dispatch) => {
        fetch(window.constants.page + '?categoryId=' + categoryId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            if (response.ok) {
                dispatch({ type: DELETE_CATEGORY_SUCCESS });
                getCategories(returnPageIndex)(dispatch);
            } else {
                alert('Error');
                dispatch({ type: DELETE_CATEGORY_ERROR, payload: 'Error while deleting' });
            }
        }).catch((ex) => {
            dispatch({ type: DELETE_CATEGORY_ERROR, payload: ex });
        });
    }
}