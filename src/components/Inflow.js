import styled from "styled-components";
import { ContainerForm } from "../styled/ContainerForm";

export function Inflow(){
    return(
        <ContainerInFlow>
            <header>
                <h1>Nova entrada</h1>
            </header>
            <ContainerForm>
                <input type="number" placeholder="Valor"/>
                <input type="text" placeholder="Descrição" />
                <button>Salvar entrada</button>
            </ContainerForm>
            

        </ContainerInFlow>
    )
}

const ContainerInFlow = styled.div`
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