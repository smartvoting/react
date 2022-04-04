import React, { useState, useEffect } from "react";
import { Container, Table, } from "react-bootstrap";
import axios from 'axios';

export default function Past() {
    const [elections, setElections] = useState('');

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
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: elections.length }).map((_, index) => (
                        <tr key={index}>
                            <td>{elections[index].electionType}</td>
                            <td className="text-center">{getDate(elections[index].electionDate)}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}