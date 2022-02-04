import React, { useState, useEffect } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { Nav, Container, } from "react-bootstrap";
import PartyList from './List';
import PartyDonations from './Donations';
import PartyCandidates from './Candidates';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default function Voter() {

    const panelPages = ["/party/list/", "/party/donations/", "/party/candidates/"];
    const panelTitles = ["Parties List", "Contribution Limits", "Party Candidates"];
    const panelComponents = [<PartyList/>, <PartyDonations/>, <PartyCandidates/>];

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
                <h5 className="sidebarHeader">Parties</h5>
                <a href="/party/list/" onClick={changeUrl}>Parties List</a>
                <a href="/party/donations/" onClick={changeUrl}>Contribution Limits</a>
                <a href="/party/candidates/" onClick={changeUrl}>Party Candidates</a>
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
                        window.history.pushState("", "party", "/party/");
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
