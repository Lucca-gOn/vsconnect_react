import "./style.css";
import { useState,useEffect } from "react";
import api from "../../utils/api";
import {useNavigate } from "react-router-dom";
// Import do local storage
import secureLocalStorage from "react-secure-storage";


function Login() {
    // Variavel que utiliza a função useNavigate para navegar entre os componentes
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [senha, setSenha] = useState<string>("");

    function realizarAutentificacao(event: any) {
        event.preventDefault();
        
        const usuario = {
            email: email,
            password: senha
        };

        api.post("login", usuario)
            .then((response: any) => {
                secureLocalStorage.setItem("user", response.data);
                navigate("/perfil/" + response.data.user.id)
                navigate(0)
            })
            .catch((error: any) => {
                console.log(error);
                alert("Falha ao cadastrar um usuario");
            })

    }
    return (
        <main id="main_login">
            <div className="container container_login">
                <div className="login_conteudo">
                    <h1>Login</h1>
                    <hr />
                    <form className="login_formulario" method="POST" onSubmit={realizarAutentificacao}>
                        <div className="login_box_input">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Digite aqui seu e-mail:"
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="login_box_input">
                            <label htmlFor="senha">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                placeholder="Digite aqui sua senha:"
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>
                        <button className="login_botao" type="submit">Logar</button>
                    </form>
                </div>
            </div>
        </main>

    );
}

export default Login;