import { combineReducers } from 'redux'
import { LoginReducer }  from './Login/reducer'
import { DashboardReducer } from './Dashboard/Redux/reducer'

export default combineReducers({
    LoginReducer,
    DashboardReducer
})