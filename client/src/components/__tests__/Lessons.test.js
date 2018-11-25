import React from 'react';
import { mount, shallow } from 'enzyme';

import Root from '../../Root';
import {Lessons} from '../Lessons/Lessons';
import Schedule from '../Schedule/schedule';
import Classes from '../Classes/classes';
import Spinner from '../UI/Spinner/Spinner';
import ErrorMessage from '../UI/ErrorMessage/ErrorMessage';

let wrapper;
const mockSchedule = [
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
            },
            {
                "title":"Nulla convallis dolor quis erat.",
                "description":"Sed hendrerit luctus finibus. Sed justo dui, vulputate ac suscipit condimentum, porttitor sed dolor. Ut eu justo at metus dapibus facilisis a quis libero. Integer lectus turpis, pretium a tincidunt.",
                "instructorName":"Erat Libero",
                "instructorPhotoUrl":"https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
                "subjectPhotoUrl":"https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
                "time":"2016-01-03 21:00:00"
            }
        ]
    ]
]

describe('Lessons fetching', () => {
    beforeEach(() => {
        const initState = {
            class: {
                loading: true,
                errorMessage: null,
                schedule: [],
                fetchLessons: () => {}
            }
        };
    
        wrapper = shallow(
            <Lessons {...initState.class}/>
        )
    })
    
    it('shows a spinner when fetching data', () => {
        expect(wrapper.find(Spinner).length).toEqual(1);
    })
    
})

describe('Lessons failed', () => {
    beforeEach(() => {
        const initState = {
            class: {
                loading: false,
                errorMessage: true,
                schedule: [],
                fetchLessons: () => {}
            }
        };
    
        wrapper = shallow(
            <Lessons {...initState.class}/>
            
        )
    })
    
    it('shows a error message when an error occurs', () => {
        expect(wrapper.find(ErrorMessage).length).toEqual(1);
    })
    
})

describe('Lessons loaded', () => {
    beforeEach(() => {
        const initState = {
            class: {
                loading: false,
                error: false,
                schedule: mockSchedule,
                fetchLessons: () => {}
            }
        };
    
        wrapper = mount(
            <Lessons {...initState.class}/> 
        )
    })

    afterEach(() => {
        wrapper.unmount();
    })

    it('shows one day of classes', () => {
        expect(wrapper.find(Schedule).length).toEqual(1);
    })
    
    it('shows two classes', () => {
        expect(wrapper.find(Classes).length).toEqual(2);
    })
    
})
