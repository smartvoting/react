import React, { useState, useEffect } from 'react'
import { Container, Row, Col, } from "react-bootstrap";
import smartVotingLogo from '../images/svLogo1.png';
import electionsCanadaLogo from '../images/ecLogo.png';
import axios from 'axios'

export default function ASCTemplate(props) {
    const [SV, setSV] = useState('');
    const [EC, setEC] = useState('');

    useEffect(() => {
        axios.get(props.content.link1).then(res => {
            setSV(res.data);
        }).catch(err => console.log(err))
        axios.get(props.content.link2).then(res => {
            setEC(res.data);
        }).catch(err => console.log(err))
    }, []);

    return (
        <Container className="ascContainer">
            <Row className="mx-auto" style={{ width: "90%", }}>
                <Col style={{ borderRight: "1px solid #d3d3d3", paddingRight: "50px", }}>
                    <img src={smartVotingLogo} style={{ width: "57%", paddingBottom: "20px", }} />
                    <h2 style={{ fontWeight: "bold" }}>{props.content.header1}</h2>
                    <p style={{fontSize:"125%"}}>{SV.bodyText}</p>
                </Col>
                <Col style={{ paddingLeft: "50px", }}>
                    <img src={electionsCanadaLogo} style={{ width: "100%", paddingBottom: "20px", }} />
                    <h2 style={{ fontWeight: "bold" }}>{props.content.header2}</h2>
                    <p style={{ fontSize: "125%" }}>{EC.bodyText}</p>
                </Col>
            </Row>
        </Container>
    );
}