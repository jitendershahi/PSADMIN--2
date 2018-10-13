import React from 'react'

import TextInput from '../textinput/textinput'
import SelectInput from '../selectinput/selectinput'

import PropTypes from 'prop-types'

const CreateCourseForm = (props) => {
    let authors = []
    authors = props.allAuthors.map(author => {
        return {
            authorId: author.id,
            text: author.firstName + ' ' + author.lastName
        }
    })

    return (
        <form > 
            <h1>Manage Courses</h1>
            <TextInput
                htmlname="Title"
                name="title"
                label="Title"
                value={props.course.title} 
                clicked={props.clicked}
                errorname={props.error.title}
                 />
 
             <SelectInput
                htmlname="authorId"
                label="Author"
                name="authorId"
                authorId={props.authorId}
                defaultOptions="Select Author"
                clicked={props.clicked}
                options={authors}
                />

                <TextInput
                    htmlname="category"
                    label="Category"
                    name="category"
                    value={props.course.category}
                    clicked={props.clicked}
                    errorname={props.error.category}
                     />

                <TextInput 
                    htmlname="length"
                    label="Length"
                    name="length"
                    value={props.course.length}
                    clicked={props.clicked}
                    errorname={props.error.length}
                    />
                
                <input 
                    type="submit"
                    disabled={props.loading}
                    value={props.loading ? 'Saving...' : 'Save'} 
                    className="btn btn-primary"
                    onClick={props.onSave}
                    /> 
        </form>
    )
}

CreateCourseForm.propTypes  = {
    course:PropTypes.object.isRequired,
    error:PropTypes.object,
    allAuthors:PropTypes.array.isRequired
}

export default CreateCourseForm;