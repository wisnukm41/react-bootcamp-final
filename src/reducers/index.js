import { combineReducers } from 'redux';
import AnimeReducer from './AnimeReducer'

const allReducers = combineReducers({
    anime: AnimeReducer
})

export default allReducers