import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { ContainerForm } from "../styled/ContainerForm"


export function UpdateTransactionOutflow(){
    const [value, setValue] = useState("")
    const [text, setText] = useState("")
    const navigate = useNavigate()
    
    const {id} = useParams()
    
    useEffect(() => {
        const config = {
            headers: {
                authorization: localStorage.getItem("token")
            }
        }
        async function updateTransaction(){
           const infos = await axios.get(`http://localhost:5000/transactions/${id}`, config)
           setValue(infos.data.value)
           setText(infos.data.text)
        }
        updateTransaction() 
    }, [])

    async function submitUpdateTransaction(e){
        e.preventDefault()
        const config = {
            headers: {
                authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }
        try {
            await axios.put(`http://localhost:5000/transactions/${id}`, {text, value}, config)
            navigate("/home")
        } catch (error) {
            console.log(error)
            localStorage.removeItem("token")
            localStorage.removeItem("id")
            localStorage.removeItem("name")
            navigate("/")   
        }
    }

    return(
        <ContainerUpateTransaction> 
            <h1>Editar saída</h1>
            <ContainerForm onSubmit={submitUpdateTransaction}>
            <input type="text" placeholder="Valor" onChange={e => {
                    setValue(e.target.value.replace(",", "."))
                    }}
                     value={value} required />

                <input type="text" placeholder="Descrição" onChange={e => setText(e.target.value)} value={text} required />

                <button>Atualizar saída</button>
            </ContainerForm>
        </ContainerUpateTransaction>
    )
}

const ContainerUpateTransaction = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--purple-500);
    
    h1 {
        font-size: 26px;
        font-weight: 700;
        color: var(--white);
        font-family: Raleway;
        line-height: 30.5px;
        width: 100%;
        height: 72px;
        display: flex;
        align-items: center;
        max-width: 326px;
        margin: 0 auto;
        
    }
`