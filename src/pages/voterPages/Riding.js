import React, { useState,  } from 'react'
import { Container, Row, Col, Button, InputGroup, Form, FormControl, Table } from "react-bootstrap";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

export default function Riding() {
    const [selectValue, setSV] = useState('');
    const [searchData, setData] = useState('');
    const [centroid, setCentroid] = useState('');
    const [markers, setMarkers] = useState('')
    const [shape, setShape] = useState('');

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDZW4oX9GNAXSn6fXCN12nc8LsgzDiOlKo"
    })

    const [map, setMap] = useState(null);

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map);
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null);
    }, [])

    function selectItem(e) {
        setSV({ value: e.target.value })
        document.getElementById("searchbar").placeholder = e.target.value === "zip" ? "Postal Code (ex. A9A9A9, A9A A9A, a9aa9a, or a9a a9a)" : e.target.value === "district" ? "District Name (ex. St. Paul's)" : e.target.value === "candidate" ? "Candidate Name (ex. Bob or Smith)" : e.target.value === "location" ? "Location (ex. Toronto)" : "";
    }

    function search() {
        let searchString = document.getElementById("searchbar").value;
        let searchUrl = "";
        if (selectValue.value === "zip") searchUrl = "https://api.smartvoting.cc/v1/Riding/Locate/PostCode/" + searchString;
        else if (selectValue.value === "district") searchUrl = "https://api.smartvoting.cc/v1/Riding/Locate/Riding/" + searchString;
        else if (selectValue.value === "candidate") searchUrl = "https://api.smartvoting.cc/v1/Riding/Locate/Candidate/" + searchString;
        else searchUrl = "https://api.smartvoting.cc/v1/Riding/Locate/City/" + searchString;
        axios.get(searchUrl).then(res => {
            console.log(res.data)
            if (res.data !== undefined) {
                setData(res.data);
                swapView();
            }
            else alert("res.data is null!");
        }).catch(err => console.log(err));
    }

    function swapView() {
        document.getElementById("instructions").style.height = "0";
        document.getElementById("instructions").style.visibility = "hidden";
        document.getElementById("instructions").style.opacity = "0";
        document.getElementById("map").style.height = "auto";
        document.getElementById("map").style.visibility = "visible";
        document.getElementById("map").style.opacity = "1";
    }

    const [buttonState, setBS] = useState(false);

    return (
        <Container style={{ minWidth: "100%",}}>
            <InputGroup className="mt-3 mb-3">
                <Form.Select defaultValue="" id="rsDropdown" style={{ width: "25%", fontSize:"1.2vw" }} onChange={(e) => {selectItem(e)}} required>
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
                    style={{ width: "65%", fontSize:"1.2vw"  }}
                />
                <Button variant="" className="btn-outline-purple" id="button-addon2" type="submit" style={{ width: "10%", fontSize: "1.2vw" }} onClick={() => { search() }}>
                    {
                        buttonState ?
                            <p style={{ margin: "0" }}>Loading < FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faSpinner} className="fa-spin" /></p> :
                            <p style={{ margin: "0" }}>Next <FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faChevronRight} /></p>
                    }
                </Button>
            </InputGroup>
            
            <Container id="instructions" style={{minWidth:"100%", }}>
                <h4 style={{ fontWeight: "bold", }}>Instructions:</h4>
                <Table striped bordered style={{ fontSize:"1.1vw", }}>
                    <tbody>
                        <tr>
                            <th>Search by postal code:</th>
                            <td>Type in your home postal code, then click the "Search" button. Postal Codes should be in the format A9AA9A or A9A A9A. Capitalization is not necessary for the search.</td>
                        </tr>
                        <tr>
                            <th>Search by electoral district name:</th>
                            <td>Type in the name of an electoral district, then click the "Search" button. Information on your riding will appear on the left with a map on the right.</td>
                        </tr>
                        <tr>
                            <th>Search by candidate name:</th>
                            <td>Type in the first name, or last name of a candidate, then click the "Search" button. Ridings will be shown in a table format. You can select your riding for more information by clicking the item in the table. <strong>Please keep in mind that all candidates are made up, and any similarity to actual persons, living or dead, is purely coincidental.</strong></td>
                        </tr>
                        <tr>
                            <th>Search by place name (i.e. village, city):</th>
                            <td>Type in the name of a .</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            <Row id="map" style={{ minWidth: "100%", /* visibility: "hidden", opacity: "0", height: "0", transition: "visibility 0s, opacity 0.5s linear" */ }}>
                <Col>
                    {searchData.length > 1 ?
                        <Table striped bordered hover style={{ minWidth: "100%", fontSize:"1.3vw" }}>
                            <thead>
                                <tr className="text-center">
                                    <th>Electoral District</th>
                                    <th>Province</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: searchData.length }).map((_, index) => (
                                    <tr key={index}>
                                        <td>{searchData[index].name}</td>
                                        <td className="text-center">{searchData[index].office.province}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table> : null }
                </Col>
                <Col>
                    {isLoaded ? (
                        <GoogleMap
                            zoom={10}
                            onLoad={onLoad}
                            onUnmount={onUnmount}
                        ><></>
                        </GoogleMap>
                    ) : <></>}
                </Col>
            </Row>
        </Container>
    );
}
