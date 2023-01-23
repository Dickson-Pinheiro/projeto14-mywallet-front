import { useEffect, useState } from "react";
import styled from "styled-components";

export function TotalTransactions({transactions}){

    const [total, setTotal] = useState(0)

    useEffect(() => {
        let outflow = 0;
        let inflow = 0;
        transactions.forEach(t => {
            if(t.type === "inflow") inflow+=t.value
            if(t.type === "outflow") outflow+=t.value
        })
        setTotal(inflow - outflow)
    }, [transactions])

    return(
        <ContainerTotalTransactions total={total}>
            <strong>SALDO</strong>
            <p>{total.toFixed(2)}</p>
        </ContainerTotalTransactions>
    )
}

const ContainerTotalTransactions = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    strong {
        font-size: 17px;
        font-weight: 700;
        font-family: Raleway;
        line-height: 19.96px;
    }

    p {
        font-size: 17px;
        font-family: Raleway;
        font-weight: 400;
        line-height: 19.96px;
        color: ${props => props.total > 0 ? "#03AC00" : "#C70000"};
    }
`