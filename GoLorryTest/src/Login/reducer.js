import { Map, fromJS } from 'immutable'

export const LoginReducer = (state = Map(), action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS' :
            return state.set('loginData', fromJS(action.data))
        case 'LOGOUT' :
            return state.set('logout',true)
        default:
            return state
    }
}