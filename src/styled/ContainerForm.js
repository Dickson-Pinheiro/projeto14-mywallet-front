import styled from "styled-components"

const ContainerForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 13px;
    input {
        width: 326px;
        height: 58px;
        font-weight: 400;
        border-radius: 5px;
        border: none;
        color: var(--black);
        font-size: 20px;
        font-family: 'Raleway', sans-serif;
        &::placeholder {
            color: var(--black);
            font-weight: 400;
            font-family: 'Raleway', sans-serif;
            font-size: 20px;
            padding-left: 15px;
        }
    }
    button {
        width: 326px;
        height: 46px;
        border-radius: 5px;
        background-color: var(--purple-300);
        border: none;
        font-family: 'Raleway', sans-serif;
        font-weight: 700;
        font-size: 20px;
        line-height: 23.48px;
        color: var(--white);
        cursor: pointer;
    }
`

export {ContainerForm}