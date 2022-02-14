import React, { useState, useEffect } from 'react'
import { Card, Container, Row, Col, Button, } from "react-bootstrap";
import smartVotingLogo from '../images/svLogo1.png';
import electionsCanadaLogo from '../images/ecLogo.png';
import axios from 'axios'

export default function Contact() {
    return (
        <Container className="ascContainer">
            <Row className="mx-auto" style={{ width: "85%", }}>
                <Col style={{ borderRight: "1px solid #d3d3d3", paddingRight: "50px", }}>
                    <img src={smartVotingLogo} style={{ width: "58%", paddingBottom: "20px", }} />
                    <h2 style={{ fontWeight: "bold", paddingBottom: "20px", }}>Contact Smart Voting</h2>
                    <Container style={{ textAlign: "left" }}>
                        <h4 style={{ fontWeight: "bold" }}>Telephone</h4>
                        <p style={{ fontSize: "20px" }}>647.483.3779</p>
                        <br />
                        <h4 style={{ fontWeight: "bold" }}>Email</h4>
                        <p style={{ fontSize: "20px" }}>contact@smartvoting.cc</p>
                        <br />
                        <h4 style={{ fontWeight: "bold" }}>Address - Headquarters</h4>
                        <p style={{ fontSize: "20px" }}>George Brown College<br />160 Kendal Avenue<br />Toronto, Quebec<br />M5R 1M3</p>
                    </Container>
                </Col>
                <Col style={{ paddingLeft: "50px", }}>
                    <img src={electionsCanadaLogo} style={{ width: "100%", paddingBottom: "20px", }} />
                    <h2 style={{ fontWeight: "bold", paddingBottom: "20px" }}>Contact Elections Canada</h2>
                    <Container style={{ textAlign: "left" }}>
                        <h4 style={{ fontWeight: "bold" }}>Telephone</h4>
                        <p>Toll-free in Canada and the United States:<br /><p style={{ fontSize: "20px" }}>1-800-463-6868</p></p>
                        <p>Toll-free in Mexico:<br /><p style={{ fontSize: "20px" }}>001-800-514-6868</p></p>
                        <p>From anywhere in the world:<br /><p style={{ fontSize: "20px" }}>1-613-993-2975</p></p>
                        <br />
                        <h4 style={{ fontWeight: "bold" }}>Email</h4>
                        <Button variant="" target="_blank" href="https://csep-pesc.elections.ca/en-CA/intake/" className="btn-lg btn-purple">Click Here To Contact Elections Canada</Button>
                        <br />
                        <br />
                        <h4 style={{ fontWeight: "bold" }}>Fax</h4>
                        <p>Local:<br /><p style={{ fontSize: "20px" }}>1-613-954-8584</p></p>
                        <p>Toll-free in Canada and the United States:<br /><p style={{ fontSize: "20px" }}>1-888-524-1444</p></p>
                        <br />
                        <h4 style={{ fontWeight: "bold" }}>Address - Headquarters</h4>
                        <p style={{ fontSize: "20px" }}>Elections Canada<br />30 Victoria Street<br />Gatineau, Quebec<br />K1A 0M6</p>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
}
