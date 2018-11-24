import React from 'react';
import { mount } from 'enzyme';

import Root from '../../Root';
import Lessons from '../Lessons/Lessons';
import Schedule from '../Schedule/schedule';
import Classes from '../Classes/classes';


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

beforeEach(() => {
    const initState = {
        class: {
            schedule: mockSchedule
        }
    };

    wrapper = mount(
        <Root initialState={initState}>
            <Lessons />
        </Root>
    )
})

it('shows one day of classes', () => {
    expect(wrapper.find(Schedule).length).toEqual(1);
})

it('shows two classes', () => {
    expect(wrapper.find(Classes).length).toEqual(2);
})
