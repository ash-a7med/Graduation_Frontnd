import { useEffect, useState } from "react";
import "./App.css";
import Cookies from "js-cookie";

import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Categories from "./Components/Categories/Categories";
import Round1 from "./Components/Round1/Round1";
import Details from "./Components/Details/Details";
import Suars from "./Components/Suars/Suars";
import Tafseer from "./Components/Tafseer/Tafseer";
import Forget_password from "./Components/Forget_password/Forget_password";
import Reset_password from "./Components/Reset_password/Reset_password";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Tasmee3 from "./Components/Tasmee3/Tasmee3";
import Profile from "./Components/ProfilePage/Profile";
import About from "./Components/AboutPage/About";
import Landing from "./Components/LandingPage/Landing";
import surahs from "./surah.json";
import LayoutsWithNavbar from "./Components/LayoutsWithNavbar";
import QuranText from "./Components/QuranText/QuranText.js";

function App() {
  const [currentuser, setCurrentuser] = useState("");

  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      setCurrentuser(JSON.parse(user));
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LayoutsWithNavbar user={currentuser} />}>
            <Route index element={<Landing />} />
            <Route path="/profile" element={<Profile user={currentuser} />} />
          <Route path="/about" element={<About />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/round1" element={<Round1 surahs={surahs} />} />
            <Route
              path="/details/:currentSurah"
              element={<Details surahs={surahs} />}
            />

            <Route
              path="/tasmee3/:currentsurah/:start/:end"
              element={<Tasmee3 />}
            />
            <Route
              path="/tafseer/:surahID"
              element={<Tafseer surahs={surahs} />}
            />
            <Route path="/suars" element={<Suars surahs={surahs} />} />
            <Route path="/quranText" element={<QuranText />} />
          </Route>

          <Route path="/login" element={<Login />} />

          <Route path="/signup" element={<Signup />} />

          <Route
            path="/reset_password/:id/:token"
            element={<Reset_password />}
          />
          <Route path="/forget_password" element={<Forget_password />} />

          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
