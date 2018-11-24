import React from 'react';
import moment from 'moment';
import * as _ from 'lodash';

import './schedule.scss';

import Classes from '../Classes/classes';

const schedule = (props) => {
    const renderClasses = () => {
        let sortedClasses = _.sortBy(props.classes, (item) => item.time);
        return sortedClasses.map((item) => <Classes {...item} key={item.time}/>)
    }
    return(
        <div className="collection">
            <h4>{moment(props.date).format("ddd, MMMM D, YYYY")}</h4>
            <ul >
                {renderClasses()}            
            </ul>
        </div>
    )
}

export default schedule;