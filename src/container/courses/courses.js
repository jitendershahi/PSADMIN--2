import React, { Component } from 'react'

import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/authorActionCreators'

import CourseLlist from '../../components/courselist/courselist'


class Courses extends Component {

    state = {
        course: {
            title: ''
        }
    }

    componentDidMount() {
        this.props.course()
    }

    addCourse = () => {
        this.props.history.push('/course')
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <input type="button" value="Add Course" onClick={this.addCourse} className="bnt btn-primary" />
                {this.props.courses ? <CourseLlist courses={this.props.courses} /> : null}
            </div>

        )
    }
}

const mapStateToProps = (state) => { 
    return {
        courses:state.courseData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        course:() => dispatch(actionCreators.getCourses())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Courses);