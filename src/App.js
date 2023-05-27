import { useEffect, useState } from "react";
import "./App.css";
import Cookies from "js-cookie";
import HomePage from "./Components/HomePage/HomePage";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Categories from "./Components/Categories/Categories";
import Round1 from "./Components/Round1/Round1";
import Details from "./Components/Details/Details";
import Forget_password from "./Components/Forget_password/Forget_password";
import Reset_password from "./Components/Reset_password/Reset_password";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [currentuser, setCurrentuser] = useState("");

  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      setCurrentuser(user);
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="round1" element={<Round1 />} />
          <Route path="/details" element={<Details />} />
          <Route path="/forget_password" element={<Forget_password />} />
          <Route
            path="/reset_password/:id/:token"
            element={<Reset_password />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
