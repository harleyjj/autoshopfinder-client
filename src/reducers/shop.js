import {
    FETCH_SHOPS_REQUEST,
    FETCH_SHOPS_SUCCESS,
    FETCH_SHOPS_ERROR
} from '../actions/shop';
import services from '../services';


const initialState = {
    shops: [],
    loading: false,
    error: null,
    services
}

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_SHOPS_REQUEST) {
        return {
            ...state,
            loading: true
        }
    } else if (action.type === FETCH_SHOPS_SUCCESS) {
        return {
            ...state,
            loading: false,
            error: null,
            shops: action.shops
        }
    } else if (action.type === FETCH_SHOPS_ERROR) {
        return {
            ...state,
            loading: false,
            error: action.error
        }
    }
    return state;
}