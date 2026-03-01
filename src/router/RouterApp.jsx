import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { NotFound } from "../views/NotFound"
import { Login } from "../views/Login"
import { RouteProtected } from "../components/RouteProtected"
import { Registro } from "../views/Registro"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RouteProtected><Home /></RouteProtected>} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  )
}

export { RouterApp }