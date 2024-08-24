import React from "react";

const ContainerCards = () => {
    return <>
  <div className="container-fluid">
            <div className="row row-cols-1 row-cols-md-4 g-0">
                <div className="col">
                    <div className="card text-center" style={{ width: "18rem", height: "26rem", margin: "0.5rem" }}>
                        <img src="https://picsum.photos/id/237/500/325" className="card-img-top" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <hr style={{ marginTop: "10%" }} />
                            <a href="#" class="btn btn-primary">Find out more</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center" style={{ width: "18rem", height: "26rem", margin: "0.5rem" }}>
                        <img src="https://picsum.photos/id/237/500/325" className="card-img-top" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a short card.</p>
                            <hr style={{ marginTop: "37%" }} />
                            <a href="#" class="btn btn-primary"> Find out more</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center" style={{ width: "18rem", height: "26rem", margin: "0.5rem" }}>
                        <img src="https://picsum.photos/id/237/500/325" className="card-img-top" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                            <hr style={{ marginTop: "19%" }} />
                            <a href="#" class="btn btn-primary">Find out more</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card text-center" style={{ width: "18rem", height: "26rem", margin: "0.5rem" }}>
                        <img src="https://picsum.photos/id/237/500/325" className="card-img-top" alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <hr style={{ marginTop: "10%" }} />
                            <a href="#" class="btn btn-primary">Find out more</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ContainerCards