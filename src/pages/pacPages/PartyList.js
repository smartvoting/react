import React, { useState, useEffect } from "react";
import { Container, Table, Button, Modal } from "react-bootstrap";
import axios from 'axios'

export default function PartyList() {
    const [parties, setParties] = useState('');
    const [modalShow, setModalShow] = useState(false);
    const [globalIndex, setGI] = useState(-1);

    useEffect(() => {
        axios.get(`https://api.smartvoting.cc/v1/Party/List`).then(res => {
            setParties(res.data);
        }).catch(err => console.log(err));
    }, []);

    return (
        <Container>
            <Table striped bordered hover style={{minWidth:"100%"}}>
                <thead>
                    <tr className="text-center">
                        <th style={{ fontSize: "150%" }}>Party Name</th>
                        <th style={{ fontSize: "150%" }}>Is Registered</th>
                        <th style={{ fontSize: "150%" }}></th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: parties.length }).map((_, index) => (
                        <tr key={index}>
                            <td style={{ fontSize: "150%", }}>{parties[index].name}</td>
                            <td className="text-center" style={{ fontSize: "150%" }}>{parties[index].isRegistered === false ? "Not Registered" : "Registered"}</td>
                            <td className="text-center">
                                <Button id={index} variant="primary" onClick={() => {
                                    setGI(index)
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
                p={ parties }
            />
        </Container>
    );
}

function PartyInfoModal(props) {
    return (
        <Modal {...props} dialogClassName="modal-90w" centered >
            <Modal.Header style={{ fontSize: "150%", fontWeight: "bold", }} closeButton>
                <Modal.Title style={{ fontSize: "125%", fontWeight: "bold", }}id="contained-modal-title-vcenter">
                    {props.i !== -1 ? props.p[props.i].name : null}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ fontSize: "150%" }} className="text-justify">
                {/*<p>{props.i !== -1 ? props.p[props.i].party_name : null } </p>*/}
                <p>I love cheese, especially manchego cheesecake. Stilton pecorino jarlsberg cheesy feet cheesy grin cheese strings cheese slices smelly cheese. Halloumi parmesan cheese triangles manchego when the cheese comes out everybody's happy caerphilly halloumi taleggio. Airedale paneer.

                    Monterey jack queso gouda. Halloumi cheese triangles roquefort cheese on toast lancashire danish fontina croque monsieur roquefort. Camembert de normandie monterey jack melted cheese macaroni cheese mascarpone cream cheese brie stilton. Brie cottage cheese.

                    Pepper jack goat cheese on toast. Babybel chalk and cheese cheesy grin bavarian bergkase mozzarella dolcelatte mozzarella cheddar. Ricotta cauliflower cheese cheese triangles goat fromage frais cheesy grin hard cheese taleggio. Pecorino pecorino rubber cheese emmental roquefort melted cheese cauliflower cheese cheese on toast. Cheese slices smelly cheese.

                    Croque monsieur edam cheese triangles. Stinking bishop cheeseburger when the cheese comes out everybody's happy who moved my cheese cheese strings rubber cheese pecorino croque monsieur. Emmental cut the cheese stilton monterey jack cheddar camembert de normandie danish fontina cheeseburger. Cheese slices halloumi ricotta cheese triangles pepper jack fondue.

                    Fondue cauliflower cheese goat. Fromage frais bocconcini roquefort cheese strings queso cheese triangles chalk and cheese mascarpone. Swiss blue castello cheesy feet cheesecake the big cheese mozzarella everyone loves brie. St. agur blue cheese cheeseburger cheeseburger.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}
