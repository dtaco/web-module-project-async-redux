import data from '../data/gifs';

import { FETCH_START, FETCH_SUCCESS, FETCH_ERROR } from '../actions/index'
const initialState = {
    gifs: [],
    loading: false,
    error:""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error:""
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading:false,
                gifs: action.payload,
                error:""
        }
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                gifs: [],
                error: action.payload
            }
        default:
            return(state);
    }
}

export default reducer;