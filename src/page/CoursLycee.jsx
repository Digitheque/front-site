import React, { useEffect } from "react";
import Presentation from "../composant/CoursLycee/Presentation";
import Edt from "../composant/CoursLycee/Edt";
import Inscription from "../composant/CoursLycee/Inscription";
import { useLocation } from "react-router-dom";

const CoursLycee = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo === "pres-cour") {
      const section = document.getElementById("pres-cour");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide vers la section
      }
    } else if (location.state?.scrollTo === "presEdt") {
      const section = document.getElementById("presEdt");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide vers la section
      }
    } else if (location.state?.scrollTo === "pres-inscri") {
      const section = document.getElementById("pres-inscri");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide vers la section
      }
    }
  }, [location]);


  return (

    <div>
      <div className="mt-[8rem]" id="pres-cour">
        <Presentation />
      </div>

      <div id="presEdt">
        <Edt />
      </div>

      <div id="pres-inscri">
        <Inscription />
      </div>
    </div>
  );
};

export default CoursLycee;
