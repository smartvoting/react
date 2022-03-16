import React from "react";
import { Container, Table } from "react-bootstrap";
export default function Donations() {
    return (
        <Container style={{ minWidth: "100%", fontSize: "120%", }}>
            <h5 className="text-center" style={{ fontWeight: "bold", marginTop:"-10px" }}>Limits on Contributions, Loans and Loan Guarantees</h5>
            <Table striped bordered hover>
                <thead>
                    <tr className="text-center">
                        <th>Political Entity</th>
                        <th>Annual Limit</th>
                        <th>Limit per election called between Jan. 1 and Dec. 31, 2022</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>To each registered party</td>
                        <td className="text-center">$1,675*</td>
                        <td className="text-center">N/A</td>
                    </tr>
                    <tr>
                        <td>In total to all the registered associations, nomination contestants and candidates of each registered party</td>
                        <td className="text-center">$1,675*</td>
                        <td className="text-center">N/A</td>
                    </tr>
                    <tr>
                        <td>In total to all leadership contestants in a particular contest</td>
                        <td className="text-center">$1,675*</td>
                        <td className="text-center">N/A</td>
                    </tr>
                    <tr>
                        <td>To each independent candidate</td>
                        <td className="text-center">N/A</td>
                        <td className="text-center">$1,675*</td>
                    </tr>
                </tbody>
            </Table>

            <h4 style={{ fontWeight: "bold", }}>Notes</h4>
            <ul>
                <li>The contribution limits apply to total contributions, the unpaid balance of loans made during the contribution period, and the amount of any loan guarantees made during the contribution period that an individual is still liable for. The sum of these three amounts cannot at any time exceed the contribution limit.</li>
                <li>A nomination contestant is permitted to give an additional $1,000 in total per contest in contributions, loans and loan guarantees to their own campaign.</li>
                <li>A candidate is permitted to give a total of $5,000 in contributions, loans and loan guarantees to their campaign. A candidate is also permitted to give an additional $1,675* in total per year in contributions, loans and loan guarantees to other candidates, registered associations and nomination contestants of each party. (This includes contributions to the registered association in the candidate's electoral district and contributions to the candidate's own nomination campaign.)</li>
                <li>A leadership contestant is permitted to give a total of $25,000 in contributions, loans and loan guarantees to their campaign. A leadership contestant is also permitted to give an additional $1,675* in total per year in contributions, loans and loan guarantees to other leadership contestants.</li>
            </ul>
            <p>* The limits increase by $25 on January 1 in each subsequent year.</p>
        </Container>
    );
}