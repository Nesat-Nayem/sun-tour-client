import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Register from "./Components/Login/Register";
import Login from "./Components/Login/Login";
import { AuthProvider } from "./AuthProvider/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
