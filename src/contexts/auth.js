import { useState, useEffect, createContext } from "react";
import { firebaseAuth, firebaseDb } from "../services/fibaseConnection";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";

const AuthContext = createContext({})

function AuthProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loadingAuth, setLogingAuth] = useState(false)

    function signIn(email, password) {
        console.log(email, password)
        alert("Logado com sucesso!!!")
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