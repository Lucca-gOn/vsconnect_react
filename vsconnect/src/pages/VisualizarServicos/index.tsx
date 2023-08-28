//estilização
import "./style.css";

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../utils/api";



function VisualizarServico() {
    const { idServicos } = useParams();

    const [nome, setNome] = useState<string>("");
    const [valor, setValor] = useState<string>("");
    const [descricao, setDescricao] = useState<string>("");
    const [listaTechs, setListaTechs] = useState<string[]>([]);

    function BuscarServicoPorId() {
        api.get("servicos/" + idServicos)
            .then((response: any) => {
                // seta os valores referente as informaçoes do usuario
                setNome(response.data.nome);
                setValor(response.data.valor);
                setDescricao(response.data.descricao);
                setListaTechs(response.data.techs);
            })
            .catch((error: any) => {
                console.log(error);

            })
    }

    useEffect(() => {
        // tem a função de executar uma ação apos o componente ser recarregado
        BuscarServicoPorId();
        // em cima chama a lista desenvolvedores, fornecida pela api
    }, [])

    return (
        <main id="main_visualizarservico">
            <div className="container">
                <h1>Serviço</h1>
                <div className="servico">
                    <div className="topo_servico">
                        <h2>{nome}</h2>
                        <span>R$ {valor}</span>
                    </div>
                    <p>{descricao}</p>
                    <div className="techs">
                        {
 
                            listaTechs.map((tech: any, indice: number) => {
                                return <span key={indice}>{tech}</span>
                            })
                        }
                        {/* <span>HTML</span>
                        <span>CSS</span>
                        <span>React</span> */}
                    </div>
                </div>
            </div>

        </main>);
}

export default VisualizarServico;