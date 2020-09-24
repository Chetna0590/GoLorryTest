import { createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import baseReducer from './src/reducer'

export default createStore(rootReducer, applyMiddleware(thunk))

function rootReducer(state, action){
    return baseReducer(state,action)
}