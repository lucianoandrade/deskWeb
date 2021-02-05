import React, { useState, useEffect } from 'react';
import Modal from '../Modal';
import { STATUS } from '../../constants/status.constants';

import { 
    Title, 
    Select, 
    Option, 
    Label, 
    SubTitle, 
    Choices, 
    Button, 
    ButtonCancel, 
} from './styles';

const SelectModal = ({
    nodes,
    close,
    confirmUser,
    getUserByNode,
    serviceOderInfo,
    islandDropped,
    islandDragged,
    move,
    user
}) => {

    const [list, setList] = useState([])
    const [operator, setOperator] = useState()
    
    const [island, setIsland] = useState(
            user && window.location.href.includes('staff-board') ? user[0].nodeId : 
            islandDropped ? islandDropped.id :
            null
        )

    useEffect(() => {
        if (island) {
            getAllUsersByNode(island)
        }
    }, [island]);

    async function getAllUsersByNode(islandId) {
        const userByNode = await getUserByNode(islandId);
        setList(userByNode)
    }

    function closeModal() {
        setList([])
        move(islandDropped.listIndex, islandDragged.listIndex, islandDropped.index, islandDragged.index);
        close()
    }

    function changeResponsable(value) {
        value === null ? setOperator(null) : setOperator(parseInt(value))
    }

    function changeIsland(value) {
        value === null ? setIsland(null) : setIsland(parseInt(value))
    }

    function save() {
        confirmUser(serviceOderInfo.id, operator, island)
        close()
    }

    function getStatus(status) {
        return STATUS[status];
    }
    const status = serviceOderInfo.statusId ? getStatus(serviceOderInfo.statusId) : getStatus(serviceOderInfo.status);
    return (
        <>
            <Modal
                open={true}
                setOpen={closeModal}
                id={'modal-bckg'}
                zIndex={"1000"}
                stylewidth={"464px"}
            >
                <Title status={status}>
                    <div className="cardId">{`OS ${serviceOderInfo.id}`}</div>
                    <div className="statusTitle">{`${status.title}`}</div>
                </Title>
                <SubTitle>
                    <span>
                        {`${serviceOderInfo.labels ? serviceOderInfo.labels.customerName : serviceOderInfo.customer.name} | 
                        ${serviceOderInfo.labels ? serviceOderInfo.labels.type : serviceOderInfo.type.name}`}
                    </span>
                </SubTitle>
                <Choices>
                    <Label>Nova ilha:</Label>
                    <Select onChange={(e) => changeIsland(e.target.value)}>
                        {islandDropped ?
                            <Option value={islandDropped.id}>{islandDropped.title}</Option> :
                        user && window.location.href.includes('staff-board') ?
                            <Option value={user[0].nodeId}>{user[0].node}</Option> :
                            <Option value={null}>Selecione</Option>
                        }
                        {nodes.map((e, index) => (
                                <Option  
                                    style={(e.nodeId === user && user[0].nodeId && window.location.href.includes('staff-board') || e.nodeId === islandDropped && islandDropped.id) ? {display: 'none'} : {display: 'flex'}} 
                                    key={index} 
                                    value={e.nodeId}>
                                    {e.title || e.name} 
                                </Option>
                            ))}
                    </Select>

                    <Label>Novo responsável:</Label>
                    <Select onChange={(e) => changeResponsable(e.target.value)}>
                        <Option value={null}>Selecione</Option>
                        {list.map((e, index) => (
                            <Option key={index} value={e.Id}>{e.Name}</Option>
                        ))}
                    </Select>
                        <Button style={{ marginRight: 20 }} onClick={save}>Confirmar</Button>
                        <ButtonCancel onClick={closeModal}>Cancelar</ButtonCancel>
                </Choices>
            </Modal>
        </>
    );
}

export default SelectModal;
