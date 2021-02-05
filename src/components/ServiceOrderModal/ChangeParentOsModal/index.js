import React, { useState } from 'react';
import Modal from '../../Modal';
import Select from 'react-select';

import {
    Container,
    Text,
    Buttons,
    Button, 
    ButtonCancel
} from './styles';

const ChangeParentOs = ({
    open,
    setOpen,
    serviceOrders,
    patchSetParent,
    osId
}) => {

    const [valueOS, setValueOS] = useState('');

    const selectStyles = {
        control: styles => ({ ...styles, height: '48px'}),
        menu: styles => ({ ...styles, zIndex: '9999'}),
        placeholder: styles => ({ ...styles, fontFamily: 'Oxygen'}),
        option: styles => ({ ...styles, fontFamily: 'Oxygen'})
    }

    const optionsValueOS = serviceOrders.filter(e => e.id !== osId).map((e) => (
        {value: `${e.id}`, label: `${e.id}`}
    ));
    
    return (
        <>
            <Modal
                open={true}
                setOpen={setOpen}
                id={'modal-bckg'}
                zIndex={"1000"}
                stylewidth={"524px"}
            >
                <Container>
                    <header onClick={() => setOpen()}>
                        <h1>
                            <strong>Alterar OS pai</strong>
                        </h1>
                    </header>
                    <Text>
                        Selecione uma Ordem de Serviço pai para essa Ordem de Serviço. 
                        Os itens só podem pertencer a uma Ordem de Serviço pai de cada vez.
                    </Text>   
                    <Select
                        menuPortalTarget={document.querySelector('#modal-bckg')} 
                        isClearable={true}
                        onChange={(e) => {e ? setValueOS(e.value) : setValueOS(null)}} 
                        options={optionsValueOS} 
                        styles={selectStyles}
                        placeholder="Selecione ou busque..."
                    />
                    <Buttons>
                        <ButtonCancel onClick={() => setOpen()}>Cancelar</ButtonCancel>
                        <Button onClick={() => {if(valueOS !== '') patchSetParent(osId, valueOS);setOpen()}}>
                            Adicionar
                        </Button>
                    </Buttons>                  
                </Container>
            </Modal>
        </>
    );
}

export default ChangeParentOs;