import React from "react";
import shrug from '../images/404Page.png';
import { Container, } from "react-bootstrap";
export default function ErrorPage() {
    return (
        <Container className="errorPage">
            <img src={shrug} style={{ width: "98.3%" }} alt='Shrugging Man' />
        </Container>
    );
}