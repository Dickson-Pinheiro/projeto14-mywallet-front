import {Route, Routes, BrowserRouter} from "react-router-dom"
import { Home } from "./pages/Home"
import { Inflow } from "./pages/Inflow"
import { Login } from "./pages/Login"
import { Outflow } from "./pages/Outflow"
import { Registration } from "./pages/Registration"
import { UpdateTransactionIntflow } from "./pages/UpdateTransactionInflow"
import { UpdateTransactionOutflow } from "./pages/UpdateTransactionOutflow"


export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/cadastro" element={<Registration/>} />
                <Route path="/home" element={<Home />} />
                <Route path="/nova-entrada" element={<Inflow />} />
                <Route path="/nova-saida" element={<Outflow />} />
                <Route path="/editar-saida/:id" element={<UpdateTransactionOutflow/>} />
                <Route path="/editar-entrada/:id" element={<UpdateTransactionIntflow />} />
            </Routes>
        </BrowserRouter>
    )
}