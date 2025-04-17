import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Projetos from "../pages/Projetos";
import Especialidades from '../pages/Especialidades'
import Contato from "../components/Contato";



function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/especialidades" element={<Especialidades />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;