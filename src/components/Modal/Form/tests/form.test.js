import React from 'react';
import ReactDOM from 'react-dom';
import Form from '../index.js';

it( 'Form renders without crashing', () => {
    const div = document.createElement( 'div' );
    ReactDOM.render(
        <Form
            virtualization={{ port: 3000, name: 'name', protocol: '' }}
            setVirtualizationById={() => null}
            closeModal={() => null}
        />,
        div,
    );
} );
