//estilização
import "./style.css";

//imagens
import imgLogo from "../../assets/images/logo.svg";
import imgDev from "../../assets/images/dev.png";
import iconFace from "../../assets/images/facebook.svg";
import iconInsta from "../../assets/images/instagram.svg";
import iconLinkedin from "../../assets/images/linkedin.svg";

import { Link } from "react-router-dom";   
// SUBSTITUIR AS TAG 'A' por LINK
// O import é o import do pacote rotas
function Footer() {
    return(

        // CODIGO DO FOOTER
        <footer>
        <div className="container rodape">
            <div className="span_dicas">
                <img src={imgDev} alt="" />
                <div className="span_dicas_texto">
                    <p>Temos algumas dicas para o seu serviço ou freela ser um sucesso, acesse nossa página de
                        recomendações para saber mais.</p>
                    <a className="botao botao_dicas" href="#">mais dicas</a>
                </div>
            </div>
            <div className="rodape_conteudo">
                <div className="rodape_conteudo_paginas">
                    <h2>Páginas</h2>
                    <ul>
                        <li>Login</li>
                        <Link to={"/"}><li>Home</li></Link>
                        <Link to={"/lista/servicos"}><li>Listar Serviços</li></Link>
                        <Link to={"/lista/devs"}><li>Lista Desenvolvedores</li></Link>
                        <Link to={"/cadastro/servico"}><li>Cadastro Servico</li></Link>
                        <Link to={"/cadastro/usuario"}><li>Cadastro Usuario</li></Link>
                        <li>Cadastrar Cliente</li>
                        <li>Cadastrar Desenvolvedor</li>
                    </ul>
                </div>
                <img src={imgLogo} alt="" />
                <div className="rodape_conteudo_contatos">
                    <h2>Contatos</h2>
                    <div>
                        <Link to={"#link"}><img src={iconFace} alt="" /></Link>
                        <Link to={"#link"}><img src={iconInsta} alt="" /></Link>
                        <Link to={"#link"}><img src={iconLinkedin} alt="" /></Link>
                    </div>
                    <a href="mailto:">contato@vsconnect.com</a>
                </div>
            </div>
            <p>todos os direitos reservados ©.</p>
        </div>
    </footer>
    );
}

export default Footer;