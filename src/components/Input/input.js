import React from 'react'


const Input = (props) => {
    return (
        <div>
             <label style={{padding:'20px'}} htmlFor={props.labelFor}>{props.label}</label>
                <input type={props.type}
                name={props.name}
                className="form-control" 
                placeholder={props.placeholder}
                value={props.value }
                onChange={props.click}  />
                <div className="text-danger">{props.error}</div>
        </div>

    )
}

export default Input;