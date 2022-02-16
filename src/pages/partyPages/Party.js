import React from "react";
import PartyList from './List';
import PartyDonations from './Donations';
import PartyCandidates from './Candidates';
import LandingPage from '../../static/LandingPage';

export default function Voter() {

    const voterLanding = {
        header: "Parties",
        pushStateLink1: "party", pushStateLink2: "/party/",
        panelPages: ["/party/list/", "/party/donations/", "/party/candidates/"],
        sidebarTitles: ["Parties List", "Contribution Limits", "Party Candidates"],
        panelTitles: ["Parties List", "Contribution Limits", "Party Candidates"],
        panelComponents: [<PartyList />, <PartyDonations />, <PartyCandidates />]
    };

    return (
        <>
            <LandingPage lc={voterLanding} />
        </>
    );
}
