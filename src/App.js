import React, { useState } from 'react';
import './App.css';
import logo from './images/svLogo2.png';
import { Navbar, Nav, NavDropdown, Container, Row, Col, } from "react-bootstrap";
import { BrowserRouter, Route, Routes, useNavigate, } from 'react-router-dom';
import Home from './pages/Home';
import ErrorPage from './pages/ErrorPage';
import VoterLanding from './pages/voterPages/Voter';
import PartyLanding from './pages/partyPages/Party';

export default function App() {

    return (
        <>
            {<NavbarFunction />}
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
                    <Route path="*" element={<ErrorPage />} />

                </Routes>
            </BrowserRouter>
            
            {<FooterFunction />}
         </>
    );
}

function NavbarFunction() {
    return (
        <Navbar sticky="top">
            <Container>
                <Navbar.Brand href="/">
                    <img alt="Smart Voting Logo" src={logo} width="120" height="61" className="align-top" />
                </Navbar.Brand>
                <Navbar.Collapse id="#">
                    <Nav className="container-fluid">
                        <Nav.Link href="/">Home</Nav.Link>
                        <NavDropdown title="Voters" id="votersDropdown"
                            renderMenuOnMount={true}
                            onToggle={() => { window.location.href = '/voter/' }}
                            menuVariant="dark" >
                            <NavDropdown.Item href="/voter/riding/">Find A Riding</NavDropdown.Item>
                            <NavDropdown.Item href="/voter/checklist/">Voter Checklist</NavDropdown.Item>
                            <NavDropdown.Item href="/voter/registration/">Check Registration</NavDropdown.Item>
                            <NavDropdown.Item href="/voter/faqs/">FAQ</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Parties" id="partiesDropdown"
                            renderMenuOnMount={true}
                            onToggle={() => { window.location.href = '/party/' }}
                            menuVariant="dark" >
                            <NavDropdown.Item href="/party/list/">Parties List</NavDropdown.Item>
                            <NavDropdown.Item href="/party/donations/">Contribution Limits</NavDropdown.Item>
                            <NavDropdown.Item href="/party/candidates/">Party Candidates</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Candidates" id="candidatesDropdown"
                            renderMenuOnMount={true}
                            onToggle={() => { window.location.href = '/' }}
                            menuVariant="dark" >
                            <NavDropdown.Item href="#">List of All Candidates</NavDropdown.Item>
                            <NavDropdown.Item href="#">Party Candidates</NavDropdown.Item>
                            <NavDropdown.Item href="#">Find Candidates</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Elections" id="electionsDropdown"
                            renderMenuOnMount={true}
                            onToggle={() => { window.location.href = '/' }}
                            menuVariant="dark" >
                            <NavDropdown.Item href="#">Voting Process</NavDropdown.Item>
                            <NavDropdown.Item href="#">Past Elections</NavDropdown.Item>
                            <NavDropdown.Item href="#">Voter Turnouts</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="#">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


function FooterFunction() {
    return (
        <Container className="footer w-100">
            <Container>
                {/* Extra footer content that's not really needed, but I didn't want to delete just in case
                 * <Row xs={1} md={3}>
                    <Col>
                        <h4>Smart Voting LLC.</h4>
                        <h6 className="list-unstyled">
                            <li>123-456-7890</li>
                            <li>Toronto, Canada</li>
                            <li>1234 Street St.</li>
                        </h6>
                    </Col>
                    <Col className="text-center">
                        <h4>Page Links</h4>
                        <h6>
                            <a href="#">Item 1</a><br/>
                            <a href="#">Item 1</a><br />
                            <a href="#">Item 1</a>
                        </h6>
                    </Col>
                    <Col className="text-end">
                        <h4>Temporary Col</h4>
                        <h6>
                            <a href="#">Item 1</a><br />
                            <a href="#">Item 1</a><br />
                            <a href="#">Item 1</a>
                        </h6>
                    </Col>
                </Row>
                <hr />
                */}
                <Row xs={1} md={3}>
                    <Col>
                        &copy;{new Date().getFullYear()} Smart Voting LLC
                    </Col>
                    <Col className="text-center">
                        <Row xs={1} md={3}>
                            <a href="#">About</a>
                            <a href="#">Security</a>
                            <a href="#">Contact</a>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
