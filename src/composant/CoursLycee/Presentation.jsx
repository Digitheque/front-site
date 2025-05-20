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
          EXAMENS-CONCOURS
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
        <p>
          La digithèque se donne pour mission d’ouvrir des opportunités à nos
          jeunes en offrant des formations et en valorisant leurs compétences.
          Nous nous informons en permanence sur le marché de formations en
          identifiant, les examens, les concours et les offres de formations
          nationaux et internationaux comme le baccalauréat, les examens dans le
          supérieur, les concours d’accès à des postes de fonctionnaires, des
          concours de formations à l'international etc.
        </p>
        <br />
        <p>
          Pour mieux préparer nos jeunes, nous proposons des accompagnements
          individualisés sous forme de stages intensifs, de cours de soutien et
          d’autres dispositifs pédagogiques adaptés aux besoins. <br />
          Nous pouvons identifier avec vous les besoins pour mieux vous
          accompagner.
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
        Sur le plan pédagogique, contrairement au modèle standard que nous avons
        hérité du système français, Digithèque met en pratique des approches
        pédagogiques innovantes inspirées des pédagogies pratiquées dans les
        amériques du nord, tout en prenant en compte nos habitudes à apprendre.
        On incite les apprenants à prendre des initiatives, à donner du sens au
        contenu théorique. On les invite à fixer un objectif pour lequel leurs
        apprentissages ont un sens. Bien que l’essentiel des activités
        pédagogiques soient dans une salle équipée d’un tableau blanc,
        Digithèque intègre dans ses dispositifs des outils numériques, plus
        particulièrement les applications interactives et l’Intelligence
        Artificielle générative.
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
