import styled from "styled-components";
import { ContainerForm } from "../styled/ContainerForm";

export function Outflow(){
    return(
        <ContainerOutFlow>
            <header>
                <h1>Nova saída</h1>
            </header>
            <ContainerForm>
                <input type="number" placeholder="Valor" required/>
                <input type="text" placeholder="Descrição" required/>
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