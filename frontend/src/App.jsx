import Login from "./components/auth/login";
import SignUp from "./components/auth/sign-up";
import { Route, Routes } from "react-router-dom";
import Home from "./components/homepage/home";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </>
  );
}

export default App;
