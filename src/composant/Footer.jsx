import { Copyright, Mail, MoveRight, Phone } from "lucide-react";
import React from "react";
import logoFooter from "../assets/img/logo.png";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  //   redirect pour page Accueille
  const redirectViaFooter = (e, section, url) => {
    e.preventDefault();
    if (location.pathname === url) {
      // Tu es déjà sur / : fais le scroll manuellement
      const sectionEl = document.getElementById(section);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Sinon, utilise navigate comme avant
      navigate(url, { state: { scrollTo: section } });
    }
  };

  return (
    <>
      {/* footer  */}

      <div className="w-full relative overflow-hidden h-auto lg:h-[68vh] mt-[5rem] md:mt-[10rem]  py-[4rem] lg:py-[10rem] flex flex-col">
        <div
          className="rounded-full w-[250rem] h-[250rem] absolute top-0 -right-[50rem] -z-20 
                bg-gradient-to-r from-bleuRoiFonce via-[#034b65]"
        ></div>
        <div
          className="rounded-full w-[250rem] h-[250rem] absolute top-[10%] -left-[70rem] -z-20
                bg-gradient-to-r from-[#034b6552] via-bleuRoiFonce"
        ></div>

        <div className="w-full text-white mt-[10rem] lg:mt-0 grid lg:grid-cols-4 gap-2 px-6 lg:px-[5rem]">
          <div className="px-6">
            <img src={logoFooter} width={100} alt="" />
            <p className="text-sm my-4">
              Digithèque – Plateforme éducative conçue par des enseignants et
              experts malgaches et internationaux.
            </p>
          </div>

          <div className="px-6">
            <p className="text-[25px] font-bold my-4">Contact</p>
            <div className="grid">
              <div className="flex items-center justify-start space-x-4 my-3">
                <Phone className="text-white" />
                <p>+261 38 05 557 25</p>
              </div>
              <div className="flex items-center justify-start space-x-4 my-3">
                <Phone className="text-white" />
                <p>+261 37 75 321 30</p>
              </div>

              <div className="flex items-center justify-start space-x-4 my-3">
                <Mail className="text-white" />
                <p>digitheque1234@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="px-6">
            <p className="text-[25px] font-bold my-4">Lien</p>

            <div className="grid gap-y-3">
              <Link
                to="#"
                className="hover:text-blue-500"
                onClick={(e) => redirectViaFooter(e, "plan", "/")}
              >
                - Plan d'Accée & Contact
              </Link>
              <Link
                to="#"
                className="hover:text-blue-500"
                onClick={(e) =>
                  redirectViaFooter(e, "pres-inscri", "/cours-lycee")
                }
              >
                - Inscription Cours
              </Link>
              <Link
                to="#"
                className="hover:text-blue-500"
                onClick={(e) =>
                  redirectViaFooter(e, "formation-inscri", "/formation-digital")
                }
              >
                - Inscription Formation
              </Link>
              <Link
                to="/digitheque"
                className="hover:text-blue-500"
                
              >
                - Abonnement Digithèque
              </Link>
            </div>
          </div>

          <div className="lg:px-4 px-6">
            <p className="text-[25px] font-bold my-4">Lieu</p>
            <div className="">
              <p className="">
                Lot 0051/B Ambatotsidikaina - Andrainjato 301 Fianarantsoa
              </p>

              <div className="flex items-center space-x-4">
                <a
                  href="https://www.google.com/maps?q=-21.933,46.983"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white underline hover:text-blue-500"
                >
                  Ouvrir sur Google Maps
                </a>

                <MoveRight />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
