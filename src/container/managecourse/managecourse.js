import React, { Component } from 'react'

import { connect } from 'react-redux'

import CreateCourseForm from '../../components/createcourseform/createcourseform'


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
            authors:['Cory House', 'Scott Allen', 'Dan Wahlin'],
            error:{}
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
        console.log(this.state.course)
    }

    render() {
        return ( 
            <div className="col-md-8 offset-md-2">
                <CreateCourseForm 
                clicked={(event) => this.changeHandler(event)} 
                course={this.state.course} 
                allAuthors={this.state.authors}
                error={this.state.error}
                onSave={(event) => this.submitForm(event)}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // courses:state.courseData.courses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}



export default connect(mapStateToProps, mapDispatchToProps) (ManageCourse);