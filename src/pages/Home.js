import React, { Component } from 'react';
import { useNavigate } from 'react-router-dom';
//import tempCarouselImage from '../images/tempCarouselImage.png';
//import tempCardImg from '../images/tempCardImg.png';
import { Container, Carousel, Card, Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import { Parallax } from 'react-parallax';
import { TwitterTimelineEmbed, } from 'react-twitter-embed';

import capitolHill from '../images/main_carousel/CapitolHill.jpeg';
import toronto from '../images/main_carousel/Toronto.jpeg';
import montreal from '../images/main_carousel/Montreal.jpeg';
import vancouver from '../images/main_carousel/Vancouver.jpeg';
import edmonton from '../images/main_carousel/Edmonton.jpeg';
import halifax from '../images/main_carousel/Halifax.jpeg';
import calgary from '../images/main_carousel/Calgary.jpg';

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

                <Container className="carousel">
                    <CarouselFunction />
                    <Container style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", background: "rgba(0,0,0, 0.5)", color: "white", width: "100%", }}>
                        <p style={{ fontSize: "4vw", fontWeight: "bold", }}>Welcome to Smart Voting</p>
                    </Container>
                </Container>

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
    const images = [capitolHill, toronto, montreal, halifax, vancouver, edmonton, calgary]
    return (
        <Carousel indicators={false} controls={false} prevIcon={""} nextIcon={""} fade>
            {Array.from({ length: images.length }).map((_, index) => (
                <Carousel.Item key={index}>
                    <Parallax bgImage={images[index]} strength={300} style={{ minHeight: "100vh", }}></Parallax>
                </Carousel.Item>
            ))}
            {/*
             * Original Carousel incase we decide to scrap parallax
             <Carousel fade style={{ maxHeight: "100vh" }}>
                {Array.from({ length: images.length }).map((_, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={images[index]}
                            alt="We'll do this later or something"
                        />
                    </Carousel.Item>
                ))}
                </Carousel>
             */}
        </Carousel>
        
    );
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
                        <Card.Header className="text-center" style={{ fontWeight: "bold", fontSize: "1.5vw" }}>{cardTitles[index]}</Card.Header>
                        {/*<Card.Img variant="top" src={tempCardImg} />*/}
                        <Card.Body style={{ textAlign:"center",}}>
                            {/*<Card.Title style={{ fontWeight: "bold", fontSize: "170%" }}>{cardTitles[index]}</Card.Title>
                            <hr/>*/}
                            <Card.Text style={{ fontSize: "1.3vw" }}>{cardContent[index]}</Card.Text>
                            <Button variant="" className="btn-outline-purple" onClick={() => { window.location.href = cardRoutes[index]}}>Go To Page</Button>
                        </Card.Body>
                    </Card>
                </Col>
            ))}

            <Col md={12}>
                <Card style={{ backgroundColor: cardColours[3] }}>
                    <Card.Header className="text-center" style={{ fontWeight: "bold", fontSize: "1.5vw" }}>{cardTitles[2]}</Card.Header>
                    {/*<Card.Img variant="top" src={tempCardImg} />*/}
                    <Card.Body style={{ textAlign: "center", }}>
                        {/*<Card.Title style={{ fontWeight: "bold", fontSize: "170%" }}>{cardTitles[index]}</Card.Title>
                            <hr/>*/}
                        <Card.Text style={{ fontSize: "1.3vw" }}>{cardContent[2]}</Card.Text>
                        <Button variant="" className="btn-outline-purple" onClick={() => { window.location.href = cardRoutes[2] }}>Go To Page</Button>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    );
}

function VoterInfoService() {
    const navigate = useNavigate();
    function findRiding() {
        navigate('/voter/riding/', { state: { zip: document.getElementById("zip").value }});
    }
    return (
        <Card className="text-center" style={{ backgroundColor: "#FDFD96"}}>
            <Card.Header style={{ fontWeight: "bold", fontSize: "1.6vw" }}>Voter Information Service</Card.Header>
            <Card.Body>
                <Row className="align-items-center mx-auto" style={{ width: "90%" }}>
                    <Col style={{ borderRight: "1px solid #d3d3d3", paddingRight:"50px", }}>
                        <Card.Text style={{ fontSize: "1.2vw" }}>Find your electoral district</Card.Text>
                        <InputGroup className="mb-3">
                            <Form.Control
                                id="zip"
                                maxLength="7"
                                placeholder="Postal Code (ex. A9A9A9)"
                                data-val-required="Please enter a postal code to continue."
                                type="text"
                                required
                                style={{ backgroundColor: "inherit", fontSize: "1.2vw", border:"1px solid #513A77" }}
                            />
                            <Button variant="" className="btn-outline-purple" onClick={() => { findRiding() }}>Search</Button>
                        </InputGroup>
                    </Col>
                    <Col style={{ paddingLeft: "50px", }}>
                        <Button variant="" className="btn-lg btn-purple" href="/voter/registration/">Check to see if you are registered to vote</Button>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}