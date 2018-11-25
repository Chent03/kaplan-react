import axios from 'axios';
import { FETCH_LESSONS, FETCH_LESSONS_START, FETCH_LESSONS_ERROR } from './types';

export const fetchLessons = () => async dispatch => {
    dispatch(fetchStart())
    
    try{
        let res = await axios.get('/api/lessons')
        dispatch({type: FETCH_LESSONS, payload: res.data})
    }catch(e) {
        dispatch(fetchError())
    }
}

export const fetchStart = () => {
    return { type: FETCH_LESSONS_START }
}

export const fetchError = () => {
    return { type: FETCH_LESSONS_ERROR }
}