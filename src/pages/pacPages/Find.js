import React, { useState, } from 'react'
import { Container, Row, Col, Button, InputGroup, Form, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import defaultAvatar from '../../images/defaultAvatar.png';

export default function Find() {
    const [searchbarValue, setSB] = useState('');
    const [searchData, setData] = useState('');

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function search() {
        let searchString = document.getElementById("searchbar").value;
        setSB(searchString);
        axios.post("https://api.smartvoting.cc/v1/Candidates/Search?Name=" + capitalize(searchString) + "&RidingID=0").then(res => {
            if (res.data !== undefined) {
                console.log(res.data)
                setData(res.data);
            }
        }).catch(err => { setData({}); });
        swapView();
        setBS(false);
    }


    function swapView() {
        document.getElementById("instructions").style.height = "0";
        document.getElementById("instructions").style.visibility = "hidden";
        document.getElementById("instructions").style.opacity = "0";
        document.getElementById("candidates").style.height = "100%";
        document.getElementById("candidates").style.visibility = "visible";
        document.getElementById("candidates").style.opacity = "1";
    }

    const [buttonState, setBS] = useState(false);

    return (
        <Container style={{ minWidth: "100%", minHeight: "100%", height: "100%", }} >
            <InputGroup className="mb-3">
                <Form.Control
                    id="searchbar"
                    placeholder="Type Candidate Name Here (ex. Bob, or Smith)"
                    data-val-required="A name is required to continue."
                    type="text"
                    required
                    style={{ width: "65%", fontSize: "1.2vw" }}
                />
                <Button disabled={buttonState} variant="" className="btn-outline-purple" id="button-addon2" type="submit" style={{ width: "10%", fontSize: "1.2vw" }} onClick={() => { setBS(true); search(); }}>
                    {
                        buttonState ?
                            <p style={{ margin: "0", }}>Loading < FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faSpinner} className="fa-spin" /></p> :
                            <p style={{ margin: "0", }}>Search</p>
                    }
                </Button>
            </InputGroup>
            <Container style={{ minWidth: "100%", height: "90%", maxHeight: "90%", }}>
                <Container id="instructions" style={{ minWidth: "100%", fontSize:"1.1vw" }}>
                    <h4 style={{ fontWeight: "bold", }}>Instructions:</h4>
                    <p style={{ margin:"0", }}>
                        Type in the first name or the last name of any candidate that you would like to find.
                        <br />
                        <strong>Please keep in mind that all candidates are made up, and any similarity to actual persons, living or dead, is purely coincidental.</strong>
                        <br />
                        Candidates will be shown in the following format:
                    </p>
                    <br/>
                    <h4 style={{ fontWeight: "bold", }}>Candidates:</h4>
                    <Row style={{ width: "100%" }}>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <Col md={2} key={index}>
                                <Image src={defaultAvatar} roundedCircle style={{ width: "100%" }} />
                                <Container className="text-center" style={{ fontSize: "1vw", }}>
                                    <p style={{ fontWeight: "bold", }}>Candidate #{index + 1}</p>
                                </Container>
                            </Col>
                        ))}
                    </Row>
                </Container>
                <Row id="candidates" style={{ minWidth: "100%", visibility: "hidden", opacity: "0", height: "0", transition: "visibility 0s, opacity 0.5s linear" }}>
                    {
                        (searchData !== null && searchData !== undefined && searchData.length > 0) ?
                            <Container>
                                <h4 style={{ fontWeight: "bold", }}>Candidates:</h4>
                                <br />
                                <Row style={{ width: "100%" }}>
                                    {Array.from({ length: searchData.length }).map((_, index) => (
                                        <Col md={2} key={index}>
                                            <Image src={defaultAvatar} roundedCircle style={{ width: "100%" }} />
                                            <Container className="text-center" style={{ fontSize: "1vw", }}>
                                                <p>
                                                    <strong>{searchData[index].firstName} {searchData[index].lastName}</strong>
                                                    <br />
                                                    {searchData[index].partyName === "Conservative Party of Canada" ? "Conservative Party" : "Liberal Party of Canada" ? "Liberal Party" : "New Democratic Party" ? "NDP" : "Green Party of Canada" ? "Green Party" : "People's Party of Canada" ? "PPC" : searchData[index].partyName}
                                                </p>
                                                <p style={{ fontWeight: "bold", }}></p>
                                            </Container>
                                        </Col>
                                    ))}
                                </Row>
                            </Container> :
                            <Container style={{display:"flex", justifyContent:"center",alignItems:"center",}}>
                                <h2 style={{fontWeight:"bold",}}>Looks like there are no candidate(s) that match the search term: "{searchbarValue}"</h2>
                            </Container>
                    }
                </Row>
            </Container>
        </Container>
    );
}
