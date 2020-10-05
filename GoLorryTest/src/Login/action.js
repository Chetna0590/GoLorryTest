import axios from '../axios'

export const Login = (userId) => (dispatch) =>{
    return axios.get().then(({data}) => {
        return dispatch(LoginSuccess(data))
    }).catch(err => dispatch(LoginFailure(err)))
}

const LoginSuccess = data => {
    return {
        type: 'LOGIN_SUCCESS',
        data
    }
}

const LoginFailure = () => {
    return {
        type: 'LOGIN_FAILURE'
    }
}

export const logoutUser = () =>({type: 'LOGOUT'})