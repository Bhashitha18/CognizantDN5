import React from "react";

function User() {

    function bookTicket() {
        alert("Ticket Booked Successfully");
    }

    return (
        <div>
            <h2>Welcome User</h2>

            <button onClick={bookTicket}>
                Book Ticket
            </button>
        </div>
    );
}

export default User;