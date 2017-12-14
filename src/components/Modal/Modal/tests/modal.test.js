import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../index.js';

it( 'Modal renders without crashing', () => {
    const div = document.createElement( 'div' );
    ReactDOM.render( <Modal />, div );
} );
