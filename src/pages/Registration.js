import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { ContainerForm } from "../styled/ContainerForm"


export function Registration() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()

    async function signUp(e) {
        e.preventDefault()
        if (password !== confirmPassword) {
            window.alert("A senha e a confirmação precisam ser iguais")
            return
        }
        try {
            await axios.post("http://localhost:5000/sign-up", { name, email, password, confirmPassword })

            navigate("/")
        } catch (error) {
            window.alert("Tente cadastrar novamente")
        }


    }

    return (
        <ContainerRegistration onSubmit={signUp}>
            <h1>MyWallet</h1>
            <ContainerForm>
                <input type="text" placeholder="Nome" onChange={e => setName(e.target.value)} value={name} required />
                <input type="email" placeholder="E-mail" onChange={e => setEmail(e.target.value)} value={email} required />
                <input type="password" placeholder="Senha" onChange={e => setPassword(e.target.value)} value={password} required />
                <input type="password" placeholder="Confirme a senha" onChange={e => setConfirmPassword(e.target.value)} value={confirmPassword} required />
                <button>Cadastrar</button>
            </ContainerForm>
            <Link to="/">Já tem uma conta? Entre agora!</Link>
        </ContainerRegistration>
    )
}

const ContainerRegistration = styled.div`
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
