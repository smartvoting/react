import React, { useState, useEffect } from "react";
import { Container, Table, Button, Modal } from "react-bootstrap";
import axios from 'axios';

export default function PartyList() {
    const [parties, setParties] = useState('');
    const [platform, setPlatform] = useState();
    const [modalShow, setModalShow] = useState(false);
    const [globalIndex, setGI] = useState(-1);

    useEffect(() => {
        axios.get(`https://api.smartvoting.cc/v1/Party/List`).then(res => {
            setParties(res.data);
        }).catch(err => console.log(err));
    }, []);

    function getPlatform(id) {
        let pa = []
        for (let i = 1; i < 26; i++){
            axios.get(`https://api.smartvoting.cc/v1/Party/` + id + `/Issue/` + i).then(res => {
                console.log(res.data);
                pa.push(res.data);
            }).catch(err => console.log(err));
        }
        setPlatform(pa);
    }

    return (
        <Container>
            <Table striped bordered hover style={{ minWidth: "100%", fontSize: "1.3vw" }}>
                <thead>
                    <tr className="text-center">
                        <th>Party Name</th>
                        <th>Is Registered</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: parties.length }).map((_, index) => (
                        <tr key={index}>
                            <td>{parties[index].name}</td>
                            <td className="text-center">{parties[index].isRegistered === false ? "Not Registered" : "Registered"}</td>
                            <td className="text-center">
                                <Button id={index} variant="primary" onClick={() => {
                                    setGI(index)
                                    getPlatform(parties[index].id)
                                    setModalShow(true)
                                }}>More Info</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <PartyInfoModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                i={globalIndex}
                p={parties}
                plat={platform}
            />
        </Container>
    );
}

function PartyInfoModal(props) {
    let topics = ["Anti-Racism and Inclusion", "Child Care", "Climate Change and Energy", "Corporate Taxes", "Crime and Public Safety", "Disaster Preparedness", "Economy and Jobs", "Education", "Foreign Affairs", "Health Care", "Housing", "Immigration", "Indigenous Reconciliation", "LGBTQ2S Rights", "Long Term Care", "National Security", "Parental Support", "Parliament and Ethics", "Personal Finance", "Personal Taxes", "Public Transportation", "Retirement and Seniors", "Small Business", "Technology", "Trade"];
    return (
        <Modal {...props} dialogClassName="modal-90w" centered >
            <Modal.Header closeButton>
                <Modal.Title style={{ fontSize: "1.3vw", fontWeight: "bold", }} id="contained-modal-title-vcenter">
                    {props.i !== -1 ? props.p[props.i].name : null}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ fontSize: "1.2vw" }} className="text-justify">
                {Array.from({ length: topics.length }).map((_, index) => (
                    <Container key={index} style={{ minWidth:"95%",}}>
                        <h2 key={index} style={{ fontWeight: "bold", }}>{topics[index]}</h2>
                        <p>Our database does not have any knowledge of the parties opinion on this topic.</p>
                    </Container>
                 ))}
            </Modal.Body>
        </Modal>
    );
}
