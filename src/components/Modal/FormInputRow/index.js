import React from 'react';
import PropTypes from 'prop-types';

const FormInputRow = ( { children, label, name } ) => (
    <div className="pa3">
        <label className="db fw4 f6  w-100" htmlFor={name}>
            {label}
        </label>
        {children}
    </div>
);

FormInputRow.defaultProps = {};

FormInputRow.propTypes = {
    name    : PropTypes.string.isRequired,
    label   : PropTypes.string.isRequired,
    children: PropTypes.oneOfType( [PropTypes.element, PropTypes.array] ).isRequired,
};

export default FormInputRow;
