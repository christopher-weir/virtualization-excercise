import React from 'react';
import ReactDOM from 'react-dom';
import Virtualization from '../index.js';

it( 'Virtualization renders without crashing', () => {
    const div = document.createElement( 'div' );
    ReactDOM.render( <Virtualization running />, div );
} );
