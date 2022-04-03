import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button, InputGroup, Form, Table, Image } from "react-bootstrap";
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { GoogleMap, LoadScript, Marker, Polygon } from '@react-google-maps/api';
import defaultAvatar from '../../images/defaultAvatar.png';

export default function Riding() {
    const location = useLocation();
    const navigate = useNavigate();
    const [selectValue, setSV] = useState('');
    const [searchbarValue, setSB] = useState('');
    const [searchData, setData] = useState('');
    const [centre, setCentre] = useState({ lat: 45.4236, lng: -75.7009 });
    const [markers, setMarkers] = useState([{ lat: 45.4236, lng: -75.7009 }]);
    const [shape, setShape] = useState([{ lat: 0, lng: 0 }]);

    function selectItem(e) {
        setSV({ value: e.target.value })
        document.getElementById("searchbar").placeholder = e.target.value === "zip" ? "Postal Code (ex. A9A9A9, A9A A9A, a9aa9a, or a9a a9a)" : e.target.value === "district" ? "District Name (ex. St. Paul's)" : e.target.value === "candidate" ? "Candidate Name (ex. Bob or Smith)" : e.target.value === "location" ? "Location (ex. Toronto)" : "";
    }

    function capitalize(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function search() {
        if (location.state !== null && location.state !== undefined) {
            document.getElementById("rsDropdown").selectedIndex = 1;
            setSV({ value: "zip" });
            document.getElementById("searchbar").value = location.state.zip;
        }

        let searchString = document.getElementById("searchbar").value;
        setSB(searchString);
        let searchUrl = "";
        if (selectValue.value === "zip" || (location.state !== null && location.state !== undefined)) searchUrl = "https://api.smartvoting.cc/v1/Riding/Locate/PostCode/" + searchString;
        else if (selectValue.value === "district") searchUrl = "https://api.smartvoting.cc/v1/Riding/Locate/Riding/" + searchString;
        else if (selectValue.value === "candidate") searchUrl = "https://api.smartvoting.cc/v1/Riding/Locate/Candidate/" + capitalize(searchString);
        else searchUrl = "https://api.smartvoting.cc/v1/Riding/Locate/City/" + searchString;
        axios.get(searchUrl).then(res => {
            if (res.data !== undefined) {
                setData(res.data);
                getLocationData(res.data);
            }
        }).catch(err => {
            setData({});
            getLocationData({});
        });
        swapView();
        setBS(false);
        setTimeout(navigate('/voter/riding/', {}), 1000);
    }

    function getLocationData(data) {
        let markersArray = [];
        if (data.length === undefined) {
            axios.get("https://api.smartvoting.cc/v1/Riding/Outline/Centroid/" + data.id).then(res => {
                setMarkers([{ lat: res.data[0].centroid.latitude, lng: res.data[0].centroid.longitude }]);
                setCentre({ lat: res.data[0].centroid.latitude, lng: res.data[0].centroid.longitude });
            }).catch(err => { });
            axios.get("https://api.smartvoting.cc/v1/Riding/Outline/Shape/" + data.id).then(res => {
                let shapeArray = [];
                res.data.outline.forEach(point => shapeArray.push({ lat: point.latitude, lng: point.longitude }))
                setShape(shapeArray)
            }).catch(err => { });
        }
        else {
            for (let i = 0; i < data.length; i++) {
                axios.get("https://api.smartvoting.cc/v1/Riding/Outline/Centroid/" + data[i].id).then(res => {
                    markersArray.push({ lat: res.data[0].centroid.latitude, lng: res.data[0].centroid.longitude });
                }).catch(err => { });
            }
            setTimeout(function () {
                setMarkers(markersArray);
                setCentreVari(markersArray);
                setShape([{ lat: 0, lng: 0 }]);
            }, 1000)
        }
    }

    function setCentreVari(m) {
        let latitudes = 0;
        let longitudes = 0;
        let total = 0;
        m.map(coord => {
            latitudes += coord.lat;
            longitudes += coord.lng;
            total += 1;
        });
        if (total === 0) return;
        setCentre({ lat: latitudes / total, lng: longitudes / total });
    }

    function rowClick(ridingName) {
        axios.get("https://api.smartvoting.cc/v1/Riding/Locate/Riding/" + ridingName).then(res => {
            if (res.data !== undefined) {
                setData(res.data[0]);
                getLocationData(res.data[0]);
            }
        }).catch(err => { });
    }

    function swapView() {
        document.getElementById("instructions").style.height = "0";
        document.getElementById("instructions").style.visibility = "hidden";
        document.getElementById("instructions").style.opacity = "0";
        document.getElementById("map").style.height = "100%";
        document.getElementById("map").style.visibility = "visible";
        document.getElementById("map").style.opacity = "1";
    }

    const [buttonState, setBS] = useState(false);

    const options = {
        fillColor: "red",
        fillOpacity: 0.2,
        strokeColor: "red",
        strokeOpacity: 1,
        strokeWeight: 2,
        clickable: false,
        draggable: false,
        editable: false,
        geodesic: false,
        zIndex: 1
    }

    useEffect(() => {
        if (location.state !== null && location.state !== undefined) search();
    }, []);


    return (
        <Container style={{ minWidth: "100%", minHeight: "100%", height: "100%", }} >
            <InputGroup className="mb-3">
                <Form.Select defaultValue="" id="rsDropdown" style={{ width: "25%", fontSize:"1.2vw" }} onChange={(e) => {selectItem(e)}} required>
                    <option value="" disabled hidden>Search By:</option>
                    <option value="zip">Postal Code</option>
                    <option value="district">District Name</option>
                    <option value="candidate">Candidate Name</option>
                    <option value="location">Location Name (Village, City)</option>
                </Form.Select>
                <Form.Control
                    id="searchbar"
                    disabled={selectValue === ""}
                    placeholder="Please select a value from the dropdown menu"
                    data-val-required={selectValue.value === "zip" ? "Please enter a postal code to continue." : "A keyword is required to continue."}
                    maxLength={selectValue.value === "zip" ? "7" : "999"}
                    type="text"
                    required
                    style={{ width: "65%", fontSize:"1.2vw"  }}
                />
                <Button disabled={buttonState} variant="" className="btn-outline-purple" id="button-addon2" type="submit" style={{ width: "10%", fontSize: "1.2vw" }} onClick={() => { setBS(true); search(); }}>
                    {
                        buttonState ?
                            <p style={{ margin: "0", }}>Loading < FontAwesomeIcon style={{ float: "right", marginTop: "7px" }} icon={faSpinner} className="fa-spin" /></p> :
                            <p style={{ margin: "0", }}>Search</p>
                    }
                </Button>
            </InputGroup>
            <Container style={{ minWidth:"100%", height:"90%", maxHeight: "90%", }}>
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
                                <td>Type in the first name, or last name of a candidate, then click the "Search" button. Ridings will be shown in a table format on the left, and a map will be shown on the right. You can select your riding for more information by clicking the item in the table. <strong>Please keep in mind that all candidates are made up, and any similarity to actual persons, living or dead, is purely coincidental.</strong></td>
                            </tr>
                            <tr>
                                <th>Search by place name:</th>
                                <td>Type in the name of a village or city, then click the "Search" button. Ridings will be shown in a table format on the left, and a map will be shown on the right. You can select your riding for more information by clicking the item in the table.</td>
                            </tr>
                        </tbody>
                    </Table>
                </Container>
                <Row id="map" style={{ minWidth: "100%", visibility: "hidden", opacity: "0", height: "0", transition: "visibility 0s, opacity 0.5s linear" }}>
                    <Col md={7} style={{ maxHeight:"100%", }}>
                        {
                            searchData.length > 1 ?
                                <Table striped bordered hover style={{ minWidth: "100%", maxHeight: "100%", fontSize: "1.3vw", overflowY: "auto", display: "flex", flexDirection: "column" }}>
                                    <thead>
                                        <tr style={{ display: "flex", width: "100%" }} className="text-center">
                                            <th style={{ display:"flex", width:"100%", }}>Electoral District</th>
                                            {selectValue.value === "candidate" ?
                                                <th style={{ display: "flex", width: "60%", textAlign:"center", }}>Possible Candidate</th> :
                                                <th style={{ display: "flex", width: "60%", textAlign: "center", }}>Province</th>
                                            }
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Array.from({ length: searchData.length }).map((_, index) => (
                                            <tr key={index} className="candidateRow" onClick={() => { rowClick(searchData[index].name); }} style={{ display: "flex", width: "100%" }}>
                                                <td style={{ display: "flex", width: "100%", }}>{searchData[index].name}</td>
                                                {selectValue.value === "candidate" ?
                                                    <td style={{ display: "flex", width: "60%", }}>{searchData[index].office.province}</td> :
                                                    <td style={{ display: "flex", width: "60%", }}>{searchData[index].office.province}</td>
                                                }
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table> :
                            (searchData !== null && searchData !== undefined && searchData.office !== null && searchData.office !== undefined) ?
                                <Container style={{ border: "2px solid black", minWidth: "100%", backgroundColor: "#f2f2f2", padding: "20px", fontSize:"1vw", height:"100%", }}>
                                    <h4 style={{ fontWeight: "bold", }}>Information on your electoral district:</h4>
                                    <p>
                                        <strong>District Name: </strong>{searchData.name}
                                        <br/>
                                        <strong>District ID: </strong>{searchData.id}
                                        <br />
                                        <strong>Office Address: </strong>{searchData.office.streetNumber} {searchData.office.streetName} {searchData.office.city}, {searchData.office.province} {searchData.office.unitNumber !== null && searchData.office.unitNumber !== "" ? "- Unit: " + searchData.office.unitNumber : null}
                                        <br/>
                                        <strong>Office Phone Number: </strong>{searchData.phone}
                                        <br />
                                        <strong>Office Fax: </strong>{searchData.fax}
                                    </p>
                                    <br/>
                                    <h4 style={{ fontWeight: "bold", }}>Candidates:</h4>
                                        {
                                            (searchData.candidates !== null && searchData.candidates !== undefined && searchData.candidates.length > 0) ?
                                            <p style={{ fontWeight: "bold", }}>Please keep in mind that all candidates are made up, and any similarity to actual persons, living or dead, is purely coincidental.</p> : null
                                        }
                                        {
                                            (searchData.candidates !== null && searchData.candidates !== undefined && searchData.candidates.length > 0) ?
                                                <Row style={{ width: "100%" }}>
                                                    {Array.from({ length: searchData.candidates.length }).map((_, index) => (
                                                        <Col md={2} key={index}>
                                                            <Image src={defaultAvatar} roundedCircle style={{ width: "100%" }} />
                                                            <Container className="text-center" style={{ fontSize: "1vw", }}>
                                                                <p style={{ fontWeight: "bold", }}>{searchData.candidates[index].firstName} {searchData.candidates[index].lastName}</p>
                                                            </Container>
                                                        </Col>
                                                    ))}
                                                </Row> : <p style={{ fontWeight: "bold", }}>There are no candidates registered in our database for {searchData.name}</p>
                                        }
                                </Container> :
                                    <Container style={{ border: "2px solid black", minWidth: "100%", backgroundColor: "#f2f2f2", padding: "20px", fontSize: "1vw", height: "100%", }}>
                                        <h1 style={{ fontWeight:"bold", }}>Error:</h1>
                                        <h2>Looks like there are no {selectValue.value === "zip" ? "postal codes" : selectValue.value === "district" ? "districts" : selectValue.value === "candidate" ? "candidates" :  "places"} that match the search term: "{searchbarValue}"</h2>
                                    </Container>
                        }
                    </Col>
                    <Col md={5} className="googleMapColumn" style={{ maxHeight: "100%", }}>
                        <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} >
                            <GoogleMap zoom={selectValue.value === "location" ? 10 : selectValue.value === "candidate" ? 3 : 12} center={centre} >
                                <Polygon paths={shape} options={options} />
                                {Array.from({ length: markers.length }).map((_, index) => (
                                    <Marker key={index} position={markers[index]} />
                                ))}
                            </GoogleMap>
                        </LoadScript>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
