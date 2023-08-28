//estilização
import "./style.css";

//components
import CardServicos from "../../components/CardServicos";

//import hooks
import { useState,useEffect } from "react";

import api from "../../utils/api"

function ListaServicos() {
    // STATE DEVS
    const [servicos, setServicos] = useState<any[]>([]);
    
    const [skillDigitado, setSkillDigitado] = useState<string>("");

    //função onde pega o que o usuario digitou
    function verificarCampoSkill(event: any) {
        if (event.target.value === "") {
            listarServicos();
        }
        setSkillDigitado(event.target.value);
    }

    function buscarPorSkill(event: any) {
        //não recarrega a pagina
        event.preventDefault();

        //filtrar devs pela skill digitada no campo buscar
        const servFiltrados = servicos.filter((servicos: any) => servicos.techs.includes(skillDigitado.toLocaleUpperCase()));

        if (servFiltrados.length === 0) {
            alert("Nenhum desenvolvedor(a) com essa skill :(")
        } else {
            //atribui valor de devs filtrado, ao state ListaDevsFiltrados 
            setServicos(servFiltrados);
        }
    }

    function listarServicos() {
        api.get("servicos")
            .then((response: any) => {
            setServicos(response.data)

            })

            .catch((error: any) => {
            console.log("Erro ao realizar um a requisição:", error);

            })
    }

    useEffect(() => {
        // tem a função de executar uma ação apos o componente ser recarregado
        listarServicos()
        // em cima chama a lista desenvolvedores, fornecida pela api
    }, [])

    // Mostrar menu no layout responsivo
    return (
        <div>
            <main id="ls_main">
                <div className="container container_lista_servicos">
                    <div className="lista_servicos_conteudo">
                        <h1>Lista de Serviços</h1>
                        <hr />
                        <form method="post" onSubmit={buscarPorSkill}>
                            <div className="wrapper_form">
                                <label htmlFor="busca">Procurar serviços</label>
                                <div className="campo-label">
                                    <input type="search" name="campo-busca" id="busca" placeholder="Buscar serviços por tecnologias..." onChange={verificarCampoSkill} />
                                    <button type="submit">Buscar</button>
                                </div>
                            </div>
                        </form>
                        <div className="wrapper_lista">
                            <ul>
                                {
                                    servicos.map((servicos: any, indice: number) => {
                                        return <li key={indice}>
                                            <CardServicos
                                                idServicos={servicos.id}
                                                titulo={servicos.nome}
                                                descricao={servicos.descricao}
                                                proposta={"R$"+servicos.valor}
                                                listaTechs={servicos.techs}
                                            />
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    );
}

//o componente Home pode ser chamado em outros arquivos
export default ListaServicos;
























