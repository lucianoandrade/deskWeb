import React, { useState, useEffect } from 'react';
import Modal from '../../Modal';

import {
    Container,
    Body,
    LeftSide,
    RightSide,
    Select,
    Option,
    Button,
    ButtonCancel,
    Footer,
    ArrowLeft
} from './styles';

const PrecificationModal = ({
    data,
    open,
    setOpen,
    orderlevelOs,
    orderTypeOs,
    orderHourPrice,
    customerId,
    serviceOrderId,
    confirmPrecification
}) => {

    const [listHourPrice, setListHourPrice] = useState([])
    const [listTypeOs, setListTypeOs] = useState([])
    const [listLevelOs, setListLevelOs] = useState([])

    const [typeHour, setTypeHour] = useState(null)

    const [qtdHour, setQtHour] = useState(null)
    const [sumQtdHour, setSumQtdHour] = useState(0)
    const [qtdDays, setQtdDays] = useState()
    const [approved, setApproved] = useState(false)
    const [team, setTeam] = useState(false)

    const [typeOs, setTypeOs] = useState(0)
    const [levelOs, setLevelOs] = useState(0)
    const [discount, setDiscount] = useState(0)
    const [resultDiscount, setResultDiscount] = useState(0)
    const [subTotal, setSubTotal] = useState(0)


    const [total, setTotal] = useState([])

    useEffect(() => {
        getAllLevelOs()
        getHourTypes()
        getTypeOs()
    }, []);


    async function getAllLevelOs() {
        const levelOs = await orderlevelOs();
        setListLevelOs(levelOs.data)
    }

    async function getTypeOs() {
        const typeOs = await orderTypeOs();
        setListTypeOs(typeOs.data)
    }

    async function getHourTypes() {
        const hourPrice = await orderHourPrice(customerId);
        setListHourPrice(hourPrice.data.hourValue)
    }

    function addHour() {
        if (listHourPrice.length > 0) {

            const item = listHourPrice.filter(e => e.hourType.name === typeHour.name)

            const priceQtd = subTotal + qtdHour * item[0].price
            setSubTotal(priceQtd)

            const soma = sumQtdHour + parseInt(qtdHour);
            setSumQtdHour(soma)

            if (total.find(e => e.id === typeHour.id)) {
                const filter = total.filter(item => item.name === typeHour.name);
                setTotal([...total.filter(item => item.name !== typeHour.name), { id: typeHour.id, name: typeHour.name, qtd: parseInt(filter[0].qtd) + parseInt(qtdHour) }])
            } else {
                setTotal([...total, { id: typeHour.id, name: typeHour.name, qtd: qtdHour }])
            }
            setQtHour(0)
        }
    }

    function clearLastElement() {
        setTotal([])
        setSubTotal(0)
        setSumQtdHour(0)
    }

    function handlerCheckBox(type, status) {
        type === 'team' ? setTeam(!status) : setApproved(!status)
    }

    function calculate() {
        if (discount >= 0 && discount <= 100) {
            const result = (1 - (discount / 100)) * subTotal;
            setResultDiscount(result.toFixed(2))
        }
    }

    async function confirm(e) {
        e.preventDefault();
        const budget = total.map(e => {
            return {
                "hourTypeId": e.id,
                "number": e.qtd
            }
        })

        const data = {
            "serviceOrderId": serviceOrderId,
            "discount": discount,
            "days": qtdDays,
            "approved": approved,
            "sendToTest": team,
            "totalValue": subTotal,
            "totalHours": sumQtdHour,
            "typeId": typeOs,
            "classificationId": levelOs,
            "budgetHour": budget
        }
        await confirmPrecification(data)
        setOpen()
    }
    
    return (
        <Modal
            open={true}
            setOpen={setOpen}
            id={"treatment"}
            zIndex={"1000"}
            overflow={true}
        >
            <Container>
                <form onSubmit={confirm}>
                    <header>
                        <h1 onClick={setOpen}>
                            <ArrowLeft/><strong>Precificar e previsionar</strong>
                        </h1>
                    </header>
                    <Body>
                        <LeftSide>
                            <h2>Estimativa de Horas</h2>
                            <section>
                                <div className="tipoHora">
                                    <p>Tipo de hora</p>
                                    <Select required
                                    style={typeHour && typeHour.id ? {color: "#222222"} : {color: "#C0C0C0"}} 
                                    onChange={(e) => {e.target.value === 'Selecione' ? setTypeHour(null) : setTypeHour({ id: e.target.value, name: e.target.options[e.target.selectedIndex].text })}}>
                                        <Option value={null}>Selecione</Option>
                                        {listHourPrice.map((e, index) => (
                                            <Option key={index} value={e.hourType.id}>{e.hourType.name}</Option>
                                        ))}
                                    </Select>
                                </div>

                                <div className="quantidade">
                                    <p>Quantidade</p>
                                    <input required={total === [] ? true : false} type="number" value={qtdHour} placeholder="0" onChange={(e) => setQtHour(e.target.value)} />
                                </div>
                                <Button disabled={(typeHour === null || qtdHour < 1) ? true : false} onClick={addHour}>Adicionar</Button>
                            </section>

                            <h2>Estimativa de Dias</h2>

                            <div className="estimativa">
                                <p>Quantidade</p>
                                <input required type="number" value={qtdDays} placeholder="0" min="1" onChange={(e) => setQtdDays(e.target.value)} />
                            </div>

                            <h2>Outros</h2>

                            <section>
                                <div className="tipoHora">
                                    <p>Tipo de OS</p>
                                    <Select 
                                    required
                                    style={typeOs === 0 ? {color: "#C0C0C0"} : {color: "#222222"}} 
                                    onChange={(e) => setTypeOs(e.target.value)}>
                                        <Option value="">Selecione</Option>
                                        {listTypeOs.map((e, index) => (
                                            <Option required key={index} value={e.id}>{e.name}</Option>
                                        ))}
                                    </Select>
                                    <div>
                                        <input type="checkbox" id="aprovado" onClick={() => handlerCheckBox('approved', approved)} checked={approved} />
                                        <label className="labelCheckbox" for="aprovado">Aprovado</label>
                                    </div>
                                    <div>
                                        <input type="checkbox" id="team" onClick={() => handlerCheckBox('team', team)} checked={team} />
                                        <label className="labelCheckbox" for="team">Passar pela equipe de teste</label>
                                    </div>
                                </div>

                                <div className="tipoHora">
                                    <p>Nível de OS</p>
                                    <Select
                                    required 
                                    style={levelOs === 0 ? {color: "#C0C0C0"} : {color: "#222222"}}
                                    onChange={(e) => setLevelOs(e.target.value)}>
                                        <Option value="">Selecione</Option>
                                        {listLevelOs.map((e, index) => (
                                            <Option key={index} required value={e.id}>{e.name}</Option>
                                        ))}
                                    </Select>
                                </div>
                            </section>

                            <h2>Valores</h2>

                            <section>
                                <div className="valores">
                                    <p>Desconto (%)</p>
                                    <input type="number" value={discount} placeholder="0" min="0" max="100" onChange={(e) => setDiscount(e.target.value)} />                                
                                </div>
                                <Button type="button" onClick={calculate} style={{marginRight: '20px'}}>Calcular</Button>
                                <div className="tipoHora"style={{alignSelf: 'flex-end'}} >
                                    <p>Total</p>
                                    <input type="text" className="inputTotal" style={resultDiscount === 0 ? {color: '#C0C0C0'} : {color: '#222222'}} placeholder="0" value={`R$ ${resultDiscount}`}/>
                                </div>
                            </section>
                        </LeftSide>
                        <RightSide>
                            <h2>Controle de Horas</h2>

                            {total.map((e, index) => {
                                return (
                                    <div key={index}>Tipo: {e.name} - Quantidade: {e.qtd}</div>
                                )
                            })}
                             
                            {total.length > 0 && <Button width={'100%'} onClick={clearLastElement}>Esvaziar</Button>}
                        </RightSide>
                    </Body>
                    <Footer>
                        <Button 
                        type="submit" 
                        style={{ marginRight: 20 }} 
                        >
                            Confirmar
                        </Button>
                        <ButtonCancel type="button" onClick={setOpen}>Cancelar</ButtonCancel>
                    </Footer>
                </form>
            </Container>
        </Modal>
    );
}

export default PrecificationModal;
