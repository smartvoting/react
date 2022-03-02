import { Container, Card, Row, Col, Button, } from "react-bootstrap";
import smartVotingLogo from '../images/svLogo1.png';
import electionsCanadaLogo from '../images/ecLogo.png';

export default function Contact() {
    return (
        <Container style={{ minWidth: "90%", paddingTop: "20px", paddingBottom: "20px", }}>
            <Row style={{ fontSize:"150%", }}>
                <Col md={6} style={{ borderRight: "1px solid #d3d3d3", paddingRight: "50px", }}>
                    <Card style={{ borderRadius: "15px", alignItems: "center", padding: "5px", marginBottom: "10px" }}>
                        <img src={smartVotingLogo} style={{ width: "60%", }}/>
                    </Card>
                    <Card style={{ borderRadius: "15px", border: "5px solid #513A77" }}>
                        <Card.Header className="text-center" style={{ fontWeight: "bold", fontSize: "150%",}}>Contact Smart Voting</Card.Header>
                        <Card.Body style={{ textAlign: "left", padding: "20px",  }}>
                            <h4 style={{ fontWeight: "bold", fontSize:"125%" }}>Telephone</h4>
                            <p>647-483-3779</p>
                            <hr />
                            <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Email</h4>
                            <p>contact@smartvoting.cc</p>
                            <hr />
                            <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Address - Headquarters</h4>
                            <p>George Brown College<br />160 Kendal Avenue<br />Toronto, Quebec<br />M5R 1M3</p>
                        </Card.Body>
                    </Card>

                </Col>
                <Col md={6} style={{ paddingLeft: "50px", }}>
                    <Card style={{ borderRadius: "15px", alignItems: "center", padding: "5px", marginBottom: "10px" }}>
                        <img src={electionsCanadaLogo} style={{ width: "94%", paddingBottom: "20px", }} />
                    </Card>
                    <Card style={{ borderRadius: "15px", marginBottom: "20px", border: "5px solid #860038" }}>
                        <Card.Header className="text-center" style={{ fontWeight: "bold", fontSize: "150%" }}>Contact Elections Canada</Card.Header>
                        <Card.Body style={{ textAlign: "left", padding: "20px",}}>
                            <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Telephone</h4>
                            <strong>Toll-free in Canada and the United States:</strong>
                            <p>1-800-463-6868</p>
                            <strong>Toll-free in Mexico:</strong>
                            <p>001-800-514-6868</p>
                            <strong>From anywhere in the world:</strong>
                            <p>1-613-993-2975</p>
                            <hr />
                            <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Email</h4>
                            <Button variant="" target="_blank" href="https://csep-pesc.elections.ca/en-CA/intake/" className="btn-lg btn-purple">Click Here To Contact Elections Canada</Button>
                            <hr />
                            <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Fax</h4>
                            <strong>Local:</strong>
                            <p>1-613-954-8584</p>
                            <strong>Toll-free in Canada and the United States:</strong>
                            <p>1-888-524-1444</p>
                            <hr />
                            <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Address - Headquarters</h4>
                            <p>Elections Canada<br />30 Victoria Street<br />Gatineau, Quebec<br />K1A 0M6</p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
