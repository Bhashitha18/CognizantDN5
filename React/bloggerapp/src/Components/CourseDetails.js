import React from "react";

function CourseDetails() {

    const courses = [
        "React",
        "Angular",
        "Node.js",
        "Java"
    ];

    return (
        <div>

            <h2>Course Details</h2>

            <ul>
                {courses.map((course, index) => (
                    <li key={index}>{course}</li>
                ))}
            </ul>

        </div>
    );
}

export default CourseDetails;