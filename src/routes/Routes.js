import { Routes, Route } from "react-router-dom";

import SingnIn from "../pages/signin/SignIn"
import SingnUp from "../pages/singup/SignUp"
import DashBoard from "../pages/dashboard/DashBoard";
import Private from "./Private";

function RoutesApp() {
    return (
        <Routes>
            <Route path="/" element={<SingnIn />} />
            <Route path="/register" element={<SingnUp />} />
            <Route path="/dashboard" element={
                <Private>
                    <DashBoard />
                </Private>
            } />
        </Routes>
    )
}

export default RoutesApp