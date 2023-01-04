import "./App.css";
import Layout from "./Component/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import Backendpage from "./Component/Backendpage/Backendpage";
// import Register from "./Component/Backendpage/Register";
import Signup from "./Component/Auth/Signup";
import SignInForm from "./Component/Auth/SignInForm/SignInForm";
import SignUpForm from "./Component/Auth/SignUpForm/SignUpForm";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<SignInForm />} />
        <Route path="/backendpage" element={<Backendpage />} />
        <Route path="/register" element={<SignUpForm />} />
      </Routes>
    </Layout>
  );
}

export default App;
