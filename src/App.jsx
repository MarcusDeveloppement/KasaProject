import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./components/Acceuil";
import Apropos from "./components/Apropos";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
