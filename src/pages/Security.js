import { Container, Row, Col, } from "react-bootstrap";
import smartVotingLogo from '../images/svLogo1.png';
import electionsCanadaLogo from '../images/ecLogo.png';

export default function Security() {
    return (
        <Container className="ascContainer">
            <Row className="mx-auto" style={{ width: "90%", paddingTop: "20px", }}>
                <Col style={{ display: "flex", justifyContent: "center", borderRight: "1px solid #d3d3d3", paddingRight: "50px", }}>
                    <img src={smartVotingLogo} style={{ width: "57%", paddingBottom: "20px", }} alt="Smart Voting Logo" />
                </Col>
                <Col style={{ display: "flex", justifyContent: "center", paddingLeft: "50px", }}>
                    <img src={electionsCanadaLogo} style={{ width: "100%", paddingBottom: "20px", }} alt="Elections Canada Logo" />
                </Col>
            </Row>
            <Row className="mx-auto" style={{ width: "90%", paddingBottom: "20px", }}>
                <Col style={{ borderRight: "1px solid #d3d3d3", paddingRight: "50px", }}>
                    <h2 style={{ fontWeight: "bold" }}>Smart Voting Security</h2>
                    <Container style={{ fontSize: "1.1vw", textAlign: "left" }}>
                        {/* TEXT */}
                    </Container>
                </Col>
                <Col style={{ paddingLeft: "50px", }}>
                    <h2 style={{ fontWeight: "bold" }}>Elections Canada Security</h2>
                    <Container style={{ fontSize: "1.1vw", textAlign: "left" }}>
                        {/* TEXT */}
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
