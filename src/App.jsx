import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuil from "./pages/Acceuil/Acceuil";
import Apropos from "./pages/Apropos/Apropos";
import NotFound from "./components/NotFound/NotFound";
import Logement from "./pages/Logement/Logement";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/Apropos" element={<Apropos />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer></Footer>
    </>
  );
}

export default App;
