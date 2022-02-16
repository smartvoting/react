import React, { useState, useEffect } from 'react'
import { Container, Card, Carousel, Row, Col, Button, InputGroup, Form,  FormControl, } from "react-bootstrap";
import axios from 'axios'

export default function Riding() {
    const [selectValue, setSV] = useState('');
    const [searchData, setData] = useState('');

    function selectItem(e) {
        setSV({ value: e.target.value })
        document.getElementById("searchbar").placeholder = e.target.value === "zip" ? "Postal Code (ex. A9A9A9)" : e.target.value === "district" ? "District Name (ex. St. Paul's)" : e.target.value === "candidate" ? "Candidate Name (ex. Justin Trudeau)" : e.target.value === "location" ? "Location (ex. Toronto)" : ""
    }

    function search() {
        if (selectValue.value === "zip") {
            let searchString = document.getElementById("searchbar").value.toUpperCase();
            axios.get("https://represent.opennorth.ca/postcodes/" + searchString).then(res => {
                console.log(res.data)
                setData(res.data);
            }).catch(err => console.log(err))
        }
    }
    /*const [SV, setSV] = useState('');
    const [EC, setEC] = useState('');

    useEffect(() => {
        axios.get(props.content.link1).then(res => {
            setSV(res.data);
        }).catch(err => console.log(err))
        axios.get(props.content.link2).then(res => {
            setEC(res.data);
        }).catch(err => console.log(err))
    }, []);*/

    return (
        <Container style={{ minWidth: "100%",}}>
            <InputGroup className="mb-3">
                <Form.Select defaultValue="" id="rsDropdown" style={{ width: "25%", fontSize:"120%" }} onChange={(e) => {selectItem(e)}} required>
                    <option value="" disabled hidden>Search By:</option>
                    <option value="zip">Postal Code</option>
                    <option value="district">District Name</option>
                    <option value="candidate">Candidate Name</option>
                    <option value="location">Location Name (Village, City)</option>
                </Form.Select>
                <FormControl
                    id="searchbar"
                    disabled={selectValue === ""}
                    placeholder="Please select a value from the dropdown menu"
                    required
                    data-val-regex={selectValue.value === "zip" ? "Please enter a valid Postal Code (A9A 9A9)." : ""}
                    pattern={selectValue.value === "zip" ? "^(\d{5}-\d{4}|\d{5}|\d{9})$|^([a-zA-Z]\d[a-zA-Z]( )?\d[a-zA-Z]\d)$" : "^[abceghjklmnprstvxyABCEGHJKLMNPRSTVXY]{1}\d{1}[a-zA-Z]{1} *\d{1}[a-zA-Z]{1}\d{1}\s*$"}
                    data-val-required={selectValue.value === "zip" ? "Please enter a postal code to continue." : "A keyword is required to continue."}
                    maxLength={selectValue.value === "zip" ? "7" : "999"}
                    type="text"
                    style={{ width: "65%", fontSize: "120%"  }}
                />
                <Button variant="" className="btn-outline-purple" id="button-addon2" type="submit" style={{ width: "10%", }} onClick={() => { search() }}>Search</Button>
            </InputGroup>
        </Container>
    );
}
