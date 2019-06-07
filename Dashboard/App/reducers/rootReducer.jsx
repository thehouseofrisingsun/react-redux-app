import { combineReducers } from 'redux'
import categories from '../containers/category/categoryReducer.jsx'
import newCategoryReducer from '../containers/newCategory/newCategoryReducers.jsx'
import venues from '../containers/venue/venueReducer.jsx'
import cities from '../containers/city/cityReducer.jsx'
import venuesP from '../containers/venuePagination/venuePReducer.jsx'

export default combineReducers({
    categories,
    cities,
    venues,
    venuesP,
    newCategoryReducer
})