import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Projetos from "../pages/Projetos";
import Especialidades from '../pages/Especialidades'
import Contato from "../components/Contato";
import SlideBar from "../components/SlideBar";
import Footer from "../components/Footer";



function AppRoutes() {
    return (
        <Router>
            <SlideBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/especialidades" element={<Especialidades />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/contato" element={<Contato />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default AppRoutes;