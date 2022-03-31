import { Container, Row, Col, } from "react-bootstrap";
import courseOutline from '../files/courseOutline.pdf';

export default function FooterComponent() {
    return (
        <Container className="footer w-100">
            <Container style={{ minWidth:"95%" }}>
                <Row xs={1} md={3}>
                    <Col>
                        <a
                            href={courseOutline}
                            target="_blank"
                            data-tip="For educational purposes only"
                            className="tip-above">
                            &copy;{new Date().getFullYear()} Smart Voting LLC
                        </a>
                    </Col>
                    <Col className="text-center">
                        <Row xs={1} md={3}>
                            <a href="/about/">About</a>
                            <a href="/security/">Security</a>
                            <a href="/contact/">Contact</a>
                        </Row>
                    </Col>
                    <Col style={{ textAlign: "right", }}>
                        <a target="_blank" href="https://github.com/smartvoting">GitHub</a>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}