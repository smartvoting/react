import { Container, Row, Col, } from "react-bootstrap";
import smartVotingLogo from '../images/svLogo1.png';
import electionsCanadaLogo from '../images/ecLogo.png';

export default function Security() {
    return (
        <Container className="ascContainer">
            <Row className="mx-auto" style={{ width: "90%", paddingTop: "20px", }}>
                <Col style={{ display: "flex", justifyContent: "center", borderRight: "1px solid #d3d3d3", paddingRight: "50px", }}>
                    <img src={smartVotingLogo} style={{ width: "57%", paddingBottom: "20px", }} />
                </Col>
                <Col style={{ display: "flex", justifyContent: "center", paddingLeft: "50px", }}>
                    <img src={electionsCanadaLogo} style={{ width: "100%", paddingBottom: "20px", }} />
                </Col>
            </Row>
            <Row className="mx-auto" style={{ width: "90%", paddingBottom: "20px", }}>
                <Col style={{ borderRight: "1px solid #d3d3d3", paddingRight: "50px", }}>
                    <h1 style={{ fontWeight: "bold" }}>Smart Voting Security</h1>
                    <Container style={{ fontSize: "1.1vw", textAlign: "left" }}>
                        <p>Smart Voting is a Capstone Project created and produced by group T04 in program T122, Computer Programming and Analysis, at George Brown College in Toronto, Ontario.
                            Smart Voting is in no way, shape, or form affiliated with Elections Canada or the Canadian Government.
                        </p>
                        <h4>Who to contact if you have any questions, comments, or concerns:</h4>
                        <ul>
                            <li>About the election process please contact Elections Canada.</li>
                            <li>About your local riding please contact the office of your local MP.</li>
                            <li>About political parties please contact their local, provincial, or federal offices.</li>
                        </ul>
                        <h1 style={{ fontWeight:"bold", textAlign:"center", }}>Smart Voting is in no way, shape, or form, associated with Elections Canada or the Canadian Government.</h1>
                    </Container>
                </Col>
                <Col style={{ paddingLeft: "50px", }}>
                    <h1 style={{ fontWeight: "bold" }}>Elections Canada Security</h1>
                    <Container style={{ fontSize: "1.1vw", textAlign: "left" }}>
                        <p>The delivery of federal elections is protected by many legal, procedural and technological safeguards that are designed to ensure the integrity of the voting process.
                            There are many safeguards in place to protect Elections Canada's information, employees and operations.</p>
                        <h2>Safeguards in the Electoral Process</h2>
                        <p>An election has integrity when it is carried out in a way that respects the law and procedures, includes an enforcement regime that imposes penalties for intentionally breaking the law, and respects the principles of electoral democracy.
                            The principles that are essential to electoral integrity are accessibility, reliability, fairness, security, transparency and independence.
                        </p>
                        <h2>Contributions to Election Security</h2>
                        <p>There is no one simple solution that eliminates threats to election security while maintaining an accessible, fair and transparent electoral process.
                            These threats are complex - ranging from criminal acts, terrorism, cyberattacks, foreign interference and attempts at disinformation - and reach beyond our borders and the realm of election management.
                        </p>
                        <p>Elections Canada pays careful attention to these threats to election security.
                            We are working within the bounds of our legal mandate to limit their impact, with the assistance of our colleagues in government departments and agencies that have a mandate to protect election security.
                        </p>
                        <p>
                            While no known widespread criminal activity, cybersecurity incident or disinformation campaign disrupted the administration of the 2019 general election, it is important to remain vigilant to emerging and ongoing threats
                        </p>
                        <h2>A Shared Responsibility</h2>
                        <p>
                            In the current environment, delivering a secure election requires collaboration among many players. Federal agencies, political actors, media, digital platforms, civil society and individual Canadians must all play a role.
                        </p>
                        <h2>Elections Canada's Role</h2>
                        <p>
                            With the support of national security and intelligence agencies, Elections Canada can focus on its top priority: administering elections and making sure Canadians can exercise their democratic rights to register, vote and be a candidate.
                        </p>
                        <h2>Political Participants, Digital Platforms and Others</h2>
                        <p>Many players are involved in the democratic process, including political parties, candidates, third parties, digital platforms, media and civil society groups.
                            We regularly consult and engage with these different entities on issues related to the electoral process.
                            Everyone involved must do their part.
                            They can do so by:
                        </p>
                        <ul>
                            <li>protecting their IT infrastructure and data</li>
                            <li>ensuring that the information they produce and share is accurate</li>
                            <li>promoting digital literacy and critical thinking</li>
                        </ul>
                        <h4>Your role</h4>
                        <p>As an individual Canadian, you have a role to play as well. You can take steps to protect yourself and others:</p>
                        <ul>
                            <li>
                                <strong>Be cyber safe. </strong>Learn about cyber security risks that could affect you and how you can protect yourself. Visit the Government of Canada's Get Cyber Safe website.
                            </li>
                            <li>
                                <strong>Be aware </strong>that some of what you see online may not be what it seems. Carefully consider whether the source is reliable and the information is correct.
                            </li>
                            <li>
                                <strong>Look to Elections Canada </strong>for facts about elections and where, when and the ways to register and vote, and about the safeguards in the electoral process. Contact us if you have questions.
                            </li>
                        </ul>
                        <h2>Reliable Information on the Electoral Process </h2>
                        <p>Some information on the Internet and social media is reliable, but some information can be either mistakenly misleading (misinformation) or deliberately misleading (disinformation).
                            During an election, there may be more information available than usual.
                            To exercise your right to vote, it is important that you have accurate information.
                        </p>
                        <p>
                            Elections Canada is the official source for information about the federal election process.
                            Look to Elections Canada for facts about where, when and the ways to register and vote, and about the safeguards in the electoral process.
                        </p>
                        <h4>Tips to ensure that you are getting reliable information</h4>
                        <ul>
                            <li>Consider bookmarking the Elections Canada website and their official social media channels. </li>
                            <li>
                                Refer to Elections Canada's repository of multimedia communications and information campaign materials so you can check if something that says it's from Elections Canada is from Elections Canada.
                            </li>
                            <li>
                                Be aware that what you see online may not be what it seems. Carefully consider whether the source is reliable and the information is correct.
                            </li>
                        </ul>

                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
