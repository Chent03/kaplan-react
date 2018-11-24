import configureMockStore from 'redux-mock-store';
import reduxThunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from '../index';
import { FETCH_LESSONS } from '../types';

const middlewares = [reduxThunk];
const mockStore = configureMockStore(middlewares);
const mockData = [
    [ 
        "2016-01-03",
        [ 
            {
                "title":"Nulla convallis dolor quis erat.",
                "description":"Sed hendrerit luctus finibus. Sed justo dui, vulputate ac suscipit condimentum, porttitor sed dolor. Ut eu justo at metus dapibus facilisis a quis libero. Integer lectus turpis, pretium a tincidunt.",
                "instructorName":"Erat Libero",
                "instructorPhotoUrl":"https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
                "subjectPhotoUrl":"https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
                "time":"2016-01-03 22:00:00"
            }
        ]
    ]
]

describe('fetchLessons', () => {
    beforeEach(() => {
        moxios.install();
    })

    afterEach(() => {
        moxios.uninstall();
    })

    it('has the correct type and correct payload', (done) => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
              status: 200,
              response: mockData,
            });
            done();
          });

        const expectedAction = [
            { type: FETCH_LESSONS, payload: mockData}
        ];

        const store = mockStore({schedule: []})

        store.dispatch(actions.fetchLessons()).then(() => {
            expect(store.getActions()).toEqual(expectedAction);
        })
    })

})