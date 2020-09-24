import { Map, fromJS } from 'immutable'

export const DashboardReducer = (state = Map(), action) => {
    switch (action.type) {
        case 'FETCH_ORDERS_SUCCESS':
            return state.setIn(['orders', 'loading'], false)
                .setIn(['orders', 'orders_list'], action.data)
        case 'FETCH_ORDERS_FAILURE':
            return state.setIn(['orders', 'loading'], false)
        case 'FETCH_REPORTS_SUCCESS':
            return state.setIn(['reports', 'loading'], false)
                .setIn(['reports', 'reports_list'], action.data)
        case 'FETCH_REPORTS_FAILURE':
            return state.setIn(['reports', 'loading'], false)
        case 'FETCH_TRUCKS_SUCCESS':
            return state.setIn(['trucks', 'loading'], false)
                .setIn(['trucks', 'trucks_list'], action.data)
        case 'FETCH_TRUCKS_FAILURE':
            return state.setIn(['trucks', 'loading'], false)
        case 'FETCH_DRIVERS_SUCCESS':
            return state.setIn(['drivers', 'loading'], false)
                .setIn(['drivers', 'drivers_list'], action.data)
        case 'FETCH_DRIVERS_FAILURE':
            return state.setIn(['drivers', 'loading'], false)
        default:
            return state
    }
}