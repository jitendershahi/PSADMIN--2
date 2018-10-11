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
            authors:[]
    }

    changeHandler = (event) => {

    }

    render() {
        return ( 
            <div className="col-md-8 offset-md-2">
                <CreateCourseForm 
                clicked={(event) => this.changeHandler(event)} 
                course={this.state.course} 
                allAuthors={this.state.authors}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return
}

const mapDispatchToProps = (dispatch) => {
    return 
}



export default connect(mapStateToProps, mapDispatchToProps)(ManageCourse);