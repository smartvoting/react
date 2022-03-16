import React from "react";
import PartyList from './PartyList';
import Donations from './Donations';
import CandidatesList from './CandidatesList';
import PCList from './PCList';
import FindCandidate from './Find';
import LandingPage from '../../static/LandingPage';

export default function Voter() {

    const voterLanding = {
        header: "Parties & Candidates",
        pushStateLink1: "pac", pushStateLink2: "/pac/",
        panelPages: ["/pac/list/", "/pac/donations/", "/pac/listc/", "/pac/listpc/", "/pac/find/"],
        sidebarTitles: ["Parties List", "Contribution Limits", "List of All Candidates", "Candidates By Party", "Find Candidates"],
        panelTitles: ["Parties List", "Contribution Limits", "List of All Candidates", "Candidates By Party", "Find Candidates"],
        panelComponents: [<PartyList />, <Donations />, <CandidatesList />, <PCList/>, <FindCandidate />]
    };

    return (
        <LandingPage lc={voterLanding} />
    );
}