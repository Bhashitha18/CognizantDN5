import React from "react";

function App() {

  const officeSpaces = [
    {
      Name: "Sky Tower",
      Rent: 55000,
      Address: "Hyderabad",
      Image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600"
    },
    {
      Name: "Tech Park",
      Rent: 75000,
      Address: "Bangalore",
      Image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600"
    },
    {
      Name: "Business Hub",
      Rent: 45000,
      Address: "Chennai",
      Image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600"
    }
  ];

  return (
    <div style={{ padding: "20px" }}>

      <h1>Office Space Rental App</h1>

      {officeSpaces.map((office, index) => (

        <div key={index} style={{ marginBottom: "30px" }}>

          <img
            src={office.Image}
            alt={office.Name}
            width="300"
            height="200"
          />

          <h2>{office.Name}</h2>

          <h3
            style={{
              color: office.Rent < 60000 ? "red" : "green"
            }}
          >
            Rent: ₹{office.Rent}
          </h3>

          <h4>Address: {office.Address}</h4>

          <hr />

        </div>

      ))}

    </div>
  );
}

export default App;