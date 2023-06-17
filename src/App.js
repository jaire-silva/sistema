import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/Routes";
import AuthProvider from "./contexts/auth";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

import SingnIn from "./pages/signin/SignIn";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ToastContainer autoClose={3000} />
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
