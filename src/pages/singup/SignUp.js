import { useState, useContext } from "react";
import { Await, Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";


import logo from "../../assets/logo.png"

import "../signin/singnin.css"



function SingnUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signUp, loadingAuth } = useContext(AuthContext)

    async function hundleSubmit(event) {
        event.preventDefault();
        if (name !== "" && email !== "") {
            await signUp(email, password, name)
        } else {
            alert("Forneça todos os dados solicitados!!!")
        }
    }

    return (
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Logo do Sistema de Chamados" />
                </div>
                <form onSubmit={hundleSubmit}>
                    <h1>Nova Conta</h1>
                    <input
                        type="text"
                        placeholder="Seu nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="email@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder="****"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <button type="submit">
                        {loadingAuth ? "Carregando..." : "Cadastrar"}
                    </button>
                </form>
                <Link to={"/"} >Já possui uma conta? Faça login</Link>
            </div>
        </div>
    )
}

export default SingnUp;