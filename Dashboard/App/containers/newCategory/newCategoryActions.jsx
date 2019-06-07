import { ADD_CATEGORY_SUCCESS, ADD_CATEGORY_ERROR,CHANGE_NAME} from './newCategoryConstants.jsx'
import "isomorphic-fetch"


export function changeName(text) {
    return {
        type: CHANGE_NAME,
        payload: text
    }
}


export function addCategory(category) {
    return (dispatch) => {
        if (category) {
            fetch(constants.post, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ category: category })
            }).then((response) => {
                if (response.ok) {
                    dispatch({ type: ADD_CATEGORY_SUCCESS });
                } else {
                    alert('Error while adding new category');
                    dispatch({ type: ADD_CATEGORY_ERROR, payload: 'Adding error' });
                }
            }).catch((ex) => {
                alert(ex);
                dispatch({ type: ADD_CATEGORY_ERROR, payload: ex });
            });
        }
    }
}
