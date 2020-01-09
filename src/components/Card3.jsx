import React from "react";

function Card3(props) {
    return (
        <div className="col-lg-4 col-md-4">
            <div className="card">
                <a href={props.href} target="_blank"><img src={props.img} className="card-img-top" alt="..." />
                </a>
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

export default Card3;
