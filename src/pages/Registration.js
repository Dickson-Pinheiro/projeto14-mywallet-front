import { Link } from "react-router-dom"
import styled from "styled-components"
import { ContainerForm } from "../styled/ContainerForm"

export function Registration(){
    return(
        <ContainerRegistration>
            <h1>MyWallet</h1>
            <ContainerForm>
                <input type="text" placeholder="Nome" required/>
                <input type="email" placeholder="E-mail" required/>
                <input type="password" placeholder="Senha" required/>
                <input type="password" placeholder="Confirme a senha" required/>
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
