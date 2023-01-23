import { useEffect, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"

import { ContainerForm } from "../styled/ContainerForm"

export function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        if(localStorage.getItem("token")){
            navigate("/home")
        }
    }, [])

    async function handleLogin(e){
        e.preventDefault()

        try {

            const result = await axios.post("http://localhost:5000/sign-in", {email, password})
            localStorage.setItem("token", result.data.token)
            localStorage.setItem("name", result.data.name)
            localStorage.setItem("userId", result.data.id)
            setEmail("")
            setPassword("")
            navigate("/home")
        } catch (error) {
            console.log(error)
            window.alert("Login ou senha incorretos")
            setEmail("")
            setPassword("")
        }
    }

    return (
        <ContainerLogin>
            <h1>MyWallet</h1>
            <ContainerForm onSubmit={handleLogin}>
                <input type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} value={email} required/>
                <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} value={password} required/>
                <button>Entrar</button>
            </ContainerForm>
            <Link to="/cadastro">Primeira vez? Cadastre-se!</Link>
        </ContainerLogin>
    )
}

const ContainerLogin = styled.div`
    height: 100vh;
    width: 100%;
    background-color: var(--purple-500);
    display: flex;
    flex-direction: column;
    gap: 36px;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 32px;
        font-family: 'Saira Stencil One', cursive;
        font-weight: 400;
        color: var(--white);
        line-height: 50px;
        margin-bottom: -12px;
    }

    a {
        font-family: 'Raleway', sans-serif;
        font-size: 15px;
        font-weight: 700;
        color: var(--white);
        text-decoration: none;
    }
`
