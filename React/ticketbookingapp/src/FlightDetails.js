import React from "react";

function FlightDetails() {
    return (
        <div>
            <h2>Flight Details</h2>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Flight Name</th>
                        <th>From</th>
                        <th>To</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Indigo</td>
                        <td>Hyderabad</td>
                        <td>Delhi</td>
                        <td>₹5500</td>
                    </tr>

                    <tr>
                        <td>Air India</td>
                        <td>Chennai</td>
                        <td>Mumbai</td>
                        <td>₹4800</td>
                    </tr>

                    <tr>
                        <td>SpiceJet</td>
                        <td>Bangalore</td>
                        <td>Kolkata</td>
                        <td>₹6200</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default FlightDetails;