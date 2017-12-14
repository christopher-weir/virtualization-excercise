import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Virtualization = ( { children, running } ) => (
    <div
        className={classNames( 'br2 ba dark-gray b--black-10 mv4 w-100 w-30-l mw5 center ', {
            'bg-washed-green': running,
            'bg-washed-red'  : !running,
        } )}
    >
        <div className="pa2 ph3-ns pb3-ns">{children}</div>
    </div>
);

Virtualization.defaultProps = {};

Virtualization.propTypes = {
    running: PropTypes.bool.isRequired,
};

export default Virtualization;
