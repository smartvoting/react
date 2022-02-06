import { Container, Row, Col, } from "react-bootstrap";

export default function FooterComponent() {
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