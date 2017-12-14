import React, { Component } from 'react';

import InputRow from './InputRow';
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
                <InputRow label="Name" name="name" value={name} handleInputChange={handleInputChange} />

                <InputRow label="Port" name="port" value={port} type="number" handleInputChange={handleInputChange} />

                <div className="pa3">
                    <label className="db fw4 f6  w-100" htmlFor="protocol">
                        Protocol
                    </label>
                    <select id="protocol" name="protocol" value={protocol} onChange={handleInputChange}>
                        <option value="HTTP">HTTP</option>
                        <option value="HTTPS">HTTPS</option>
                    </select>
                </div>

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

Form.propTypes = {};

export default Form;
