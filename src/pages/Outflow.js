import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { ContainerForm } from "../styled/ContainerForm";

export function Outflow() {


    const [value, setValue] = useState("")
    const [text, setText] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        let token = localStorage.getItem("token")
        if(!token){
            navigate("/")
        }
    }, [])

    async function handleTransaction(e) {
        e.preventDefault()
        let config = {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }

        try {
            await axios.post("http://localhost:5000/transactions", { text, value, type: "outflow" }, config)
            setText("")
            setValue("")
            navigate("/home")

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ContainerOutFlow onSubmit={handleTransaction}>
            <header>
                <h1>Nova saída</h1>
            </header>
            <ContainerForm>
                <input type="text" placeholder="Valor" onChange={e => {
                    setValue(e.target.value.replace(",", "."))
                }}
                    value={value} required />

                <input type="text" placeholder="Descrição" onChange={e => setText(e.target.value)} value={text} required />
                <button>Salvar saída</button>
            </ContainerForm>
        </ContainerOutFlow>
    )
}

const ContainerOutFlow = styled.div`
    width: 100%;
    height: 100vh;
    background-color: var(--purple-500);
    header {
        height: 72px;
        margin: 0 auto;
        margin-bottom: 20px;
        width: 100%;
        max-width: 326px;
        display: flex;
        align-items: center;
        h1 {
            font-size: 26px;
            font-weight: 700;
            font-family: Raleway;
            line-height: 30.52px;
            color: var(--white);
        }
    }
`