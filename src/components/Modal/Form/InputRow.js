import React from 'react';

const InputRow = ( {
    label, name, value, handleInputChange, type,
} ) => (
    <div className="pa3">
        <label className="db fw4 f6  w-100" htmlFor={name}>
            {label}
        </label>
        <input
            className="pa2 input-reset ba bg-transparent measure dib"
            type={type || 'text'}
            name={name}
            id={name}
            value={value}
            onChange={handleInputChange}
        />
    </div>
);

InputRow.defaultProps = {};

InputRow.propTypes = {};

export default InputRow;
