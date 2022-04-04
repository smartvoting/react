import React from "react";
import { Container, Image, } from "react-bootstrap";
import processHeader from "../../images/processHeader.jpg"
export default function Process() {
    return (
        <Container style={{ minWidth: "100%", fontSize: "1vw", }}>
            <h3 style={{ fontWeight: "bold", }}>Elections Step by Step</h3>
            <Image style={{ width:"100%", }} src={processHeader}/>
            <p>Canada is a representative democracy. During a federal election, all Canadian citizens who are at least 18 years old on election day can vote in their electoral district. But many steps must first be taken before voters go to the polls.</p>
            <p>Follow the steps below to understand the federal election process in Canada.</p>
            <br/>
            <h3 style={{ fontWeight: "bold", }}>Step 1: Dissolution of Parliament</h3>
            <p>Before candidates hit the campaign trail and voters go to the polls, the government has to end all business in Parliament. Dissolution is the process of stopping parliamentary business to prepare for an election.</p>
            <ol>
                <li>The prime minister asks the governor general to dissolve Parliament.</li>
                <li>The governor general directs the Chief Electoral Officer to issue the writs of election. (A writ is a formal written order that tells election officers in each riding to hold an election.)</li>
                <li>The Chief Electoral Officer issues the writs.</li>
                <li>Elections Canada sends a preliminary list of voters to the returning officers. This tells them who is registered to vote in their riding.</li>
            </ol>
            <p>Since May 2007, the Canada Elections Act provides for a general election to be held on a fixed date: the third Monday of October in the fourth calendar year following the previous general election. But the Act does not prevent a general election from being called earlier or later as long as it is no later than five years after the previous election.</p>
            <br/>
            <h3 style={{ fontWeight: "bold", }}>Step 2: Nomination of Candidate</h3>
            <p>Political parties need to choose candidates to run in an election. As soon as election writs are issued, each party must decide who will be its candidate for each riding. A candidate can also run for election without being affiliated with a party, as either "independent" or "no affiliation."</p>
            <p>The right to run in a federal election is protected by the Canadian Charter of Rights and Freedoms</p>
            <p style={{ margin: "0", fontWeight:"bold", }}>What are the basic requirements to become a candidate?</p>
            <ul>
                <li>You must be a Canadian citizen.</li>
                <li>You must be at least 18 years old on election day.</li>
                <li>You must not be:
                    <ul>
                        <li>a person who is not qualified as an elector;</li>
                        <li>a member of the legislative assembly of a province or territory;</li>
                        <li>the Chief Electoral Officer;</li>
                        <li>a judge appointed by the Governor in Council (the governor general acting on the advice of Cabinet);</li>
                        <li>an election officer; or</li>
                        <li>a person who is imprisoned in a correctional institution.</li>
                    </ul>
                </li>
                <li>You must submit either a Nomination Paper or an online nomination form to Elections Canada.</li>
            </ul>
            <p><strong>Did you know?</strong> Party affiliation (i.e. party name) was included on ballots in 1970.</p>
            <br />
            <h3 style={{ fontWeight: "bold", }}>Step 3: Campaigning</h3>
            <p>Once the election writs are issued, candidates start campaigning. The election or campaign period must be at least 36 days and no more than 50 days.</p>
            <p style={{ margin: "0", fontWeight: "bold", }}>During the campaign, the goal of the parties and candidates is to convince voters that they are the best party or person for the job. To do this, parties and candidates:</p>
            <ul>
                <li>promote their platform (usually this is a document that parties use to tell voters about their goals, ideas and principles - it is a way for parties to put in writing what they would do if they are elected);</li>
                <li>go door to door in their riding to meet with voters; and</li>
                <li>take part in debates with candidates of other parties.</li>
            </ul>
            <p><strong>Did you know?</strong> In the 2019 federal election, 2,146 Canadians registered as candidates.</p>
            <br />
            <h3 style={{ fontWeight: "bold", }}>Step 4: Voting</h3>
            <p>Voting is an important civic duty. To vote in a federal election, you must be a Canadian citizen, at least 18 years old on election day, and registered to vote.</p>
            <p style={{ margin: "0", fontWeight: "bold", }}>There are several ways to vote:</p>
            <ul>
                <li>Vote on election day</li>
                <li>Vote on advance polling days</li>
                <li>Vote at any Elections Canada office</li>
                <li>Vote by mail</li>
            </ul>
            <p>In-person voting at polling stations is the most common voting option. On average, Elections Canada has 20,000 polling stations across Canada during an election.</p>
            <br />
            <h3 style={{ fontWeight: "bold", }}>The voting process</h3>
            <p>Everyone votes in secret. They have the right to choose their preferred candidate by themselves, free of anyone else's influence.</p>
            <p style={{ margin: "0", fontWeight: "bold", }}>There are several ways to vote:</p>
            <ul>
                <li>To vote, people must show proof of their identity and address.</li>
                <li>Each voter gets a ballot from the Elections Canada officers.</li>
                <li>The voter takes the ballot behind a voting screen and marks an X beside the name of their chosen candidate.</li>
                <li>The voter places their ballot in a ballot box.</li>
            </ul>
            <p><strong>Did you know?</strong> There are many <a target="__blank" href="https://www.elections.ca/content.aspx?section=vot&dir=spe/tools&document=index&lang=e">services</a> and tools such as magnifiers and large-grip pencils to help make the vote accessible to all.</p>
            <br />
            <h3 style={{ fontWeight: "bold", }}>Step 5: Counting and Results</h3>
            <p style={{ margin: "0", fontWeight: "bold", }}>Once the polls close, it is time to count the ballots and find out who won. During this time, the doors of the polling station are locked: no one is allowed to enter or leave until the counting is done.</p>
            <ul>
                <li>First, election officers open the ballot boxes and count the ballots.</li>
                <li>The election officers record the number of votes for each candidate on a Statement of the Vote. They also record the number of rejected ballots.</li>
                <li>The ballots and other election documents are sealed in the ballot box and delivered to the returning officer.</li>
            </ul>
            <p>In most cases, a clear winner emerges after the ballots are counted, but sometimes the vote count is very close or even tied. If there is a tie or a close vote, the ballots need to be counted again in a judicial recount. For example, in an electoral district with 40,000 votes cast, a judicial recount would be required if a candidate won by fewer than 40 votes. A judge presides over these recounts.</p>
            <p style={{ margin: "0", fontWeight: "bold", }}>For some Canadians, the most exciting part of the election process is the announcing of the results.</p>
            <ul>
                <li>On election night, once the polls in a riding are closed, preliminary results are announced and published on Elections Canada's website as they become available.</li>
                <li>These results are shared by media outlets, such as TV stations, newspapers and social media.</li>
                <li>Every returning officer validates the results and announces the validated results to the candidates.</li>
            </ul>
            <p><strong>Did you know?</strong> Canada's voting system is called "first past the post." This means the candidate who gets the most votes in their riding wins.</p>
            <br />
            <h3 style={{ fontWeight: "bold", }}>Step 6: Parliament Resumes</h3>
            <p>Once the votes are counted and the results announced, Canadians learn who their government will be. The candidate who receives the most votes in their riding becomes their member of Parliament (MP) and represents the riding in the House of Commons. The political party that has the most MPs usually forms the government. The leader of that party normally becomes the prime minister.</p>
            <p>The prime minister and their party will serve as the Government of Canada until Parliament is dissolved and the election process starts again.</p>
        </Container>
    );
}
