import React, { useState, useEffect } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { Nav, Container, } from "react-bootstrap";
import VoterRiding from './Riding';
import VoterChecklist from './Checklist';
import VoterRegistration from './Registration';
import VoterFaqs from './Faqs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Voter() {

    const panelPages = ["/voter/riding/", "/voter/checklist/", "/voter/registration/", "/voter/faqs/"];
    const panelTitles = ["Find a Riding", "Voter Checklist", "Check Registration", "FAQ"];
    const panelComponents = [<VoterRiding/>, <VoterChecklist/>, <VoterRegistration/>, <VoterFaqs/>];

    const [state, setState] = useState({
        isPaneOpen: false
    });

    useEffect(() => {
        if (panelPages.includes(window.location.pathname)) {
            setState({
                isPaneOpen: true
            });
        }
    }, []);

    function changeUrl(e) {
        e.preventDefault();
        window.history.pushState("", e.targetTitle, e.target);
        setState({
            isPaneOpen: true
        });
    }

    return (
        <>
            <Nav className="sidebar">
                <h5 className="sidebarHeader">Voter</h5>
                <a href="/voter/riding/" onClick={changeUrl}>Find A Riding</a>
                <a href="/voter/checklist/" onClick={changeUrl}>Voter Checklist</a>
                <a href="/voter/registration/" onClick={changeUrl}>Check Registration</a>
                <a href="/voter/faqs/" onClick={changeUrl}>FAQ</a>
            </Nav>

            <Container className="landingContainer">
                <Container className="landingContent"></Container>
                <SlidingPane
                    closeIcon={<FontAwesomeIcon icon={faTimes} className="fa-2x" />}
                    className="slidingPanelContent"
                    overlayClassName="slidingPanelOverlay"
                    isOpen={state.isPaneOpen}
                    title={panelTitles[panelPages.indexOf(window.location.pathname)]}
                    width="88%"
                    onRequestClose={() => {
                        window.history.pushState("", "voter", "/voter/");
                        setState({ isPaneOpen: false });
                    }}
                >
                    <Container>
                        {panelComponents[panelPages.indexOf(window.location.pathname)]}
                    </Container>
                </SlidingPane>
            </Container>

        </>
    );
}
