import React from 'react'

import { Link } from "react-router-dom";

const CourseListRow = (props) => {
    return (
        <tr>
            <td><a href={props.course.watchHref} target="blank">Watch</a> </td>
            <td><Link to={'/course/' + props.course.id} >{props.course.title}</Link> </td>
            <td>{props.course.authorId}</td>
            <td>{props.course.category}</td> 
            <td>{props.course.length}</td>
        </tr>
    )
}

export default CourseListRow;