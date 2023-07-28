import React from "react"

const Gridcards = () => {
    return (
        <div className="row mx-1">
            <div className="container col-12 col-lg-3">
                <div className="card" >
                    <img src="https://picsum.photos/200" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-center bg-light"><a href="#" className="btn btn-primary">Find Out More!</a></li>
                    </ul>
                </div>
            </div>

            <div className="container col-12 col-lg-3">
                <div className="card" >
                    <img src="https://picsum.photos/104" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, nemo?</p>

                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-center bg-light"><a href="#" className="btn btn-primary">Find Out More!</a></li>
                    </ul>
                </div>
            </div>

            <div className="container col-12 col-lg-3">
                <div className="card" >
                    <img src="https://picsum.photos/201" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum labore, cumque eveniet voluptatum </p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-center bg-light"><a href="#" className="btn btn-primary">Find Out More!</a></li>
                    </ul>
                </div>
            </div>

            <div className="container col-12 col-lg-3">
                <div className="card" >
                    <img src="https://picsum.photos/100" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item d-flex justify-content-center bg-light"><a href="#" className="btn btn-primary">Find Out More!</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Gridcards;