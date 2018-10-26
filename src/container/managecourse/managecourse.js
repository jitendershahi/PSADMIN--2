import React, { Component } from 'react'

import { connect } from 'react-redux'

import CreateCourseForm from '../../components/createcourseform/createcourseform'
import * as actionCreator from '../../store/actions/authorActionCreators'

export class ManageCourse extends Component {

    state = {
        course: {...this.props.course},
        error:{}
    } 

    componentDidMount() {
        this.props.authors()
    }

    checkValidationForm = () => {
        let isValid = true

        let errorForm = { ...this.state.error }

        if(this.state.course.title.length < 2){
            isValid = false
            errorForm.title = "Title should atleat have 6 character"
        }

        if(this.state.course.category.length < 2){
            isValid = false
            errorForm.category = "Category should atleat have 6 character"
        }
        this.setState({ error: errorForm})
        return isValid

    }


    changeHandler = (event) => {
        let value = event.target.value
        let field = event.target.name

        let authorForm = {...this.state.course}
        authorForm[field] = value

        this.setState({ course: authorForm})
    }

    submitForm = (event) => {
        event.preventDefault()
        if(!this.checkValidationForm()){
           return 
        }
        this.props.courseForm(this.state.course)   
        this.props.history.push('/courses')
    }

    render() {
        return ( 
            <div className="col-md-8 offset-md-2">
                    <CreateCourseForm 
                    clicked={(event) => this.changeHandler(event)} 
                    course={this.state.course} 
                    authorId={this.state.course.authorId}
                    allAuthors={this.props.getauthors}
                    error={this.state.error}
                    onSave={(event) => this.submitForm(event)}/>
            </div>
        )
    }
}

const getCourseById = (courses, id) => {
    const course = courses.filter(course => course.id === id);
    if (course) return course[0];
    return null;
}

const mapStateToProps = (state, ownProps) => { 
    const courseId = ownProps.match.params.id
    let course = {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        loading: '',
        category: ''
    }

   if(courseId && state.courseData.length > 0){
    course = getCourseById(state.courseData, courseId);
   }
    return {
        course:course,
        getauthors:state.authorsData.authors,
        courses:state.courseData
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authors:() => dispatch(actionCreator.getAuthorsList()),
        courseForm:(course) => dispatch(actionCreator.saveCourse(course))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ManageCourse);

