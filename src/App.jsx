import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./assets/stylePorteFolio.css";
import Layout from "./composant/Layout";
import Acceuille from "./page/Acceuille";
import CoursLycee from "./page/CoursLycee";
import Digitheque from './page/Digitheque';
import Formation from './page/Formation';
import Pagelogin from "./page/Pagelogin";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Pagelogin />} />
          <Route path="/site" element={<Layout />}>
            <Route index element={<Acceuille />} />
            <Route path="cours-lycee" element={<CoursLycee />} />
            <Route path="formation-digital" element={<Formation />} />
            <Route path="digitheque" element={<Digitheque />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
