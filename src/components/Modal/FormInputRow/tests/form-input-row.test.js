import React from 'react';
import ReactDOM from 'react-dom';
import FormInputRow from '../index.js';

it( 'FormInputRow renders without crashing', () => {
    const div = document.createElement( 'div' );
    ReactDOM.render(
        <FormInputRow name="name" label="label">
            <span>Child</span>
        </FormInputRow>,
        div,
    );
} );
