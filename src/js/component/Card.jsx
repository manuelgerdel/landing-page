import React from "react"

const Card = () => {
    return (
        <div className="container-fluid">
            <div className="card my-3 p-5 bg-body-secondary border border-0">
                <div className="card-body">
                    <h1 className="card-title h1 display-3 fw-normal">A Warm Welcome!</h1>
                    <p className="card-text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta dolorem maxime ullam corporis reprehenderit sequi molestiae vitae laudantium ipsam quos recusandae ea possimus, rerum labore doloribus odit quidem praesentium illum.</p>
                    <a href="#" className="btn btn-primary">Call to action!</a>
                </div>
            </div>
        </div>
    );
};

export default Card;