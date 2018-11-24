import React from 'react';
import moment from 'moment';
import './classes.scss';

const classes = ({title, description, instructorName, instructorPhotoUrl, subjectPhotoUrl, time}) => {
    return (
        <li>
            <div className="mini-container" id="course">
                <img src={subjectPhotoUrl} alt="" className="avatar"/>
                <div className="content">
                    <h4 className="title">{title}</h4>
                    <p id="description">{description}</p>
                </div>
            </div>
            <div className="mini-container" id="teacher">
                <img src={instructorPhotoUrl} alt="" className="avatar"/>
                <h4>{instructorName}</h4>
            </div>
            <div className="mini-container">
                <h3 id="time">{moment(time).format("h:mm A")}</h3>
            </div>
            
        </li>
    )
}

export default classes;