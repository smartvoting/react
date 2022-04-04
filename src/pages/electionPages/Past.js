import React, { useState, useEffect } from "react";
import { Container, Table, Button, Modal } from "react-bootstrap";
import axios from 'axios';

export default function Past() {
    const [elections, setElections] = useState('');
    const [modalShow, setModalShow] = useState(false);
    const [globalIndex, setGI] = useState(-1);

    useEffect(() => {
        axios.get(`https://api.smartvoting.cc/v1/History/Elections`).then(res => {
            setElections(res.data);
        }).catch(err => console.log(err));
    }, []);

    function getDate(i) {
        const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        let date = new Date(i);
        return weekDays[date.getDay()] + ", " + monthNames[date.getMonth() + 1] + " " +  date.getDate() + " " + date.getFullYear();
    }

    return (
        <Container>
            <Table striped bordered hover style={{ minWidth: "100%", fontSize: "1.3vw" }}>
                <thead>
                    <tr className="text-center">
                        <th>Election Type</th>
                        <th>Election Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: elections.length }).map((_, index) => (
                        <tr key={index}>
                            <td>{elections[index].electionType}</td>
                            <td className="text-center">{getDate(elections[index].electionDate)}</td>
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
            <ElectionInfoModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                i={globalIndex}
                p={elections}
            />
        </Container>
    );
}

function ElectionInfoModal(props) {
    function addSuffix(i) {
        let j = i % 10, k = i % 100;
        if (j === 1 && k !== 11) return i + "st";
        if (j === 2 && k !== 12) return i + "nd";
        if (j === 3 && k !== 13) return i + "rd";
        return i + "th";
    }
    return (
        <Modal {...props} dialogClassName="modal-90w" centered >
            <Modal.Header closeButton>
                <Modal.Title style={{ fontSize: "1.3vw", fontWeight: "bold", }} id="contained-modal-title-vcenter">
                    {props.i !== -1 ? addSuffix(props.p[props.i].electionId) + " " + props.p[props.i].electionType + " Election - " + props.p[props.i].electionDate : null}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ fontSize: "1.2vw" }} className="text-justify">
                {/*<p>{props.i !== -1 ? props.p[props.i].party_name : null } </p>*/}
                <p>I love cheese, especially manchego cheesecake. Stilton pecorino jarlsberg cheesy feet cheesy grin cheese strings cheese slices smelly cheese. Halloumi parmesan cheese triangles manchego when the cheese comes out everybody's happy caerphilly halloumi taleggio. Airedale paneer.

                    Monterey jack queso gouda. Halloumi cheese triangles roquefort cheese on toast lancashire danish fontina croque monsieur roquefort. Camembert de normandie monterey jack melted cheese macaroni cheese mascarpone cream cheese brie stilton. Brie cottage cheese.

                    Pepper jack goat cheese on toast. Babybel chalk and cheese cheesy grin bavarian bergkase mozzarella dolcelatte mozzarella cheddar. Ricotta cauliflower cheese cheese triangles goat fromage frais cheesy grin hard cheese taleggio. Pecorino pecorino rubber cheese emmental roquefort melted cheese cauliflower cheese cheese on toast. Cheese slices smelly cheese.

                    Croque monsieur edam cheese triangles. Stinking bishop cheeseburger when the cheese comes out everybody's happy who moved my cheese cheese strings rubber cheese pecorino croque monsieur. Emmental cut the cheese stilton monterey jack cheddar camembert de normandie danish fontina cheeseburger. Cheese slices halloumi ricotta cheese triangles pepper jack fondue.

                    Fondue cauliflower cheese goat. Fromage frais bocconcini roquefort cheese strings queso cheese triangles chalk and cheese mascarpone. Swiss blue castello cheesy feet cheesecake the big cheese mozzarella everyone loves brie. St. agur blue cheese cheeseburger cheeseburger.</p>
            </Modal.Body>
        </Modal>
    );
}
