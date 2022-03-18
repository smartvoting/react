import React, { useState, useEffect } from "react";
import { Container, Card, Form, Button, Row, Col, Table, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import HCaptcha from '@hcaptcha/react-hcaptcha';

export default function Vote() {

    const [state, setState] = useState({
        step: 1,
        fname: "",
        mname: "",
        lname: "",
        year: "",
        month: "",
        day: "",
        gender: "",
        province: "",
        city: "",
        street: "",
        buildingNum: "",
        usa: "",
        meridian: "",
        section: "",
        township: "",
        range: "",
        lot: ""
    });

    function prevStep(e){
        e.preventDefault();
        document.getElementById("hideContainer").style.opacity = "0";
        setTimeout(() => {
            setState({ step: state.step - 1 });
            document.getElementById("hideContainer").style.opacity = "1";
        }, 400);
    }

    function nextStep(e){
        e.preventDefault();
        document.getElementById("hideContainer").style.opacity = "0";
        setTimeout(() => {
            setState({ step: state.step + 1 });
            document.getElementById("hideContainer").style.opacity = "1";
        }, 400);
    }

    function setStep(e, newStep) {
        e.preventDefault();
        setState({ step: newStep });
    }

    useEffect(() => {
        const unloadCallback = (event) => {
            event.preventDefault();
            event.returnValue = "";
            return "";
        };

        window.addEventListener("beforeunload", unloadCallback);
        return () => window.removeEventListener("beforeunload", unloadCallback);
    }, []);

    const step = state.step;

    return (
        <Container style={{ minWidth: "90%", height: "100vh", display: "flex", alignItems: "center", fontSize: "130%" }}>
            <Container id="hideContainer" style={{ minWidth: "100%", transition: "opacity 0.25s linear" }} >
                {
                    step === 1 ? <Privacy nextStep={(e) => nextStep(e)} /> :
                    step === 2 ? <PersonalInfo nextStep={(e) => nextStep(e)} /> :
                    step === 3 ? <VoterCheck1 nextStep={(e) => nextStep(e)} /> :
                    step === 4 ? <VoterCheck2 nextStep={(e) => nextStep(e)} /> :
                    step === 5 ? <VoterCheck3 nextStep={(e) => nextStep(e)} /> :
                    step === 6 ? <CastVote nextStep={(e) => nextStep(e)} /> :
                    step === 7 ? <ConfirmVote prevStep={(e) => prevStep(e)} nextStep={(e) => nextStep(e)} /> :
                    step === 8 ? <FinalConfirmation  /> :
                    null
                }
            </Container>
        </Container>
    );
}


function Privacy(props) {
    return (
        <Card style={{ borderRadius: "15px", border: "5px solid #513A77" }}>
            <Card.Header className="text-center" style={{ fontWeight: "bold", fontSize: "150%", }}>Cast Your Secure Digital Ballot</Card.Header>
            <Card.Body style={{ textAlign: "left", padding: "20px", }}>
                <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Privacy and Security Notice</h4>
                <ul>
                    <li>The personal information you provide <strong>will not</strong> be collected under the authority of the Canada Elections Act. As stated in other sections of this website, <strong>this is for educational purposes only</strong> and is by no means a real voting platform for Elections Canada or the Government of Canada. All information for voters and candidates is generated by our own programs and any similarity to actual persons, living or dead, or actual events, is purely coincidental.</li>
                    <li>Your personal information is protected under the Privacy Act. Please consult the Privacy Notice for more information on the collection, use and protection of your personal information.</li>
                    <li>As part of its security measures, Smart Voting captures the Internet Protocol (IP) address of computers used to access this Secure Voting Service to enable follow-up, verification, and VPN checks</li>
                    <li><strong>Please note that once you start the voting process, you cannot backtrack (unless confirming your vote). Please make sure you have a stable internet connection, are in a private area, and have about 15 minutes to complete the entire process. Please only use the navigation tools found in the form, and do not click the back button in your browser.</strong></li>
                </ul>
                <p>For this Form, you will need the following:</p>
                <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={(e) => { props.nextStep(e); }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        Start
                        {<FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} />}
                    </Button>
                </Container>
            </Card.Body>
        </Card>
    );
}

function PersonalInfo(props) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"];
    return (
        <Card style={{ borderRadius: "15px", border: "5px solid #513A77", }}>
            <Card.Header className="text-center" style={{ fontWeight: "bold", fontSize: "150%", }}>Cast Your Secure Digital Ballot</Card.Header>
            <Card.Body style={{ textAlign: "left", padding: "20px", }}>
                <h6><strong>Step 1 of 6</strong></h6>
                <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Personal Information</h4>
                <ol>
                    <li style={{ paddingBottom: "20px" }}>
                        <strong>Are you a Canadian Citizen? </strong><span className="required">(required)</span>
                        <br />
                        <fieldset id="question1" style={{ float: "left", width: "15%", padding: "0", display: "flex", }}>
                            <input type="radio" required id="citizen1" name="question1" value="Yes" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                            <Form.Label htmlFor="citizen1" style={{ marginRight: "50px", cursor: "pointer" }}>Yes</Form.Label>
                            <input type="radio" id="citizen2" name="question1" value="No" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                            <Form.Label htmlFor="citizen2" style={{ cursor: "pointer" }}>No</Form.Label>
                        </fieldset>
                    </li>
                    <br />
                    <Row style={{ width:"100%"}}>
                        <Col md={6}>
                            <li><Form.Label htmlFor="name" style={{ fontWeight: "bold" }}>First Name: <span className="required">(required)</span></Form.Label></li>
                            <Form.Control type="text" name="ct" id="ct" required />
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <li style={{marginLeft:"20px",}}><Form.Label htmlFor="name" style={{ fontWeight: "bold" }}>Last Name: <span className="required">(required)</span></Form.Label></li>
                                <Form.Control type="text" name="text" id="text" maxLength={2} required />
                            </Form.Group>
                        </Col>
                    </Row>
                    <li><strong>Date of Birth: </strong><span className="required">(required)</span></li>
                    <Row style={{ width: "100%" }}>
                        <Col md={6}>
                            <Row>
                                <Col md={4}>
                                    <Form.Group style={{ paddingRight: "10px" }}>
                                        <Form.Label style={{ fontWeight: "bold" }}>Year:</Form.Label>
                                        <Form.Select defaultValue="" id="year">
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
                                        <Form.Select defaultValue="" id="month">
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
                                        <Form.Select defaultValue="" id="day">
                                            <option value="" disabled hidden>(Please Choose One)</option>
                                            {Array.from({ length: 31 }).map((_, index) => (
                                                <option key={index} value={index + 1}>{index + 1}</option>
                                            ))}
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                            </Row>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <li style={{ marginLeft: "20px", }}><Form.Label htmlFor="name" style={{ fontWeight: "bold" }}>Gender: <span className="required">(required)</span></Form.Label></li>
                                <fieldset id="gender" style={{ float: "left", width: "100%", padding: "0", display: "flex", }}>
                                    <input type="radio" required id="gender1" name="gender" value="Male" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                                    <Form.Label htmlFor="gender1" style={{ marginRight: "50px", cursor: "pointer" }}>Male</Form.Label>
                                    <input type="radio" id="gender2" name="gender" value="Female" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                                    <Form.Label htmlFor="gender2" style={{ marginRight: "50px", cursor: "pointer" }}>Female</Form.Label>
                                    <input type="radio" id="gender3" name="gender" value="Another Gender" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                                    <Form.Label htmlFor="gender3" style={{ cursor: "pointer" }}>Another Gender</Form.Label>
                                </fieldset>
                            </Form.Group>
                        </Col>
                    </Row>
                </ol>
                <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={(e) => { props.nextStep(e); }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        Next
                        {<FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} />}
                    </Button>
                </Container>
            </Card.Body>
        </Card>
    );
}

function VoterCheck1(props) {
    return (
        <Card style={{ borderRadius: "15px", border: "5px solid #513A77", }}>
            <Card.Header className="text-center" style={{ fontWeight: "bold", fontSize: "150%", }}>Cast Your Secure Digital Ballot</Card.Header>
            <Card.Body style={{ textAlign: "left", padding: "20px", }}>
                <h6><strong>Step 2 of 6</strong></h6>
                <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Voter Checks Part 1</h4>
                <ol>
                    <Form.Group>
                        <li><Form.Label htmlFor="name" style={{ fontWeight: "bold" }}>Voter Card ID Number: <span className="required">(required)</span></Form.Label></li>
                        <Form.Control type="text" name="ct" id="ct" required />
                    </Form.Group>
                    <Form.Group>
                        <li><Form.Label htmlFor="name" style={{ fontWeight: "bold" }}>Voter Card PIN Number: <span className="required">(required)</span></Form.Label></li>
                        <Form.Control type="text" name="ct" id="ct" required />
                    </Form.Group>
                    <Form.Group>
                        <li><Form.Label htmlFor="name" style={{ fontWeight: "bold" }}>Last 3 Digits of Social Insurance Number: <span className="required">(required)</span></Form.Label></li>
                        <Form.Control type="text" name="ct" id="ct" required />
                    </Form.Group>
                </ol>
                <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={(e) => { props.nextStep(e); }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        Next
                        {<FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} />}
                    </Button>
                </Container>
            </Card.Body>
        </Card>
    );
}

function VoterCheck2(props) {
    return (
        <Card style={{ borderRadius: "15px", border: "5px solid #513A77", }}>
            <Card.Header className="text-center" style={{ fontWeight: "bold", fontSize: "150%", }}>Cast Your Secure Digital Ballot</Card.Header>
            <Card.Body style={{ textAlign: "left", padding: "20px", }}>
                <h6><strong>Step 3 of 6</strong></h6>
                <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Voter Checks Part 2</h4>
                <ol>
                    <Form.Group>
                        <li><Form.Label htmlFor="name" style={{ fontWeight: "bold" }}>2024 Tax Return Line 10100 Amount: <span className="required">(required)</span></Form.Label></li>
                        <Form.Control type="text" name="ct" id="ct" required />
                    </Form.Group>
                    <Form.Group>
                        <li><Form.Label htmlFor="name" style={{ fontWeight: "bold" }}>2024 Tax Return Line 12000: <span className="required">(required)</span></Form.Label></li>
                        <Form.Control type="text" name="ct" id="ct" required />
                    </Form.Group>
                    <Form.Group>
                        <li><Form.Label htmlFor="name" style={{ fontWeight: "bold" }}>2024 Tax Return Line 24500: <span className="required">(required)</span></Form.Label></li>
                        <Form.Control type="text" name="ct" id="ct" required />
                    </Form.Group>
                </ol>
                <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={(e) => { props.nextStep(e); }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        Next
                        {<FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} />}
                    </Button>
                </Container>
            </Card.Body>
        </Card>
    );
}

function VoterCheck3(props) {
    const [token, setToken] = React.useState(null);
    const captchaRef = React.useRef(null);

    const onLoad = () => {
        captchaRef.current.execute();
    };

    React.useEffect(() => {
        if (token) console.log(`hCaptcha Token: ${token}`);
    }, [token]);

    return (
        <Card style={{ borderRadius: "15px", border: "5px solid #513A77", }}>
            <Card.Header className="text-center" style={{ fontWeight: "bold", fontSize: "150%", }}>Cast Your Secure Digital Ballot</Card.Header>
            <Card.Body style={{ textAlign: "left", padding: "20px", }}>
                <h6><strong>Step 4 of 6</strong></h6>
                <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Email Check</h4>
                <ol>
                    <Form.Group>
                        <li><Form.Label htmlFor="name" style={{ fontWeight: "bold" }}>Authentication PIN Sent To Your Email on File: <span className="required">(required)</span></Form.Label></li>
                        <Form.Control type="text" name="ct" id="ct" required />
                    </Form.Group>
                    <Container style={{ display: "flex", flexDirection: "row", margin: "0", padding: "0", marginTop:"10px", }}>
                        <HCaptcha
                            sitekey="38362c30-c18c-47d9-8b7c-bd9a2685be7d"
                            onLoad={onLoad}
                            onVerify={setToken}
                            ref={captchaRef}
                        />
                    </Container>
                </ol>
                <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={(e) => { props.nextStep(e); }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        Next
                        {<FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} />}
                    </Button>
                </Container>
            </Card.Body>
        </Card>
    );
}

function CastVote(props) {
    return (
        <Card style={{ borderRadius: "15px", border: "5px solid #513A77", }}>
            <Card.Header className="text-center" style={{ fontWeight: "bold", fontSize: "150%", }}>Cast Your Secure Digital Ballot</Card.Header>
            <Card.Body style={{ textAlign: "left", padding: "20px", }}>
                <h6><strong>Step 5 of 6</strong></h6>
                <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Cast Vote</h4>
                <Table striped hover>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Candidate Name</th>
                            <th>Political Party</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* ARRAY FOR EACH CANDIDATE. */}
                        <tr>
                            <td>

                                <Container className="provisional gc-checklist">
                                    <ul style={{ listStyleType: "none", marginTop: "20px", }}>
                                        <li className="checkbox">
                                            <input type="checkbox" name="results" value="1" id={0} />
                                            <label htmlFor={0}><a></a></label>
                                        </li>
                                    </ul>

                                </Container>
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
                <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={(e) => { props.nextStep(e); }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        Next
                        {<FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} />}
                    </Button>
                </Container>
            </Card.Body>
        </Card>
    );
}

function ConfirmVote(props) {
    const [token, setToken] = React.useState(null);
    const captchaRef = React.useRef(null);

    const onLoad = () => {
        captchaRef.current.execute();
    };

    React.useEffect(() => {
        if (token) console.log(`hCaptcha Token: ${token}`);
    }, [token]);
    return (
        <Card style={{ borderRadius: "15px", border: "5px solid #513A77", }}>
            <Card.Header className="text-center" style={{ fontWeight: "bold", fontSize: "150%", }}>Cast Your Secure Digital Ballot</Card.Header>
            <Card.Body style={{ textAlign: "left", padding: "20px", }}>
                <h6><strong>Step 6 of 6</strong></h6>
                <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Confirm Vote</h4>

                <h1>You have made the following selection:</h1>
                <h1 style={{ textTransform:"uppercase" }}>TEST{/* CANDIDATE NAME */}</h1>
                <h1 style={{ textTransform: "uppercase" }}>TEST{/* CANDIDATE PARTY */}</h1>
                <h2>If you are happy with this selection, please complete the security captcha and click next</h2>
                <h2 style={{ textTransform: "uppercase" }}>Note: you will not be able to change your selection after clicking next.</h2>
                <Container style={{ display: "flex", flexDirection: "row", margin: "0", padding: "0", marginTop: "10px", }}>
                    <HCaptcha
                        sitekey="38362c30-c18c-47d9-8b7c-bd9a2685be7d"
                        onLoad={onLoad}
                        onVerify={setToken}
                        ref={captchaRef}
                    />
                </Container>
                <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={(e) => { props.prevStep(e); }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        {<FontAwesomeIcon style={{ float: "left", marginTop: "7px" }} icon={faChevronLeft} />}
                        Previous
                    </Button>
                    <Button onClick={(e) => { props.nextStep(e); }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        Next
                        {<FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} />}
                    </Button>
                </Container>
            </Card.Body>
        </Card>
    );
}

function FinalConfirmation() {
    return (
        <Card id="9" style={{ borderRadius: "15px", border: "5px solid #513A77", }}>
            <Card.Header className="text-center" style={{ fontWeight: "bold", fontSize: "150%", }}>Cast Your Secure Digital Ballot</Card.Header>
            <Card.Body style={{ textAlign: "left", padding: "20px", }}>
                <h4 style={{ fontWeight: "bold", fontSize: "125%" }}>Final Confirmation</h4>

                <h2>Your ballot has been successfully recorded in the ledger database.</h2>
                <h2>Please note that the results of the election will not be released until the last polling station closes.</h2>
                <h2>You will receive an email receipt as proof you have voted.</h2>
                <h2>Please click next to return to the home page.</h2>
                    
                <Button onClick={(e) => window.location.href ="/"} type="submit" className="btn btn-purple">Back to Home Page</Button>
            </Card.Body>
        </Card>
    );
}