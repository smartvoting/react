import React, { useState, useEffect, useRef } from "react";
import { Container, Form, Button, Accordion, Row, Col } from "react-bootstrap";
import courseOutline from '../../files/courseOutline.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import axios from 'axios'

export default function Registration() {

    const [state, setState] = useState({
        step: 1
    });
    const [currentUser, setCU] = useState(null);
    const [searchString, setSS] = useState(null);
    const [pass, setPass] = useState(false);
    const [reason, setReason] = useState("");

    const allInOne = {
        currentUser: currentUser,
        setCU: function (cu) {
            setCU(cu);
        },
        searchString: searchString,
        setSS: function (ss) {
            setSS(ss);
        },
        pass: pass,
        setPass: function (pass) {
            setPass(pass);
        },
        reason: reason,
        setReason: function (reason) {
            setReason(reason);
        },
        prevStep: function () {
            setState({ step: state.step - 1 });
        },
        nextStep: function () {
            setState({ step: state.step + 1 });
        },
        setStep: function (newStep) {
            setState({ step: newStep });
        },
        valueCheck: function (i) {
            return i === "" || i === undefined || i === null || i.length === 0;
        }
    };

    const step = state.step;
        
    switch (step) {
        case 1: return (<Welcome aio={allInOne}/>);
        case 2: return (<Privacy aio={allInOne} />)
        case 3: return (<Eligibility aio={allInOne}/>)
        case 4: return (<PersonalInfo aio={allInOne} />)
        case 5: return (<Review aio={allInOne} />)
        case 6: return (<Results aio={allInOne} />)
        default: return (null)
    }
}

function Welcome(props) {
    return (
        <Container style={{ minWidth: "100%", fontSize: "1.2vw", }}>
            <Form onSubmit={(e) => {
                e.preventDefault();
                if (document.getElementById("tos").checked) props.aio.nextStep();
            }}>
                <h2 style={{ fontWeight: "bold" }}>Welcome</h2>
                <hr />
                <p>Use this service to:</p>
                <ul>
                    <li>check if you're registered to vote.</li>
                    <li>update the address on your voter registration.</li>
                    <li>register to vote.</li>
                </ul>
                <hr />
                <strong style={{ fontSize: "1.4vw", }}>PLEASE READ BEFORE CONTINUING</strong>
                <p>Under the <a href="https://laws-lois.justice.gc.ca/eng/acts/e-2.01/" target="__blank">Canada Elections Act (S.C. 2000, c. 9)</a>, it is illegal to make false statements about voter registration.</p>
                <p>Please be aware that this website was made for <a href={courseOutline} target="_blank">George Brown College's Winter 2022 Capstone Project</a> and is for educational purposes only. While information on ridings, locations, and history is true, all voter and candidate information is not real and has been generated using our own programs. Any similarity to actual persons, living or dead, is purely coincidental.</p>
                <p>If you'd like to see if you are actually registered to vote, please <a href="https://www.elections.ca/content.aspx?section=vot&dir=reg&document=index&lang=e" target="_blank">Click Here</a> to go to Election Canada's official service.</p>
                <br />
                <input type="checkbox" id="tos" style={{ scale: "1.5", marginLeft: "5px", cursor: "pointer" }} required />
                <Form.Label htmlFor="tos" style={{ fontWeight: "bold", marginLeft: "10px", cursor: "pointer" }}> I have read the above statement and am aware that this service does not show that I will be registered to vote.</Form.Label>
                <br />
                <Button type="submit" className="btn btn-purple">Start</Button>
            </Form>
        </Container>
    );
}

function Privacy(props) {
    return (
        <Container style={{ minWidth: "100%", fontSize: "1.2vw", }}>
            <h2 style={{ fontWeight: "bold" }}>Privacy and Security</h2>
            <ul>
                <li>The personal information you provide is collected under the authority of the Canada Elections Act and is required to update or include your personal information in the National Register of Electors.</li>
                <li>Your personal information is protected under the Privacy Act. Please consult the Privacy Notice for more information on the collection, use and protection of your personal information.</li>
                <li>As part of its security measures, Elections Canada captures the Internet Protocol (IP) address of computers used to access the Online Voter Registration Service to enable follow-up and verification.</li>
            </ul>
            <p><strong>This service is for personal use only.</strong> Please note that it is illegal under the Canada Elections Act to make false statements about voter registration. Those convicted face penalties.</p>
            <strong>Select "Next" to continue.</strong>
            <br />
            <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                <Button onClick={() => { props.aio.prevStep(); }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                    {<FontAwesomeIcon style={{ float: "left", marginTop: "7px" }} icon={faChevronLeft} />}
                    Previous
                </Button>
                <Button onClick={() => { props.aio.nextStep(); }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                    Next
                    {<FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} />}
                </Button>
            </Container>
        </Container>
    );
}

function Eligibility(props) {
    return (
        <Container style={{ minWidth: "100%", fontSize: "1.2vw", }}>
            <Form id="eligibilityForm" onSubmit={(e) => {
                e.preventDefault();
                let formData = Object.fromEntries(new FormData(document.forms.eligibilityForm).entries());
                let pass = true;
                Object.values(formData).forEach(entry => {
                    if (entry === "No") {
                        props.aio.setReason("The <em>Canada Elections Act</em> states that you must have a Canadian citizenship and be 18 or older on election day to vote.");
                        pass = false;
                    }
                })
                if (pass) props.aio.nextStep();
                else props.aio.setStep(6);
            }} >
                <h6><strong>Step 1 of 4</strong></h6>
                <h2 style={{ fontWeight: "bold", }}>Eligibility</h2>
                <hr />
                <Accordion className="registrationAccordion">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><strong>More information about eligibility requirements</strong></Accordion.Header>
                        <Accordion.Body>
                            <h4 style={{ fontWeight: "bold" }}>Information</h4>
                            <ul>
                                <li>To be eligible to vote in a Canadian federal election, you must be a Canadian citizen and be at least 18 years old on election day.</li>
                                <li>To be added to the International Register of Electors, there is a separate registration process. </li>
                                <li>Canadian Forces (CF) electors can update their information online by providing their <strong>Service Number.</strong></li>
                                <li>You are a <strong>CF elector if you meet the following three conditions:</strong>
                                    <ul>
                                        <li>You are a Canadian citizen.</li>
                                        <li>You are at least 18 years of age on civilian polling day.</li>
                                        <li>You are a regular or reserve member of the Canadian Armed Forces.</li>
                                    </ul>
                                </li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <br />
                <strong>Please answer the following questions:</strong>
                <Container style={{ border: "2px solid black", minWidth: "100%", backgroundColor: "#f2f2f2", padding: "20px", }}>
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
                        <li style={{ paddingBottom: "20px" }}>
                            <strong>Are you 18 years of age or older? </strong><span className="required">(required)</span>
                            <br />
                            <fieldset id="question2" style={{ float: "left", width: "15%", padding: "0", display: "flex", }}>
                                <input type="radio" required id="age1" name="question2" value="Yes" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                                <Form.Label htmlFor="age1" style={{ marginRight: "50px", cursor: "pointer" }}>Yes</Form.Label>
                                <input type="radio" id="age2" name="question2" value="No" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                                <Form.Label htmlFor="age2" style={{ cursor: "pointer" }}>No</Form.Label>
                            </fieldset>
                        </li>
                        <br />
                        <li style={{ paddingBottom: "20px" }}>
                            <strong>Is your home address in Canada? </strong><span className="required">(required)</span>
                            <br />
                            <fieldset id="question3" style={{ float: "left", width: "15%", padding: "0", display: "flex", }}>
                                <input type="radio" required id="add1" name="question3" value="Yes" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                                <Form.Label htmlFor="add1" style={{ marginRight: "50px", cursor: "pointer" }}>Yes</Form.Label>
                                <input type="radio" id="add2" name="question3" value="No" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                                <Form.Label htmlFor="add2" style={{ cursor: "pointer" }}>No</Form.Label>
                            </fieldset>
                        </li>
                    </ol>
                </Container>
                <br />
                <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={() => { props.aio.prevStep(); }} type="button" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        {<FontAwesomeIcon style={{ float: "left", marginTop: "7px" }} icon={faChevronLeft} />}
                        Previous
                    </Button>
                    <Button type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        Next
                        {<FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} />}
                    </Button>
                </Container>
            </Form>
        </Container>
    );
}

function PersonalInfo(props) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"];
    const provinces = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon"];

    const [buttonState, setBS] = useState(false);

    return (
        <Container style={{ minWidth: "100%", fontSize: "1.2vw", }}>
            <Form id="personalInfoForm" onSubmit={(e) => {
                e.preventDefault();
                let formData = Object.fromEntries(new FormData(document.forms.personalInfoForm).entries());

                //Getting Select Menus
                formData.birthDate = new Date(document.getElementById("year").value, document.getElementById("month").value, document.getElementById("day").value).toISOString();
                formData.province = document.getElementById("province").value;

                //Extra stuff to make sure form is filled
                if (props.aio.valueCheck(formData.middleName)) formData.middleName = "N/A";
                if (props.aio.valueCheck(formData.unitNumber)) formData.unitNumber = "N/A";
                if (isNaN(formData.gender)) formData.gender = "";

                let pass = true;
                Object.values(formData).forEach(val => {
                    if (props.aio.valueCheck(val)) pass = false;
                });
                if (pass) setBS(true);
                setTimeout(function () {
                    if (pass) {
                        formData.isCitizen = true
                        formData.gender = Number(formData.gender);
                        formData.province = Number(formData.province);
                        formData.streetNumber = Number(formData.streetNumber);
                        let searchString = "Search?FirstName=" + formData.firstName + (formData.middleName !== "N/A" ? "&MiddleName=" + formData.middleName : "") + "&LastName=" + formData.lastName + "&StreetName=" + formData.streetName + "&City=" + formData.city + "&PostCode=" + formData.postCode;
                        searchString = searchString.replace(/ /g, "%20");
                        props.aio.setSS(searchString);
                        props.aio.setCU(formData);
                        props.aio.nextStep();
                    }
                }, 1000);
            }} >
                <h6><strong>Step 2 of 4</strong></h6>
                <h2 style={{ fontWeight: "bold", }}>Personal Information</h2>
                <hr />
                <Accordion className="registrationAccordion">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><strong>More information about personal information</strong></Accordion.Header>
                        <Accordion.Body>
                            <h4 style={{ fontWeight: "bold" }}>Information</h4>
                            <ul>
                                <li>Enter the names you use on official documents such as your driver's licence, income tax return or passport.</li>
                                <li>In keeping with the Policy Direction to Modernize the Government of Canada's Sex and Gender Information Practices, individuals are provided with at least three options (male, female, another gender) with the third option "another gender" being respectful and inclusive of people with other gender identities. When using Elections Canada's Online Voter Registration Service, the option Another Gender would be selected by an individual who does not identify as either male or female.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <br />
                <strong>Please answer the following questions:</strong>
                <Container style={{ border: "2px solid black", minWidth: "100%", backgroundColor: "#f2f2f2", padding: "20px", }}>
                    <Form.Group>
                        <Form.Label htmlFor="firstName" style={{ fontWeight: "bold" }}>First Name: <span className="required">(required)</span></Form.Label>
                        <Form.Control type="text" name="firstName" id="firstName" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="middleName" style={{ fontWeight: "bold" }} data-tip="Please include a middle name if you have one." className="tip-above">Middle Name: <span className="required">*</span></Form.Label>
                        <Form.Control type="text" name="middleName" id="middleName" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label htmlFor="lastName" style={{ fontWeight: "bold" }}>Last Name: <span className="required">(required)</span></Form.Label>
                        <Form.Control type="text" name="lastName" id="lastName" required />
                    </Form.Group>
                    <strong>Date of Birth: </strong><span className="required">(required)</span>
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
                    <strong>Gender: </strong><span className="required">(required)</span>
                    <br />
                    <fieldset id="gender" style={{ float: "left", marginLeft:"10px", width: "100%", padding: "0", display: "flex", }}>
                        <input type="radio" id="gender1" name="gender" required value="1" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                        <Form.Label htmlFor="gender1" style={{ marginRight: "50px", cursor: "pointer" }}>Male</Form.Label>
                        <input type="radio" id="gender2" name="gender" value="2" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                        <Form.Label htmlFor="gender2" style={{ marginRight: "50px", cursor: "pointer" }}>Female</Form.Label>
                        <input type="radio" id="gender3" name="gender" value="3" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                        <Form.Label htmlFor="gender3" style={{ cursor: "pointer" }}>Another Gender</Form.Label>
                    </fieldset>
                    <br />
                    <br />
                    <Row>
                        <Col md={4}>
                            <Form.Group>
                                <Form.Label style={{ fontWeight: "bold" }}>Postal Code: <span className="required">(required)</span></Form.Label>
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
                            <Form.Label style={{ fontWeight: "bold" }}>Street Name: <span className="required">(required)</span></Form.Label>
                            <Form.Control type="text" id="streetName" name="streetName" required />
                        </Col>
                        <Col md={3}>
                            <Form.Label style={{ fontWeight: "bold" }}>Street Number: <span className="required">(required)</span></Form.Label>
                            <Form.Control type="number" id="streetNumber" name="streetNumber" required />
                        </Col>
                        <Col md={2}>
                            <Form.Group>
                                <Form.Label style={{ fontWeight: "bold" }} data-tip="Please include a unit number if you have one." className="tip-above">Unit/Suite/Apt: <span className="required">*</span></Form.Label>
                                <Form.Control type="text" id="unitNumber" name="unitNumber" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <br/>
                </Container>
                <br />
                <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={() => { props.aio.prevStep(); }} type="button" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        {<FontAwesomeIcon style={{ float: "left", marginTop: "7px" }} icon={faChevronLeft} />}
                        Previous
                    </Button>
                    <Button disabled={buttonState} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        {
                            buttonState ?
                            <p style={{ margin: "0" }}>Loading < FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faSpinner} className="fa-spin" /></p> :
                            <p style={{ margin: "0" }}>Next <FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} /></p>
                        }
                    </Button>
                </Container>
            </Form>
        </Container>
    );
}

function Review(props) {
    const [token, setToken] = useState(null);
    const captchaRef = useRef(null);

    const onLoad = () => {
        captchaRef.current.execute();
    };

    const [buttonState, setBS] = useState(false);

    return (
        <Container style={{ minWidth: "100%", fontSize: "1.2vw", }}>
            <Form onSubmit={(e) => {
                e.preventDefault();
                if (props.aio.currentUser !== null && token !== null) {
                    setBS(true)
                    console.log(props.aio.searchString);
                    axios.post("https://api.smartvoting.cc/v1/Voters/", props.aio.searchString).then(res => {
                        console.log(res);
                        props.aio.setPass(true);
                        props.aio.nextStep();
                    }).catch(err => {
                        if (err.response === 401) props.aio.setReason("Please disable any VPNs you may be using on this website. Thank you!");
                        else props.aio.setReason("Please recheck your information carefully to make sure everything is correct on submission.");
                        props.aio.setStep(6);
                    });
                }
                
            }}>
                <h6><strong>Step 3 of 4</strong></h6>
                <h2 style={{ fontWeight: "bold", }}>Review Information</h2>
                <hr />
                <p>This is the information you entered. If you need to make a correction, return to the previous page.<br />Otherwise, please submit your information to see if you are registered at the address provided.</p>

                <h4 style={{ fontWeight: "bold", textDecoration: "underline", }}>Personal Information</h4>
                <h5 style={{ fontWeight: "bold", }}>Name (first / middle / last):</h5>
                <p>{props.aio.currentUser.firstName} {props.aio.currentUser.middleName !== "N/A" ? props.aio.currentUser.middleName + " " : null}{props.aio.currentUser.lastName}</p>
                <h5 style={{ fontWeight: "bold", }}>Date of birth (year / month / day):</h5>
                <p>{props.aio.currentUser.birthDate}</p>
                <h5 style={{ fontWeight: "bold", }}>Gender:</h5>
                <p>{props.aio.currentUser.gender}</p>
                <h5 style={{ fontWeight: "bold", }}>Home Address:</h5>
                <p>{props.aio.currentUser.streetNumber} {props.aio.currentUser.streetName} <br />{props.aio.currentUser.city}, {props.aio.currentUser.province} - {props.aio.currentUser.postCode}</p>
                <HCaptcha
                    sitekey={process.env.REACT_APP_HCAPTCHA_API_KEY}
                    onLoad={onLoad}
                    onVerify={setToken}
                    ref={captchaRef}
                />
                <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={() => { props.aio.prevStep(); }} type="button" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        {<FontAwesomeIcon style={{ float: "left", marginTop: "7px" }} icon={faChevronLeft} />}
                        Previous
                    </Button>
                    <Button disabled={buttonState} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        {
                            buttonState ?
                            <p style={{ margin: "0" }}>Loading < FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faSpinner} className="fa-spin" /></p> :
                            <p style={{ margin: "0" }}>Submit <FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} /></p>
                        }
                    </Button>
                </Container>
            </Form>
        </Container>
    );
}

function Results(props) {
    return (
        <Container style={{ minWidth: "100%", fontSize: "1.2vw", }}>
            <Form onSubmit={(e) => { e.preventDefault(); }}>
                <h6><strong>Step 4 of 4</strong></h6>
                <h2 style={{ fontWeight: "bold", }}>Results</h2>
                <hr />
                <Container style={{ border: "2px solid black", minWidth: "100%", backgroundColor: "#f2f2f2", padding: "20px", }}>
                    {props.aio.pass === true ? 
                        <><h3 style={{ fontWeight:"bold"}}>You are registered to vote at the address you provided.</h3>
                        <p>You should receive a voter information card in the mail which can be used to vote online, or in person.</p></>
                        :
                        <><h3 style={{ fontWeight: "bold" }}>You are not eligible to vote in a federal election based on the information you provided.</h3>
                            <p style={{ margin: "0", }} dangerouslySetInnerHTML={{ __html: props.aio.reason }}></p></>
                    }
                </Container>
                <br/>
                <h4 style={{ fontWeight: "bold", }}>Protect your Privacy</h4>
                <p style={{ margin:"0", }}>Do not save filled forms on shared computers at the end of your session</p>
                <ol>
                    <li>Delete any outstanding print jobs,</li>
                    <li>Clear the web browser cache (see FAQs at the top of this page) and</li>
                    <li>Close the browser.</li>
                </ol>

                <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={() => { props.aio.setStep(1); }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        {<FontAwesomeIcon style={{ float: "left", marginTop: "7px" }} icon={faChevronLeft} />}
                        Restart
                    </Button>
                </Container>
            </Form>
        </Container>
    );
}