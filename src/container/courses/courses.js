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

    render() {
        console.log(this.props.courses)
        return (
            <div>
                <h1>Courses</h1>
                <CourseLlist courses={this.props.courses} />
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
        courses:state.courseData.courses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        course:() => dispatch(actionCreators.getCourses())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Courses);