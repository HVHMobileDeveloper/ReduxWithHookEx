import { combineReducers } from 'redux'
import ReducerProfile from './Profile/index'
import ReducerCounter from './counter'

const RootReducer =  combineReducers({
    ReducerProfile,
    ReducerCounter
})

export default RootReducer