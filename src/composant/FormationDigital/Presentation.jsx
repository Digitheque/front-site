import React, { useEffect, useState } from "react";
import cyberSec from "../../assets/ImageSite/cyberSec.jpg";
import finace from "../../assets/ImageSite/finace.jpg";
import hacking from "../../assets/ImageSite/hacking.jpg";
import { Calendar, MoveLeft, MoveRight } from "lucide-react";
import ScrollReveal from "scrollreveal";

const Presentation = () => {
  useEffect(() => {
    ScrollReveal({
      reset: false,
      distance: "60px",
      duration: 2000,
      deley: 400,
    });
    ScrollReveal().reveal("#slide-img", {
      deley: 100,
      origin: "top",
      interval: 300,
    });
    ScrollReveal().reveal("#slide-formation", {
      deley: 100,
      origin: "left",
      interval: 300,
    });
  }, []);
  const [isNext1, setIsNext1] = useState(false);
  const [isNext2, setIsNext2] = useState(false);

  // Données pour les images avec leurs titres
  const imageData = [
    { src: hacking, title: "Hacking", title2: false },
    { src: cyberSec, title: "Cyber Sécurité", title2: false },
    { src: finace, title: "Finance", title2: true },
  ];

  // Composant pour les images avec animation au hover
  const ImageWithHover = ({ src, title, className, title2 }) => {
    return (
      <div
        className={`relative overflow-hidden rounded-full ${className} group transition-all duration-300`}
      >
        <img
          src={src}
          className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-40 group-hover:scale-110"
        />
        <div className="absolute inset-5 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <h3 className="text-bleuRoi text-2xl font-bold text-center">
            {title}
          </h3>
          {title2 && (
            <>
              <p className="font-bold">Et</p>
              <h3 className="text-bleuRoi text-2xl font-bold text-center">
                gestion d'entreprise
              </h3>
            </>
          )}
        </div>
      </div>
    );
  };

  // Composant pour les images rectangulaires sur mobile avec animation au hover
  const RectImageWithHover = ({ src, title, title2 }) => {
    return (
      <div className="relative overflow-hidden rounded-lg h-[15rem] group transition-all duration-300">
        <img
          src={src}
          className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-40 group-hover:scale-110"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black bg-opacity-20">
          <h3 className="text-bleuRoi text-2xl font-bold text-center">
            {title}
          </h3>
          {title2 && (
            <>
              <p className="font-bold">Et</p>
              <h3 className="text-bleuRoi text-2xl font-bold text-center">
                gestion d'entreprise
              </h3>
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-white">
      {/* titre Formations  */}
      <div
        id="slide-formation"
        className="flex items-center justify-start pl-16 py-3 rounded-tr-full rounded-br-full text-white bg-bleuRoi w-[20rem] space-x-4 mt-4"
      >
        <Calendar />
        <p className="font-bold text-[25px]">Objectif</p>
      </div>

      {/* div place des texte  */}
      <div className="grid lg:grid-cols-12">
        <div className="lg:col-span-6">
          <div className="mt-4 grid-cols-3 grid relative">
            {/* div place des rond et le ligne gris  */}
            <div className="relative col-span-1">
              <div className="h-[50vh] lg:h-[80vh] w-[2px] bg-gray-500 absolute top-[17rem] left-10 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
              <div
                id="slide-img"
                className="w-8 h-8 bg-bleuRoi rounded-full absolute top-[2rem] left-10 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              ></div>
              <div
                id="slide-img"
                className="w-8 h-8 bg-bleuRoi rounded-full absolute top-[12rem] left-10 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              ></div>
              <div
                id="slide-img"
                className="w-8 h-8 bg-bleuRoi rounded-full absolute top-[24rem] left-10 sm:left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              ></div>
            </div>

            {/* div place des texte et des numeros  */}
            <div className="col-span-2 mt-10 -ml-[4rem] sm:ml-0 px-4">
              <div className="">
                <p className="" id="slide-formation">
                  Les formations proposées par digithèque ne sont pas un
                  complément ni un remplacement des formations proposées dans
                  les institutions et départements de l'Université de
                  Fianarantsoa.
                  {isNext1 && (
                    <>
                      Notre objectif est d'aider les étudiants à mobiliser leurs
                      connaissances pour pouvoir profiter des opportunités du
                      marché du numérique dans tous les domaines. Les conditions
                      de travail proposées par digithèque favorise également à
                      la création d'entreprise ou au moins à identifier les
                      opportunités pour créer son propre business.
                    </>
                  )}
                </p>

                <button
                id="slide-formation"
                  onClick={() => setIsNext1(!isNext1)}
                  className="px-4 py-1 rounded-md bg-bleuRoi text-white flex items-center justify-center space-x-4 my-4 hover:bg-opacity-80 transition-all duration-300"
                >
                  {isNext1 ? (
                    <>
                      <MoveLeft />
                      <p>Retour</p>
                    </>
                  ) : (
                    <>
                      <p>Lisez-plus</p>
                      <MoveRight />
                    </>
                  )}
                </button>
              </div>

              <div className="mt-10" id="slide-formation">
                <p className="">
                  Ainsi,{" "}
                  <span className="font-bold text-bleuRoi">Digithèque</span>{" "}
                  propose des formations dans le numérique et ses applications
                  dans plusieurs domaines, et offre à ses étudiants un espace de
                  travail collaboratif (coworking) pour concrétiser leurs
                  projets.
                </p>
              </div>

              <div className="mt-10" id="slide-formation">
                <p className="">
                  Les étudiants peuvent suivre un module de formations de 30
                  heures permettant d'obtenir 30 points, validé par deux
                  évaluations.
                  {isNext2 && (
                    <>
                      Pour obtenir une certification, il faut valider 5 modules
                      soit 150 points et soutenir un travail de fin de
                      formations sous forme de cahier de charge d'un projet
                      réalisable que l'étudiant développe au cours de sa
                      formation.
                    </>
                  )}
                </p>

                <button
                  id="slide-formation"
                  onClick={() => setIsNext2(!isNext2)}
                  className="px-4 py-1 rounded-md bg-bleuRoi text-white flex items-center justify-center space-x-4 my-4 hover:bg-opacity-80 transition-all duration-300"
                >
                  {isNext2 ? (
                    <>
                      <MoveLeft />
                      <p>Retour</p>
                    </>
                  ) : (
                    <>
                      <p>Lisez-plus</p>
                      <MoveRight />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* place image en rond qui s affiche sur les grand ecran */}
        <div className="lg:col-span-6 relative hidden lg:block">
          <div id="slide-img">
            <ImageWithHover
              src={imageData[0].src}
              title={imageData[0].title}
              className="w-[10rem] h-[10rem] absolute top-[-2rem] left-[10rem]"
            />
          </div>
          <div id="slide-img">
            <ImageWithHover
              src={imageData[1].src}
              title={imageData[1].title}
              className="w-[15rem] h-[15rem] absolute top-[-10rem] left-[24rem]"
            />
          </div>
          <div id="slide-img">
            <ImageWithHover
              src={imageData[2].src}
              title={imageData[2].title}
              title2={imageData[2].title2}
              className="w-[20rem] h-[20rem] absolute top-[-15rem] left-[6rem]"
            />
          </div>
        </div>

        {/* place image en carre qui s affiche sur les petit ecran  */}
        <div className="grid sm:grid-cols-3 sm:gap-x-4 lg:hidden gap-y-4 px-8 my-8 sm:mt-8">
          {imageData.map((item, index) => (
            <div id="slide-img">
              <RectImageWithHover
                key={index}
                src={item.src}
                title={item.title}
                title2={item.title2}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Presentation;
