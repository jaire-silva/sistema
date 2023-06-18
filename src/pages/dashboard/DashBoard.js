import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"
import Header from "../../components/header/Header"


function DashBoard() {
    const { logOut, user } = useContext(AuthContext)

    async function handleLogOut() {
        await logOut()
    }

    return (
        <div>
            <Header />
            <h1>{user.name}</h1>
            <button onClick={handleLogOut}>Sair da Conta</button>
        </div>
    )
}

export default DashBoard