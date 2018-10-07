import React, { Component } from 'react'

import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/actionCreators'


class Courses extends Component {

    state = {
        course: {
            title: ''
        }
    }


    handleForm = (event) => {
        let field = event.target.name
        let value = event.target.value

        let form = {...this.state.course}
        form[field] = value

        this.setState({
            course: form
        })
    }

    submitForm = (event) => {
        event.preventDefault()
        this.props.course(this.state.course)
    }

    render() {
        console.log(this.props.courses)
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map((el, index) => {
                    return <div key={index}>{ el.title}</div>
                })}
                <h4>Add Course</h4>

                <form onSubmit={this.submitForm}>
                    <label htmlFor="title">Title</label>
                    <input value={this.state.course.title}
                     name="title" 
                     onChange={(event) => this.handleForm(event)} />

                     <input type="submit" name="Add" />
                </form>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        courses:state.courseData.courses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        course:(course) => dispatch(actionCreators.createCourse(course))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Courses);