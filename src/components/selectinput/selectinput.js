import React from 'react'

import PropTypes from 'prop-types';


const SelectInput = (props) => {
    let wrapperClass = 'form-group'

    
    return (
        <div className={wrapperClass}>
          <b><label htmlFor={props.htmlname}>{props.label}</label></b>
          <div className="field">
                <select name={props.name} 
                value={props.value} 
                onChange={props.clicked}
                className="form-control"> 
                <option value="">{props.defaultOptions}</option>
                {props.options.map((el) => {
                    return <option key={props.option.value} value={props.option.value}>{el.text}</option>
                })}
                </select>
            </div>
           {/* {props.error && <div className="alert alert-danger">{props.error}</div>} */}
        </div>
    )
}

SelectInput.propTypes = {
    htmlname:PropTypes.string.isRequired,
    label:PropTypes.string.isRequired,
    value:PropTypes.string,
    name:PropTypes.string,
    clicked:PropTypes.func,
    options:PropTypes.arrayOf(PropTypes.object)
}

export default SelectInput;