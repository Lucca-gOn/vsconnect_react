import "./style.css";

function CardServicos(props: any) {
    return (
        <>
            <div className="servico">
                <div className="topo_servico">
                    <h3>{props.titulo}</h3>
                    <span>{props.proposta}</span>
                </div>
                <p>{props.descricao}</p>
                <div className="techs">
                    {
                        props.listaTechs.map((tech: string, indice: number) => {
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