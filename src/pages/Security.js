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
                        <h2>Smart voting election integrity</h2>
                        <p>Smart Voting is a capstone project created and produced by group T04 in program T122, Computer Programming and Analysis, at George Brown College in Toronto, Ontario.
                            Smart Voting is in no way, shape, or form affiliated with Elections Canada or the Canadian Government.
                        </p>
                        <h4>Who to contact if you have any questions, comments, or concerns:</h4>
                        <ul>
                            <li>about the election process please contact Elections Canada.</li>
                            <li>about your local riding please contact the office of your local MP.</li>
                            <li>about political parties please contact their local, provincial, or federal offices.</li>
                        </ul>
                        <h1>Smart Voting is in no way, shape, or form, associated with Elections Canada or the Canadian Government at any level.</h1>
                    </Container>
                </Col>
                <Col style={{ paddingLeft: "50px", }}>
                    <h1 style={{ fontWeight: "bold" }}>Elections Canada Security</h1>
                    <Container style={{ fontSize: "1.1vw", textAlign: "left" }}>
                        <h2>Election Integrity and Security</h2>
                        <p>This webpage will help you understand the various players and procedures involved in protecting Canada's federal electoral system. 
                            The delivery of federal elections is protected by many legal, procedural and technological safeguards that are designed to ensure the integrity of the voting process. 
                            We also have safeguards in place to protect Elections Canada's information, employees and operations.</p>
                        <h2>Safeguards in the electoral process</h2>
                        <p>An election has integrity when it is carried out in a way that respects the law and procedures, includes an enforcement regime that imposes penalties for intentionally breaking the law, and respects the principles of electoral democracy.
                            The principles that are essential to electoral integrity are accessibility, reliability, fairness, security, transparency and independence.
                        </p>
                        <h2>How Elections Canada contributes to election security</h2>
                        <p>There is no one simple solution that eliminates threats to election security while maintaining an accessible, fair and transparent electoral process. 
                            These threats are complex—ranging from criminal acts, terrorism, cyberattacks, foreign interference and attempts at disinformation—and reach beyond our borders and the realm of election management.
                        </p>
                        <p>Elections Canada pays careful attention to these threats to election security.
                            We are working within the bounds of our legal mandate to limit their impact, with the assistance of our colleagues in government departments and agencies that have a mandate to protect election security.
                        </p>
                        <p>
                        While no known widespread criminal activity, cybersecurity incident or disinformation campaign disrupted the administration of the 2019 general election, it is important to remain vigilant to emerging and ongoing threats
                        </p>
                        <p>
                            As the election environment evolves, Canadians can count on Elections Canada to make registration and voting as accessible, convenient and secure as possible.
                        </p>
                        <h2>A shared responsibility</h2>
                        <p>
                            In the current environment, delivering a secure election requires collaboration among many players. Federal agencies, political actors, media, digital platforms, civil society and individual Canadians must all play a role.
                        </p>
                        <h4>Elections Canada's role</h4>
                        <p>
                            With the support of national security and intelligence agencies, Elections Canada can focus on its top priority: administering elections and making sure Canadians can exercise their democratic rights to register, vote and be a candidate.
                        </p>
                        <p>To deliver on this priority:</p>
                        <ul>
                            <li>We maintain a strong security position and abide by government-wide best practices.</li>
                                <ul>
                                    <li>Working closely with the Canadian Centre for Cyber Security and other security agencies, we have made major investments to strengthen our IT infrastructure, monitor our systems 24/7 and protect our data.</li>
                                    <li>We have implemented security by design, making security a foundational part of every new IT system or process that we develop.</li>
                                    <li>We continually train employees and field staff on how to safeguard information and practise good cyber safety.</li>
                                </ul>
                            <li>We provide Canadians with information on the ways to register and vote, on how to be a candidate and on the safeguards that protect the integrity of our elections.</li>
                                <ul>
                                    <li>Before and during an election, we run a multimedia information campaign so Canadians have easy access to reliable information.</li>    
                                    <li>We put all our communications—TV and radio ads, videos, social media content—in a repository on our website to make it easy to find out whether or not an advertising or communication product actually came from us.</li>
                                </ul>
                            <li>We monitor the information environment (the news media, the Web, social media, etc.) to find out about:</li>
                                <ul>
                                    <li>Incidents that could affect the smooth administration of a general election or by-election</li>
                                    <li>Inaccurate information on the electoral process, which could prevent people from exercising their rights to register, vote or be a candidate</li>
                                    <li>Social media accounts and websites that impersonate Elections Canada, which could lead to confusion</li>
                                </ul>
                            <li>We correct the record.</li>
                                <ul>
                                    <li>If we see incorrect information about the electoral process, we proactively communicate correct information.</li>
                                    <li>If we see fake accounts or websites impersonating Elections Canada, we ask that they be removed. Elections Canada has contacts at digital platforms who handle cases of impersonation of Elections Canada; this impersonation is illegal.</li>
                                </ul>
                            <li>We provide Canadians with safer ways to vote during a pandemic.</li>
                                <ul>
                                    <li>Electors can expect to see the following health and safety measures at polling places:</li>
                                        <ul>
                                            <li>implementation of local or provincial health measures, such as registries for contact tracing</li>
                                            <li>hand sanitizing stations at entrances and exits</li>
                                            <li>non-medical masks available to voters</li>
                                            <li>poll workers with non-medical masks, shields and gloves</li>
                                            <li>physical distancing and directional signage throughout the polling place</li>
                                        </ul>
                                    <li>We are also working to increase the capacity and convenience of the vote-by-mail system.</li>
                                </ul>
                            <li>The Role of the Commissioner of Canada Elections</li>
                                <ul>
                                    <li>The Commissioner of Canada Elections is the independent officer responsible for ensuring that the Canada Elections Act (the Act) is complied with and enforced.</li>
                                    <li>When Elections Canada becomes aware of potential violations to the Act, the agency refers that information to the Commissioner of Canada Elections for consideration and possible investigation.</li>
                                    <li>Members of the public who think that someone may be breaking election law can contact the Commissioner of Canada Elections to make a complaint</li>
                                    <li>If a complaint falls within the Office's mandate, the Commissioner can investigate and, if required, take compliance or enforcement action.</li>
                                    <li>Breaking federal election law can lead to serious consequences, including undertakings, administrative monetary penalties, compliance agreements and criminal charges</li>
                                </ul>
                            <li>Collaboration with other agencies and departments</li>
                            <p>Elections Canada coordinates with other federal organizations that contribute to election security, including:</p>
                                <ul>
                                    <li>Communications Security Establishment (CSE)</li>
                                    <li>Canadian Centre for Cyber Security (part of CSE)</li>
                                    <li>Canadian Security Intelligence Service</li>
                                    <li>Royal Canadian Mountain Police</li>
                                    <li>Public Safety Canada</li>
                                    <li>Global Affairs Canada</li>
                                    <li>National Security and Intelligence Review Agency</li>
                                    <li>Public Health Agency of Canada</li>
                                </ul>
                            <p>We meet regularly with these agencies and departments to share information; discuss roles, responsibilities and protocols under potential scenarios; plan communications; and detect and respond to any threats to the integrity of an election.</p>
                            <p>In parallel to Elections Canada's collaboration described here, the Government of Canada has implemented other initiatives to safeguard elections.</p>
                        </ul>
                        <h4>Political participants, digital platforms and others</h4>
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
                                <strong>Be cyber safe.</strong>
                                Learn about cyber security risks that could affect you and how you can protect yourself. Visit the Government of Canada's Get Cyber Safe website.
                            </li>
                            <li>
                                <strong>Be aware </strong>
                                that some of what you see online may not be what it seems. Carefully consider whether the source is reliable and the information is correct.
                            </li>
                            <li>
                                <strong>Look to Elections Canada</strong> 
                                for facts about elections and where, when and the ways to register and vote, and about the safeguards in the electoral process. Contact us if you have questions.
                            </li>
                        </ul>
                        <h3>Reliable information on the electoral process</h3>
                        <p>Some information on the Internet and social media is reliable, but some information can be either mistakenly misleading (misinformation) or deliberately misleading (disinformation). 
                            During an election, there may be more information available than usual. 
                            To exercise your right to vote, it is important that you have accurate information.
                        </p>
                        <p>
                            Elections Canada is the official source for information about the federal election process. 
                            Look to us for facts about where, when and the ways to register and vote, and about the safeguards in the electoral process.
                        </p>
                        <h4>Tips to ensure that you are getting reliable information</h4>
                        <ul>
                            <li>Consider bookmarking our website and our official social media channels. 
                                We will be sharing information regularly and correcting the record when necessary.
                            </li>
                            <li>
                                Refer to Elections Canada's repository of multimedia communications and information campaign materials so you can check if something that says it's from Elections Canada really is from us.
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
