import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const FETCH_SHOPS_REQUEST = 'FETCH_SHOPS_REQUEST';
export const fetchShopsRequest = () => ({
    type: FETCH_SHOPS_REQUEST
});

export const FETCH_SHOPS_SUCCESS = 'FETCH_SHOPS_SUCCESS';
export const fetchShopsSuccess = shops => ({
    type: FETCH_SHOPS_SUCCESS,
    shops
});

export const FETCH_SHOPS_ERROR = 'FETCH_SHOPS_ERROR';
export const fetchShopsError = error => ({
    type: FETCH_SHOPS_ERROR,
    error
});

export const fetchShops = () => dispatch => {
    dispatch(fetchShopsRequest());
    return(
        fetch(API_BASE_URL, {
            method: 'GET'
        })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then((data) => dispatch(fetchShopsSuccess(data)))
        .catch(err => {
            dispatch(fetchShopsError(err));
        })
    );
}