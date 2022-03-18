import React, { useState, useEffect } from 'react'
import { Container, Card, Carousel, Row, Col, Button, InputGroup, Form,  FormControl, Table } from "react-bootstrap";
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
        document.getElementById("searchbar").placeholder = e.target.value === "zip" ? "Postal Code (ex. A9A9A9, A9A A9A, a9aa9a, or a9a a9a)" : e.target.value === "district" ? "District Name (ex. St. Paul's)" : e.target.value === "candidate" ? "Candidate Name (ex. Justin Trudeau)" : e.target.value === "location" ? "Location (ex. Toronto)" : "";
    }

    function search() {
        let searchString = document.getElementById("searchbar").value;
        if (selectValue.value === "zip") {
            axios.get("https://api.smartvoting.cc/v1/Riding/Locate/" + searchString).then(res => {
                console.log(res.data)
                if (res.data !== undefined) {
                    setData(res.data);
                    swapView();
                }
                else alert("res.data is null!");
            }).catch(err => console.log(err))
        } else {
            axios.get("https://api.smartvoting.cc/v1/Riding/List").then(res => {
                let filter;
                if (selectValue.value === "district") filter = res.data.filter(i => i.name === searchString)[0];
                else if (selectValue.value === "candidate") filter = res.data.filter(i => i.candidates.includes(searchString))[0];
                else if (selectValue.value === "location") filter = res.data.filter(i => i.office.city === capitalize(searchString));
                if (filter !== undefined) {
                    setData(filter);
                    swapView();
                    return filter;
                }
                else alert("res.data is null!");
            }).then(response => {
                if (response.length > 1) {
                    let centroidList = [];
                    response.forEach(response2 => {
                        axios.get("https://api.smartvoting.cc/v1/Riding/Outline/Centroid/" + response2.id).then(response3 => {
                            console.log(response3.outline);
                            centroidList.push(response3.outline);
                        }).catch(err => console.log(err))
                    });
                }
                else {
                    axios.get("https://api.smartvoting.cc/v1/Riding/Outline/Centroid/" + response.id).then(response2 => {
                        console.log(response2.centroid);
                        setCentroid(response2.centroid);
                    }).catch(err => console.log(err))
                }
            }).catch(err => console.log(err))
        }
        
    }

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function swapView() {
        document.getElementById("instructions").style.height = "0";
        document.getElementById("instructions").style.visibility = "hidden";
        document.getElementById("instructions").style.opacity = "0";
        document.getElementById("map").style.height = "auto";
        document.getElementById("map").style.visibility = "visible";
        document.getElementById("map").style.opacity = "1";
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
            
            <Container id="instructions" style={{minWidth:"100%", }}>
                <h4 style={{ fontWeight: "bold", }}>Instructions:</h4>
                <Table striped bordered style={{ fontSize:"120%", }}>
                    <tbody>
                        <tr>
                            <th>Search by postal code:</th>
                            <td>Type in your home postal code, then click the "Search" button. Postal Codes should be in the format A9AA9A or A9A A9A. Capitalization is not necessary for the search.</td>
                        </tr>
                        <tr>
                            <th>Search by electoral district name:</th>
                            <td>Type in your home postal code, then click the "Search" button. Postal Codes should be in the format A9AA9A or A9A A9A. Capitalization is not necessary for the search.</td>
                        </tr>
                        <tr>
                            <th>Search by candidate name:</th>
                            <td>Type in your home postal code, then click the "Search" button. Postal Codes should be in the format A9AA9A or A9A A9A. Capitalization is not necessary for the search.</td>
                        </tr>
                        <tr>
                            <th>Search by place name (i.e. village, city):</th>
                            <td>Type in your home postal code, then click the "Search" button. Postal Codes should be in the format A9AA9A or A9A A9A. Capitalization is not necessary for the search.</td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
            <Row id="map" style={{ minWidth: "100%", /* visibility: "hidden", opacity: "0", height: "0", transition: "visibility 0s, opacity 0.5s linear" */ }}>
                <Col>
                    {searchData.length > 1 ?
                        <Table striped bordered hover style={{ minWidth: "100%" }}>
                            <thead>
                                <tr className="text-center">
                                    <th style={{ fontSize: "150%" }}>Electoral District</th>
                                    <th style={{ fontSize: "150%" }}>Province</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Array.from({ length: searchData.length }).map((_, index) => (
                                    <tr key={index}>
                                        <td style={{ fontSize: "150%", }}>{searchData[index].name}</td>
                                        <td className="text-center" style={{ fontSize: "150%" }}>{searchData[index].office.province}</td>
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
