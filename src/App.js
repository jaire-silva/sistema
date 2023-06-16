import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routes/Routes";
import AuthProvider from "./contexts/auth";

import SingnIn from "./pages/signin/SignIn";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
