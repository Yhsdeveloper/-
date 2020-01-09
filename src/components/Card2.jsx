import React from "react";

function Card2(props) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.img} class="card-img-top" alt="..." />
            </div>
        </div>
    );
}

export default Card2;
