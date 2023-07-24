import "./Inicio.css"
import Showbar from "../Showbar/Showbar";

const Inicio = ()=> {
    return(
        <div className="body_main">
            <Showbar />
            <div className="main_inicio">
                <h1>Descripción</h1>
            </div>            
        </div>
    )
}

export default Inicio;