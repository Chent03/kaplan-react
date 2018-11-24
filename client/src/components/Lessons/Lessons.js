import React, { Component, Fragment } from 'react';
import { connect }  from 'react-redux';
import { fetchLessons } from '../../store/actions';

import Schedule from '../Schedule/schedule';

class Lessons extends Component {
    componentDidMount() {
        this.props.fetchLessons();
    }

    renderDates = () => {
        return this.props.schedule.map((item) => {
            return <Schedule key={item[0]} classes={item[1]} date={item[0]}/>
        })
    }

    render() {
        return(
            <Fragment>
                {this.renderDates()}
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        schedule: state.class.schedule
    }
}

export default connect(mapStateToProps, { fetchLessons })(Lessons);
