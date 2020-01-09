import React from "react";

function Card(props) {
    return (
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.img} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">
                        {props.content}
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Card;
