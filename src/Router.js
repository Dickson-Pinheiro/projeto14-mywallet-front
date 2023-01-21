import {Route, Routes, BrowserRouter} from "react-router-dom"
import { Home } from "./components/Home"
import { Inflow } from "./components/Inflow"
import { Login } from "./components/Login"
import { Outflow } from "./components/Outflow"
import { Registration } from "./components/Registration"


export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/cadastro" element={<Registration/>} />
                <Route path="/home" element={<Home />} />
                <Route path="/nova-entrada" element={<Inflow />} />
                <Route path="/nova-saida" element={<Outflow />} />
            </Routes>
        </BrowserRouter>
    )
}