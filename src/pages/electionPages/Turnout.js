import React from "react";
import { Container, Table } from "react-bootstrap";
export default function Turnout() {
    return (
        <>
            <Container style={{minWidth:"100%", fontSize: "120%",}}>
                <h3 style={{ fontWeight:"bold", }}>About this table</h3>
                <p>Presenting these figures involves several challenges. The data contained in official election results since Confederation have not been reported consistently. In the case of an election by acclamation, for instance, the number of registered electors on the lists for that electoral district was included in the total number of registered electors for some elections, but not for others. In other cases, lists of electors were not prepared for some districts. In Prince Edward Island, no lists were prepared in the entire province for several elections.</p>
                <p>Moreover, a number of electoral districts were dual-member constituencies until 1966. As each elector could vote for more than one candidate, the reported number of votes cast (valid and rejected ballots) was higher than it would have been in a single-member scenario. Voter turnout figures have been corrected where appropriate: to estimate turnout in these cases, the total number of votes cast in a plural-member electoral district was divided by the number of members elected from that district (see Scarrow 1962).</p>

                <h5 className="text-center" style={{ fontWeight: "bold", }}>Voter Turnout at Federal Elections and Referendums</h5>
                <Table striped bordered hover>
                    <thead>
                        <tr className="text-center">
                            <th>Date of election / referendum</th>
                            <th>Population</th>
                            <th>Number of Electors on lists</th>
                            <th>Total ballots cast</th>
                            <th>Voter turnout (%)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>

                <h3 style={{ fontWeight: "bold", }}>Footnote</h3>
                <ol>
                    <li id="1">In early elections, polling took place over several weeks or even months.</li>
                    <li id="2">A referendum.</li>
                    <li id="3">Does not include Quebec, as Quebec conducted its own referendum.</li>
                    <li id="4">This percentage rises to 70.9 when the number of electors on the lists is adjusted to account for electors who had moved or died between the enumeration for the 1992 referendum and the election of 1993, for which a separate enumeration was not carried out except in Quebec, as the 1992 electoral lists were reused.</li>
                    <li id="5">The turnout of 61.2% in 2000 was adjusted to arrive at the final turnout of 64.1%, after our normal maintenance of the National Register of Electors to remove the names of deceased electors and duplicates arising from moves. The Chief Electoral Officer of Canada explained the adjustment during his appearance before the Subcommittee on Electoral Boundaries Readjustment on October 6, 2003, and his appearance to discuss the 2004 Main Estimates before the Standing Committee on Procedure and House Affairs on March 5, 2004.</li>
                    <li id="6">Population is based on Statistics Canada census data available to Elections Canada at the time of publishing.</li>
                </ol>

                <h3 style={{ fontWeight: "bold", }}>Source</h3>
                <p style={{ paddingLeft:"36px", textIndent:"-36px"}}>Reports of the Clerk of the Crown in Chancery (1867-1917); reports of the Chief Electoral Officer (1921-2008); Official Voting Results (2011-2019); unpublished summary data prepared by Elections Canada; R. Pomfret, The Economic Development of Canada (1987); H.A. Scarrow, Canada Votes (1962); Contact (1985).</p>
            </Container>
        </>
    );
}
