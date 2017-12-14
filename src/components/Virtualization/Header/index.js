import React from 'react';
import PropTypes from 'prop-types';

import { Edit } from '../../Icons';

const Header = ( { name, virtualizationID, editVirtualization } ) => (
    <header className="w-100 mt1 mb4">
        <div className="flex flex-row">
            <h2 className="f5 f4-ns mv0">{name}</h2>
            <button className="kill-button-style ml-auto" onClick={() => editVirtualization( virtualizationID )}>
                <Edit />
            </button>
        </div>
    </header>
);

Header.defaultProps = {
    name              : '',
    virtualizationID  : '',
    editVirtualization: null,
};

Header.propTypes = {
    name              : PropTypes.string,
    virtualizationID  : PropTypes.string,
    editVirtualization: PropTypes.func,
};

export default Header;
