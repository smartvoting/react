﻿import React, { useState, useEffect, useRef } from "react";
import { Container, Card, Form, Button, Row, Col, Table, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faSpinner } from '@fortawesome/free-solid-svg-icons'
import HCaptcha from '@hcaptcha/react-hcaptcha';
import axios from 'axios'

export default function Vote() {
    const [state, setState] = useState({
        step: 1
    });

    const [jwt, setJWT] = useState("");
    const [ip, setIP] = useState("");
    const [candidates, setCandidates] = useState({});
    const [cv, setCV] = useState({});

    window.onbeforeunload = function () {
        if (state.step !== 8 && state.step !== 9) return "";
    };

    const step = state.step;

    const allInOne = {
        jwt: jwt,
        setJWT: function (jwt) {
            setJWT(jwt);
        },
        ip: ip,
        setIP: function (ip) {
            setIP(ip);
        },
        candidates: candidates,
        setCandidates: function (c) {
            setCandidates(c);
        },
        cv: cv,
        setCV: function (cv) {
            setCV(cv);
        },
        prevStep: function () {
            document.getElementById("hideContainer").style.opacity = "0";
            setTimeout(() => {
                setState({ step: state.step - 1 });
                document.getElementById("hideContainer").style.opacity = "1";
            }, 400);
        },
        nextStep: function () {
            document.getElementById("hideContainer").style.opacity = "0";
            setTimeout(() => {
                setState({ step: state.step + 1 });
                document.getElementById("hideContainer").style.opacity = "1";
            }, 400);
        },
        setStep: function (newStep) {
            document.getElementById("hideContainer").style.opacity = "0";
            setTimeout(() => {
                setState({ step: newStep });
                document.getElementById("hideContainer").style.opacity = "1";
            }, 400);
        },
        valueCheck: function (i) {
            return i === "" || i === undefined || i === null || i.length === 0;
        }
    };

    return (
        <Container style={{ minWidth: "90%", height: "100vh", display: "flex", alignItems: "center", fontSize: "1.1vw" }}>
            <Container id="hideContainer" style={{ minWidth: "100%", transition: "opacity 0.25s linear" }} >
                <Card style={{ borderRadius: "15px", border: "5px solid #513A77" }}>
                    <Card.Header className="text-center" style={{ fontWeight: "bold", fontSize: "1.8vw", }}>Cast Your Secure Digital Ballot</Card.Header>
                    {
                        step === 1 ? <Privacy aio={allInOne} /> :
                        step === 2 ? <PersonalInfo aio={allInOne} /> :
                        step === 3 ? <VoterCheck1 aio={allInOne} /> :
                        step === 4 ? <VoterCheck2 aio={allInOne} /> :
                        step === 5 ? <VoterCheck3 aio={allInOne} /> :
                        step === 6 ? <CastVote aio={allInOne} /> :
                        step === 7 ? <ConfirmVote aio={allInOne} /> :
                        step === 8 ? <FinalConfirmation /> :
                        step === 9 ? <Error /> :
                        null
                    }
                </Card>
            </Container>
        </Container>
    );
}


function Privacy(props) {
    return (
        <Card.Body style={{ textAlign: "left", padding: "20px", }}>
            <h4 style={{ fontWeight: "bold", fontSize: "1.5vw" }}>Privacy and Security Notice</h4>
            <ul>
                <li>The personal information you provide <strong>will not</strong> be collected under the authority of the Canada Elections Act. As stated in other sections of this website, <strong>this is for educational purposes only</strong> and is by no means a real voting platform for Elections Canada or the Government of Canada. All information for voters and candidates is generated by our own programs and any similarity to actual persons, living or dead, or actual events, is purely coincidental.</li>
                <li>Your personal information is protected under the Privacy Act. Please consult the Privacy Notice for more information on the collection, use and protection of your personal information.</li>
                <li>As part of its security measures, Smart Voting captures the Internet Protocol (IP) address of computers used to access this Secure Voting Service to enable follow-up, verification, and VPN checks</li>
                <li><strong>Please note that once you start the voting process, you cannot backtrack (unless confirming your vote). Please make sure you have a stable internet connection, are in a private area, and have about 15 minutes to complete the entire process. Please only use the navigation tools found in the form, and do not click the back button in your browser.</strong></li>
            </ul>
            <p style={{ marginBottom: "0", fontWeight: "bold", }}>For this Form, you will need the following:</p>
            <ul>
                <li>Your Voter Card that you received in the mail</li>
                <li>Your Social Insurance Card</li>
                <li>Your Tax Return Information</li>
            </ul>
            <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                <Button onClick={() => { props.aio.nextStep(); }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                    Start <FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} />
                </Button>
            </Container>
        </Card.Body>
    );
}

function PersonalInfo(props) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const provinces = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon"];

    const [buttonState, setBS] = useState(false);


    useEffect(() => {
        document.getElementById("personalInfoForm").addEventListener("submit", function (e) {
            e.preventDefault();
            let formData = Object.fromEntries(new FormData(document.forms.personalInfoForm).entries());
            console.log("GOT PAST PREVENTDEFAULT");
            console.log(formData);

            //Authkey and IP
            formData.authKey = process.env.REACT_APP_VOTE_API_KEY;
            axios.get("https://geolocation-db.com/json/").then(res => {
                props.aio.setIP(res.data.IPv4);
                formData.remoteIp = res.data.IPv4
            }).catch(err => console.log(err));
            console.log("GOT PAST GEOLOCATION");
            console.log(props.aio.ip);

            //Getting Select Menus
            formData.birthDate = new Date(document.getElementById("year").value, document.getElementById("month").value, document.getElementById("day").value).toISOString();
            formData.province = document.getElementById("province").value;

            //Extra stuff to make sure form is filled
            if (props.aio.valueCheck(formData.middleName)) formData.middleName = "N/A";
            if (props.aio.valueCheck(formData.unitNumber)) formData.unitNumber = "N/A";
            if (props.aio.valueCheck(document.querySelector('input[name = "isCitizen"]:checked'))) formData.isCitizen = "";
            if (isNaN(formData.gender)) formData.gender = "";

            let pass = true;
            Object.values(formData).forEach(val => {
                if (props.aio.valueCheck(val)) pass = false;
            });
            if (pass) setBS(true);
            setTimeout(function () {
                console.log("IN SET TIMEOUT");
                if (pass) {
                    formData.isCitizen = Boolean(formData.isCitizen);
                    formData.gender = Number(formData.gender);
                    formData.province = Number(formData.province);
                    formData.streetNumber = Number(formData.streetNumber);

                    axios.post("https://api.smartvoting.cc/v1/Vote/Step/1", formData).then(res => {
                        console.log("SENDING TO SERVER");
                        props.aio.setJWT(res.data)
                    }).catch(err => { console.log(err); });
                    props.aio.nextStep();
                }
            }, 1000);
        });

    });
    
    return (
        <Card.Body style={{ textAlign: "left", padding: "20px", }}>
            <Form id="personalInfoForm">
                <h6><strong>Step 1 of 6</strong></h6>
                <h4 style={{ fontWeight: "bold", fontSize: "1.5vw" }}>Personal Information</h4>
                <ol>
                    {/*ARE YOU A CANADIAN CITIZEN*/}
                    <li style={{ paddingBottom: "20px" }}>
                        <strong>Are you a Canadian Citizen? </strong><span className="required">(required)</span>
                        <br />
                        <fieldset id="isCitizen" style={{ float: "left", width: "15%", padding: "0", display: "flex", }}>
                            <input type="radio" required id="citizen1" name="isCitizen" value={true} style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                            <Form.Label htmlFor="citizen1" style={{ marginRight: "50px", cursor: "pointer" }}>Yes</Form.Label>
                            <input type="radio" id="citizen2" name="isCitizen" value={false} style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                            <Form.Label htmlFor="citizen2" style={{ cursor: "pointer" }}>No</Form.Label>
                        </fieldset>
                    </li>
                    <br />

                    {/*NAME*/}
                    <Form.Group>
                        <li><Form.Label htmlFor="firstName" style={{ fontWeight: "bold" }}>First Name: <span className="required">(required)</span></Form.Label></li>
                        <Form.Control type="text" name="firstName" id="firstName" required />
                    </Form.Group>

                    <Form.Group>
                        <li><Form.Label htmlFor="middleName" style={{ fontWeight: "bold" }} data-tip="Please include a middle name if you have one." className="tip-above">Middle Name: <span className="required">*</span></Form.Label></li>
                        <Form.Control type="text" name="middleName" id="middleName" />
                    </Form.Group>

                    <Form.Group>
                        <li><Form.Label htmlFor="lastName" style={{ fontWeight: "bold" }}>Last Name: <span className="required">(required)</span></Form.Label></li>
                        <Form.Control type="text" name="lastName" id="lastName" required />
                    </Form.Group>
                    <br />
                    {/*DATE OF BIRTH*/}
                    <li><strong>Date of Birth: </strong><span className="required">(required)</span></li>
                    <Row style={{ width: "50%" }}>
                        <Col md={4}>
                            <Form.Group style={{ paddingRight: "10px" }}>
                                <Form.Label style={{ fontWeight: "bold" }}>Year:</Form.Label>
                                <Form.Select defaultValue="" id="year" required>
                                    <option value="" disabled hidden>(Please Choose One)</option>
                                    {Array.from({ length: ((new Date().getFullYear() - 17) - (new Date().getFullYear() - 120)) }).map((_, index) => (
                                        <option key={index} value={(new Date().getFullYear() - 18) - index}>{(new Date().getFullYear() - 18) - index}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group style={{ paddingRight: "10px" }}>
                                <Form.Label style={{ fontWeight: "bold" }}>Month:</Form.Label>
                                <Form.Select defaultValue="" id="month" required>
                                    <option value="" disabled hidden>(Please Choose One)</option>
                                    {Array.from({ length: 12 }).map((_, index) => (
                                        <option key={index} value={index}>{months[index]}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label style={{ fontWeight: "bold" }}>Day:</Form.Label>
                                <Form.Select defaultValue="" id="day" required>
                                    <option value="" disabled hidden>(Please Choose One)</option>
                                    {Array.from({ length: 31 }).map((_, index) => (
                                        <option key={index} value={index + 1}>{index + 1}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <br />
                    {/*GENDER*/}
                    <li style={{ marginLeft: "20px", }}><Form.Label style={{ fontWeight: "bold" }}>Gender: <span className="required">(required)</span></Form.Label></li>
                    <fieldset id="gender" style={{ float: "left", width: "100%", padding: "0", display: "flex", }}>
                        <input type="radio" id="gender1" name="gender" required value="1" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                        <Form.Label htmlFor="gender1" style={{ marginRight: "50px", cursor: "pointer" }}>Male</Form.Label>
                        <input type="radio" id="gender2" name="gender" value="2" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                        <Form.Label htmlFor="gender2" style={{ marginRight: "50px", cursor: "pointer" }}>Female</Form.Label>
                        <input type="radio" id="gender3" name="gender" value="3" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                        <Form.Label htmlFor="gender3" style={{ cursor: "pointer" }}>Another Gender</Form.Label>
                    </fieldset>
                    <br />
                    <br />
                    {/*ADDRESS*/}
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <li><Form.Label style={{ fontWeight: "bold" }}>Postal Code: <span className="required">(required)</span></Form.Label></li>
                                <Form.Control type="text" placeholder="Postal Code (A9A9A9)" maxLength="7" name="postCode" id="postCode" required />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group style={{ paddingRight: "10px", }}>
                                <Form.Label style={{ fontWeight: "bold" }}>City or Town: <span className="required">(required)</span></Form.Label>
                                <Form.Control type="text" id="city" name="city" required />
                            </Form.Group>
                        </Col>
                        <Col md={4}>
                            <Form.Group style={{ paddingRight: "10px" }}>
                                <Form.Label style={{ fontWeight: "bold" }}>Province: <span className="required">(required)</span></Form.Label>
                                <Form.Select defaultValue="" id="province" required>
                                    <option value="" disabled hidden>(Please Choose One)</option>
                                    {Array.from({ length: provinces.length }).map((_, index) => (
                                        <option key={index} value={index + 1}>{provinces[index]}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row style={{ paddingTop: "10px", }}>
                        <Col md={7}>
                            <li><Form.Label style={{ fontWeight: "bold" }}>Street Name: <span className="required">(required)</span></Form.Label></li>
                            <Form.Control type="text" id="streetName" name="streetName" required />
                        </Col>
                        <Col md={3}>
                            <li><Form.Label style={{ fontWeight: "bold" }}>Street Number: <span className="required">(required)</span></Form.Label></li>
                            <Form.Control type="number" id="streetNumber" name="streetNumber" required />
                        </Col>
                        <Col md={2}>
                            <Form.Group>
                                <li><Form.Label style={{ fontWeight: "bold" }} data-tip="Please include a unit number if you have one." className="tip-above">Unit/Suite/Apt: <span className="required">*</span></Form.Label></li>
                                <Form.Control type="text" id="unitNumber" name="unitNumber" />
                            </Form.Group>
                        </Col>
                    </Row>
                </ol>
                <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                    <Button disabled={buttonState} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        {
                            buttonState ?
                            <p style={{margin:"0"}}>Loading < FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faSpinner} className="fa-spin" /></p> :
                            <p style={{ margin: "0" }}>Next <FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} /></p>
                        }
                    </Button>
                </Container>
            </Form>
        </Card.Body>
    );
}

function VoterCheck1(props) {
    const [buttonState, setBS] = useState(false);
    return (
        <Card.Body style={{ textAlign: "left", padding: "20px", }}>
            <Form id="cardsForm" onSubmit={(e) => e.preventDefault()}>
                <h6><strong>Step 2 of 6</strong></h6>
                <h4 style={{ fontWeight: "bold", fontSize: "1.5vw" }}>Voter Checks Part 1</h4>
                <ol>
                    <Form.Group>
                        <li><Form.Label style={{ fontWeight: "bold" }}>Voter Card ID Number: <span className="required">(required)</span></Form.Label></li>
                        <Form.Control type="text" name="cardId" id="cardId" required maxLength={12} />
                    </Form.Group>
                    <Form.Group>
                        <li><Form.Label style={{ fontWeight: "bold" }}>Voter Card PIN Number: <span className="required">(required)</span></Form.Label></li>
                        <Form.Control type="text" name="cardPin" id="cardPin" required />
                    </Form.Group>
                    <Form.Group>
                        <li><Form.Label style={{ fontWeight: "bold" }}>Last 3 Digits of Social Insurance Number: <span className="required">(required)</span></Form.Label></li>
                        <Form.Control type="text" name="sinDigits" id="sinDigits" required maxLength={3}/>
                    </Form.Group>
                </ol>
                <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={() => {
                        let formData = Object.fromEntries(new FormData(document.forms.cardsForm).entries());
                        formData.authKey = process.env.REACT_APP_VOTE_API_KEY;
                        formData.remoteIp = props.aio.ip
                        let pass = true;
                        Object.values(formData).forEach(val => {
                            if (props.aio.valueCheck(val)) pass = false;
                        });
                        if (pass) {
                            setBS(true);
                            formData.cardPin = Number(formData.cardPin);
                            formData.sinDigits = Number(formData.sinDigits);
                            axios.post("https://api.smartvoting.cc/v1/Vote/Step/2", formData, {
                                headers: { Authorization: `Bearer ${props.aio.jwt}` }
                            }).then(props.aio.nextStep()).catch(err => { });
                        }
                    }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        {
                            buttonState ?
                                <p style={{ margin: "0" }}>Loading < FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faSpinner} className="fa-spin" /></p> :
                                <p style={{ margin: "0" }}>Next <FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} /></p>
                        }
                    </Button>
                </Container>
            </Form>
        </Card.Body>
    );
}

function VoterCheck2(props) {
    const taxLines = ["10100", "12000", "12900", "14299", "15000", "23600", "24400", "26000", "31220", "58240"];
    const lineIndexes = ["10100", "12000", "12900", "14299", "15000", "23600", "24400", "26000", "31220", "58240"];
    const indexes = [];
    const randomLines = [];
    function getRandomTaxLine() {
        for (let i = 0; i < 3; i++) {
            let randomNum = Math.floor(Math.random() * taxLines.length);
            randomLines.push(taxLines[randomNum]);
            indexes.push(lineIndexes.indexOf(taxLines[randomNum]));
            taxLines.splice(randomNum, 1);
        }
    }
    const [buttonState, setBS] = useState(false);
    const [isSubmitted, setSubmitted] = useState(false);

    return (
        <Card.Body style={{ textAlign: "left", padding: "20px", }}>
            <Form id="taxForm" onLoad={!isSubmitted ? getRandomTaxLine() : null} onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
                <h6><strong>Step 3 of 6</strong></h6>
                <h4 style={{ fontWeight: "bold", fontSize: "1.5vw" }}>Voter Checks Part 2</h4>
                <ol>
                    <Form.Group>
                        <li><Form.Label style={{ fontWeight: "bold" }}>2024 Tax Return Line {randomLines[0]} Amount: <span className="required">(required)</span></Form.Label></li>
                        <Form.Control type="number" name="lineOne" id="lineOne" required />
                    </Form.Group>
                    <Form.Group>
                        <li><Form.Label style={{ fontWeight: "bold" }}>2024 Tax Return Line {randomLines[1]} Amount: <span className="required">(required)</span></Form.Label></li>
                        <Form.Control type="number" name="lineTwo" id="lineTwo" required />
                    </Form.Group>
                    <Form.Group>
                        <li><Form.Label style={{ fontWeight: "bold" }}>2024 Tax Return Line {randomLines[2]} Amount: <span className="required">(required)</span></Form.Label></li>
                        <Form.Control type="number" name="lineThree" id="lineThree" required />
                    </Form.Group>
                </ol>
                <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={() => {
                        let formData = {
                            authKey: process.env.REACT_APP_VOTE_API_KEY,
                            remoteIp: props.aio.ip,
                            lineOne: {
                                lineNumber: indexes[0],
                                lineValue: Number(document.getElementById("lineOne").value)
                            },
                            lineTwo: {
                                lineNumber: indexes[1],
                                lineValue: Number(document.getElementById("lineTwo").value)
                            },
                            lineThree: {
                                lineNumber: indexes[2],
                                lineValue: Number(document.getElementById("lineThree").value)
                            }
                        }
                        let pass = true;
                        Object.values(formData).forEach(val => {
                            if (props.aio.valueCheck(val)) pass = false;
                        });
                        if (pass) {
                            setBS(true);
                            axios.post("https://api.smartvoting.cc/v1/Vote/Step/3", formData, {
                                headers: { Authorization: `Bearer ${props.aio.jwt}` }
                            }).then(res => props.aio.nextStep(), err => props.aio.setStep(9));
                        }
                    }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        {
                            buttonState ?
                                <p style={{ margin: "0" }}>Loading < FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faSpinner} className="fa-spin" /></p> :
                                <p style={{ margin: "0" }}>Next <FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} /></p>
                        }
                    </Button>
                </Container>
            </Form>
        </Card.Body>
    );
}

function VoterCheck3(props) {
    const [token, setToken] = useState(null);
    const captchaRef = useRef(null);

    const onLoad = () => {
        captchaRef.current.execute();
    };

    const [buttonState, setBS] = useState(false);

    return (
        <Card.Body style={{ textAlign: "left", padding: "20px", }}>
            <Form id="emailPinForm" onSubmit={(e) => e.preventDefault()}>
                <h6><strong>Step 4 of 6</strong></h6>
                <h4 style={{ fontWeight: "bold", fontSize: "1.5vw" }}>Email Check</h4>
                <ol>
                    <Form.Group>
                        <li><Form.Label htmlFor="name" style={{ fontWeight: "bold" }}>Authentication PIN Sent To Your Email on File: <span className="required">(required)</span></Form.Label></li>
                        <Form.Control type="text" name="emailPin" id="emailPin" required />
                    </Form.Group>
                    <Container style={{ display: "flex", flexDirection: "row", margin: "0", padding: "0", marginTop: "10px", }}>
                        <HCaptcha
                            sitekey={process.env.REACT_APP_HCAPTCHA_API_KEY}
                            onLoad={onLoad}
                            onVerify={setToken}
                            ref={captchaRef}
                        />
                    </Container>
                </ol>
                <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={(e) => {
                        let formData = Object.fromEntries(new FormData(document.forms.emailPinForm).entries());
                        formData.authKey = process.env.REACT_APP_VOTE_API_KEY;
                        formData.remoteIp = props.aio.ip;
                        formData.hcaptchaResponse = token;
                        let pass = true;
                        Object.values(formData).forEach(val => {
                            if (props.aio.valueCheck(val)) pass = false;
                        });
                        if (pass && token !== null) {
                            setBS(true);
                            axios.post("https://api.smartvoting.cc/v1/Vote/Step/4", formData, {
                                headers: { Authorization: `Bearer ${props.aio.jwt}` }
                            }).then(res => {
                                props.aio.setCandidates(res.data);
                                props.aio.nextStep()
                            }, err => props.aio.setStep(9));
                        }
                        if (token === null || token === undefined || !token) e.preventDefault();
                    }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        {
                            buttonState ?
                                <p style={{ margin: "0" }}>Loading < FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faSpinner} className="fa-spin" /></p> :
                                <p style={{ margin: "0" }}>Next <FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} /></p>
                        }
                    </Button>
                </Container>
            </Form>
        </Card.Body>
    );
}

function CastVote(props) {
    const [checkedCandidate, setCC] = useState(null);
    const [buttonState, setBS] = useState(false);

    return (
        <Card.Body style={{ textAlign: "left", padding: "20px", }}>
            <h6><strong>Step 5 of 6</strong></h6>
            <h4 style={{ fontWeight: "bold", fontSize: "1.5vw" }}>Cast Vote</h4>
            <Table striped hover>
                <thead>
                    <tr>
                        <th></th>
                        <th>Candidate Name</th>
                        <th>Political Party</th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: props.aio.candidates.length }).map((_, index) => (
                        <tr key={index} onClick={() => {
                            let isBoxAlreadyChecked = document.getElementById(index).checked;
                            let checkboxes = document.getElementsByClassName('candidateCheckbox');
                            for (let i = 0; checkboxes[i]; ++i) {
                                if (checkboxes[i].checked) {
                                    checkboxes[i].checked = false;
                                    setCC(null);
                                    break;
                                }
                            }
                            if (!isBoxAlreadyChecked) {
                                document.getElementById(index).checked = !document.getElementById(index).checked;
                                setCC(document.getElementById(index).value);
                            }

                        }} className="candidateRow">
                            <td>
                                <Container className="provisional gc-checklist" style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                                    <ul style={{ listStyleType: "none", }}>
                                        <li className="checkbox">
                                            <input className="candidateCheckbox" type="checkbox" name="candidates" value={JSON.stringify(props.aio.candidates[index])} id={index} />
                                            <label htmlFor={index}><a></a></label>
                                        </li>
                                    </ul>
                                </Container>
                            </td>
                            <td><p>{props.aio.candidates[index].firstName + " " + props.aio.candidates[index].lastName}</p></td>
                            <td><p>{props.aio.candidates[index].partyName}</p></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                <Button onClick={() => {
                    if (!props.aio.valueCheck(checkedCandidate)) {
                        setBS(true);
                        props.aio.setCV(JSON.parse(checkedCandidate));
                        let formData = {
                            authKey: process.env.REACT_APP_VOTE_API_KEY,
                            remoteIp: props.aio.ip,
                            candidateId: Number(JSON.parse(checkedCandidate).candidateId),
                            ridingId: Number(JSON.parse(checkedCandidate).ridingId)
                        }
                        axios.post("https://api.smartvoting.cc/v1/Vote/Step/5", formData, {
                            headers: { Authorization: `Bearer ${props.aio.jwt}` }
                        }).then(res => {
                            props.aio.setJWT(res.data)
                            props.aio.nextStep();
                        }, err => { });
                    }
                    else {
                        alert("Please select a candidate before continuing!")
                    }
                }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                    {
                        buttonState ?
                            <p style={{ margin: "0" }}>Loading < FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faSpinner} className="fa-spin" /></p> :
                            <p style={{ margin: "0" }}>Next <FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} /></p>
                    }
                </Button>
            </Container>
        </Card.Body>
    );
}

function ConfirmVote(props) {
    const [token, setToken] = useState(null);
    const captchaRef = useRef(null);

    const onLoad = () => {
        captchaRef.current.execute();
    };

    const [buttonState, setBS] = useState(false);

    return (
        <Card.Body style={{ textAlign: "left", padding: "20px", }}>
            <h6><strong>Step 6 of 6</strong></h6>
            <h4 style={{ fontWeight: "bold", fontSize: "1.5vw" }}>Confirm Vote</h4>

            <h1>You have made the following selection:</h1>
            <h1 style={{ textTransform: "uppercase" }}>{props.aio.cv.firstName + " " + props.aio.cv.lastName}</h1>
            <h1 style={{ textTransform: "uppercase" }}>{props.aio.cv.partyName}</h1>
            <h2>If you are happy with this selection, please complete the security captcha and click next</h2>
            <h2 style={{ textTransform: "uppercase", fontWeight:"bold", }}>Note: you will not be able to change your selection after clicking next.</h2>
            <Container style={{ display: "flex", flexDirection: "row", margin: "0", padding: "0", marginTop: "10px", }}>
                <HCaptcha
                    sitekey={process.env.REACT_APP_HCAPTCHA_API_KEY}
                    onLoad={onLoad}
                    onVerify={setToken}
                    ref={captchaRef}
                />
            </Container>
            <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                <Button onClick={(e) => { props.aio.prevStep(e); }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                    {<FontAwesomeIcon style={{ float: "left", marginTop: "7px" }} icon={faChevronLeft} />}
                    Previous
                </Button>
                <Button onClick={(e) => {
                    if (token !== null) {

                        let formData = {
                            authKey: process.env.REACT_APP_VOTE_API_KEY,
                            remoteIp: props.aio.ip,
                            userConfirmation: true,
                            hcaptchaResponse: token
                        }
                        setBS(true);
                        axios.post("https://api.smartvoting.cc/v1/Vote/Step/6", formData, {
                            headers: {
                                'Authorization': `Bearer ${props.aio.jwt}`,
                                'Access-Control-Allow-Origin': `*`
                            }
                        }).then(res => { props.aio.nextStep(); }, err => props.aio.setStep(9));
                    }
                    if (token === null || token === undefined || token === false) e.preventDefault();
                }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                    {
                        buttonState ?
                            <p style={{ margin: "0" }}>Loading < FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faSpinner} className="fa-spin" /></p> :
                            <p style={{ margin: "0" }}>Next <FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} /></p>
                    }
                </Button>
            </Container>
        </Card.Body>
    );
}

function FinalConfirmation() {
    return (
        <Card.Body style={{ textAlign: "left", padding: "20px", }}>
            <h4 style={{ fontWeight: "bold", fontSize: "1.5vw" }}>Final Confirmation</h4>

            <h2>Your ballot has been successfully recorded in the ledger database.</h2>
            <h2>Please note that the results of the election will not be released until the last polling station closes.</h2>
            <h2>You will receive an email receipt as proof you have voted.</h2>
            <h2>Please click next to return to the home page.</h2>

            <Button onClick={(e) => window.location.href = "/"} type="submit" className="btn btn-purple">Back to Home Page</Button>
        </Card.Body>
    );
}

function Error() {
    return (
        <Card.Body style={{ textAlign: "left", padding: "20px", }}>
            <h4 style={{ fontWeight: "bold", fontSize: "1.5vw" }}>Error</h4>

            <h2>It seems your garbage doesn't match what's in our system. Go away</h2>

            <Button onClick={(e) => window.location.href = "/"} type="submit" className="btn btn-purple">Back to Home Page</Button>
        </Card.Body>
    );
}