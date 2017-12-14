import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FormInputRow from '../FormInputRow';
import { updateVirtualization } from '../../../api';

class Form extends Component {
    constructor( props ) {
        super( props );

        const { virtualization: { port, name, protocol } } = props;

        this.state = {
            port,
            name,
            protocol,
        };
    }

    handleSubmit = ( e ) => {
        e.preventDefault();

        const { virtualization: { virtualizationID } } = this.props;

        updateVirtualization( virtualizationID, this.state ).then( () => {
            this.props.setVirtualizationById( virtualizationID, this.state );
            this.props.closeModal();
        } );
    };

    handleCancel = ( e ) => {
        e.preventDefault();
        this.props.closeModal();
    };

    handleInputChange = ( { target: { value, name } } ) => {
        this.setState( {
            [name]: name === 'port' ? Number( value ) : value,
        } );
    };

    render() {
        const { handleInputChange, handleSubmit, handleCancel } = this;

        const { name, port, protocol } = this.state;

        return (
            <form onSubmit={handleSubmit}>
                <FormInputRow label="Name" name="name">
                    <input
                        className="pa2 input-reset ba bg-transparent measure dib"
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={handleInputChange}
                    />
                </FormInputRow>

                <FormInputRow label="Port" name="port">
                    <input
                        className="pa2 input-reset ba bg-transparent measure dib"
                        type="number"
                        name="port"
                        id="port"
                        value={port}
                        onChange={handleInputChange}
                    />
                </FormInputRow>

                <FormInputRow label="Protocol" name="protocol">
                    <select id="protocol" name="protocol" value={protocol} onChange={handleInputChange}>
                        <option value="HTTP">HTTP</option>
                        <option value="HTTPS">HTTPS</option>
                    </select>
                </FormInputRow>

                <footer className=" bt b--black-10 pa3 tr w-100 center">
                    <button
                        className="b ph3 pv2 mr3 input-reset ba b--black bg-transparent grow pointer f6"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Ok
                    </button>
                    <button
                        className="b ph3 pv2 mr3 input-reset ba b--black bg-transparent grow pointer f6"
                        onClick={handleCancel}
                    >
                        Cancel
                    </button>
                </footer>
            </form>
        );
    }
}

Form.defaultProps = {};

Form.propTypes = {
    virtualization: PropTypes.shape( {
        port    : PropTypes.number.isRequired,
        name    : PropTypes.string.isRequired,
        protocol: PropTypes.string.isRequired,
    } ).isRequired,
    setVirtualizationById: PropTypes.func.isRequired,
    closeModal           : PropTypes.func.isRequired,
};

export default Form;
