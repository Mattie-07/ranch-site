import NavigationBar from "./components/NavigationBar";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./routes/Home";
import ThankYou from "./routes/ThankYou";
import LiveStock from "./routes/LiveStock";
import AboutUs from "./routes/AboutUs";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LiveStock" element={<LiveStock />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ThankYou" element={<ThankYou />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
