import "./style.css";
import { Link } from "react-router-dom";

function CardServicos(props: any) {

    function verificarListaTechs() {
        if (typeof props.listaTechs === "string") {
            return JSON.parse(props.listaTechs);
        } else {
            return props.listaTechs;
        }
    }

    return (
        <>
            <div className="servico">
                <div className="topo_servico">
                    <Link to={'/servicos/'+ props.idServicos}><h3>{props.titulo}</h3></Link> 
                    <span>{props.proposta}</span>
                </div>
                <p>{props.descricao}</p>
                <div className="techs">
                    {
                        verificarListaTechs().map((tech: string, indice: number) => {
                            return <span key={indice}>{tech}</span>
                        })
                    }

                    {/* <span>HTML</span>
                    <span>CSS</span>
                    <span>React</span> */}
                </div>
            </div>
        </>
    )
}

export default CardServicos;