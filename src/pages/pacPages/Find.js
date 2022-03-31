import React from "react";
import monkey from '../../images/underConstruction.png';
import { Container, } from "react-bootstrap";
export default function Find() {
    return (
        <Container className="errorPage">
            <img src={monkey} style={{ width: "100%" }} alt='monkey' />
        </Container>
    );
}
