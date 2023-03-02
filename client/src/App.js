import "./app.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Header from "./components/Header/Header";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/activities").then((response) => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="app">
      <Router>
        <Header />
        <div className="body-wrap">
          <Routes>
            <Route path="/" element={<Home data={data} />} />
            <Route path="about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
