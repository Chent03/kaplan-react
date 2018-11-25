import { FETCH_LESSONS, FETCH_LESSONS_START, FETCH_LESSONS_ERROR } from '../actions/types';

const initialState = {
    loading: false,
    errorMessage: false,
    schedule: []
}

const fetchStart = (state) => {
    return {
        ...state,
        loading: true,
        errorMessage: false
    }
}

const fetchLessons = (state, action) => {
    return {
        ...state,
        schedule: action.payload,
        loading: false
    };
}

const fetchError = (state) => {
    return {
        ...state,
        loading: false,
        errorMessage: true
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LESSONS_START:
            return fetchStart(state);
        case FETCH_LESSONS:
            return fetchLessons(state, action);
        case FETCH_LESSONS_ERROR:
            return fetchError(state);
        default:
            return state;
    }
}

export default reducer;
