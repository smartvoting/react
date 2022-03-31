import React, { useState, useEffect, useRef } from "react";
import { Container, Card, Form, Button, Row, Col, Table, } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

export default function Login() {
    return (
        <Container style={{ minWidth: "90%", height: "calc(100vh - 150px)", display: "flex", alignItems: "center", fontSize: "1.1vw" }}>
            <Container id="hideContainer" style={{ minWidth: "100%", transition: "opacity 0.25s linear" }} >
                <Card style={{ borderRadius: "15px", border: "5px solid #513A77" }}>
                    <Card.Header className="text-center" style={{ fontWeight: "bold", fontSize: "1.8vw", }}>Login</Card.Header>
                    <Card.Body style={{ textAlign: "left", padding: "20px", }}>

                    </Card.Body>
                </Card>
            </Container>
        </Container>
    );
}