import React, { useEffect, useState } from "react";
import {
  Calendar,
  ChartArea,
  Facebook,
  Home,
  Instagram,
  Linkedin,
  Mail,
  MoveRight,
  Twitter,
  Youtube,
} from "lucide-react";
import Presentation from "../composant/Acceuille/Presentation";
import PlanAcce from "../composant/Acceuille/PlanAcce";
import ImageLieu from "../composant/Acceuille/ImageLieu";
import NosEquipe from "../composant/Acceuille/NosEquipe";
import ScrollReveal from "scrollreveal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Contact from "../composant/Acceuille/Contact";

const Acceuille = () => {
  const [isPlus, setIsPlus] = useState(false);
  useEffect(() => {
    ScrollReveal({
      reset: false,
      distance: "60px",
      duration: 2000,
      deley: 400,
    });
    ScrollReveal().reveal("#slide-ouverture", {
      deley: 100,
      origin: "left",
      interval: 300,
    });
    ScrollReveal().reveal("#slide-ouvertureHaut", {
      deley: 100,
      origin: "top",
      interval: 300,
    });
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo === "acc") {
      const section = document.getElementById("acc");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide vers la section
      }
    } else if (location.state?.scrollTo === "pres") {
      const section = document.getElementById("pres");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide vers la section
      }
    } else if (location.state?.scrollTo === "plan") {
      const section = document.getElementById("plan");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide vers la section
      }
    } else if (location.state?.scrollTo === "equipe") {
      const section = document.getElementById("equipe");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" }); // Défilement fluide vers la section
      }
    }
  }, [location]);

  const redirectViaOuverture = (e, section, url) => {
    e.preventDefault();
    navigate(url, { state: { scrollTo: section } });
  };
  return (
    <div>
      <div
        className="sectionAccueille h-screen relative px-[2rem] md:px-0"
        id="acc"
      >
        <div className="w-full h-full flex items-center justify-center">
          {/* div contenue  accueille  */}
          <div className="text-center text-white">
            <p className="font-bold text-[25px]" id="slide-ouverture">
              Bienvenue
            </p>
            <p
              className="font-[800] text-[50px] md:text-[80px]"
              id="slide-ouverture"
            >
              Digithèque
            </p>
            <div className="">
              <p className="lg:w-[35vw] md:text-[18px]" id="slide-ouverture">
                Lot 0051/B Ambatotsidikaina - Andrainjato 301 Fianarantsoa
              </p>

              <p className="lg:w-[35vw] md:text-[18px]" id="slide-ouverture">
                digitheque1234@gmail.com | +261 38 05 557 25 | +261 37 75 321 30
              </p>
            </div>

            {/* div icon rond  */}
            <div className="flex items-center justify-center space-x-4 mt-4">
              <div
                className="rounded-full border w-9 h-9 flex items-center justify-center"
                id="slide-ouvertureHaut"
              >
                <Facebook />
              </div>

              <div
                className="rounded-full border w-9 h-9 flex items-center justify-center"
                id="slide-ouvertureHaut"
              >
                <Youtube />
              </div>

              <div
                className="rounded-full border w-9 h-9 flex items-center justify-center"
                id="slide-ouvertureHaut"
              >
                <Linkedin />
              </div>

              <div
                className="rounded-full border w-9 h-9 flex items-center justify-center"
                id="slide-ouvertureHaut"
              >
                <Twitter />
              </div>

              <div
                className="rounded-full border w-9 h-9 flex items-center justify-center"
                id="slide-ouvertureHaut"
              >
                <Instagram />
              </div>
            </div>
          </div>
        </div>

        <div
          id="slide-ouvertureHaut"
          className={`absolute top-[100%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500
        bg-white shadow-lg lg:rounded-lg grid md:grid-cols-12 px-8 py-6 w-full z-10 ${
          isPlus ? " lg:w-[80%]" : " lg:w-[60%]"
        }`}
        >
          <div className="col-span-6 lg:col-span-8 px-4">
            <p className="font-bold text-[15px] text-bleuRoi">BUT</p>
            <p className="text-gray-500 ">
              L’équipe de Digithèque est formée d'enseignants d’université et
              d’étudiants dans les domaines scientifiques à Madagascar ou à
              l’étranger, dans le domaine de la finance et dans le domaine de
              l’informatique. 
            </p>
          </div>

          <div className="col-span-6 lg:col-span-4 md:border-l-[4px] border-bleuRoi px-4 md:mt-0 mt-8">
            <div className="flex items-center justify-start space-x-4 cursor-pointer">
              <MoveRight className="text-bleuRoi" />
              <Link
                to="/site/digitheque"
                className="text-gray-500 hover:text-blue-500"
              >
                Abonnement Digithèque
              </Link>
            </div>

            <div className="flex items-center justify-start space-x-4 my-4 cursor-pointer">
              <MoveRight className="text-bleuRoi" />
              <Link
                className="text-gray-500 hover:text-blue-500"
                onClick={(e) =>
                  redirectViaOuverture(e, "pres-inscri", "/site/cours-lycee")
                }
              >
                Inscription aux Cours-lycée
              </Link>
            </div>

            <div className="flex items-center justify-start space-x-4 my-4 cursor-pointer ">
              <MoveRight className="text-bleuRoi" />
              <Link
                className="text-gray-500 hover:text-blue-500"
                onClick={(e) =>
                  redirectViaOuverture(
                    e,
                    "formation-inscri",
                    "/site/formation-digital"
                  )
                }
              >
                Inscription aux Formations
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-[15rem]" id="pres">
        <Presentation />
      </div>

      <div id="plan">
        <PlanAcce />

        <Contact />
      </div>

      <div>
        <ImageLieu />
      </div>

      <div id="equipe">
        <NosEquipe />
      </div>
    </div>
  );
};

export default Acceuille;
