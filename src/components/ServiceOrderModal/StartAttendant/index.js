import React, { useState, useEffect } from 'react';

import Modal from '../../Modal';

import {
    Container, Button
} from './styles';

const TreatmentHistoryModal = ({
    data,
    open,
    setOpen,
    confirm
}) => {
    return (
        <Modal
            open={true}
            setOpen={setOpen}
            id={"treatment"}
            zIndex={"1000"}
        >
            <Container>
                <header>
                    <h1>
                        <strong>Você já tem uma OS em atendimento</strong>
                    </h1>
                </header>
                <div>
                    <Button onClick={confirm}>Iniciar outra</Button>
                    <Button onClick={setOpen}>Cancelar</Button>
                </div>
            </Container>
        </Modal>
    );
}

export default TreatmentHistoryModal;
