import React from 'react';
import tempCarouselImage from '../images/tempCarouselImage.png';
import tempCardImg from '../images/tempCardImg.png'
import { Container, Card, Carousel, Row, Col, Button, InputGroup, FormControl } from "react-bootstrap";
import { TwitterTimelineEmbed, } from 'react-twitter-embed';

export default class Home extends React.Component  {
    componentDidMount() {
        let observer = new MutationObserver(function (m) {
            if (m[0].addedNodes[0] !== undefined && m[0].addedNodes[0] !== null && m[0].addedNodes[0].nodeName === "IFRAME") {
                document.getElementById("twitter-widget-0").parentElement.style.height = "100%";
                let newHeight = -document.getElementById("twitterBackground").clientHeight;
                document.getElementById("twitter-widget-0").parentElement.style.marginTop = `${newHeight}px`;
            }
        });

        observer.observe(document.body, { childList: true });
    }
    
    render() {
        return (
            <>
                {< CarouselFunction />}

                <Container className="justify-content-center mt-3 mb-3" style={{ minWidth:"80%"}}>
                    <Row className="g-4">
                        <Col sm={8}>
                            {<CardsFunction />}
                            <br />
                            {<VoterInfoService />}
                        </Col>
                        <Col sm={4}>
                            <Container id="twitterBackground" className="twitterBackground">
                                <p>Hey! If you can read this, you're probably using Firefox.</p>
                                <p>If you want to see Election Canada's Twitter feed, you have to turn off tracking protection (The shield icon in the url).</p>
                                <p>Have a good day!</p>
                            </Container>
                               
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="ElectionsCan_E"
                                options={{ height: "100%" }}
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
        <Carousel indicators={false} controls={false} prevIcon={""} nextIcon={""} style={{minHeight:"calc(100vh - 75px)"}}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={tempCarouselImage}
                    alt="First slide"
                    style={{ minHeight: "calc(100vh - 75px)" }}
                />
                <Carousel.Caption>
                    {/*<h3>A New Way To Vote</h3>*/}
                    {/*<p>FIRST</p>*/}
                    <Button variant="" className="btn-lg btn-purple bigBoyButton">Cast Your Vote Now!</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

function CardsFunction() {
    const cardTitles = ["Voters Page", "Parties Page", "Candidates Page", "Elections Page"]
    const cardContent = ["Here you can find all information on voting; Find Your Riding, Check Your Registration, Go Through Our Checklist, or See Our FAQ!",
                        "Here you can find all information you need on the parties of Canada! View a List of All Parties, Contribution Limits, and Party Candidates!",
                        "Here you can go through all information on the different political candidates! You can view all candidates or Find One in any Riding",
                        "Here you can view information on all Elections Past and Present! You can check out the Voting Process, Past Elections, and Voter Turnouts."]
    const cardRoutes = ["/voter/", "/party/", "/candidate/", "/elections/"];
    return (
        <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, index) => (
                <Col key={index}>
                    <Card>
                        {/*<Card.Img variant="top" src={tempCardImg} />*/}
                        <Card.Body style={{ textAlign:"center",}}>
                            <Card.Title style={{ fontWeight:"bold", fontSize: "170%" }}>{cardTitles[index]}</Card.Title>
                            <Card.Text style={{ fontSize: "135%" }}>{cardContent[index]}</Card.Text>
                            <Button variant="" className="btn-outline-purple" onClick={() => { window.location.href = cardRoutes[index]}}>Go To Page</Button>
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
                <Row className="align-items-center mx-auto" style={{ width: "90%" }}>
                    <Col style={{ borderRight: "1px solid #d3d3d3", paddingRight:"50px", }}>
                        <Card.Text style={{ fontSize: "140%" }}>Find your electoral district</Card.Text>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Postal Code (A9A9A9)"
                                maxLength= "7"
                                style={{ fontSize: "140%" }}
                            />
                            <Button variant="" className="btn-outline-purple" style={{ fontSize: "140%" }}>Search</Button>
                        </InputGroup>
                    </Col>
                    <Col style={{ paddingLeft: "50px", fontSize: "125%" }}>
                        <Button variant="" className="btn-lg btn-purple">Check to see if you are registered to vote</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}