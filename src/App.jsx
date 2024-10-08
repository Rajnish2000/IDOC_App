import SignupPage from "./pages/auth/signup";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/auth/login";
import LayoutPage from "./pages/layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/home" element={<LayoutPage />}></Route>
        <Route path="/" element={<LoginPage />}></Route>
        <Route path="/signup" element={<SignupPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
