import Template from '../static/ASCTemplate';

export default function About() {
    const about = {
        link1: "https://api.smartvoting.cc/v1/about/sv",
        link2: "https://api.smartvoting.cc/v1/about/ec",
        header1: "About Smart Voting",
        header2: "About Elections Canada",
        text: <AboutText/>
    };

    return (
        <Template content={about}/>
    );
}

function AboutText() {
    return (
        <>
            <p>Our Mission</p>
            <p>Ensuring that Canadians can exercise their democratic rights to vote and be a candidate.</p>
            <p>Our Mandate</p>
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
            <p>Our Values</p>
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