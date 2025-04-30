import React, { useEffect } from "react";
import logoD from "../../assets/img/logo.png";
import creerProjet from "../../assets/img/creerProjet.png";
import ScrollReveal from "scrollreveal";

const Presentation = () => {
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
        <h1 className="text-[40px] font-bold text-center md:text-start" id="slide-presentation">
          Pourquoi ce projet ?
        </h1>
        <div className="w-[30%] h-[0.5rem] rounded-full bg-bleuRoi my-6"></div>
        <div className="flex items-center justify-center md:block" id="slide-presentation">
          <img src={creerProjet} width={270} alt="" srcset="" />
        </div>
      </div>

      <div id="slide-presentation">
        A travers son université, Fianarantsoa est le leader naturel en
        numérique à Madagascar. Toutefois, très peu d'entreprises sont créées
        dans ce domaine, plus particulièrement dans le domaine de la finance
        numérique et de celui de l’Intelligence artificielle.
        <br />
        <br />
        Partant de ce constat, une petite équipe formée d’enseignants et
        d'étudiants à l'université s’est penché sur ce projet afin de créer une
        plateforme qui offre des formations en numérique. L’objectif n’est pas
        de compléter les formations à l’université ni au contraire se
        concurrencer avec les formations proposées par plusieurs unités de
        formations au sein de l’Université de Fianarantsoa. L’objectif est de
        créer un pont entre les compétences universitaires et le monde
        professionnel : accompagnement de nos jeunes pour avoir les informations
        utiles et les savoir-faire nécessaires pour pouvoir profiter des
        opportunités qui existent dans le domaine du numérique et de ses
        applications.
      </div>

      <br className="block md:hidden" />
      <br className="block md:hidden" />
      <br className="block md:hidden" />

      <div>
        <h1 className="text-[30px] font-bold text-center md:text-start" id="slide-presentation">
          Pourquoi le nom <br /> Digitheque ?
        </h1>
        <div className="w-[30%] h-[0.5rem] rounded-full bg-bleuRoi my-6" id="slide-presentation"></div>

        <div className="flex items-center justify-center md:block" id="slide-presentation">
          <img src={logoD} width={300} alt="" srcset="" />
        </div>
      </div>

      <div id="slide-presentation">
        Digithèque désigne un dispositif d'accès à un ensemble d’outils
        numériques pour favoriser l’apprentissage et renforcer la culture du
        numérique. Comme pour la bibliothèque qui dispose un ensemble de livres
        et de documents pour favoriser l’apprentissage en autonomie ou améliorer
        sa culture ou encore la médiathèque qui offre dispose des outils en
        média pour obtenir ces résultats ; la digithèque est dotée d' outils et
        plateformes numériques pour favoriser l’apprentissage en autonomie en
        digital.
        <br />
        <br />
        Digithèque dispose d' outils comme des ordinateurs qui sont dédiés à des
        applications spécialisées, l'Intelligence Artificielle et des
        plateformes de gestion d’actifs.
      </div>

      <br className="block md:hidden" />
      <br className="block md:hidden" />
      <br className="block md:hidden" />

      <div>
        <h1 className="text-[40px] font-bold text-center md:text-start" id="slide-presentation">
          Comment bénéficier <br />
          <span className="text-gray-500 text-[25px]">
            des sérvices de Digithèque{" "}
          </span>{" "}
          ?
        </h1>
        <div className="w-[30%] h-[0.5rem] rounded-full bg-bleuRoi my-6" id="slide-presentation"></div>
      </div>

      <div id="slide-presentation">
        Avec notre équipe dynamique et innovante qui se met à jour en permanence
        par rapport à l’évolution de la technologie dans le monde, les
        bénéficiaires de nos services n’ont seulement des services de qualité,
        mais vous aurez également un réseau, un carnet d’adresse qui pourraient
        vous être utiles pour développer vos propres business.
        <br />
        <br />
        Pour bénéficier de nos services, il suffit de vous inscrire sur un des
        services que nous proposons, ce qui vous permettra d’avoir accès de
        manière ponctuelle sur d’autres services.
      </div>
    </div>
  );
};

export default Presentation;
