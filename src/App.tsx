import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/Pages/HomePage";
import About from "./Components/Pages/About";
import ThankYou from "./Components/Pages/ThankYou";
import PageNotFound from "./Components/Pages/PageNotFound";
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="about" element={<About />} />
      <Route path="/thankyou" element={<ThankYou />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
