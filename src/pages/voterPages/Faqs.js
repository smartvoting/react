import { Container, Accordion } from "react-bootstrap";

export default function Faqs() {
    return (
        <Container className="faqContainer">
            <h4 id="h1" style={{ fontWeight: "bold" }}>How and where to vote?</h4>
            <Accordion id="q1">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>How do I vote - what are my options?</Accordion.Header>
                    <Accordion.Body>
                        <h5 style={{ fontWeight: "bold" }}>Vote on election day</h5>
                        <p>The date, hours and address of your election day poll will be available online, on your voter information card or by calling Elections Canada.</p>
                        <p>To vote on election day:</p>
                        <ul>
                            <li>You must be registered to vote;</li>
                            <li>You must prove your identity and address.</li>
                        </ul>
                        <p>After an election is called, you can also register at your local Elections Canada office or at your polling station when you go to vote.</p>

                        <br />
                        <h5 style={{fontWeight:"bold"}}>Vote at your advance poll</h5>
                        <p>Advance polls are held on the 10th, 9th, 8th and 7th days before election day.</p>
                        <p>The date, hours and address of your advance poll will be available online, on your voter information card or by calling <a target="_blank" rel="noreferrer" href="https://www.elections.ca/content.aspx?section=cont&dir=add&document=index&lang=e">Elections Canada.</a></p>
                        <p>To vote at your advance poll:</p>
                        <ul>
                            <li>You must be registered to vote;</li>
                            <li>You must prove your identity and address.</li>
                        </ul>
                        <p>After an election is called, you can also register at your local Elections Canada office or at your polling station when you go to vote.</p>

                        <br />

                        <h5 style={{ fontWeight: "bold" }}>Vote by mail </h5>
                        <Container>
                            <h6 style={{ fontWeight: "bold" }}>a) Vote by mail - for electors who live in Canada</h6>
                            <p>If your home is in Canada, you must wait until after an election is called to apply to vote by mail.</p>
                            <p>After an election is called:</p>
                            <ul>
                                <li>Complete an Application for Registration and Special Ballot. The form will be available on this website, at any local Elections Canada office or by calling Elections Canada.</li>
                                <li>Send us your completed form and proof of identity and home address. You can submit them by fax, by mail, or in person at any local Elections Canada office.</li>
                                <li>Once your application is accepted, we will send you a special ballot voting kit by regular mail. (If you apply in person, staff will hand you the kit.) The kit explains how to mark your special ballot and mail it in.</li>
                            </ul>
                            <p>Voting by mail means voting by special ballot.</p>

                            <h6 style={{ fontWeight: "bold" }}>b) Vote by mail - for electors who live outside Canada</h6>
                            <p>If you're a Canadian elector, your home is outside Canada, and you meet certain eligibility criteria, you can apply now to vote by mail in a future election.</p>
                            <p>Canadians living abroad: Apply now to vote by mail in a future election</p>
                            <p>You can also get an application form by calling Elections Canada. Ask for an Application for Registration and Special Ballot for Canadian Citizens Residing Outside Canada.</p>
                            <ul>
                                <li>If we accept your application, we will add your name to the International Register of Electors. This is a list of Canadians temporarily living outside Canada who can vote in federal elections.</li>
                                <li>When an election is called, we will mail a special ballot voting kit to everyone in the International Register of Electors. The kit explains how to mark your special ballot and mail it in.</li>
                            </ul>
                            <p>Voting by mail means voting by special ballot. Learn more about voting rules for Canadians living abroad.</p>

                            <h6 style={{ fontWeight: "bold" }}>Important information on voting by special ballot</h6>
                            <p>Voting by mail or at a local Elections Canada office means voting by special ballot.</p>
                            <ul>
                                <li>Anyone may vote by special ballot, but you must apply for this ballot in advance.</li>
                                <li>Your application must be received at Elections Canada by the special ballot registration deadline: 6 p.m. on the Tuesday before election day.</li>
                                <li>Once your application is accepted, we will give you a special ballot voting kit. This kit includes:
                                    <ul>
                                        <li>a special ballot</li>
                                        <li>two envelopes (they keep your vote secret)</li>
                                        <li>instructions on how to mark and mail in your special ballot</li>
                                    </ul>
                                </li>
                                <li>Your completed special ballot must arrive at Elections Canada by the election day deadline, or it will not be counted.</li>
                                <li>Once your application to vote by special ballot has been accepted, this is the only way you can vote. You cannot vote at the advance or election day polls or apply for another special ballot.</li>
                                <li>You may vote only once during an election, and you may vote only for a candidate running in your riding. </li>
                            </ul>
                            <p>Voting by mail means voting by special ballot. Learn more about voting rules for Canadians living abroad.</p>
                        </Container>
                        <br />
                        <h5 style={{ fontWeight: "bold" }}>Vote at any Elections Canada office</h5>
                        <p>After an election is called, Elections Canada sets up local offices in every riding in Canada.</p>
                        <p>You can vote in person at any Elections Canada office across the country until the 6th day before election day.</p>
                        <p>To vote at an Elections Canada office, you must complete an Application for Registration and Special Ballot. Staff can help you with this form, if you'd like. You must show proof of your identity and address.</p>
                        <p>Once your special ballot application is accepted, staff will give you a special ballot voting kit. You can vote on the spot. Or, if you prefer, you can come back to the office to submit your vote later.</p>
                        <p>After an election is called, the address of Elections Canada offices will be available online or by calling Elections Canada.</p>
                        <p>Voting at an Elections Canada office means voting by special ballot.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br />
            <Accordion id="q2">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>I'm a Canadian elector living abroad. How do I vote?</Accordion.Header>
                    <Accordion.Body>
                        <h5 style={{ fontWeight: "bold" }}>What is the International Register of Electors?</h5>
                        <p>The International Register of Electors is a database of Canadian electors living abroad who have applied to vote by special ballot.</p>
                        <p>When a general election, by-election or referendum is called, Elections Canada automatically sends a special ballot voting kit to all eligible electors on the International Register of Electors.</p>
                        <p>To be on the International Register of Electors, an elector must complete and submit an application.</p>
                        <br />
                        <h5 style={{ fontWeight: "bold" }}>What are the benefits of being on the International Register of Electors?</h5>
                        <p>By being on the International Register of Electors, electors residing outside Canada have the following benefits:</p>
                        <ul>
                            <li>There is no need to register at the call of each election.</li>
                            <li>Since a special ballot voting kit is sent to the elector immediately at the drop of a writ, the time available for the elector to receive the ballot, complete it, and send it back to Elections Canada is maximized.</li>
                        </ul>
                        <br />
                        <h5 style={{ fontWeight: "bold" }}>What eligibility criteria must be met to be on the International Register of Electors?</h5>
                        <p>To be on the International Register of Electors, you must:</p>
                        <ul>
                            <li>be a Canadian citizen and at least 18 years old on polling day</li>
                            <li>be living outside Canada</li>
                            <li>have lived in Canada at some point in your life</li>
                        </ul>
                        <br />
                        <h5 style={{ fontWeight: "bold" }}>What type of ID do I need to apply?</h5>
                        <p>You must provide a copy of one of the following pieces of ID with your application:</p>
                        <ul>
                            <li>pages 2 and 3 of your Canadian passport</li>
                            <li>the front and back sides of your Canadian citizenship certificate or card</li>
                            <li>your birth certificate, showing that you were born in Canada</li>
                        </ul>
                        <p>You do not have to provide proof of address.</p>
                        <br />
                        <h5 style={{ fontWeight: "bold" }}>Is it true that electors can only be on the International Register of Electors if they have been away from Canada for less than five years?</h5>
                        <p>No - an elector who meets the eligibility criteria outlined above can apply to be added to the International Register of Electors regardless of how long they have been living abroad.</p>
                        <br/>
                        <h5 style={{ fontWeight: "bold" }}>How do I apply to have my name added to the International Register of Electors?</h5>
                        <p>We recommend that electors apply online.</p>
                        <p>You can also:</p>
                        <ul>
                            <li>download the PDF form, print it, and send it to the coordinates on the form (fax, mail)</li>
                            <li>contact Elections Canada and request that an application be sent to you by mail</li>
                        </ul>
                        <p>Please read the instructions carefully and provide all required proof of ID to avoid delays in the processing of your application.</p>
                        <br />
                        <h5 style={{ fontWeight: "bold" }}>Is it true that electors can only be on the International Register of Electors if they have been away from Canada for less than five years?</h5>
                        <p>No - an elector who meets the eligibility criteria outlined above can apply to be added to the International Register of Electors regardless of how long they have been living abroad.</p>
                        <br />
                        <h5 style={{ fontWeight: "bold" }}>I submitted my application. What now?</h5>
                        <p>We will process your application. If any additional information is required, or if there is an issue, we will contact you using the coordinates you provided.</p>
                        <p>Once your name is on the International Register of Electors, we will send a confirmation letter to the mailing address on your application.</p>
                        <p>The next time a general election, or by-election in your riding, is called, a special ballot voting kit will automatically be sent to you.</p>
                        <br />
                        <h5 style={{ fontWeight: "bold" }}>I received an email advising me that my name was removed from the International Register of Electors. What happened?</h5>
                        <p>On October 8, 2020, a Verification Notice email was sent to all electors on the International Register of Electors asking them to contact us to confirm or update their mailing address. This measure is in place to maintain the integrity of Canada's elections by ensuring that voting kits are not sent to addresses where Canadian electors no longer reside. The email indicated that, in accordance with the Canada Elections Act, any elector who did not respond by the deadline would be removed from the International Register of Electors.</p>
                        <p>Your name was removed because we did not receive a response from you. </p>
                        <br />
                        <h5 style={{ fontWeight: "bold" }}>Is it true that electors can only be on the International Register of Electors if they have been away from Canada for less than five years?</h5>
                        <p>No - an elector who meets the eligibility criteria outlined above can apply to be added to the International Register of Electors regardless of how long they have been living abroad.</p>
                        <br />
                        <h5 style={{ fontWeight: "bold" }}>How do I update my information on the International Register of Electors?</h5>
                        <p>Once you are on the International Register of Electors, you must notify us if you move to a new address abroad or return to Canada to live.</p>
                        <p>If you would like to update or confirm your information, please contact us by email or phone at:</p>
                        <p>svrenq@elections.ca</p>
                        <p>613-949-7502 (collect calls are accepted)</p>
                        <p>Toll-free in Canada and the US: 1-866-222-2565</p>
                        <p>Toll-free in Mexico: 001-800-514-6868</p>
                        <p>Toll-free in Canada and the US for TTY: 1-800-361-8935 </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br />
            <Accordion id="q3">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>I live in Canada but will be out of my riding on election day. How do I vote?</Accordion.Header>
                    <Accordion.Body>
                        <p>If your residence is in Canada but you will be out of your riding on election day, you have two choices:</p>
                        <ol>
                            <li style={{fontWeight:"bold"}}>You can vote at advance polls</li>
                            <p>They are held on the 10th, 9th, 8th and 7th day before election day.</p>
                            <li style={{ fontWeight: "bold" }}>You can vote by special ballot</li>
                            <p>If your residence is in Canada, you can apply to vote by special ballot after the election has been called. You can <a target="_blank" rel="noreferrer" href="https://www.elections.ca/content.aspx?section=vot&dir=reg/svr&document=index&lang=e">apply online</a>, by calling 1-800-463-6868 or at any Elections Canada office.</p>
                            <ol type="a">
                                <li style={{ fontWeight: "bold" }}>Vote by special ballot from within your riding</li>
                                <p>With this option, you can vote:</p>
                                <ul>
                                    <li>in person at your local Elections Canada office throughout most of the election period</li>
                                    <li>by mailing your special ballot to your local Elections Canada office</li>
                                </ul>
                                <p>To vote by special ballot, apply before 6:00 p.m. (local time) on the Tuesday before election day.</p>
                                <p>If we accept your application and proof of identity and address, we will mail you a special ballot voting kit that explains how to vote. If you apply in person at your local Elections Canada office, we will hand you the kit - you can vote right away, or vote later by mail or by returning in person to your local Elections Canada office.</p>
                                <p><strong>Your completed ballot must be received at your local Elections Canada office before the polls close on election day in your riding.</strong> By law, we cannot accept late application forms and we cannot count late ballots.</p>
                                <p>Once you have registered to vote by special ballot, you cannot vote another way.</p>

                                <li style={{ fontWeight: "bold" }}>Vote by special ballot from outside your riding</li>
                                <p>This option applies to people whose residence is in Canada but who are travelling outside their riding, in Canada or abroad (e.g., snowbirds, students living away from home to attend university).</p>
                                <p>With this option, you can vote by mail from anywhere in Canada or the world. To vote by special ballot from outside your riding:</p>
                                <p><strong>Apply as soon as an election has been called.</strong> Allow enough time for a special ballot voting kit to reach you and for your ballot to travel back to Ottawa.</p>
                                <p>We must receive your application and documents proving your identity and address by the Tuesday before election day:</p>
                                <ul>
                                    <li>in person at any Elections Canada office before 6:00 p.m. (local time), or</li>
                                    <li>by fax or by mail sent to Elections Canada in Ottawa, before 6:00 p.m. (Eastern Time)</li>
                                </ul>
                                <p>Once we process and accept your application, we mail you a special ballot voting kit (or hand it to you, if you apply in person at an Elections Canada office). Your kit contains instructions on how to vote. </p>
                                <p>Your completed ballot must be received at Elections Canada in Ottawa before 6:00 p.m. (Eastern Time) on election day. </p>
                                <p><strong>By law, we cannot accept late application forms or count late ballots.</strong></p>
                                <p>Once you have registered to vote by special ballot, you cannot vote another way.</p>
                                <a target="_blank" rel="noreferrer" href="https://www.elections.ca/content.aspx?section=vot&dir=bkg&document=ec90540&lang=e#a3">Learn more about voting by special ballot (voting by mail).</a>
                            </ol>
                        </ol>

                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br />
            <Accordion id="q4">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>I'm homeless. How do I vote?</Accordion.Header>
                    <Accordion.Body>
                        <p>Eligible electors who are homeless or have no fixed address are welcome to register and vote.</p>
                        <p>Everyone who votes must prove their identity and address. <a target="_blank" rel="noreferrer" href="https://www.elections.ca/content.aspx?section=vot&dir=ids&document=index&lang=e">This page lists all the types of proof of identity and address accepted at the polls.</a></p>
                        <p>Here are some of the ways you can prove your identity and address at the polls:</p>
                        <ul>
                            <li>To prove your identity (name), you can show a piece of ID with your name on it, like a fishing license, library card, social insurance card (SIN card), birth certificate or Veterans Affairs Canada Health Identification Card.</li>
                            <li>To prove your address, you can show an official letter called a "Letter of Confirmation of Residence." If you have gone to a shelter for food or lodging, you can ask the shelter administrator for this letter.</li>
                            <li>You can still vote if you declare your identity and address in writing and have someone who knows you and who is assigned to your polling station vouch for you.</li>
                            <li>The voucher must be able to prove their identity and address. A person can vouch for only one person (except in long-term care institutions). </li>
                        </ul>
                        <p>For more information, please <a target="_blank" rel="noreferrer" href="https://www.elections.ca/content.aspx?section=cont&dir=add&document=index&lang=e">contact Elections Canada.</a></p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br />
            <Accordion id="q5">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>I live in a hospital or long-term care facility. How can I vote?</Accordion.Header>
                    <Accordion.Body>
                        <p>Electors who live in hospitals and facilities that provide long-term care may have the extra option of voting at a mobile polling station in their residence.</p>
                        <p>Elections Canada offers mobile polling stations in some residences and hospital wards. If required, we transport the ballot box from room to room to facilitate voting.</p>
                        <p>Everyone who votes must prove their identity and address. Learn more about <a target="_blank" rel="noreferrer" href="https://www.elections.ca/content.aspx?section=vot&dir=ids&document=index&lang=e">all the kinds of proof of address and identity accepted at mobile polls.</a></p>
                        <p>Here are some ways to prove your identity and address:</p>
                        <ul>
                            <li>To prove your identity (name), you can show a piece of ID with your name on it, like a health card, social insurance card (SIN card), birth certificate, Veterans Affairs Canada Health Identification Card, or hospital bracelet.
                                <ul>
                                    <li>For residents of long-term care facilities, you can show photocopies of your proof of identity and address documents.</li>
                                </ul>
                            </li>
                            <li>To prove your address, one option is to show an "Attestation of Residence." This is an official letter from a long-term care facility that says this person lives there. You can request this letter from the facility administrator.</li>
                            <li>You can still vote if you declare your identity and address in writing and have someone who knows you vouch for you. The voucher must be able to prove their identity and address. The voucher may be an employee of the institution where you live. The employee may vouch for more than one elector and must reside in the same electoral district or adjacent electoral district as the person being vouched for. </li>
                        </ul>
                        <p>For more information, please <a target="_blank" rel="noreferrer" href="https://www.elections.ca/content.aspx?section=cont&dir=add&document=index&lang=e">contact Elections Canada.</a></p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <br />
            <h4 id="h2" style={{ fontWeight: "bold" }}>Time off work to vote</h4>
            <Accordion id="q6">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Am I allowed time off work to vote?</Accordion.Header>
                    <Accordion.Body>
                        <p><a target="_blank" rel="noreferrer" href="https://laws-lois.justice.gc.ca/eng/acts/E-2.01/page-16.html?txthl=pencil#s-121">By law</a>, electors must have three consecutive hours to cast their vote on election day. If your hours of work do not allow for three consecutive hours to vote, your employer must give you time off.</p>
                        <p>For example, if you live in a riding where voting hours are 9:30 a.m. to 9:30 p.m. and you usually work from 11:00 a.m. to 7:00 p.m., your hours of work will not allow three consecutive hours for voting. To give you three consecutive hours to vote, your employer could allow you to arrive late (at 12:30 p.m.), let you leave early (at 6:30 p.m.), or give you three hours off at some point during the work day.</p>
                        <p>Your employer has the right to decide when the time off will be given.</p>
                        <p>This rule may not apply if you work in the transportation industry.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br />
            <Accordion id="q7">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Are all employers required to give time off work to vote?</Accordion.Header>
                    <Accordion.Body>
                        <p>Yes, the law applies to all employers. However, for employers in the transportation industry, the obligation to provide three consecutive hours off to vote does not apply if these four conditions are met:</p>
                        <ul>
                            <li>the employer is a company that transports goods or passengers by land, air or water</li>
                            <li>the employee is employed outside his or her polling division</li>
                            <li>the employee is employed in the operation of a means of transportation, and</li>
                            <li>the time off cannot be allowed without interfering with the transportation service</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br />
            <Accordion id="q8">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Who decides when employees may take time off work to vote?</Accordion.Header>
                    <Accordion.Body>
                        <p>Your employer has the right to decide when in the day to give this time off.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br />
            <Accordion id="q9">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Can an employee lose pay for taking time off to vote?</Accordion.Header>
                    <Accordion.Body>
                        <p>No.</p>
                        <p>Employers cannot impose a penalty or deduct pay from an employee who is taking time off to vote if required by the Canada Elections Act. An employee must be paid what he or she would have earned during the time allowed off for voting.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br />
            <Accordion id="q10">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Is there a penalty for employers who do not give employees time off to vote?</Accordion.Header>
                    <Accordion.Body>
                        <p>Yes.</p>
                        <p>It is an offence for employers to fail to provide time off for voting if required under the Canada Elections Act.</p>
                        <p>It is also an offence for an employer to reduce an employee's pay where the employee has been provided time off to vote in accordance with the Act. The maximum penalty for violating these prohibitions is a fine of up to $2,000, three months imprisonment, or both.</p>
                        <p>It is also an offence for an employer to use intimidation, undue influence, or any other means to interfere with the granting of time off to vote under the Canada Elections Act. The maximum penalty for violating this provision is a fine of up to $50,000, five years imprisonment, or both.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <br />
            <h4 id="h3" style={{ fontWeight: "bold" }}>Voter ID</h4>
            <Accordion id="q11">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>What pieces of ID can I use to vote?</Accordion.Header>
                    <Accordion.Body>
                        <p>To vote, you must show a proof of identity and address. <a target="_blank" rel="noreferrer" href="https://www.elections.ca/content.aspx?section=vot&dir=ids&document=index&lang=e">Your options are listed here.</a></p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <br />
            <h4 id="h4" style={{ fontWeight: "bold" }}>Who May Vote</h4>
            <Accordion id="q12">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Who is eligible to vote in the federal election and referendums?</Accordion.Header>
                    <Accordion.Body>
                        <p>You may vote in this federal election if you:</p>
                        <ul>
                            <li>are a Canadian citizen</li>
                            <li>will be 18 or older on election day</li>
                            <li>are registered to vote</li>
                        </ul>
                        <p>The Canada Elections Act includes detailed information on who is eligible to vote.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br />
            <Accordion id="q13">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>My income tax form asked if I want to share some of my information with Elections Canada, and I answered "no." Do I still have the right to vote?</Accordion.Header>
                    <Accordion.Body>
                        <p>Yes. If you are eligible to vote, you may vote. Saying "no" to this question on your income tax form does not remove your name from the <a target="_blank" rel="noreferrer" href="https://www.elections.ca/content.aspx?section=vot&dir=reg/des&document=index&lang=e">National Register of Electors</a> if it was already listed there.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br />
            <Accordion id="q14">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>I am serving a prison sentence in Canada. Can I vote?</Accordion.Header>
                    <Accordion.Body>
                        <p>Yes.</p>
                        <p>As long as you're a Canadian citizen and will be at least 18 years old on election day, you can vote in your correctional institution or federal penitentiary. Once an election is called, a staff member in each institution is appointed as a liaison officer and helps prisoners register and vote. The liaison officer can answer your questions about voting and help you register.</p>
                        <p>Learn more about <a target="_blank" rel="noreferrer" href="https://www.elections.ca/content.aspx?section=vot&dir=bkg&document=ec90545&lang=e">voting by incarcerated electors (voting in prisons).</a></p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <br />
            <h4 id="h5" style={{ fontWeight: "bold" }}>Polling station</h4>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Can I vote wearing a face covering?</Accordion.Header>
                    <Accordion.Body>
                        <p>An elector may vote with their face covered by establishing proof of their identity and residence under any of the <a target="_blank" rel="noreferrer" href="https://www.elections.ca/content.aspx?section=vot&dir=ids&document=index&lang=e">three options listed on this page.</a> An elector is not required to remove their face covering when establishing proof of their identity and residence.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <br />
            <h4 id="h6" style={{ fontWeight: "bold" }}>Why Voting Matters</h4>
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Why should I vote?</Accordion.Header>
                    <Accordion.Body>
                        <p>Your vote is the way you choose someone to represent you in Canada's Parliament. By expressing your choice, you are exercising a democratic right that is key to the democratic process of government that generations of Canadians have fought to build. For more information, see <a target="_blank" rel="noreferrer" href="https://www.elections.ca/content.aspx?section=res&dir=his&document=index&lang=e"> A History of the Vote in Canada.</a></p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <br />
            <h4 id="h7" style={{ fontWeight: "bold" }}>Canadian Armed Forces voters and their relatives</h4>
            <Accordion id="q15">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>I am a member of the Canadian Armed Forces. How do I vote?</Accordion.Header>
                    <Accordion.Body>
                        <p>If you are an elector and member of the Canadian Armed Forces, you may vote using any of the methods available to all other Canadian electors.</p>
                        <p>You may vote at the assigned civilian polling station associated with your place of residence, either on an advance polling day or election day.Your voter information card tells you where and when to vote. You will need to <a target="_blank" rel="noreferrer" href="https://www.elections.ca/content.aspx?section=vot&dir=ids&document=index&lang=e">show proof of identity and address.</a></p>
                            <p>You may also vote <a target="_blank" rel="noreferrer" href="https://www.elections.ca/content.aspx?section=vot&dir=bkg&document=ec90540&lang=e">by special ballot</a> at a military polling station set up at a Canadian Armed Forces base or unit.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br />
            <Accordion id="q16">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>I am living with a member of the Canadian Armed Forces. I am away from home. How do I vote?</Accordion.Header>
                    <Accordion.Body>
                        <p>As a Canadian citizen temporarily away from your riding, inside or outside Canada, you can vote by special ballot.</p>
                        <p>By law, the only people who may vote at polling stations set up for Canadian Armed Forces units are members of the Canadian Armed Forces. </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br />
            <Accordion id="q17">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>I am a member of the Canadian Armed Forces. Does my address for voting purposes change whenever I am posted or deployed?</Accordion.Header>
                    <Accordion.Body>
                        <p>According to the Canada Elections Act, Canadian Armed Forces electors may register and update their information using any of the methods available to all other Canadian electors. Your address for voting purposes will be the address you consider your place of residence. Remember, when you vote at your assigned civilian polling station (either on an advance polling day or election day) or using the special ballot process outside a military polling station, you will need to <a target="_blank" rel="noreferrer" href="https://www.elections.ca/content.aspx?section=vot&dir=ids&document=index&lang=e">show proof of identity and address.</a></p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
}
