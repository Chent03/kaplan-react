import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import Root from '../../Root';
import Schedule from '../Schedule/schedule';
import Classes from '../Classes/classes';


let wrapper;
const mockSchedule = [
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

beforeEach(() => {
    wrapper = shallow(
        <Schedule date={mockSchedule[0]} classes={mockSchedule[1]}/>
    )
})

afterEach(() => {
    wrapper.unmount();
})

it('shows the correct date stamp', () => {
    expect(wrapper.render().text()).toContain(moment(mockSchedule[0]).format("ddd, MMMM D, YYYY"))
})

it('contains two children Classes', () => {
    expect(wrapper.find(Classes).length).toEqual(2);
})
