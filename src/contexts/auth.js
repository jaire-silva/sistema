import { useState, useEffect, createContext } from "react";
import { firebaseAuth, firebaseDb } from "../services/fibaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loadingAuth, setLogingAuth] = useState(false)
    const navigate = useNavigate()

    async function signIn(email, password) {
        setLogingAuth(true)

        await signInWithEmailAndPassword(firebaseAuth, email, password)
            .then(async (value) => {
                let uid = value.user.uid

                const docRef = doc(firebaseDb, "users", uid)

                const docSnap = await getDoc(docRef)

                let data = {
                    uid: uid,
                    name: docSnap.data().nome,
                    email: value.user.email,
                    avatarUrl: docSnap.data().avatarUrl
                }

                setUser(data)
                storageUser(data)
                setLogingAuth(false)
                toast.success("Bem-vindo(a) de volta!!!")
                navigate("/dashboard")
            })
            .catch((error) => {
                console.log(error)
                setLogingAuth(false)
                toast.error("Ops algo deu errado")
            })
    }

    async function signUp(email, password, name) {
        setLogingAuth(true)

        await createUserWithEmailAndPassword(firebaseAuth, email, password)
            .then(async (value) => {
                let uid = value.user.uid

                await setDoc(doc(firebaseDb, "users", uid), {
                    nome: name,
                    avatarUrl: null
                })
                    .then(() => {
                        let data = {
                            uid: uid,
                            name: name,
                            email: value.user.email,
                            avatarUrl: null
                        }

                        setUser(data)
                        setLogingAuth(false)
                        storageUser(data)
                        toast.success("Sejas bem-vindo ao sistemas!")
                        navigate("/dashboard")

                    }).catch((error) => {
                        console.log("Erro ao cadastrar nome!!!")
                        console.log(error)
                        setLogingAuth(false)
                    })
            }).catch((error) => {
                console.log("Erro ao cadastrar usuário!!!")
                console.log(error)
                setLogingAuth(false)
            })
    }

    function storageUser(data) {
        localStorage.setItem("@ticketsPRO", JSON.stringify(data))
    }

    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                signIn,
                signUp,
                loadingAuth,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext }

export default AuthProvider