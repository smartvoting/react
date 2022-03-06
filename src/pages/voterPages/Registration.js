import React from "react";
import { Container, Form, Button, Accordion } from "react-bootstrap";
import courseOutline from '../../files/courseOutline.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export default class Registration extends React.Component {
    state = {
        step: 5,
        fname: "",
        mname: "",
        lname: "",
        year: "",
        month: "",
        day: "",
        gender: "",
    }

    prevStep = (e) => {
        e.preventDefault();
        this.setState({ step: this.state.step - 1 });
    }

    nextStep = (e) => {
        e.preventDefault();
        this.setState({ step: this.state.step + 1 });
    }

    setStep = (e, newStep) => {
        e.preventDefault();
        this.setState({ step: newStep });
    }

    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    }

    render() {
        const { step } = this.state;
        
        switch (step) {
            case 1: return (<Welcome nextStep={(e) => this.nextStep(e)}/>);
            case 2: return (<Privacy prevStep={(e) => this.prevStep(e) } nextStep={(e) => this.nextStep(e)} />)
            case 3: return ((<Eligibility prevStep={(e) => this.prevStep(e)} nextStep={(e) => this.nextStep(e)} />) )
            case 4: return ((<PersonalInfo prevStep={(e) => this.prevStep(e)} nextStep={(e) => this.nextStep(e)} />))
            case 5: return ((<Address prevStep={(e) => this.prevStep(e)} nextStep={(e) => this.nextStep(e)} />))
            default:
                return (null)
        }
    }
}

function Welcome(props) {
    return (
        <Container style={{ minWidth: "100%", fontSize: "130%", }}>
            <Form>
                <h2 style={{ fontWeight: "bold" }}>Welcome</h2>
                <hr />
                <p>Use this service to:</p>
                <ul>
                    <li>check if you're registered to vote.</li>
                    <li>update the address on your voter registration.</li>
                    <li>register to vote.</li>
                </ul>
                <hr />
                <strong style={{ fontSize: "130%", }}>PLEASE READ BEFORE CONTINUING</strong>
                <p>Under the <a href="https://laws-lois.justice.gc.ca/eng/acts/e-2.01/" target="__blank">Canada Elections Act (S.C. 2000, c. 9)</a>, it is illegal to make false statements about voter registration.</p>
                <p>Please be aware that this website was made for <a href={courseOutline} target="_blank">George Brown College's Winter 2022 Capstone Project</a> and is for educational purposes only. While all information on Ridings, Candidates, and Past Elections is true, all voter info is not real and has been generated using our own programs.</p>
                <p>If you'd like to see if you are actually registered to vote, please <a href="https://www.elections.ca/content.aspx?section=vot&dir=reg&document=index&lang=e" target="_blank">Click Here</a> to go to Election Canada's official service.</p>
                <br />
                <input type="checkbox" id="tos" style={{ scale: "1.5", }} required />
                <label htmlFor="tos" style={{ fontWeight: "bold", marginLeft: "10px" }}> I have read the above statement and am aware that this service does not show that I will be registered to vote.</label>
                <br />
                <br />
                <Button
                    onClick={(e) => { if (document.getElementById("tos").checked) props.nextStep(e); }}
                    type="submit"
                    className="btn btn-purple">Start</Button>
            </Form>
        </Container>
    );
}

function Privacy(props) {
    return (
        <Container style={{ minWidth: "100%", fontSize: "130%", }}>
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
                <Button onClick={(e) => { props.prevStep(e); }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                    {<FontAwesomeIcon style={{ float: "left", marginTop: "7px" }} icon={faChevronLeft} />}
                    Previous
                </Button>
                <Button onClick={(e) => { props.nextStep(e); }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                    Next
                    {<FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} />}
                </Button>
            </Container>
        </Container>
    );
}

function Eligibility(props) {
    return (
        <Container style={{ minWidth: "100%", fontSize: "130%", }}>
            <Form>
                <h6><strong>Step 1 of 5</strong></h6>
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
                        <br/>
                        <li style={{ paddingBottom: "20px" }}>
                            <strong>Are you a Canadian Forces Elector? </strong><span className="required">(required)</span>
                            <br />
                            <fieldset id="question4" style={{ float: "left", width: "15%", padding: "0", display: "flex", }}>
                                <input type="radio" required id="CF1" name="question4" value="Yes" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                                <Form.Label htmlFor="CF1" style={{ marginRight: "50px", cursor: "pointer" }}>Yes</Form.Label>
                                <input type="radio" id="CF2" name="question4" value="No" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                                <Form.Label htmlFor="CF2" style={{ cursor: "pointer" }}>No</Form.Label>
                            </fieldset>
                        </li>
                    </ol>
                </Container>
                <br />
                <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={(e) => { props.prevStep(e); }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        {<FontAwesomeIcon style={{ float: "left", marginTop: "7px" }} icon={faChevronLeft} />}
                        Previous
                    </Button>
                    <Button onClick={(e) => {
                        if (document.querySelector('input[name="question1"]:checked').value === "No" || document.querySelector('input[name="question2"]:checked').value === "No" || document.querySelector('input[name="question3"]:checked').value === "No") this.setStep(e, 5);
                        props.nextStep(e);
                    }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
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
    return (
        <Container style={{ minWidth: "100%", fontSize: "130%", }}>
            <Form>
                <h6><strong>Step 2 of 5</strong></h6>
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
                        <Form.Label style={{ fontWeight: "bold" }}>First Name: <span className="required">(required)</span></Form.Label>
                        <Form.Control type="text" id="fname" name="fname" required />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label style={{ fontWeight: "bold" }}>Middle Name:</Form.Label>
                        <Form.Control type="text" id="mname" name="mname" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label style={{ fontWeight: "bold" }}>Last Name: <span className="required">(required)</span></Form.Label>
                        <Form.Control type="text" id="lname" name="lname" required />
                    </Form.Group>
                    <strong>Date of Birth: </strong><span className="required">(required)</span>
                    <Container style={{ maxWidth: "50%", display: "flex", flexDirection: "row", margin: "0", padding: "0", fontSize: "90%", }}>
                        <Form.Group style={{ paddingRight: "10px" }}>
                            <Form.Label style={{ fontWeight: "bold" }}>Year:</Form.Label>
                            <Form.Select id="year">
                                <option style={{ display: "none", }}>(Please Choose One)</option>
                                {Array.from({ length: ((new Date().getFullYear() - 17) - (new Date().getFullYear() - 120)) }).map((_, index) => (
                                    <option key={index} value={index + new Date().getFullYear() - 120}>{index + new Date().getFullYear() - 120}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group style={{ paddingRight: "10px" }}>
                            <Form.Label style={{ fontWeight: "bold" }}>Month:</Form.Label>
                            <Form.Select id="month">
                                <option style={{ display: "none", }}>(Please Choose One)</option>
                                {Array.from({ length: 12 }).map((_, index) => (
                                    <option key={index} value={index}>{months[index]}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label style={{ fontWeight: "bold" }}>Day:</Form.Label>
                            <Form.Select id="day">
                                <option style={{ display: "none", }}>(Please Choose One)</option>
                                {Array.from({ length: 31 }).map((_, index) => (
                                    <option key={index} value={index + 1}>{index + 1}</option>
                                ))}
                            </Form.Select>
                        </Form.Group>

                    </Container>
                    <strong>Gender: </strong><span className="required">(required)</span>
                    <br />
                    <fieldset id="gender" style={{ float: "left", width: "50%", padding: "0", display: "flex", }}>
                        <input type="radio" required id="gender1" name="gender" value="Male" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                        <Form.Label htmlFor="gender1" style={{ marginRight: "50px", cursor: "pointer" }}>Male</Form.Label>
                        <input type="radio" id="gender2" name="gender" value="Female" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                        <Form.Label htmlFor="gender2" style={{ marginRight: "50px", cursor: "pointer" }}>Female</Form.Label>
                        <input type="radio" id="gender3" name="gender" value="Another Gender" style={{ marginRight: "10px", cursor: "pointer", scale: "1.5" }} />
                        <Form.Label htmlFor="gender3" style={{ cursor: "pointer" }}>Another Gender</Form.Label>
                    </fieldset>
                    <br />
                </Container>
                <br />

                <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={(e) => { props.prevStep(e); }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        {<FontAwesomeIcon style={{ float: "left", marginTop: "7px" }} icon={faChevronLeft} />}
                        Previous
                    </Button>
                    <Button onClick={(e) => {
                        if (document.querySelector('input[name="citizen"]:checked').value === "No" || document.querySelector('input[name="age"]:checked').value === "No") this.setStep(e, 5);
                        else props.nextStep(e);
                    }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        Next
                        {<FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} />}
                    </Button>
                </Container>
            </Form>
        </Container>
    );
}

function Address(props) {
    return (
        <Container style={{ minWidth: "100%", fontSize: "130%", }}>
            <Form>
                <h6><strong>Step 3 of 5</strong></h6>
                <h2 style={{ fontWeight: "bold", }}>Home Address - Address Type</h2>
                <hr />
                <Accordion className="registrationAccordion">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header><strong>More information about home address</strong></Accordion.Header>
                        <Accordion.Body>
                            <h4 style={{ fontWeight: "bold" }}>Information</h4>
                            <ul>
                                <li><strong>Your home address</strong> is where you live. You vote at the place you consider your home. If you are a student, this may be:
                                    <ul>
                                        <li>where you live while at school, <strong>OR</strong></li>
                                        <li>where you live while not at school (e.g. with your parents).</li>
                                    </ul>
                                </li>
                                If you are unsure what to list as your home address, contact Elections Canada.
                                <li><strong>A Street/Civic</strong> is the address type used by most Canadians (e.g. 123 Main Street).
                                    <ul>
                                        <li><strong>A Suffix</strong> is a single letter like A, B or a fraction like &#188;. They are usually treated by Canada Post and Elections Canada as a suffix, not a unit.</li>
                                    </ul>
                                </li>
                                <li><strong>A Section/Township/Range/Meridian address</strong> is a grid system used in Western Canada, mostly in rural areas. </li>
                                <li><strong>A Lot & Concession address</strong> is a grid system used in Ontario, mostly in rural areas.</li>
                                <li>You can select <strong>I have a different address type</strong> if you do not use a house or building number, or if you do not use a street or road.</li>
                            </ul>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                <br />
                <strong>Please answer the following questions:</strong>
                <Container style={{ border: "2px solid black", minWidth: "100%", backgroundColor: "#f2f2f2", padding: "20px", }}>
                    <strong>What is your address type?: </strong><span className="required">(required)</span>
                    <br />
                    <input type="radio" required id="street" name="address" value="streetCivic" style={{ marginRight: "10px",cursor: "pointer", scale: "1.5" }} />
                    <Form.Label htmlFor="street" style={{ cursor: "pointer" }}>Street/Civic</Form.Label>
                    <br/>
                    <input type="radio" id="section" name="address" value="section" style={{ marginRight: "10px",cursor: "pointer", scale: "1.5" }} />
                    <Form.Label htmlFor="section" style={{ cursor: "pointer" }}>Section/Township/Range/Meridian (AB, BC, SK, MB Rural only)</Form.Label>
                    <br />
                    <input type="radio" id="lot" name="address" value="lot" style={{ marginRight: "10px",cursor: "pointer", scale: "1.5" }} />
                    <Form.Label htmlFor="lot" style={{ cursor: "pointer" }}>Lot & Concession (Ontario Rural only)</Form.Label>
                    <br />
                    <input type="radio" id="other" name="address" value="other" style={{ marginRight: "10px",cursor: "pointer", scale: "1.5" }} />
                    <Form.Label htmlFor="other" style={{ cursor: "pointer" }}>I have a different address type</Form.Label>
                    <br />
                </Container>
                <br />

                <Container style={{ width: "25%", padding: "0", float: "left", display: "flex", justifyContent: "space-between" }}>
                    <Button onClick={(e) => { props.prevStep(e); }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        {<FontAwesomeIcon style={{ float: "left", marginTop: "7px" }} icon={faChevronLeft} />}
                        Previous
                    </Button>
                    <Button onClick={(e) => {
                        if (document.querySelector('input[name="citizen"]:checked').value === "No" || document.querySelector('input[name="age"]:checked').value === "No") this.setStep(e, 5);
                        else props.nextStep(e);
                    }} type="submit" className="btn btn-purple" style={{ minWidth: "47.5%" }}>
                        Next
                        {<FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} />}
                    </Button>
                </Container>
            </Form>
        </Container>
    );
}