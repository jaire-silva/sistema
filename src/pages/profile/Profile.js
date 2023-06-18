import {
    FiSettings,
    FiUpload
} from "react-icons/fi"
import { AuthContext } from "../../contexts/auth"
import { useContext, useState } from "react"

import Title from "../../components/title/Title"
import Header from "../../components/header/Header"

import avatar from "../../assets/avatar.png"

import "./profile.css"

function Profile() {
    const { user } = useContext(AuthContext)

    const [avatarUrl, setavatarUrl] = useState(user && user.avatarUrl)

    return (
        <div>
            <Header />
            <div className="content">
                <Title name="Minha conta" >
                    <FiSettings size={25} />
                </Title>

                <div className="container">
                    <form className="form-profile">

                        <label className="label-avatar">
                            <span>
                                <FiUpload color="#FFF" size={25} />
                            </span>

                            <input type="file" accept="image/*" /> <br />

                            {avatarUrl === null ? (
                                <img src={avatar} alt="Foto de perfil" width={250} height={250} />
                            ) : (
                                <img src={avatarUrl} alt="Foto de perfil" width={250} height={250} />
                            )}
                        </label>

                        <label >Nome</label>
                        <input type="text" placeholder="Seu nome" />

                        <label >Email</label>
                        <input type="text" placeholder="teste@teste.com" disabled={true} />

                        <button type="submit">Salvar</button>
                    </form>
                </div>
                <div className="container">
                    <button className="logout-btn">Sair</button>
                </div>

            </div>

        </div>
    )
}

export default Profile