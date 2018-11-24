import axios from 'axios';
import { FETCH_LESSONS } from './types';

export const fetchLessons = () => async dispatch => {
    try{
        let res = await axios.get('/api/lessons')
        dispatch({type: FETCH_LESSONS, payload: res.data})
    }catch(e) {

    }
}