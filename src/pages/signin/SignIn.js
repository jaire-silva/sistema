import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/auth";

import logo from "../../assets/logo.png"

import "./singnin.css"


function SingnIn() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useContext(AuthContext)

    function handleSingIn(event) {
        event.preventDefault()
        if (email !== "" && password !== "") {
            signIn(email, password)
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
                <form onSubmit={handleSingIn}>
                    <h1>Entrar</h1>
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

                    <button type="submit">Acessar</button>
                </form>
                <Link to={"/register"} >Criar uma conta</Link>
            </div>
        </div>
    )
}

export default SingnIn;