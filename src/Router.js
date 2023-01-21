import {Route, Routes, BrowserRouter} from "react-router-dom"
import { Home } from "./pages/Home"
import { Inflow } from "./pages/Inflow"
import { Login } from "./pages/Login"
import { Outflow } from "./pages/Outflow"
import { Registration } from "./pages/Registration"


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