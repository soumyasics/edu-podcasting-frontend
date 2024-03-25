import React from 'react'
import './subscribers.css'
function Subscribers() {
    return (
        <div>
            <div className="container mt-5 pt-5">
                <h1>Our subscribers</h1>
                <div className="listout">
                    <div

                        className="professionals"
                    >
                        <img
                            className="mt-3"
                            style={{ height: "50px", width: "50px", borderRadius: "50%" }}
                            alt="img1"
                        />

                        <div className="para">
                            {" "}
                            <p>Name:</p>{" "}
                        </div>

                        <div className="d-flex">
                            <p>Email:</p>
                            <div className="dot">
                            </div>

                            <p>Contact: </p>
                            <div className="dot">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Subscribers