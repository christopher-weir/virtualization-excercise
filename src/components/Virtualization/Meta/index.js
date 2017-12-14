import React from 'react';
import PropTypes from 'prop-types';
import { Play, Pause } from '../../Icons';

const Meta = ( {
    port, protocol, apiType, running, toggleRunningById, virtualizationID,
} ) => (
    <div className="f6 lh-copy measure mt2">
        <div className="mb2">
            <button className="kill-button-style" onClick={() => toggleRunningById( virtualizationID, running )}>
                {running ? <Pause /> : <Play />}
            </button>
        </div>
        <div className="mb2">
            <span className="pv1 ph3 ba bw1 black br3 dib bg-white">{apiType}</span>
        </div>
        <div className="flex flex-column">
            <div className="cf">
                <div className="fl w-40">port</div>
                <div className="fl w-60 fw6">{port}</div>
            </div>
            <div className="cf">
                <div className="fl w-40">protocol</div>
                <div className="fl w-60 fw6">{protocol}</div>
            </div>
        </div>
    </div>
);

Meta.defaultProps = {};

Meta.propTypes = {
    port    : PropTypes.number.isRequired,
    protocol: PropTypes.string.isRequired,
    apiType : PropTypes.string.isRequired,
    running : PropTypes.bool.isRequired,
};

export default Meta;
