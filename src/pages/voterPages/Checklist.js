import img1 from '../../images/checklistImages/mobYellow3.jpg';
import img2 from '../../images/checklistImages/greenMal4.jpg';
import img3 from '../../images/checklistImages/purpleCalArrowv3.jpg';
import img4 from '../../images/checklistImages/vote1.jpg';
import img5 from '../../images/checklistImages/vote2.jpg';
import img6 from '../../images/checklistImages/vote3.jpg';
import img7 from '../../images/checklistImages/vote4.jpg';
import img8 from '../../images/checklistImages/bluePC2.jpg';
import img9 from '../../images/checklistImages/PinkID2.jpg';
import img10 from '../../images/checklistImages/logoGreen.png';
import ecLogo from '../../images/ecLogo.png';
import React from 'react';
import { Card, CardGroup, Container, Row, Col, } from "react-bootstrap";

export default class CheckList extends React.Component {
    componentDidMount() {
        const checkmarks = document.querySelectorAll('#checkmark');
        for (let i = 0; i < checkmarks.length; i++) {
            checkmarks[i].id = 'checkmark' + i;
        }
    }

    
    render() {
        const checklistArray = [
            "<strong>Make sure you're registered</strong> at your current address",
            "Watch for your <strong>voter information card</strong> in the mail",
            "<strong>Make a plan to vote</strong>",
            "Find out <strong>who the candidates are</strong> in your riding",
            "<strong>Bring ID</strong> when you go to vote"];

        return (
            <Container style={{ minWidth: "100%", }}>
                <Container style={{ width: "100%", }}>
                    <Container className="downloadInfographic">
                        <p>Download infographic in <a target="_blank" href="https://www.elections.ca/vot/vop/checklist-aide-memoire_e.pdf">PDF</a> | <a target="_blank" href="https://www.elections.ca/vot/vop/checklist-aide-memoire_e.jpg">JPG</a></p>
                    </Container>
                </Container>
                <br />
                <p className="text-center" style={{ fontSize: "150%" }}>Get to know your voting options and choose what works best for you.<br />No matter how you vote, keeping you healthy and safe is our priority.</p>
                <p className="text-center" style={{ fontSize: "150%", fontWeight: "bold", }}>If you <a className="voteByMail" href="/content.aspx?section=vot&amp;dir=reg/svr&amp;document=index&amp;lang=e">plan to vote by mail</a>, don't wait, apply now at elections.ca.</p>
                <br />
                <Container>
                    {Array.from({ length: checklistArray.length }).map((_, idx) => (
                        ChecklistItem(idx, checklistArray[idx])
                    ))}
                </Container>
                <br />
                <hr />
                <img style={{ width: "20%", display: "flex", margin: "auto", }} src={img10} />
                <br />
                <Row style={{ flexDirection: "row" }}>
                    <Col sm={8} style={{ fontSize: "175%" }}>
                        <p style={{ fontWeight: "bold" }}>Visit elections.ca for the official information on voting and the health and safety measures in place.</p>
                        <p>1-800-463-6868 / <strong>elections.ca</strong> / TTY1-800-361-8935</p>
                    </Col>
                    <Col sm={4}>
                        <img style={{ width: "100%", }} src={ecLogo} />
                    </Col>
                </Row>

            </Container>
        );
    }
    
}

function ChecklistItem(index, text) {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9,]
    const cardGroupText = ["At your assigned polling station<strong> on election day</strong>",
        "At your assigned polling station<strong> on advance polling days</strong>",
        "<strong>By mail:</strong> visit <strong>elections.ca</strong> to see if voting by mail is the right choice for you (deadlines apply)",
        "At any <strong>Elections Canada office</strong> across Canada (deadlines apply)"];

    function toggleCheckmark(index) {
        document.getElementById('checkmark' + index).innerHTML = document.getElementById('checkmark' + index).innerHTML === "✓" ? "" : "✓";
    }

    return (
        <Row key={index} style={index % 2 !== 1 ? { backgroundColor: "#3333", alignItems: "center", padding: "10px 0 10px 0" } : { alignItems: "center", padding: "10px 0 10px 0" }}>
            <Col sm={4}><img style={{ width: "100%", }} src={index >= 3 ? images[index + 4] : images[index]} /></Col>
            <Col sm={8} style={{ display: "flex" }}>
                <Container id="checkbox" onClick={() => { toggleCheckmark(index) }}><p id="checkmark" className="noSelect"></p></Container>
                <p id="itemText" style={{ fontSize: "150%", margin: "10px 0 10px 0" }} dangerouslySetInnerHTML={{ __html: text }}></p>
            </Col>
            {index === 2 ?
                <CardGroup>
                    {Array.from({ length: cardGroupText.length }).map((_, idx) => (
                        CreateCardGroupItem(idx, images[idx + 3], cardGroupText[idx])
                    ))}
                </CardGroup> :
                null
            }
        </Row>
    );
}

function CreateCardGroupItem(index, img, text) {
    return (
        <Card key={index}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Text className="text-center" style={{ fontSize: "125%" }} dangerouslySetInnerHTML={{ __html: text }}></Card.Text>
            </Card.Body>
        </Card>
    );
}

