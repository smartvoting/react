import Template from '../static/ASCTemplate';

export default function About() {
    const about = {
        
        header1: "About Smart Voting",
        text1: <AboutSVText/>,
        header2: "About Elections Canada",
        text2: <AboutECText/>
    };

    return (
        <Template content={about}/>
    );
}

function AboutSVText() {
    return (
        <>
            <h2>Our History</h2>
            <p>Smart Voting is a Group Capstone Project by four cheese loving students at George Brown College in Toronto, Ontario. 
                The groups goal was to create a voting system that provided a secure and easy was for every Canadian citizen to vote online.  
                The team first met when we started school at George Brown in January of 2020 the team quickly saw adversity thanks to the Covid-19 Outbreak sending them all online before the end of their first semester.
                Over the next 5+ semesters they took classes online and in Fall of 2021 they officially came together for Capstone to create the Smart Voting project.
            </p>
            <h2>Our Goals</h2>
                <ul>
                    <li>To create a fully online voting system</li>
                    <li>Provide Citizens a one-stop, all access site to voting and political information</li>
                    <li>Provide Political parties and candidates with voter turnouts and riding information</li>
                    <li>Do all of this is in a safe and secure fashion that allows for voter confidence and party assurance</li>
                </ul>
            <h2>Languages</h2>
                <ul>
                    <li>.NET 6</li>
                    <li>Amazon Dynamo DB</li>
                    <li>Amazon Quantum Ledger</li>
                    <li>Amazon Web Services</li>
                    <li>PostgreSQL</li>
                    <li>React</li>
                    <li>Rest API</li>
                </ul>
            <h2>WARNING</h2>
            <p>This is a capstone project for team T04, Smart Voting, at George Brown College.
                Smart Voting is in no way, shape, or form affiliated with Elections Canada or any of the election process in Canada.
                This is a school project and any questions, comments, or concerns, about political parties, the actual voting process, and ridings should be directed to Elections Canada and NOT Smart Voting.
            </p>
        </>
    );
}

function AboutECText() {
    return (
        <>
            <h2>Our Mission</h2>
            <p>Ensuring that Canadians can exercise their democratic rights to vote and be a candidate.</p>
            <h2>Our Mandate</h2>
            <p>The Office of the Chief Electoral Officer, commonly known as Elections Canada, is an independent, non-partisan agency that reports directly to Parliament. Its mandate is to:</p>
            <ul>
                <li>be prepared to conduct a federal general election, by-election or referendum</li>
                <li>administer the political financing provisions of the Canada Elections Act</li>
                <li>monitor compliance with electoral legislation</li>
                <li>conduct public information campaigns on voter registration, voting and becoming a candidate</li>
                <li>conduct education programs for students on the electoral process</li>
                <li>provide support to the independent commissions in charge of adjusting the boundaries of federal electoral districts following each decennial census</li>
                <li>carry out studies on alternative voting methods and, with the approval of parliamentarians, test alternative voting processes for future use during electoral events</li>
                <li>provide assistance and co-operation in electoral matters to electoral agencies in other countries or to international organizations</li>
            </ul>
            <h2>Our Values</h2>
            <p>Our day-to-day activities and decision making are guided by the following key values:</p>
            <ul>
                    <li>a knowledgeable and professional workforce</li>
                    <li>transparency in everything we do</li>
                    <li>responsiveness to the needs of Canadians involved in the electoral process</li>
                    <li>cohesiveness and consistency in administering the Canada Elections Act</li>
                    <li>continuously earning and maintaining the public's trust</li>
                    <li>stewardship and accountability in how we manage our resources</li>
            </ul>
        </>
    );
}