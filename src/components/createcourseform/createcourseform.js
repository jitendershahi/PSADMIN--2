import React from 'react'

import TextInput from '../textinput/textinput'
import SelectInput from '../selectinput/selectinput'


const CreateCourseForm = (props) => {
    return (
        <form>
            <TextInput
                htmlname="Title"
                label="Title"
                value={props.course.title}
                clicked={props.clicked}
                error={props.error.title} />

             <SelectInput
                htmlname="authorId"
                label="Author"
                value={props.course.authorId}
                defaultOptions="Select Author"
                clicked={props.clicked}
                options={props.allAuthors}
                clicked={props.clicked}
                error={props.error.authorId} />

                <TextInput
                    htmlname="category"
                    label="Category"
                    value={props.course.category}
                    clicked={props.clicked}
                    error={props.error.category} />

                <TextInput
                    htmlname="length"
                    label="Length"
                    value={props.course.length}
                    clicked={props.clicked}
                    error={props.error.length} />

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