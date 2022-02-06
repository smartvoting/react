import React from "react";
import VoterRiding from './Riding';
import VoterChecklist from './Checklist';
import VoterRegistration from './Registration';
import VoterFaqs from './Faqs';
import LandingPage from '../../static/LandingPage';

export default function Voter() {

    const voterLanding = {
        header: "Voter",
        pushStateLink1:"voter", pushStateLink2:"/voter/",
        panelPages: ["/voter/riding/", "/voter/checklist/", "/voter/registration/", "/voter/faqs/"],
        panelTitles: ["Find a Riding", "Voter Checklist", "Check Registration", "FAQ"],
        panelComponents: [<VoterRiding />, <VoterChecklist />, <VoterRegistration />, <VoterFaqs />]
    };

    return (
        <>
            <LandingPage lc={voterLanding} />
        </>
    );
}
