import React from "react";
import shrug from '../images/404Page.png';
import { Container, Card, } from "react-bootstrap";
import { useNavigate, } from "react-router-dom";
export default function ErrorPage() {
    const navigate = useNavigate();
    return (
        <>
            <Container className="errorPage">
                <img src={shrug} className="errorImage" alt='Shrugging Man' />
            </Container>
        </>
    );
}