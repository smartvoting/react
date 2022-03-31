import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import Vote from './pages/Vote';
import NavbarComponent from './static/Navbar';
import FooterComponent from './static/Footer';
import ErrorPage from './pages/Error';
import VoterLanding from './pages/voterPages/Voter';
import PACLanding from './pages/pacPages/PAC';
import ElectionLanding from './pages/electionPages/Election';
import Login from './pages/Login';
import AboutPage from './pages/About';
import SecurityPage from './pages/Security';
import ContactPage from './pages/Contact';
import './App.css';

export default function App() {

    return (
        <>
            {(window.location.pathname !== "/vote/" && window.location.pathname !== "/vote") ? <NavbarComponent /> : null}

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/vote/" element={<Vote />} />

                    <Route path="/voter/" element={<VoterLanding />} />
                    <Route path="/voter/riding/" element={<VoterLanding />} />
                    <Route path="/voter/checklist/" element={<VoterLanding />} />
                    <Route path="/voter/registration/" element={<VoterLanding />} />
                    <Route path="/voter/faqs/" element={<VoterLanding />} />

                    <Route path="/pac/" element={<PACLanding />} />
                    <Route path="/pac/list/" element={<PACLanding />} />
                    <Route path="/pac/donations/" element={<PACLanding />} />
                    <Route path="/pac/listc/" element={<PACLanding />} />
                    <Route path="/pac/listpc/" element={<PACLanding />} />
                    <Route path="/pac/find/" element={<PACLanding />} />

                    <Route path="/elections/" element={<ElectionLanding />} />
                    <Route path="/elections/process/" element={<ElectionLanding />} />
                    <Route path="/elections/past/" element={<ElectionLanding />} />
                    <Route path="/elections/turnout/" element={<ElectionLanding />} />

                    <Route path="/login/" element={<Login />} />

                    <Route path="/about/" element={<AboutPage />} />
                    <Route path="/security/" element={<SecurityPage />} />
                    <Route path="/contact/" element={<ContactPage />} />

                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
            
            {(window.location.pathname !== "/vote/" && window.location.pathname !== "/vote") ? <FooterComponent /> : null}
        </>
    );
}
