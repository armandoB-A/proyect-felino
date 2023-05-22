export const Inicio = () => {
    return (
        <>

            <div className="text-center">
                <h1>FARMACIAS DEL AHORRO</h1>
                <p style={{ margin: "50px" }}>
                    Abrimos cortinas al público por primera vez el 14 de septiembre de 1991 y desde entonces jamás las hemos cerrado.
                </p>
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="carousel"
                    style={{ maxWidth: "1300px", margin: "0 auto" }}
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="0"
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="1"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleIndicators"
                            data-bs-slide-to="2"
                            aria-label="Slide 3"
                        ></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                src="1f.jpg"
                                className="d-block w-100"
                                alt="Slide 1"
                                style={{ maxHeight: "400px" }}
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="2f.jpg"
                                className="d-block w-100"
                                alt="Slide 2"
                                style={{ maxHeight: "400px" }}
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                src="3f.jpg"
                                className="d-block w-100"
                                alt="Slide 3"
                                style={{ maxHeight: "400px" }}
                            />
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </>)
        ;
}


