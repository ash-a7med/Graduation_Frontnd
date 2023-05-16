import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Cookies from "js-cookie";

function App() {
  const [currentuser, setCurrentuser] = useState("");

  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      setCurrentuser(user);
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
