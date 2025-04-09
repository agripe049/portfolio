import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Projetos from "../pages/Projetos";
import Contato from '../pages/Contato'



function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;