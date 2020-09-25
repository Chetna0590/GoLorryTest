import axios from '../../axios'

export const getOrderDetails = () => dispatch =>{
    return axios.get('/golorry/orders')
        .then(({data}) => dispatch({type: 'FETCH_ORDERS_SUCCESS', data}))
        .catch(err => dispatch({type: 'FETCH_ORDERS_FAIL', err }))
}

export const getReports = () => dispatch =>{
    return axios.get('/golorry/reports')
        .then(({data}) => dispatch({type: 'FETCH_REPORTS_SUCCESS', data}))
        .catch(err => dispatch({type: 'FETCH_REPORTS_FAIL', err }))
}

export const getTrucks = () => dispatch =>{
    return axios.get('/golorry/trucks')
        .then(({data}) => dispatch({type: 'FETCH_TRUCKS_SUCCESS', data}))
        .catch(err => dispatch({type: 'FETCH_TRUCKS_FAIL', err }))
}

export const getDrivers = () => dispatch =>{
    return axios.get('/golorry/drivers')
        .then(({data}) => dispatch({type: 'FETCH_DRIVERS_SUCCESS', data}))
        .catch(err => dispatch({type: 'FETCH_DRIVERS_FAIL', err }))
}
