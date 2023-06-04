import { useEffect, useState } from "react";
import "./App.css";
import Cookies from "js-cookie";
import axios from "axios";
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
  const [surahs, setSurahs] = useState([]);

  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      setCurrentuser(user);
    }
    const fetchSurahs = async () => {
      try {
        const totalSurahs = 114; // Total number of surahs in the Quran

        const surahsArray = [];

        for (let i = 1; i <= totalSurahs; i++) {
          const response = await axios.get(
            `http://api.alquran.cloud/v1/surah/${i}`
          );
          const surahData = response.data.data;

          surahsArray.push(surahData);
        }

        setSurahs(surahsArray);
      } catch (error) {
        console.error("Error fetching surahs:", error);
      }
    };

    fetchSurahs();
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
          <Route path="round1" element={<Round1 surahs={surahs} />} />
          <Route
            path="/details/:currentSurah"
            element={<Details surahs={surahs} />}
          />
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
