import React, { Component } from 'react'

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
        console.log(this.state.course)
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
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

export default Courses;