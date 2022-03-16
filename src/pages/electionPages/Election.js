import React from "react";
import ElectionProcess from './Process';
import ElectionPast from './Past';
import ElectionTurnout from './Turnout';
import LandingPage from '../../static/LandingPage';

export default function Voter() {

    const electionLanding = {
        header: "Elections",
        pushStateLink1: "elections", pushStateLink2: "/elections/",
        panelPages: ["/elections/process/", "/elections/past/", "/elections/turnout/"],
        sidebarTitles: ["Voting Process", "Past Elections", "Voter Turnouts"],
        panelTitles: ["Voting Process", "Past Elections", "Voter Turnouts"],
        panelComponents: [<ElectionProcess />, <ElectionPast />, <ElectionTurnout />]
    };

    return (
        <LandingPage lc={electionLanding} />
    );
}
