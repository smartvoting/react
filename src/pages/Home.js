import tempCarouselImage from '../images/tempCarouselImage.png';
import tempCardImg from '../images/tempCardImg.png'
import { Container, Card, Carousel, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import { useNavigate, } from "react-router-dom";
import { TwitterTimelineEmbed, } from 'react-twitter-embed';

export default function Home() {
    const navigate = useNavigate();
    return (
        <>
            {< CarouselFunction />}

            <Container className="justify-content-center mt-3">
                {<CardsFunction />}
            </Container>
            <Container className="justify-content-center mt-3 mb-3">
                <Row className="g-4">
                    <Col sm={8}>{<VoterInfoService />}</Col>
                    <Col sm={4}>{<Timeline />}</Col>
                </Row>
            </Container>
        </>
    );
}

function CarouselFunction() {
    const labels = ["first", "second", "third"];
    const paras = ["first", "second", "third"];
    const buttonTexts = ["first", "second", "third"];
    return (
        <Carousel>
            {Array.from({ length: 3 }).map((_, index) => (
                <Carousel.Item key={index}>
                    <img
                        className="d-block w-100"
                        src={tempCarouselImage}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>{labels[index]}</h3>
                        <p>{paras[index]}</p>
                        <Button variant="" className="btn-outline-purple">{buttonTexts[index]}</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

function CardsFunction() {
    return (
        <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 3 }).map((_, index) => (
                <Col key={index}>
                    <Card className="text-center">
                        <Card.Img variant="top" src={tempCardImg} />
                        <Card.Body>
                            <Card.Title>Temp Card title</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                            <Button variant="" className="btn-outline-purple">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}

function VoterInfoService() {
    return (
        <Card className="text-center h-100">
            <Card.Header><h2>Voter Information Service</h2></Card.Header>
            <Card.Body>
                <Row className="align-items-center mx-auto" style={{ width: "85%", }}>
                    <Col style={{ borderRight: "1px solid #d3d3d3", paddingRight:"50px", }}>
                        <Card.Text>
                            Find your electoral district
                        </Card.Text>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Postal Code"
                                aria-label="PostalCode"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="" className="btn-outline-purple" id="button-addon2">
                                Button
                            </Button>
                        </InputGroup>
                    </Col>
                    <Col style={{ paddingLeft: "50px", }}>
                        <Button variant="" className="btn-purple">Check to see if you are registered to vote</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

function Timeline() {
    return (
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="ElectionsCan_E"
          options={{ height: "100%" }}
        />
    );
}