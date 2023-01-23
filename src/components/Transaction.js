import styled from "styled-components"
import dayjs from "dayjs"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export function Transaction({date, text, value, type, id, refresh, setRefresh}){
    const navigate = useNavigate()

    async function deleteTransaction(){
        const deleteTransactionConfirm = window.confirm("Deseja excluir a transação?")
        if(!deleteTransactionConfirm){
            return
        }

        let config = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        console.log(refresh)
        try {
            await axios.delete(`http://localhost:5000/transactions/${id}`, config)
            setRefresh(!refresh)
        } catch (error) {
            console.log(error)
            localStorage.removeItem("token")
            localStorage.removeItem("name")
            localStorage.removeItem("id")
            navigate("/")
        }
        
    }

    function updateTransaction(){
        if(type==="inflow"){
            navigate(`/editar-saida/${id}`)
        }
        if(type === "outflow"){
            navigate(`/editar-entra/${id}`)
        }
        
    }

    return(
        <ContainerTransaction>
            <Container onClick={updateTransaction}>
                <p>{dayjs(date).format("DD/MM")}</p>
                <p>{text}</p>
            </Container>
            <ContainerValue type={type}>
                <p>{value.toFixed(2)}</p>
                <p onClick={deleteTransaction}>x</p>
            </ContainerValue>
        </ContainerTransaction>
    )
}

const ContainerTransaction = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Container = styled.div`
    display: flex;
    gap: 12px;
    p {
        font-size: 16px;
        font-family: Raleway;
        color: var(--black);
        font-weight: 400;
        line-height: 18.78px;
    }
    p:first-child {
        color: var(--gray-100);
        font-size: 16px;
        font-family: Raleway;
        line-height: 18.78px;
        font-weight: 400;
    }
    
`

const ContainerValue = styled.div`
    font-size: 16px;
    font-family: Raleway;
    font-weight: 400;
    line-height: 18.78px;
    display: flex;
    gap: 11px;
    p:first-child {
        color: ${props => props.type === "inflow" ? "#03AC00" : "#C70000"};
    }
    p:last-child {
        color: var(--gray-100);
        font-size: 16px;
        font-weight: 400;
        line-height: 18.78px;
        cursor: pointer;
    }
    
`