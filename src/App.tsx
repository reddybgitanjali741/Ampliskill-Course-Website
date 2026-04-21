import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PricingPage from "./pages/PricingPage";
import Navbar from "./components/Hero/Navbar";
import { Footer } from "./components/Hero/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
