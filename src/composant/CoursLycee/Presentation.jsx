import React, { useEffect, useState } from "react";

import ScrollReveal from "scrollreveal";

import pres from "../../assets/ImageSite/pres.jpg";
import pedagogie from "../../assets/ImageSite/pedagogie.jpg";
import examen from "../../assets/ImageSite/examen.jpg";
import { MoveLeft, MoveRight } from "lucide-react";

const Presentation = () => {
  const [isNext, setIsNext] = useState(false);
  useEffect(() => {
    ScrollReveal({
      reset: false,
      distance: "60px",
      duration: 2000,
      deley: 400,
    });
    ScrollReveal().reveal("#slide-presentation", {
      deley: 100,
      origin: "left",
      interval: 300,
    });
  }, []);
  return (
    <div className="px-8 md:px-[10rem] grid md:grid-cols-2 gap-y-4 gap-x-4 md:gap-y-[5rem]">
      <div>
        <h1
          className="text-[40px] font-bold text-center md:text-start"
          id="slide-presentation"
        >
          Objectif
        </h1>
        <div className="w-[30%] h-[0.5rem] rounded-full bg-bleuRoi my-6"></div>
        <div
          className="flex items-center justify-center md:block"
          id="slide-presentation"
        >
          <img src={pres} width={300} alt="" srcset="" />
        </div>
      </div>

      <div id="slide-presentation">
        {isNext ? (
          <p>
            Ainsi, dans une approche pédagogique adaptée aux modes
            d’apprentissage des jeunes actuels et aux outils disponibles,
            Digithèque offre les compétences de ses responsables pédagogiques et
            de ses enseignants pour que les élèves apprennent avec plus de
            facilité et plus de passion. Il intègre ainsi l’IA, des applications
            dédiées et d'autres outils pour aider les élèves.
            <br />
            <br />
            Digithèque propose seulement des accompagnements personnalisés en
            Mathématiques, en Physique Chimie et Sciences Économiques.
            Toutefois, pendant leurs temps de pause, les élèves peuvent
            travailler en autonomie ou interagir avec une IA pour apprendre
            l’informatique, pratiquer une langue ou apprendre la finance
            numérique.
          </p>
        ) : (
          <p>
            Dans notre société contemporaine, l’Intelligence Artificielle (IA)
            change profondément les modalités d’apprentissage et notre rapport
            avec la connaissance.
            <br />
            <br />
            Avec le modèle standard de type transmissif, le professeur donne des
            définitions et aide les apprenants à mieux comprendre le concepts à
            travers des exercices, des analyses de documents etc. Avec l’IA
            générative, l’élève peut générer lui-même des exercices pour son
            entraînement et faire corriger ses exercices. Il peut dialoguer avec
            une IA pour apprendre une langue. L’appui et les opportunités
            offertes par l’IA sont assez vastes aussi bien pour l’apprentissage
            de nature cognitive ou pour une série d'entraînement d’acquisition
            de compétences et de savoir-faire.
          </p>
        )}

        <button
          onClick={() => setIsNext(!isNext)}
          className="px-4 py-1 rounded-md bg-bleuRoi text-white flex items-center justify-center space-x-4 my-4"
        >
          {isNext ? (
            <>
              {" "}
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

      <br className="block md:hidden" />
      <br className="block md:hidden" />
      <br className="block md:hidden" />

      <div>
        <h1
          className="text-[30px] font-bold text-center md:text-start"
          id="slide-presentation"
        >
          Pédagogie
        </h1>
        <div
          className="w-[30%] h-[0.5rem] rounded-full bg-bleuRoi my-6"
          id="slide-presentation"
        ></div>

        <div
          className="flex items-center justify-center md:block"
          id="slide-presentation"
        >
          <img src={pedagogie} width={200} alt="" srcset="" />
        </div>
      </div>

      <div id="slide-presentation">
        L’accompagnement personnalisé proposé par Digithèque n’est pas une
        répétition des cours en classe ni une séance d'exercices corrigés, que
        l’élève peut faire avec l’IA disponible dans nos machines. Nous
        suscitons et identifions les passions et l’intérêt de l’élève l’aider à
        comprendre et produire des raisonnements dans la discipline concernée.
        <li className="text-[18px] font-bold text-gray-500">
          Mathématiques et physique de niveau lycée
        </li>
        <p>
          Les cours sont regroupés par thématiques ou chapitres. Par exemple :
          calculs intégrale, ou études de suites ou études de fonctions ou
          encore programmation sur Python
        </p>
      </div>

      <br className="block md:hidden" />
      <br className="block md:hidden" />
      <br className="block md:hidden" />

      <div>
        <h1
          className="text-[30px] font-bold text-center md:text-start"
          id="slide-presentation"
        >
          Préparation des examens <br />
          <span className="text-gray-500 text-[18px]">
            et de concours{" "}
          </span>{" "}
        </h1>
        <div
          className="w-[30%] h-[0.5rem] rounded-full bg-bleuRoi my-6"
          id="slide-presentation"
        ></div>
      </div>

      <div id="slide-presentation">
        Nous avons une équipe de veille informationnelle qui identifie les
        concours et les opportunités nationales ou internationales. Nous
        mobilisons notre équipe pour préparer ceux qui le souhaitent pour
        participer à ces examens ou concours.
       
      </div>
    </div>
  );
};

export default Presentation;
