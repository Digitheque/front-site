import React, { useEffect } from "react";
import Img1 from "../assets/img/fontTheque.png";
import { Calendar } from "lucide-react";
import Presentation from "../composant/FormationDigital/Presentation";
import FormationPropose from "../composant/FormationDigital/FormationPropose";
import Inscription from "../composant/FormationDigital/Inscription";
import { useLocation } from "react-router-dom";
const Formation = () => {
    const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "pres-formation") {
      const section = document.getElementById("pres-formation");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide vers la section
      }
    } else if (location.state?.scrollTo === "formation-edt") {
      const section = document.getElementById("formation-edt");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide vers la section
      }
    } else if (location.state?.scrollTo === "formation-inscri") {
      const section = document.getElementById("formation-inscri");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide vers la section
      }
    }
  }, [location]);
  return (
    
    <>
      <section className="mt-[10rem]" id="pres-formation">
        <Presentation />
      </section>

      <section className="mt-0 md:mt-[-5rem]" id="formation-edt">
        <h1
          className="text-bleuRoi font-bold text-[1.5rem] text-center my-8"
          id="slide-presentation"
        >
          FORMATION PROPOSEES{" "}
        </h1>
        <FormationPropose />
      </section>

      <section id="formation-inscri">
        <Inscription />
      </section>
    </>
  );
};

export default Formation;
