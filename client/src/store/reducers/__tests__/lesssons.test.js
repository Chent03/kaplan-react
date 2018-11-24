import lessonReducer from '../lessonReducer';
import { FETCH_LESSONS } from '../../actions/types';

let initState;

beforeEach(() => {
    initState = {
        schedule: []
    }
})
it('handles action of type FETCH_LESSONS', () => {
    const action = {
        type: FETCH_LESSONS,
        payload: ['Monday']
    }

    const newState = lessonReducer(initState, action);
    expect(newState.schedule).toEqual(['Monday'])
})

it('does not handle action of unknown type', () => {
    const action = {
        type: 'fetch_schedule',
        payload: 'new classes'
    }

    const newState = lessonReducer(initState, action);
    expect(newState).toEqual(initState);
})
