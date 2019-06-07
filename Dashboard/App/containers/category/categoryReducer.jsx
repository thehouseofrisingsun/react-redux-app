import { GET_CATEGORIES_SUCCESS, GET_CATEGORIES_ERROR, DELETE_CATEGORY_SUCCESS, DELETE_CATEGORY_ERROR } from './categoriesConstants.jsx'

const initialState = {
    data: { currentPage: 0, totalPages: 0, pageSize: 0, records: [] },
    error: ''
}

export default function categories(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES_SUCCESS:
            return { ...state, data: action.payload, error: '' }

        case GET_CATEGORIES_ERROR:
            return { ...state, error: action.payload }

        case DELETE_CATEGORY_SUCCESS:
            return { ...state }

        case DELETE_CATEGORY_ERROR:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}