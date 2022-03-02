import React, { useState, useEffect } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { Nav, Container, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import tempCarouselImage from '../images/tempCarouselImage.png';

export default function LandingPage(props) {
    const [state, setState] = useState({  isPaneOpen: false });

    useEffect(() => {
        if (props.lc.panelPages.includes(window.location.pathname)) {
            setState({ isPaneOpen: true });
        }
        let openedPage = props.lc.panelPages.indexOf(window.location.pathname);
        if (openedPage !== -1) document.getElementById(props.lc.panelPages[props.lc.panelPages.indexOf(window.location.pathname)]).classList.add("active")
    }, []);

    function changeUrl(e) {
        e.preventDefault();
        window.history.pushState("", e.targetTitle, e.target);
        setState({ isPaneOpen: true });
    }

    return (
        <>
            <Nav className="sidebar">
                <Container className="sidebarHeaderContainer"><h5 className="sidebarHeader">{props.lc.header}</h5></Container>
                <Container className="sidebarContentContainer">
                    {Array.from({ length: props.lc.panelPages.length }).map((_, index) => (
                        <Nav.Link key={index} id={props.lc.panelPages[index]} href={props.lc.panelPages[index]} onClick={(e) => changeUrl(e)}>{props.lc.sidebarTitles[index]}</Nav.Link>
                    ))}
                </Container>
            </Nav>

            <Container className="landingContainer">
                <Container className="landingContent">
                    <img style={{width:"100%", height:"100%"}} src={tempCarouselImage }/>
                </Container>
                <SlidingPane
                    closeIcon={<FontAwesomeIcon icon={faTimes} className="fa-2x" />}
                    className="slidingPanelContent"
                    overlayClassName="slidingPanelOverlay"
                    isOpen={state.isPaneOpen}
                    title={props.lc.panelTitles[props.lc.panelPages.indexOf(window.location.pathname)]}
                    width="85%"
                    onRequestClose={() => {
                        setState({ isPaneOpen: false });
                        setTimeout(function () { window.history.pushState("", props.lc.pushStateLink1, props.lc.pushStateLink2); }, 600);
                        let activeElement = document.querySelector(".active");
                        if (activeElement !== null) activeElement.classList.remove("active");
                    }}
                >
                    <Container style={{minWidth:"100%",}}>
                        {props.lc.panelComponents[props.lc.panelPages.indexOf(window.location.pathname)]}
                    </Container>
                </SlidingPane>
            </Container>

        </>
    );
}
