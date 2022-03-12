import React, { useState, useEffect } from 'react'
import { Container, Card, Carousel, Row, Col, Button, InputGroup, Form,  FormControl, } from "react-bootstrap";
import axios from 'axios'

export default function Riding() {
    const [selectValue, setSV] = useState('');
    const [searchData, setData] = useState('');

    function selectItem(e) {
        setSV({ value: e.target.value })
        document.getElementById("searchbar").placeholder = e.target.value === "zip" ? "Postal Code (ex. A9A9A9, A9A A9A, or a9a a9a)" : e.target.value === "district" ? "District Name (ex. St. Paul's)" : e.target.value === "candidate" ? "Candidate Name (ex. Justin Trudeau)" : e.target.value === "location" ? "Location (ex. Toronto)" : ""
    }

    function search() {
        let searchString = document.getElementById("searchbar").value;
        if (selectValue.value === "zip") {
            axios.get("https://api.smartvoting.cc/v1/Riding/Locate/" + searchString).then(res => {
                console.log(res.data)
                setData(res.data);
            }).catch(err => console.log(err))
        } else {
            axios.get("https://api.smartvoting.cc/v1/Riding/List").then(res => {
                let filter;
                if (selectValue.value === "district") filter = res.data.filter(i => i.name === searchString)[0];
                else if (selectValue.value === "candidate") filter = res.data.filter(i => i.candidates.includes(searchString))[0];
                else if (selectValue.value === "location") filter = res.data.filter(i => i.office.city === searchString);
                console.log(filter);
                setData(filter);
            }).catch(err => console.log(err))
        }
    }

    return (
        <Container style={{ minWidth: "100%",}}>
            <InputGroup className="mt-3 mb-3">
                <Form.Select defaultValue="" id="rsDropdown" style={{ width: "25%", fontSize:"130%" }} onChange={(e) => {selectItem(e)}} required>
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
                    style={{ width: "65%", fontSize: "130%"  }}
                />
                <Button variant="" className="btn-outline-purple" id="button-addon2" type="submit" style={{ width: "10%", fontSize: "130%"  }} onClick={() => { search() }}>Search</Button>
            </InputGroup>
            <Container>
            </Container>
        </Container>
    );
}
