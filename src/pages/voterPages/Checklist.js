import img1 from '../../images/checklistImages/mobYellow3.jpg';
import img2 from '../../images/checklistImages/greenMal4.jpg';
import img3 from '../../images/checklistImages/purpleCalArrowv3.jpg';
import img4 from '../../images/checklistImages/vote1.jpg';
import img5 from '../../images/checklistImages/vote2.jpg';
import img6 from '../../images/checklistImages/vote3.jpg';
import img7 from '../../images/checklistImages/vote4.jpg';
import img8 from '../../images/checklistImages/bluePC2.jpg';
import img9 from '../../images/checklistImages/PinkID2.jpg';
import { Card, Container, Button, Row, Col, } from "react-bootstrap";

export default function CheckList() {
    return (
        <Container>
            <p className="text-center" style={{ fontSize: "18px" }}>Get to know your voting options and choose what works best for you.<br />No matter how you vote, keeping you healthy and safe is our priority.</p>
            <p className="text-center" style={{ fontSize: "18px", fontWeight: "bold", }}>If you <a className="voteByMail" href="/content.aspx?section=vot&amp;dir=reg/svr&amp;document=index&amp;lang=e">plan to vote by mail</a>, don't wait, apply now at elections.ca.</p>
            <br/>
            <Container>
                <Row style={{alignItems:"center",}}>
                    <Col sm={4}><img style={{ width:"100%", }} src={img1}/></Col>
                    <Col sm={8} style={{display:"flex"}}>
                        <Container style={{border:"solid 2px black", backgroundColor:"white", width:"5%", marginLeft:"10px", marginRight:"20px"}}></Container>
                        <p style={{ fontSize: "20px", margin:"5px 0 5px 0" }}>Make sure you're registered at your current address</p>
                    </Col>
                </Row>
            </Container>

        </Container>
    );
}

