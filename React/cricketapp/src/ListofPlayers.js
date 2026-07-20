import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 95 },
        { name: "Rohit Sharma", score: 82 },
        { name: "Shubman Gill", score: 45 },
        { name: "KL Rahul", score: 65 },
        { name: "Hardik Pandya", score: 88 },
        { name: "Ravindra Jadeja", score: 72 },
        { name: "R Ashwin", score: 58 },
        { name: "Mohammed Shami", score: 40 },
        { name: "Jasprit Bumrah", score: 91 },
        { name: "Surya Kumar", score: 77 },
        { name: "Ishan Kishan", score: 69 }
    ];

    return (
        <div>
            <h2>List of Players</h2>

            {players.map((player, index) => (
                <p key={index}>
                    {player.name} - {player.score}
                </p>
            ))}

            <h2>Players with Score below 70</h2>

            {players
                .filter(player => player.score < 70)
                .map((player, index) => (
                    <p key={index}>
                        {player.name} - {player.score}
                    </p>
                ))}
        </div>
    );
}

export default ListofPlayers;