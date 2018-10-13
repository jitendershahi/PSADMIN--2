import React, { Component } from 'react'

import { connect } from 'react-redux'
import * as actionCreators from '../../store/actions/actionCreators'

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


    // handleForm = (event) => { 
    //     let field = event.target.name
    //     let value = event.target.value

    //     let form = {...this.state.course}
    //     form[field] = value

    //     this.setState({
    //         course: form
    //     })
    // }

    // submitForm = (event) => {
    //     event.preventDefault()
    //     this.props.course(this.state.course)
    // }

    addCourse = () => {
        this.props.history.push('/course')
    }

    render() {
        console.log(this.props.courses)
        return (
            <div>
                <h1>Courses</h1>
                <input type="button" value="Add Course" onClick={this.addCourse} className="bnt btn-primary" />
                {this.props.courses ? <CourseLlist courses={this.props.courses} /> : null}
                {/* {this.props.courses.map((el, index) => {
                    return <div key={index}>{ el.title}</div>
                })} */}
                {/* <h4>Add Course</h4>

                <form onSubmit={this.submitForm}>
                    <label htmlFor="title">Title</label>
                    <input value={this.state.course.title}
                     name="title" 
                     onChange={(event) => this.handleForm(event)} />

                     <input type="submit" name="Add" />
                </form> */}
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