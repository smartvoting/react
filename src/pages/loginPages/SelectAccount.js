import { Container, Card, Row, Col, Button } from "react-bootstrap";
import tempCardImg from '../../images/tempCardImg.png';

export default function SelectAccount() {
    const cardTitles = ["Political Parties", "Election Officials", "Local Ridings"];
    const cardContent = ["Accounts for political party staffers at the national, provincial, or municipal levels.",
        "Accounts for Elections Canada staff, offical election auditors, IT system administrators, etc.",
        "Accounts for local riding candidates, campaign managers and volunteers, riding associations, etc."];
    const cardRoutes = ["#", "#", "#", "#"];
    return (
        <>
            <Container style={{ minWidth:"100%", backgroundColor:"#FFF", display:"flex", minHeight: "calc(100vh - 147.8px)", alignItems:"center" }}>
                <Container className="text-center" style={{minWidth:"90%"}}>
                    <Row xs={1} md={3} className="g-4">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <Col key={index}>
                                <Card>
                                    <Card.Img variant="top" src={tempCardImg} />
                                    <Card.Body>
                                        <Card.Title style={{ fontWeight: "bold", fontSize: "170%" }}>{cardTitles[index]}</Card.Title>
                                        <Card.Text style={{ fontSize: "135%" }}>{cardContent[index]}</Card.Text>
                                        <Button variant="" className="btn-outline-purple" onClick={() => { window.location.href = cardRoutes[index] }}>Login</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Container>
        </>
    );
}