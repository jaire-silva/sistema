import {
    FiSettings,
    FiUpload
} from "react-icons/fi"
import { AuthContext } from "../../contexts/auth"
import { useContext, useState } from "react"
import { toast } from "react-toastify"

import Title from "../../components/title/Title"
import Header from "../../components/header/Header"

import avatar from "../../assets/avatar.png"

import "./profile.css"

function Profile() {
    const {
        user,
        storageUser,
        setUser,
        logOut
    } = useContext(AuthContext)

    const [avatarUrl, setavatarUrl] = useState(user && user.avatarUrl)
    const [imageAvatar, setImageAvatar] = useState(null)
    const [name, setName] = useState(user && user.name)
    const [email, setEmail] = useState(user && user.email)

    function handleFile(event) {
        if (event.target.files[0]) {
            const image = event.target.files[0]

            if (image.type === "image/jpeg" || image.type === "image/png") {
                setImageAvatar(image)
                setavatarUrl(URL.createObjectURL(image))
            } else {
                toast.error("Formato de imagem não aceitavél")
                setImageAvatar(null)
                return
            }
        }
    }

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

                            <input type="file" accept="image/*" onChange={handleFile} /> <br />

                            {avatarUrl === null ? (
                                <img src={avatar} alt="Foto de perfil" width={250} height={250} />
                            ) : (
                                <img src={avatarUrl} alt="Foto de perfil" width={250} height={250} />
                            )}
                        </label>

                        <label >Nome</label>
                        <input type="text" value={name} onChange={(event) => setName(event.target.value)} />

                        <label >Email</label>
                        <input type="text" value={email} disabled={true} />

                        <button type="submit">Salvar</button>
                    </form>
                </div>
                <div className="container">
                    <button className="logout-btn" onClick={() => logOut()}>Sair</button>
                </div>

            </div>

        </div>
    )
}

export default Profile