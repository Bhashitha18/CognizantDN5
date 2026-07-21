import React, { useState } from "react";
import Guest from "./Guest";
import User from "./User";
import FlightDetails from "./FlightDetails";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (

        <div style={{ padding: "20px" }}>

            <h1>Ticket Booking App</h1>

            <FlightDetails />

            <br />

            {
                isLoggedIn
                    ? <User />
                    : <Guest />
            }

            <br />

            {
                isLoggedIn
                    ?
                    <button onClick={() => setIsLoggedIn(false)}>
                        Logout
                    </button>

                    :

                    <button onClick={() => setIsLoggedIn(true)}>
                        Login
                    </button>
            }

        </div>

    );
}

export default App;