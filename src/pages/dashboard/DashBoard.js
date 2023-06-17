import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"


function DashBoard() {
    const { logOut, user } = useContext(AuthContext)

    async function handleLogOut() {
        await logOut()
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <button onClick={handleLogOut}>Sair da Conta</button>
        </div>
    )
}

export default DashBoard