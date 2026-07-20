import React, { useState } from "react";

function CurrencyConvertor() {

    const [rupees, setRupees] = useState("");
    const [euro, setEuro] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        const converted = (rupees / 90).toFixed(2);
        setEuro(converted);

        alert("Converted Successfully");
    };

    return (
        <div style={{ marginTop: "30px" }}>
            <h2>Currency Convertor</h2>

            <form onSubmit={handleSubmit}>

                <label>Indian Rupees : </label>

                <input
                    type="number"
                    value={rupees}
                    onChange={(e) => setRupees(e.target.value)}
                />

                <br /><br />

                <button type="submit">
                    Convert
                </button>

            </form>

            {euro !== "" && (
                <h3>Euro : € {euro}</h3>
            )}
        </div>
    );
}

export default CurrencyConvertor;