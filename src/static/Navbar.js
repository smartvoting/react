import { Navbar, Nav, NavDropdown, Container, } from "react-bootstrap";
import logo from '../images/svLogo2.png';

export default function NavbarComponent() {
    return (
        <Navbar sticky="top">
            <Container style={{ minWidth: "90%",}}>
                <Navbar.Brand href="/">
                    <img alt="Smart Voting Logo" src={logo} width="150" height="75" className="align-top" />
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
                            onToggle={() => { window.location.href = '/candidate/' }}
                            menuVariant="dark" >
                            <NavDropdown.Item href="/candidate/list/">List of All Candidates</NavDropdown.Item>
                            <NavDropdown.Item href="/candidate/party/">Party Candidates</NavDropdown.Item>
                            <NavDropdown.Item href="/candidate/find/">Find Candidates</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Elections" id="electionsDropdown"
                            renderMenuOnMount={true}
                            onToggle={() => { window.location.href = '/elections/' }}
                            menuVariant="dark" >
                            <NavDropdown.Item href="/elections/process/">Voting Process</NavDropdown.Item>
                            <NavDropdown.Item href="/elections/past/">Past Elections</NavDropdown.Item>
                            <NavDropdown.Item href="/elections/turnout/">Voter Turnouts</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                    <Nav className="me-auto">
                        <Nav.Link href="/login/">Login</Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}