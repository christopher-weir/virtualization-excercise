import React from 'react';
import ReactDOM from 'react-dom';
import Meta from '../index.js';

it( 'Meta renders without crashing', () => {
    const div = document.createElement( 'div' );
    ReactDOM.render( <Meta running port={3000} protocol="https" apiType="" />, div );
} );
