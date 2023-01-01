import "./App.css";
import Layout from "./Component/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import Backendpage from "./Component/Backendpage/Backendpage";
// import Register from "./Component/Backendpage/Register";
import Signup from "./Component/Auth/Signup";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/backendpage" element={<Backendpage />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </Layout>
  );
}

export default App;
