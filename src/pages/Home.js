import React, { Component } from 'react';
import tempCarouselImage from '../images/tempCarouselImage.png';
import tempCardImg from '../images/tempCardImg.png'
import { Container, Card, Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import { Parallax } from 'react-parallax';
import { TwitterTimelineEmbed, } from 'react-twitter-embed';

export default class Home extends Component  {
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
                <Parallax bgImage={tempCarouselImage} strength={300}>
                    <Container style={{ minHeight: "100vh", textAlign: "center",}}>
                        <Button variant="" className="btn-lg btn-purple bigBoyButton" style={{ position: "absolute", top: "90%", transform: "translate(-50%,-50%)"}}>Cast Your Vote Now!</Button>
                    </Container>
                </Parallax>

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

function CardsFunction() {
    const cardColours = ["#AEC6CF", "#FF6961", "#FFB347", "#C1E1C1"];
    const cardTitles = ["Voters", "Elections", "Parties and Candidates"];
    const cardContent = ["Here you can find all information on voting; Find Your Riding, Check Your Registration, Go Through Our Checklist, or See Our FAQ!",
                        "Here you can view information on all Elections Past and Present! You can check out the Voting Process, Past Elections, and Voter Turnouts.",
                        "Here you can find all information needed to be an informed voter! Here, you can get a List of Parties, Contribution Lists for those parties, a List of All Candidates, A List of Candidates by Party and Find a Candiate."];
    const cardRoutes = ["/voter/", "/elections/", "/pac/"];
    return (
        <Row md={2} className="g-4">
            {Array.from({ length: 2 }).map((_, index) => (
                <Col key={index}>
                    <Card style={{ backgroundColor: cardColours[index] }}>
                        <Card.Header className="text-center" style={{ fontWeight: "bold", fontSize: "170%" }}>{cardTitles[index]}</Card.Header>
                        {/*<Card.Img variant="top" src={tempCardImg} />*/}
                        <Card.Body style={{ textAlign:"center",}}>
                            {/*<Card.Title style={{ fontWeight: "bold", fontSize: "170%" }}>{cardTitles[index]}</Card.Title>
                            <hr/>*/}
                            <Card.Text style={{ fontSize: "135%" }}>{cardContent[index]}</Card.Text>
                            <Button variant="" className="btn-outline-purple" onClick={() => { window.location.href = cardRoutes[index]}}>Go To Page</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

            <Col md={12}>
                <Card style={{ backgroundColor: cardColours[3] }}>
                    <Card.Header className="text-center" style={{ fontWeight: "bold", fontSize: "170%" }}>{cardTitles[2]}</Card.Header>
                    {/*<Card.Img variant="top" src={tempCardImg} />*/}
                    <Card.Body style={{ textAlign: "center", }}>
                        {/*<Card.Title style={{ fontWeight: "bold", fontSize: "170%" }}>{cardTitles[index]}</Card.Title>
                            <hr/>*/}
                        <Card.Text style={{ fontSize: "135%" }}>{cardContent[2]}</Card.Text>
                        <Button variant="" className="btn-outline-purple" onClick={() => { window.location.href = cardRoutes[2] }}>Go To Page</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

function VoterInfoService() {
    return (
        <Card className="text-center" style={{ backgroundColor: "#FDFD96"}}>
            <Card.Header style={{ fontWeight: "bold", fontSize: "200%" }}>Voter Information Service</Card.Header>
            <Card.Body>
                <Row className="align-items-center mx-auto" style={{ width: "90%" }}>
                    <Col style={{ borderRight: "1px solid #d3d3d3", paddingRight:"50px", }}>
                        <Card.Text style={{ fontSize: "140%" }}>Find your electoral district</Card.Text>
                        <InputGroup className="mb-3">
                            <Form.Control
                                placeholder="Postal Code"
                                maxLength= "7"
                                style={{ backgroundColor: "inherit", fontSize: "140%", border:"1px solid #513A77" }}
                            />
                            <Button variant="" className="btn-outline-purple">Search</Button>
                        </InputGroup>
                    </Col>
                    <Col style={{ paddingLeft: "50px", fontSize: "110%" }}>
                        <Button variant="" className="btn-lg btn-purple" onClick={() => { }}>Check to see if you are registered to vote</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}