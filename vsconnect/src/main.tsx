import React from 'react';
import ReactDOM from 'react-dom/client';


//componentes
import Header from './components/Header';
import Home from "./pages/Home/";
import ListaServicos from './pages/ListaServicos';
import ListaDevs  from "./pages/ListaDevs";
import PerfilUsuario from "./pages/PerfilUsuario";
import VisualizarServicos from './pages/VisualizarServicos';
import CadastroUsuario from './pages/CadastroUsuario';
import CadastroServico from './pages/CadastroServico';
import Login from './pages/Login';
import Footer from './components/Footer';

//estilização global
import "./index.css";

// ROTAS
import { BrowserRouter, Routes, Route } from "react-router-dom";

import secureLocalStorage from "react-secure-storage";

function logado() {
  if (secureLocalStorage.getItem("user")) {
    const objetoUsuario: any = secureLocalStorage.getItem("user");

    const nome:string = objetoUsuario.user.nome.trim().split(" ")[0];

    return {logado: true, nomeUsuario: nome}
  } else {
    return {logado: false, numeUsuario: null}
  }
}



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>   {/*// INDICA QUE A APLICAÇÃO TERA ROTAS  */}
      <Header usuario={logado()}/>
      <Routes>         {/*// INDICA QUE TEM UMA LISTA DE COMPONENTES, OU SEJA, UMA LISTA DE ROTAS  */}
        <Route path='/' element={<Home/>}/>  //   {/*INDICA O CAMINHO DO COMPONENTE E O NOME DA ROTA DELE */}
        <Route path='/lista/servicos' element={<ListaServicos/>}/>
        <Route path='/lista/devs' element={<ListaDevs/>}></Route>
        <Route path='perfil/:idUsuario' element={<PerfilUsuario/>}></Route>
        <Route path='servicos/:idServicos' element={<VisualizarServicos/>}></Route>
        <Route path='cadastro/usuario' element={<CadastroUsuario/>}></Route>
        <Route path='cadastro/servico' element={<CadastroServico/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        {/* OS : são para identificar o identificador do usuario ou do servico */}
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)


