import { ADD_CATEGORY_SUCCESS, ADD_CATEGORY_ERROR,CHANGE_NAME} from './newCategoryConstants.jsx'

const initialState = {
    error: ''
}

export default function newPost(state = initialState, action) {
    switch (action.type) {
        case ADD_CATEGORY_SUCCESS:
            return { ...state, error: '' }

        case ADD_CATEGORY_ERROR:
            return { ...state, error: action.payload }

        case CHANGE_NAME:
            return { ...state, name: action.payload }
        default:
            return state;
    }
}