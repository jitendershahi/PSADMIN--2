import React, { Component } from 'react'

import { connect } from 'react-redux'

import CreateCourseForm from '../../components/createcourseform/createcourseform'
import * as actionCreator from '../../store/actions/authorActionCreators'

export class ManageCourse extends Component {

    state = {
        course: {
                id: '',
                watchHref: '',
                title: '',
                authorId: '',
                length: '',
                loading: '',
                category: ''
            },
            error:{}
    } 

    componentDidMount() {
        this.props.authors()
        this.getCourseById(this.props.courses, this.props.match.params.id)
    }


    getCourseById = (courses, id) => {
        courses = courses.filter(course => course.id === id)
        if(courses.length > 0){
            let form = { ...this.state.course }
            form = courses[0]
            
            this.setState({course : form })
            // this.state.course  = courses[0]
        }
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

        // const type = this.state.course.length
        // if(isNaN(type)){
        //     isValid = false
        //     errorForm.length = "Only numbers are allowed in length"
        // }
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
        // this.getCourseById(this.props.courses, this.props.match.params.id)
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

// const getCourseById = (courses,id) => {
//     courses = courses.filter(course => course.id === id)
//     if(courses.length){
//         this.state.course =  courses[0]
//     } 
//     return null
// }

const mapStateToProps = (state, ownProps) => { 
    // let courseId = ownProps.match.params.id
    // if(courseId){
    //   getCourseById(this.props.courses, courseId)
    // }
    return {
        getauthors:state.authorsData.authors,
        courses:state.courseData.courses
    }
}

const mapDispatchToProps = dispatch => {
    return {
        authors:() => dispatch(actionCreator.getAuthorsList()),
        courseForm:(course) => dispatch(actionCreator.saveCourse(course))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ManageCourse);

