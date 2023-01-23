import styled from "styled-components"
import { Transaction } from "./Transaction"

export function MainTransactions({transactions, refresh, setRefresh}){
    return(
        <MainContainer>
            {transactions.map(t => <Transaction key={t._id} date={t.date} text={t.text} value={t.value} type={t.type} id={t._id} refresh={refresh} setRefresh={setRefresh}/>)}
        </MainContainer>
    )
}

const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 12px;
`