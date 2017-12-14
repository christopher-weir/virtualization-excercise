import React from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';

const Modal = ( { children } ) => (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-999  bg-black-50">
        <div className="br2 ba dark-gray b--black-10 ma4 w-100 mw6 center  bg-white">
            <header className="bg-near-white pv2 ph3 tc">
                <h2 className="mv0 f5">Edit</h2>
            </header>
            {children}
        </div>
    </div>
);

Modal.defaultProps = {};

Modal.propTypes = {};

export default Modal;
