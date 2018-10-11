import React from 'react'

import TextInput from '../textinput/textinput'
import SelectInput from '../selectinput/selectinput'


const CreateCourseForm = (props) => {
    console.log(props)
    return (
        <form >
            <h1>Manage Courses</h1>
            <TextInput
                htmlname="Title"
                label="Title"
                value={props.course.title}
                clicked={props.clicked}
                 />

             <SelectInput
                htmlname="authorId"
                label="Author"
                value={props.course.authorId}
                defaultOptions="Select Author"
                clicked={props.clicked}
                options={props.allAuthors}
                clicked={props.clicked}
                 />

                <TextInput
                    htmlname="category"
                    label="Category"
                    value={props.course.category}
                    clicked={props.clicked}
                    e />

                <TextInput
                    htmlname="length"
                    label="Length"
                    value={props.course.length}
                    clicked={props.clicked}
                    />
                
                <input 
                    type="submit"
                    disabled={props.loading}
                    value={props.loading ? 'Saving...' : 'Save'} 
                    className="btn btn-primary"
                    onClick={props.onSave}/> 
        </form>
    )
}

export default CreateCourseForm;