import React, { Component } from 'react';
import './_tachyons.css';
import './_app.css';

import { findById, findIndexById } from '../../utils/utils';
import { listVirtualizations, updateVirtualization } from '../../api';
import { Virtualization, Header, Meta } from '../../components/Virtualization';
import { Modal, Form } from '../../components/Modal';

class App extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            virtualizations: [],
            modalActive    : false,
            modalData      : null,
        };
    }

    componentDidMount() {
        this.fetchVirtualizations();
    }

    setVirtualizationList = ( virtualizations ) => {
        this.setState( { virtualizations } );
    };

    setVirtualizationById = ( id, data ) => {
        const { virtualizations } = this.state;
        const index = findIndexById( virtualizations, id );

        virtualizations[index] = {
            ...virtualizations[index],
            ...data,
        };

        this.setState( {
            virtualizations,
        } );
    };

    toggleRunningById = ( id, running ) => {
        const data = {
            running: !running,
        };

        updateVirtualization( id, data ).then( () => {
            this.setVirtualizationById( id, data );
        } );
    };

    fetchVirtualizations = () => {
        listVirtualizations().then( ( { data: { virtualizationList = [] } = {} } ) => {
            this.setVirtualizationList( virtualizationList );
        } );
    };

    editVirtualization = ( id ) => {
        const { virtualizations } = this.state;
        this.setState( {
            modalActive: true,
            modalData  : findById( virtualizations, id ),
        } );
    };

    closeModal = () => {
        this.setState( {
            modalActive: false,
            modalData  : null,
        } );
    };

    render() {
        const {
            editVirtualization, closeModal, setVirtualizationById, toggleRunningById,
        } = this;
        const { virtualizations, modalActive, modalData } = this.state;

        return (
            <div className="w-100 sans-serif bg-white">
                <div className="flex flex-column flex-row-l center mw8">
                    {virtualizations.map( ( {
                        virtualizationID, name, port, protocol, apiType, running,
                    } ) => (
                        <Virtualization key={virtualizationID} running={running}>
                            <Header
                                name={name}
                                virtualizationID={virtualizationID}
                                editVirtualization={editVirtualization}
                            />
                            <Meta
                                port={port}
                                virtualizationID={virtualizationID}
                                protocol={protocol}
                                apiType={apiType}
                                running={running}
                                toggleRunningById={toggleRunningById}
                            />
                        </Virtualization>
                    ) )}
                </div>
                {modalActive ? (
                    <Modal>
                        <Form
                            virtualization={modalData}
                            closeModal={closeModal}
                            setVirtualizationById={setVirtualizationById}
                        />
                    </Modal>
                ) : null}
            </div>
        );
    }
}

export default App;
