import React from 'react'

import CourseListRow from '../courelistRow/courelistRow'

const CourseLlist = (props) => {
    return (
        <div className="table">
          <table>
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                </tr>
            </thead>
            <tbody>
                 {props.courses.map((el) => <CourseListRow key={el.id} course={el} /> )}
            </tbody>
          </table>
        </div>
    )
}

export default CourseLlist;