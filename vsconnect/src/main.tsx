import React from 'react';
import ReactDOM from 'react-dom/client';

//componentes
import Home from "./pages/Home/";
import ListaServicos from './pages/ListaServicos';
import ListaDevs  from "./pages/ListaDevs";
import Header from './components/Header';
import Footer from './components/Footer';

//estilização global
import "./index.css";

// ROTAS
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>   {/*// INDICA QUE A APLICAÇÃO TERA ROTAS  */}
      <Header />
      <Routes>         {/*// INDICA QUE TEM UMA LISTA DE COMPONENTES, OU SEJA, UMA LISTA DE ROTAS  */}
        <Route path='/' element={<Home/>}/>  //   {/*INDICA O CAMINHO DO COMPONENTE E O NOME DA ROTA DELE */}
        <Route path='/lista/servicos' element={<ListaServicos/>}/>
        <Route path='/lista/devs' element={<ListaDevs/>}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
)


