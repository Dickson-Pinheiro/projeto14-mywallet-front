import { Link } from "react-router-dom"
import styled from "styled-components"

import logout from "../assets/logout.svg"
import plus from "../assets/plus.svg"
import minus from "../assets/minus.svg"

export function Home(){
    return(
        <ContainerHome>
            <header>
                <h1>Olá, Fulano</h1>
                <Link to="/"><img src={logout} alt="seta apontando para a esquerda dentro de um retângulo, indicando local para deslogar do site."/></Link>
            </header>
            <ContainerMain>
                <p>Não há registros de entrada ou saída</p>
            </ContainerMain>
            <ContainerCreateTransactions>
                <Link to="/nova-entrada">
                    <img src={plus} />
                    <p>Nova entrada</p>
                </Link>
                <Link to="/nova-saida">
                <img src={minus} />
                <p>Nova saída</p>
                </Link>
            </ContainerCreateTransactions>
        </ContainerHome>
    )
}

const ContainerHome = styled.div`
    height: 100vh;
    width: 100%;
    background-color: var(--purple-500);

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 auto;
        height: 68px;
        max-width: 326px;
        img {
            cursor: pointer;
        }
    }
    h1 {
        font-size: 26px;
        font-family: Raleway;
        font-weight: 700;
        line-height: 30.52px;
        color: var(--white);
    }
`

const ContainerMain = styled.main`
    max-width: 326px;
    width: 100%;
    margin: 0 auto;
    height: 65%;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    p {
        max-width: 180px;
        text-align: center;
        font-family: Raleway;
        font-size: 20px;
        color: var(--gray-200);
        line-height: 23.48px;

    }
`

const ContainerCreateTransactions = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;
    max-width: 326px;
    margin: 0 auto;
    margin-top: 13px;

    a {
        width: 155px;
        height: 108px;
        background-color: var(--purple-300);
        padding: 9px;
        border-radius: 5px;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
        img {
            width: 25px;
        }
        p {
            width: 44px;
            font-family: Raleway;
            font-size: 17px;
            font-weight: 700;
            line-height: 20px;
            color: var(--white);
        }
    }
`