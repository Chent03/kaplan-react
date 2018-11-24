import React from 'react';
import { shallow } from 'enzyme';

import Classes from '../Classes/classes';


let wrapper;
const mockClass = 
            {
                "title":"Nulla convallis dolor quis erat.",
                "description":"Sed hendrerit luctus finibus. Sed justo dui, vulputate ac suscipit condimentum, porttitor sed dolor. Ut eu justo at metus dapibus facilisis a quis libero. Integer lectus turpis, pretium a tincidunt.",
                "instructorName":"Erat Libero",
                "instructorPhotoUrl":"https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
                "subjectPhotoUrl":"https://placeholdit.imgix.net/~text?txtsize=34&txt=C&w=60&h=60",
                "time":"2016-01-03 21:00:00"
            }


beforeEach(() => {
    wrapper = shallow(
        <Classes {...mockClass}/>
    )
})

it('contains title', () => {
    expect(wrapper.render().text()).toContain(mockClass.title)
})

it('contains description', () => {
    expect(wrapper.render().text()).toContain(mockClass.description)
})

it('contains instructor name', () => {
    expect(wrapper.render().text()).toContain(mockClass.instructorName)
})