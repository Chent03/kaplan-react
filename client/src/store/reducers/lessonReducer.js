import { FETCH_LESSONS } from '../actions/types';

const initialState = {
    schedule: []
}

const fetchLessons = (state, action) => {
    return {
        ...state,
        schedule: action.payload
    };
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_LESSONS:
            return fetchLessons(state, action);
        default:
            return state;
    }
}

export default reducer;
