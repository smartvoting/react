import React from "react";
import PartyList from './PartyList';
import Donations from './Donations';
import FindCandidate from './Find';
import LandingPage from '../../static/LandingPage';
import candidatesLanding from '../../images/candidatesLanding.jpg';

export default function Voter() {

    const pacLanding = {
        header: "Parties & Candidates",
        pushStateLink1: "pac", pushStateLink2: "/pac/",
        panelPages: ["/pac/list/", "/pac/donations/", "/pac/find/"],
        sidebarTitles: ["Parties List", "Contribution Limits", "Find Candidates"],
        panelTitles: ["Parties List", "Contribution Limits", "Find Candidates"],
        panelComponents: [<PartyList />, <Donations />, <FindCandidate />],
        backgroundImage: candidatesLanding
    };

    return (
        <LandingPage lc={pacLanding} />
    );
}