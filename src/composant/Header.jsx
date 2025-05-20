import React, { useState } from "react";
import logo from "../assets/img/logo.png";
import {
  AlignJustify,
  ChevronDown,
  ChevronRight,
  Mail,
  Phone,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen1, setIsSubMenuOpen1] = useState(false);
  const [isSubMenuOpen2, setIsSubMenuOpen2] = useState(false);
  const [isSubMenuOpen3, setIsSubMenuOpen3] = useState(false);
  const [isSubMenuOpen4, setIsSubMenuOpen4] = useState(false);

  const closeAllMenus = () => {
    closeAllSubMenus();
    stateMenuMobile()
  };

  const navigate = useNavigate()

//   redirect pour page Accueille 
  const redirectAcceuille = (e, section) => {
    e.preventDefault();
    closeAllSubMenus();
    stateMenuMobile()
  
    if (location.pathname === "/site") {
      // Tu es déjà sur / : fais le scroll manuellement
      const sectionEl = document.getElementById(section);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Sinon, utilise navigate comme avant
      navigate("/site", { state: { scrollTo: section } });
    }
  };


  //   redirect pour page cours 
  const redirectCour = (e, section) => {
    e.preventDefault();
    closeAllSubMenus();
    stateMenuMobile()
  
    if (location.pathname === "/site/cours-lycee") {
      // Tu es déjà sur / : fais le scroll manuellement
      const sectionEl = document.getElementById(section);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Sinon, utilise navigate comme avant
      navigate("/site/cours-lycee", { state: { scrollTo: section } });
    }
  };


  //   redirect pour page formation 
  const redirectFormation = (e, section) => {
    e.preventDefault();
    closeAllSubMenus();
    stateMenuMobile()
  
    if (location.pathname === "/site/formation-digital") {
      // Tu es déjà sur / : fais le scroll manuellement
      const sectionEl = document.getElementById(section);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Sinon, utilise navigate comme avant
      navigate("/site/formation-digital", { state: { scrollTo: section } });
    }
  };


//   pour ouvrir et disparaitre le menu mobile 
  const stateMenuMobile = () => {
    setIsMenuOpen(!isMenuOpen)
    closeAllSubMenus()
  };

//   pour disparaitre le sous menu 
  const closeAllSubMenus = () => {
    setIsSubMenuOpen1(false);
    setIsSubMenuOpen2(false);
    setIsSubMenuOpen3(false);
    setIsSubMenuOpen4(false);
  };

  const toggleSubMenu1 = () => {
    setIsSubMenuOpen1(!isSubMenuOpen1);
    setIsSubMenuOpen2(false);
    setIsSubMenuOpen3(false);
    setIsSubMenuOpen4(false);
  };

  const toggleSubMenu2 = () => {
    setIsSubMenuOpen2(!isSubMenuOpen2);
    setIsSubMenuOpen1(false);
    setIsSubMenuOpen3(false);
    setIsSubMenuOpen4(false);
  };

  const toggleSubMenu3 = () => {
    setIsSubMenuOpen3(!isSubMenuOpen3);
    setIsSubMenuOpen1(false);
    setIsSubMenuOpen2(false);
    setIsSubMenuOpen4(false);
  };

  const toggleSubMenu4 = () => {
    setIsSubMenuOpen4(!isSubMenuOpen4);
    setIsSubMenuOpen1(false);
    setIsSubMenuOpen2(false);
    setIsSubMenuOpen3(false);
  };



  return (
    <div className="w-full fixed top-0 left-0 z-50 shadow-sm">
      {/* Bandeau supérieur avec Plan d'Accèset Contacts */}
      <div className="px-6 md:px-20 md:flex md:items-center md:justify-between py-2 bg-bleuRoi">
        
        <div className="flex items-center text-[13px] space-x-6 text-white justify-between md:justify-start">
          <div className="flex items-center space-x-2">
            <Phone size={15} />
            <p>+261 38 05 557 25</p>
          </div>
          <div className="flex items-center space-x-2">
            <Mail size={15} />
            <p>digitheque.mg@gmail.com </p>
          </div>
        </div>

        <div className="hidden md:block"></div>
      </div>

      {/* Navigation principale */}
      <div className="flex items-center justify-between py-2 px-6 md:px-20 relative  bg-white">
        <img src={logo} alt="logo" width={90} />

        {/* Liens desktop */}
        <div className="hidden md:flex items-center justify-center space-x-8">
          {/* Accueil  */}
          <div className="relative">
            <button
              onClick={toggleSubMenu1}
              className={`hover:text-bleuRoi focus:outline-none flex items-center space-x-2 ${
                isSubMenuOpen1 ? "text-bleuRoi font-bold" : "text-black"
              }`}
            >
              <span>Accueil</span>
              {isSubMenuOpen1 ? (
                <ChevronDown size={15} />
              ) : (
                <ChevronRight size={15} />
              )}
            </button>

            {isSubMenuOpen1 && (
              <div className="absolute w-auto py-4 top-full left-[-1rem] mt-2 bg-white text-black rounded shadow-lg">
                <Link
                  to="#"
                  className="block px-4 py-2 hover:text-bleuRoi whitespace-nowrap hover:bg-gray-100"
                  onClick={(e)=>redirectAcceuille(e,"pres")}
                >
                  Présentation
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 hover:text-bleuRoi whitespace-nowrap hover:bg-gray-100"
                  onClick={(e)=>redirectAcceuille(e,"plan")}
                >
                  Plan d'Accès 
                </Link>

                <Link
                  to="#"
                  className="block px-4 py-2 hover:text-bleuRoi whitespace-nowrap hover:bg-gray-100"
                  onClick={(e)=>redirectAcceuille(e,"equipe")}
                >
                  Nos equipes
                </Link>
              </div>
            )}
          </div>

          {/* cours-lycees  */}
          <div className="relative">
            <button
              onClick={toggleSubMenu2}
              className={`hover:text-bleuRoi focus:outline-none flex items-center space-x-2 ${
                isSubMenuOpen2 ? "text-bleuRoi font-bold" : "text-black"
              }`}
            >
              <span>Cours-Lycée</span>
              {isSubMenuOpen2 ? (
                <ChevronDown size={15} />
              ) : (
                <ChevronRight size={15} />
              )}
            </button>

            {isSubMenuOpen2 && (
              <div className="absolute w-auto py-4 top-full left-[-1rem] mt-2 bg-white text-black rounded shadow-lg">
                <Link
                  to="#"
                  onClick={(e)=>redirectCour(e, "pres-cour")}
                  className="block px-4 py-2 hover:text-bleuRoi whitespace-nowrap hover:bg-gray-100"
                 
                >
                  Présentation
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 hover:text-bleuRoi whitespace-nowrap hover:bg-gray-100"
                  onClick={(e)=>redirectCour(e, "presEdt")}
                >
                  Emploi du temps
                </Link>

                <Link
                  to="#"
                  className="block px-4 py-2 hover:text-bleuRoi whitespace-nowrap hover:bg-gray-100"
                  onClick={(e)=>redirectCour(e, "pres-inscri")}
                >
                  Inscription
                </Link>
              </div>
            )}
          </div>

          {/*  Formation-Digital  */}
          <div className="relative">
            <button
              onClick={toggleSubMenu3}
              className={`hover:text-bleuRoi focus:outline-none flex items-center space-x-2 ${
                isSubMenuOpen3 ? "text-bleuRoi font-bold" : "text-black"
              }`}
            >
              <span>Formations-Digital</span>
              {isSubMenuOpen3 ? (
                <ChevronDown size={15} />
              ) : (
                <ChevronRight size={15} />
              )}
            </button>

            {isSubMenuOpen3 && (
              <div className="absolute w-auto py-4 top-full left-[-1rem] mt-2 bg-white text-black rounded shadow-lg">
                <Link
                  to="#"
                  className="block px-4 py-2 hover:text-bleuRoi whitespace-nowrap hover:bg-gray-100"
                  onClick={(e)=>redirectFormation(e, "pres-formation")}
                >
                  Présentation
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-2 hover:text-bleuRoi whitespace-nowrap hover:bg-gray-100"
                  onClick={(e)=>redirectFormation(e, "formation-edt")}
                >
                  Formation Proposée
                </Link>

                <Link
                  to="#"
                  className="block px-4 py-2 hover:text-bleuRoi whitespace-nowrap hover:bg-gray-100"
                  onClick={(e)=>redirectFormation(e, "formation-inscri")}
                >
                  Inscription
                </Link>
              </div>
            )}
          </div>

          {/*  Digithèque  */}
          <div className="relative">
            <button
              onClick={toggleSubMenu4}
              className={`hover:text-bleuRoi focus:outline-none flex items-center space-x-2 ${
                isSubMenuOpen4 ? "text-bleuRoi font-bold" : "text-black"
              }`}
            >
              <span>Digithèque</span>
              {isSubMenuOpen4 ? (
                <ChevronDown size={15} />
              ) : (
                <ChevronRight size={15} />
              )}
            </button>

            {isSubMenuOpen4 && (
              <div className="absolute w-auto py-4 top-full left-[-1rem] mt-2 bg-white text-black rounded shadow-lg">
                <Link
                  to="/site/digitheque"
                  className="block px-4 py-2 hover:text-bleuRoi whitespace-nowrap hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  Présentation
                </Link>
                <Link
                  to="/site/digitheque"
                  className="block px-4 py-2 hover:text-bleuRoi whitespace-nowrap hover:bg-gray-100"
                  onClick={closeAllMenus}
                >
                  Abonnement
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Menu mobile avec animation slideDown */}
        <div
          className={`w-full absolute shadow-lg top-full left-0 md:hidden bg-white 
            transition-all duration-500 ease-in-out overflow-hidden
            ${isMenuOpen ? "max-h-96" : "max-h-0"}`}
        >
          <div className="flex flex-col py-4">
            <div className="border-t border-gray-100">
              {/* Accueil  */}
              <div>
                <button
                  onClick={toggleSubMenu1}
                  className={` w-full text-left py-2 px-10 flex items-center justify-between hover:bg-gray-100 hover:text-bleuRoi 
                    ${
                      isSubMenuOpen1
                        ? "text-bleuRoi font-bold bg-gray-100"
                        : "text-black"
                    }`}
                >
                  <span>Accueil</span>
                  {isSubMenuOpen1 ? (
                    <ChevronDown size={15} />
                  ) : (
                    <ChevronRight size={15} />
                  )}
                </button>

                {isSubMenuOpen1 && (
                  <div className="bg-gray-50">
                    <Link
                      to="#"
                      className="block px-14 py-2 hover:bg-gray-50 hover:text-bleuRoi"
                      onClick={(e)=>redirectAcceuille(e,"pres")}
                    >
                      Présentation
                    </Link>
                    <Link
                      to="#"
                      className="block px-14 py-2 hover:bg-gray-50 hover:text-bleuRoi"
                      onClick={(e)=>redirectAcceuille(e,"plan")}
                    >
                      Plan d'Accès
                    </Link>

                    <Link
                      to="#"
                      className="block px-14 py-2 hover:bg-gray-50 hover:text-bleuRoi"
                      onClick={(e)=>redirectAcceuille(e,"equipe")}
                    >
                      Nos équipes
                    </Link>
                  </div>
                )}
              </div>

              {/* Cours-Lyccée  */}
              <div>
                <button
                  onClick={toggleSubMenu2}
                  className={` w-full text-left py-2 px-10 flex items-center justify-between hover:bg-gray-100 hover:text-bleuRoi 
                    ${
                      isSubMenuOpen2
                        ? "text-bleuRoi font-bold bg-gray-100"
                        : "text-black"
                    }`}
                >
                  <span>Cours-Lyccée</span>
                  {isSubMenuOpen2 ? (
                    <ChevronDown size={15} />
                  ) : (
                    <ChevronRight size={15} />
                  )}
                </button>

                {isSubMenuOpen2 && (
                  <div className="bg-gray-50">
                    <Link
                      to="#"
                      className="block px-14 py-2 hover:bg-gray-50 hover:text-bleuRoi"
                      onClick={(e)=>redirectCour(e, "pres-cour")}
                    >
                      Présentation
                    </Link>
                    <Link
                      to="#"
                      className="block px-14 py-2 hover:bg-gray-50 hover:text-bleuRoi"
                      onClick={(e)=>redirectCour(e, "presEdt")}
                    >
                      Emploi du temps
                    </Link>

                    <Link
                      to="#"
                      className="block px-14 py-2 hover:bg-gray-50 hover:text-bleuRoi"
                      onClick={(e)=>redirectCour(e, "pres-inscri")}
                    >
                      Inscription
                    </Link>
                  </div>
                )}
              </div>

               {/* Formation-Digital  */}
               <div>
                <button
                  onClick={toggleSubMenu3}
                  className={` w-full text-left py-2 px-10 flex items-center justify-between hover:bg-gray-100 hover:text-bleuRoi 
                    ${
                      isSubMenuOpen3
                        ? "text-bleuRoi font-bold bg-gray-100"
                        : "text-black"
                    }`}
                >
                  <span>Formations-Digital</span>
                  {isSubMenuOpen2 ? (
                    <ChevronDown size={15} />
                  ) : (
                    <ChevronRight size={15} />
                  )}
                </button>

                {isSubMenuOpen3 && (
                  <div className="bg-gray-50">
                    <Link
                      to="#"
                      className="block px-14 py-2 hover:bg-gray-50 hover:text-bleuRoi"
                      onClick={(e)=>redirectFormation(e, "pres-formation")}
                    >
                      Présentation
                    </Link>
                    <Link
                      to="#"
                      className="block px-14 py-2 hover:bg-gray-50 hover:text-bleuRoi"
                      onClick={(e)=>redirectFormation(e, "formation-edt")}
                    >
                     Formation Proposée
                    </Link>

                    <Link
                      to="#"
                      className="block px-14 py-2 hover:bg-gray-50 hover:text-bleuRoi"
                      onClick={(e)=>redirectFormation(e, "formation-inscri")}
                    >
                      Inscription
                    </Link>
                  </div>
                )}
              </div>

               {/* Formation-Digital  */}
               <div>
                <button
                  onClick={toggleSubMenu4}
                  className={` w-full text-left py-2 px-10 flex items-center justify-between hover:bg-gray-100 hover:text-bleuRoi 
                    ${
                      isSubMenuOpen4
                        ? "text-bleuRoi font-bold bg-gray-100"
                        : "text-black"
                    }`}
                >
                  <span>Digithèque</span>
                  {isSubMenuOpen4 ? (
                    <ChevronDown size={15} />
                  ) : (
                    <ChevronRight size={15} />
                  )}
                </button>

                {isSubMenuOpen4 && (
                  <div className="bg-gray-50">
                    <Link
                      to="/site/digitheque"
                      className="block px-14 py-2 hover:bg-gray-50 hover:text-bleuRoi"
                      onClick={closeAllMenus}
                    >
                      Présentation
                    </Link>
                    <Link
                      to="/site/digitheque"
                      className="block px-14 py-2 hover:bg-gray-50 hover:text-bleuRoi"
                      onClick={closeAllMenus}
                    >
                      Abonnement
                    </Link>

                 
                  </div>
                )}
              </div>


            </div>
          </div>
        </div>

        {/* Bouton actualités (desktop) */}
        <button
          className="border-[2px] border-bleuRoi text-bleuRoi px-6 py-1 space-x-4 hidden md:flex
             rounded-lg items-center hover:bg-bleuRoi hover:text-white"
        >
          <p>Actualités</p>
        </button>

        {/* Hamburger menu (mobile) */}
        <button
          className="block md:hidden"
          onClick={stateMenuMobile}
        >
          {isMenuOpen ? <X /> : <AlignJustify />}
        </button>
      </div>
    </div>
  );
};

export default Header;
