import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/loginpage";
import UsersPage from "./pages/userlistpage";

function App() {
  const token = localStorage.getItem("token");

  return (
    <Routes>
     <Route path="/" element={token ? <Navigate to="/users" /> : <LoginPage />} />
     <Route path="/users" element={token ? <UsersPage /> : <Navigate to="/" />} />

    </Routes>
  );
}



export default App;
