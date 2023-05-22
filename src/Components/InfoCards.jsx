export const InfoCards = () => {
    return (
        <div className="info-cards" style={{backgroundColor:"lightpink"}}>
            <div className="card">
                <h2 className="card-title">Misión</h2>
                <div className="card-body">
                    <p className="card-text">Somos una fundación empresarial de segundo piso dedicada a mejorar la salud de la población, especialmente de grupos con mayores necesidades, a través de programas y proyectos sociales en colaboración con organizaciones de la sociedad civil, empresas y gobierno.</p>
                </div>
            </div>
            <div className="card">
                <h2 className="card-title">Visión</h2>
                <div className="card-body">
                    <p className="card-text">Promover una sociedad saludable mediante la cultura de la prevención y atención oportuna, trabajando para generar una cultura de prevención y mejorar las condiciones de salud de la población.</p>
                </div>
            </div>
            <div className="card">
                <h2 className="card-title">Valores</h2>
                <div className="card-body">
                    <ul>
                        <li>Confianza</li>
                        <li>Servicio desmedido</li>
                        <li>Respeto</li>
                        <li>Honestidad</li>
                        <li>Lealtad</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
