import { FiSettings } from "react-icons/fi"

import Title from "../../components/title/Title"

import Header from "../../components/header/Header"


function Profile() {
    return (
        <div>
            <Header />
            <div className="content">
                <Title name="Minha conta" >
                    <FiSettings size={25} />
                </Title>
            </div>

        </div>
    )
}

export default Profile