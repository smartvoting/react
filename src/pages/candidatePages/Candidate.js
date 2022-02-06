import React from "react";
import CandidateList from './List';
import CandidateParty from './Party';
import CandidateFind from './Find';
import LandingPage from '../../static/LandingPage';

export default function Voter() {

    const voterLanding = {
        header: "Candidates",
        pushStateLink1: "candidates", pushStateLink2: "/candidate/",
        panelPages: ["/candidate/list/", "/candidate/party/", "/candidate/find/"],
        panelTitles: ["List of All Candidates", "Party Candidates", "Find Candidates"],
        panelComponents: [<CandidateList />, <CandidateParty />, <CandidateFind />]
    };

    return (
        <>
            <LandingPage lc={voterLanding} />
        </>
    );
}
