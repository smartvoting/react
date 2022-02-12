import React from 'react';
import tempCarouselImage from '../images/tempCarouselImage.png';
import tempCardImg from '../images/tempCardImg.png'
import { Container, Card, Carousel, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import { TwitterTimelineEmbed, } from 'react-twitter-embed';

export default class Home extends React.Component  {
    componentDidMount() {
        var observer = new MutationObserver(function (m) {
            if (m[0].addedNodes[0] !== undefined && m[0].addedNodes[0].nodeName === "IFRAME")
                document.getElementById("twitter-widget-0").parentElement.style.height = "100%";
        });

        observer.observe(document.body, { childList: true });
    }
    
    render() {
        return (
            <>
                {< CarouselFunction />}

                <Container className="justify-content-center mt-3 mb-3">
                    <Row className="g-4">
                        <Col sm={8}>
                            {<CardsFunction />}
                            <br />
                            {<VoterInfoService />}
                        </Col>
                        <Col sm={4}>
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="ElectionsCan_E"
                                options={{ height: "100%", }}
                            />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
    
}

function CarouselFunction() {
    return (
        <Carousel indicators={false} controls={false} prevIcon={""} nextIcon={""} style={{minHeight:"calc(100vh - 61px)"}}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={tempCarouselImage}
                    alt="First slide"
                    style={{ minHeight: "calc(100vh - 61px)" }}
                />
                <Carousel.Caption>
                    <h3>FIRST</h3>
                    <p>FIRST</p>
                    <Button variant="" className="btn-purple">Cast Your Vote Now!</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

function CardsFunction() {
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, index) => (
                <Col key={index}>
                    <Card>
                        {/*<Card.Img variant="top" src={tempCardImg} />*/}
                        <Card.Body>
                            <Card.Title>Card title</Card.Title>
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
        <Card className="text-center">
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