import React, { Component, Fragment } from 'react';
import { connect }  from 'react-redux';
import { fetchLessons } from '../../store/actions';

import Schedule from '../Schedule/schedule';
import Spinner from '../UI/Spinner/Spinner';
import ErrorMessage from '../UI/ErrorMessage/ErrorMessage';

export class Lessons extends Component {
    componentDidMount() {
        this.props.fetchLessons();
    }

    renderDates = () => {
        if(this.props.loading) {
            return <Spinner />
        } else if(this.props.errorMessage) {
            return <ErrorMessage />
        } else {
            return this.props.schedule.map((item) => {
                return <Schedule key={item[0]} classes={item[1]} date={item[0]}/>
            })
        }

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
        loading: state.class.loading,
        schedule: state.class.schedule,
        errorMessage: state.class.errorMessage
    }
}

export default connect(mapStateToProps, { fetchLessons })(Lessons);
