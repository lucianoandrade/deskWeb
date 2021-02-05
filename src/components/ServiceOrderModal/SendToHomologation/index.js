import React, { useState, useEffect } from 'react';
import Modal from '../../Modal';

import {
    Container, 
    ArrowLeft, 
    Label, 
    Textarea, 
    Select, 
    Option,
    Buttons,
    Button, 
    ButtonCancel
} from './styles';

const SendToHomologation = ({
    open,
    setOpen,
    getVersionByProject,
    sendHomologation,
    versionId,
    serviceOrderId
}) => {

    const [valueTextArea, setValueTextArea] = useState('');
    const [version, setVersion] = useState();
    const [list, setList] = useState([])
    
    useEffect(() => {
        if (versionId) {
            getProjectVersion(versionId)
        }
    }, [versionId]);

    async function getProjectVersion (versionId) {
        const projectVersion = await getVersionByProject(versionId);
        setList(projectVersion)
    }

    function changeVersion(value) {
        value === null ? setVersion(null) : setVersion(value)
    }

    function save() {
        sendHomologation(serviceOrderId, version, valueTextArea)
        setOpen()
    }

    return (
        <>
            <Modal
                open={true}
                setOpen={setOpen}
                id={'modal-bckg'}
                zIndex={"1000"}
                stylewidth={"616px"}
            >
                <Container>
                    <header onClick={() => setOpen()}>
                        <h1>
                        <ArrowLeft/><strong>Enviar para Homologação</strong>
                        </h1>
                    </header>
                    <Label>Comentário</Label>
                    <Textarea 
                        required 
                        value={valueTextArea} 
                        onChange={e => setValueTextArea(e.target.value)} 
                        placeholder="Adicionar comentário..."/>
                    <Label>Versão de entrega</Label>
                    <Select onChange={e => changeVersion(e.target.value)}>
                        <Option value={null}>Selecione</Option>
                        {list.map((e, index) => (
                            <Option key={index} value={e.id}>{e.number}</Option>
                        ))}
                    </Select>
                    <Buttons>
                        <Button style={{ marginRight: 20 }} onClick={save}>Enviar para homologação</Button>
                        <ButtonCancel onClick={() => setOpen()}>Cancelar</ButtonCancel>
                    </Buttons>                  
                </Container>
            </Modal>
        </>
    );
}

export default SendToHomologation;
