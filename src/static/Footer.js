import courseOutline from '../files/courseOutline.pdf';
import { Container, Row, Col, } from "react-bootstrap";

export default function FooterComponent() {
    return (
        <Container className="footer w-100">
            <Container style={{ minWidth:"95%" }}>
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
                        <a title="For Educational Purposes Only" target="_blank" href={courseOutline}>&copy;{new Date().getFullYear()} Smart Voting LLC</a>
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