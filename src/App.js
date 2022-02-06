import React from 'react';
import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import Home from './pages/Home';
import NavbarComponent from './static/Navbar';
import FooterComponent from './static/Footer';
import ErrorPage from './pages/ErrorPage';
import VoterLanding from './pages/voterPages/Voter';
import PartyLanding from './pages/partyPages/Party';
import CandidateLanding from './pages/candidatePages/Candidate';
import ElectionLanding from './pages/electionPages/Election';
import './App.css';

export default function App() {

    return (
        <>
            {<NavbarComponent />}

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />

                    <Route path="/voter/" element={<VoterLanding />} />
                    <Route path="/voter/riding/" element={<VoterLanding />} />
                    <Route path="/voter/checklist/" element={<VoterLanding />} />
                    <Route path="/voter/registration/" element={<VoterLanding />} />
                    <Route path="/voter/faqs/" element={<VoterLanding />} />

                    <Route path="/party/" element={<PartyLanding />} />
                    <Route path="/party/list/" element={<PartyLanding />} />
                    <Route path="/party/donations/" element={<PartyLanding />} />
                    <Route path="/party/candidates/" element={<PartyLanding />} />

                    <Route path="/candidate/" element={<CandidateLanding />} />
                    <Route path="/candidate/list/" element={<CandidateLanding />} />
                    <Route path="/candidate/party/" element={<CandidateLanding />} />
                    <Route path="/candidate/find/" element={<CandidateLanding />} />

                    <Route path="/elections/" element={<ElectionLanding />} />
                    <Route path="/elections/process/" element={<ElectionLanding />} />
                    <Route path="/elections/past/" element={<ElectionLanding />} />
                    <Route path="/elections/turnout/" element={<ElectionLanding />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
            
            {<FooterComponent />}
         </>
    );
}
