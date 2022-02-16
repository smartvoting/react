import { Container, Row, Col, Button, } from "react-bootstrap";
import smartVotingLogo from '../images/svLogo1.png';
import electionsCanadaLogo from '../images/ecLogo.png';

export default function Contact() {
    return (
        <Container className="ascContainer">
            <Row className="mx-auto" style={{ width: "85%", fontSize:"150%" }}>
                <Col style={{ borderRight: "1px solid #d3d3d3", paddingRight: "50px", }}>
                    <img src={smartVotingLogo} style={{ width: "57%", paddingBottom: "20px", }} />
                    <h2 style={{ fontWeight: "bold", paddingBottom: "20px", }}>Contact Smart Voting</h2>
                    <Container style={{ textAlign: "left" }}>
                        <h4 style={{ fontWeight: "bold", fontSize:"125%" }}>Telephone</h4>
                        <p>647-483-3779</p>
                        <br />
                        <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Email</h4>
                        <p>contact@smartvoting.cc</p>
                        <br />
                        <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Address - Headquarters</h4>
                        <p>George Brown College<br />160 Kendal Avenue<br />Toronto, Quebec<br />M5R 1M3</p>
                    </Container>
                </Col>
                <Col style={{ paddingLeft: "50px", }}>
                    <img src={electionsCanadaLogo} style={{ width: "100%", paddingBottom: "20px", }} />
                    <h2 style={{ fontWeight: "bold", paddingBottom: "20px" }}>Contact Elections Canada</h2>
                    <Container className="ecContactContainer" style={{ textAlign: "left" }}>
                        <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Telephone</h4>
                        <p>Toll-free in Canada and the United States:</p>
                        <p>1-800-463-6868</p>
                        <br/>
                        <p>Toll-free in Mexico:</p>
                        <p>001-800-514-6868</p>
                        <br />
                        <p>From anywhere in the world:</p>
                        <p>1-613-993-2975</p>
                        <br />
                        <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Email</h4>
                        <Button variant="" target="_blank" href="https://csep-pesc.elections.ca/en-CA/intake/" className="btn-lg btn-purple">Click Here To Contact Elections Canada</Button>
                        <br />
                        <br />
                        <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Fax</h4>
                        <p>Local:</p>
                        <p>1-613-954-8584</p>
                        <br />
                        <p>Toll-free in Canada and the United States:</p>
                        <p>1-888-524-1444</p>
                        <br />
                        <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Address - Headquarters</h4>
                        <p style={{ paddingBottom: "20px", }}>Elections Canada<br />30 Victoria Street<br />Gatineau, Quebec<br />K1A 0M6</p>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
